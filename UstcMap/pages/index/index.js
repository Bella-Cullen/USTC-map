var QQMapWX = require('../../map.js');
var qqmapsdk;
var app = getApp();
Page({
  //设置下拉刷新
  onPullDownRefresh: function () {
    var that = this;
    that.setData({
      currentTab: 0 //当前页的一些初始数据，视业务需求而定
    })
    this.onLoad(); //重新加载onLoad()
  },
  //data
  data:{
    buildData:app.globalData.map,
    hidden:true,
    // 设置markers
    markers:[],
    //输入的查询地址
    inputvalue:'',
    //起始地址
    startPoint:null,
    endPoint:null,
    currentdatabase:null,
    place_img_src:[""],
    modalname:"",
  },
  //获取输入的查询地址
  inputplace:function(e){
    this.setData({
      inputvalue:e.detail.value
    })
  },
  //搜索
  //TODO:搞下拉框模糊搜索?
  //TODO:将中心点移至第一个markers?
  nearby_search:function(){
    //text是输入的地址
    var text = this.data.inputvalue;

    //待匹配的地址数组
    var place_lst=this.data.buildData[0].data;
    var len=place_lst.length;

    //返回的匹配完成的地址数组
    var res={
      "data":[],
    };

    //匹配,模糊搜索
    for(var i=0;i<len;i++){
      if(place_lst[i].name==text){
        res.data.push(place_lst[i]);
      }
    }

    //弹出框
    var texttitle = '共找到'+res.data.length+'个地点';
    wx.showToast({
      title: texttitle,
      icon: 'success',
      duration: 2000
    })

    //更新markers标记点
    var number = this.data.markers.length;
    let markers = this.data.markers;
    markers.splice(1,number-1)
    this.setData({
      markers:markers
    })
    for (var i = 0; i < res.data.length; i++) {
      let lat = res.data[i].latitude;
      let lon = res.data[i].longtitude;
      let name = res.data[i].name;
      var index = "markers["+(i+1)+"]";
      this.setData({
        [index]:{
          id:i+1,
          latitude: lat,
          longitude: lon,
          iconPath: "../../images/标记.png",
          width: 25,
          height: 25,
          label: {
            content: name,
            color: '#FFFFFF',
            bgColor:'#6495ED',
            fontSize: 13,
            anchorX:14,
            anchorY:-24,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#6495ED',
            padding: 2,
            //display: 'ALWAYS'
          }
        },
        currentdatabase:res.data
      })
    }
  },
  //获取自己当前的位置
  getmyPlace:function(){
    var that=this;
    wx.getLocation({
      success: function(res) {
        console.log(res);
        that.setData({
          markers:[
            {
              latitude:res.latitude,
              longitude:res.longitude,
              iconPath:"../../images/mapcenter.png",
              width:25,
              height:25,
              callout:{
                content:"当前位置",
                color:'#0000ff',
                fontSize:13,
                borderRadius:5,
                borderWidth:1,
                borderColor:'#0000ff',
                padding:2,
                display:'ALWAYS'
              }
            }
          ]
        })
      },
    })
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
        // 实例化API核心类
        qqmapsdk = new QQMapWX({
          key: '6IFBZ-ZYQ3I-UFHGJ-UVPZH-3HI2V-EQBBY'
      });
      var that = this;
      //判断所在位置是否在校区内
      wx.getLocation({
		    type:'gcj02',
        success:function(res)
        {
          // console.log(res)
          var nowlatitude = res.latitude
          var nowlongitude = res.longitude
          if((nowlatitude > 31.832433) && (nowlatitude < 31.841758) && (nowlongitude > 117.251378) && (nowlongitude < 117.273573))
          {
            that.setData({
              markers:[
                {
                  id:0,
                  latitude:nowlatitude,
                  longitude:nowlongitude,
                  iconPath:"../../images/mapcenter.png",
                  width:25,
                  height:25,
                  callout:{
                    content:"当前位置",
                    color:'#0000ff',
                    fontSize:13,
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:'#0000ff',
                    padding:2,
                    display:'ALWAYS'
                  }
                }
              ]
            })
          }else{
            wx.showModal({
              title:'提示',
              content:'检测到当前位置不在中科大校区内，是否切换到中科大校区默认位置？',
              success(res)
              {
                if(res.confirm)
                {
                  that.setData({
                    markers:[
                      {
                        id:0,
                        latitude:31.838293,
                        longitude:117.255652,
                        iconPath:"../../images/mapcenter.png",
                        width:25,
                        height:25,
                        callout:{
                          content:"西区中心",
                          color:'#0000ff',
                          fontSize:13,
                          borderRadius:5,
                          borderWidth:1,
                          borderColor:'#0000ff',
                          padding:2,
                          display:'BYCLICK'
                        }
                      }
                    ]
                  })
                }else if(res.cancel)
                {
                  that.setData({
                    markers:[
                      {
                        id:0,
                        latitude:nowlatitude,
                        longitude:nowlongitude,
                        iconPath:"../../images/mapcenter.png",
                        width:25,
                        height:25,
                        callout:{
                          content:"当前位置",
                          color:'#0000ff',
                          fontSize:13,
                          borderRadius:5,
                          borderWidth:1,
                          borderColor:'#0000ff',
                          padding:2,
                          display:'ALWAYS'
                        }
                      }
                    ]
                  })
                }
              }
            })

          }
        }
      });
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap');
  },
  // 设置点聚合
  initMarkerCluster:function(){
    this.mapCtx.initMarkerCluster({
      enableDefaultStyle:true,
      zoomOnClick:true,
      gridSize:20,
      complete(res){
        console.log('initMarkerCluster',res)
      }
    })
  },

  //点击地点进行路径规划
  onPointTap: function(e) {
    var that = this;
    var lat = ''; // 获取点击的markers经纬度
    var lon = ''; // 获取点击的markers经纬度
    var name = ''; // 获取点击的markers名称
    var markerId = e.detail.markerId;// 获取点击的markers  id
    var markersda = this.data.markers;
    var currentdatabase = this.data.currentdatabase;
    //定位所点击的坐标点
    for (var item of markersda){
      if (item.id === markerId) {
        lat = item.latitude;
        lon = item.longitude;
        name = item.label.content;
        break;
      }
    }
    //初始化起点为西大门门口
    var startPoint = JSON.stringify({
      'name': markersda[0].callout.content,
      'latitude': markersda[0].latitude,
      'longitude': markersda[0].longitude
    });
    var endPoint = JSON.stringify({  //终点
        'name': name,
        'latitude': lat,
        'longitude': lon
    });
    that.setData({
      hidden:false,
      modalname:currentdatabase[markerId-1].name,
      startPoint:startPoint,
      endPoint:endPoint,
      place_img_src:currentdatabase[markerId-1].img
    })
  },
  modalcancel:function(e)
  {
    this.setData({
      hidden:true,
    })
  },
  modalconfirm:function(e)
  {
    var that = this;
    this.setData({
      hidden:true,
    })
    //路径规划
    // var plugin = requirePlugin('routePlan');
    // var key = '6IFBZ-ZYQ3I-UFHGJ-UVPZH-3HI2V-EQBBY';  //使用在腾讯位置服务申请的key
    // var referer = 'cugerguider';   //调用插件的app的名称
    // var themeColor = '#7B68EE';  //主题颜色
    // var endPoint = that.data.endPoint;
    // var startPoint = that.data.startPoint;
    // wx.navigateTo({
    //     url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer +'&endPoint=' + endPoint  + '&startPoint='+ startPoint + '&themeColor=' + themeColor
    // });
  },
  imgclick:function(){
    var imgUrl = this.data.place_img_src;
    wx.previewImage({
      urls: imgUrl,
      success:(res=>{
        console.log('接口调用成功',res)
      })
    })
  },
  
})