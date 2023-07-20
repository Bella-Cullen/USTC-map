var app = getApp();
Page({
  //data
  data:{
    lat:0,
    long:0,
    name:"",
    img:[''],
    mode_image:"../../images/icon1.png",

    app_data:[],
    hidden:true,
    markers:[],
    startPoint:null,
    endPoint:null,
    currentdatabase:[],
    place_img_src:[""],
    modalname:"",
    center_lat:31.838293,
    center_long:117.255652,
    fraction:0.000001,
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) { //刷新完成后停止下拉刷新动效    
    var that = this;
    this.setData({
      search_hidden:true,
      fraction:0.000001,
      app_data:[
        app.globalData.surroundings,
      ],
      lat:options.lat,
      long:options.long,
      name:options.name,
      img:options.img,
    })
    //更新当前位置
    wx.getLocation({
      isHighAccuracy:true,
      type:'gcj02',
      success:function(res)
      {
        var nowlatitude = res.latitude;
        var nowlongitude = res.longitude;
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
          ],
        })
        var mark=that.data.markers;
        var curdatabase=[];
        var mark_tmp={
          id:1,
          latitude: options.lat,
          longitude: options.long,
          iconPath: that.data.mode_image,
          width: 25,
          height: 25,
          label: {
            content: options.name,
            color: '#FFFFFF',
            bgColor:'#6495ED',
            fontSize: 13,
            anchorX:14,
            anchorY:-24,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#6495ED',
            padding: 2,
          }
        }
        mark.push(mark_tmp);
        curdatabase.push({
          latitude:options.lat,
          longtitude:options.long,
          name:options.name,
          img:options.img,
        });
        that.setData({
          markers:mark,
          currentdatabase:curdatabase,
          center_lat:options.lat,
          center_long:options.long,
        })
      }
    });
  },
  //点击地点进行路径规划
  onPointTap: function(e) {
    var i=e.detail.markerId;
    if(i>=100){
      console.log("return");
      return;
    }
    // console.log(this.data.currentdatabase);
    var startPoint = JSON.stringify({
      'name':this.data.markers[0].callout.content,
      'latitude':this.data.markers[0].latitude,
      'longitude':this.data.markers[0].longitude
    });
    var endPoint = JSON.stringify({
      'name': this.data.markers[i].label.content,
      'latitude': this.data.markers[i].latitude,
      'longitude': this.data.markers[i].longitude,
    });
    this.setData({
      hidden:false,
      page_hidden:true,
      modalname:this.data.currentdatabase[i-1].name,
      startPoint:startPoint,
      endPoint:endPoint,
      place_img_src:this.data.currentdatabase[i-1].img
    })
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
    var key = '6IFBZ-ZYQ3I-UFHGJ-UVPZH-3HI2V-EQBBY';  //使用在腾讯位置服务申请的key
    var referer = 'cugerguider';   //调用插件的app的名称
    var themeColor = '#7B68EE';  //主题颜色
    var endPoint = that.data.endPoint;
    var startPoint = that.data.startPoint;
    wx.navigateTo({
        url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer +'&endPoint=' + endPoint  + '&startPoint='+ startPoint + '&themeColor=' + themeColor
    });
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
  backToCurLocation:function(e){
    this.setData({
      center_lat:this.data.markers[0].latitude+this.data.fraction,
      center_long:this.data.markers[0].longitude+this.data.fraction,
      fraction:-this.data.fraction,
    })
  }
})