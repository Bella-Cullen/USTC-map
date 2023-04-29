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
  },
  //获取输入的查询地址
  inputplace:function(e){
    this.setData({
      inputvalue:e.detail.value
    })
  },
  //搜索
  nearby_search:function(){
    var that = this;
    var text = that.data.inputvalue;
    // 调用接口
    qqmapsdk.search({
      keyword: text,  //搜索关键词
      // location: '31.838293,117.255652',  //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        var texttitle = '共找到'+res.data.length+'个地点'
        wx.showToast({
          title: texttitle,
          icon: 'success',
          duration: 2000
        })
        var number = that.data.markers.length;
        let markers = that.data.markers;
        markers.splice(1,number-1)
        that.setData({
          markers:markers
        })
        for (var i = 0; i < res.data.length; i++) {
          let lat = res.data[i].location.lat;
          let lon = res.data[i].location.lng;
          let name = res.data[i].title;
          var index = "markers["+(i+1)+"]";
          that.setData({
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
      fail: function (res) {
        wx.showToast({
          title: '抱歉，搜索错误',
          icon: 'fail',
          duration: 2000
        })
      },
      complete: function (res){
        console.log(res);
      }
  });
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
})