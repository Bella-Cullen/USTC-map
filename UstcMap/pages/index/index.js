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
    //app.data
    west_canteen:app.globalData.campus[0].data_west.food.canteen,
    west_fruit:app.globalData.campus[0].data_west.food.fruit,
    west_fooddelivery:app.globalData.campus[0].data_west.food.food_delivery,
    west_teachingbuilding:app.globalData.campus[0].data_west.study.teaching_building,
    west_library:app.globalData.campus[0].data_west.study.library,
    west_lab_building:app.globalData.campus[0].data_west.study.lab_building,
    west_toilet:app.globalData.campus[0].data_west.convenience.toilet,
    west_delivery:app.globalData.campus[0].data_west.convenience.delivery,
    west_store:app.globalData.campus[0].data_west.convenience.store,
    west_printing:app.globalData.campus[0].data_west.convenience.printing,
    west_gate:app.globalData.campus[0].data_west.traffic.gate,
    west_bicycle:app.globalData.campus[0].data_west.traffic.bicycle,
    west_bus:app.globalData.campus[0].data_west.traffic.bus,
    west_sports:app.globalData.campus[0].data_west.sports.sports,
    west_scenery:app.globalData.campus[0].data_west.scenery.scenery,
    west_dormitory:app.globalData.campus[0].data_west.dormitory.dormitory,
    west_hospital:app.globalData.campus[0].data_west.hospital.hospital,
    app_data:[],

    hidden:true,
    search_hidden:true,
    markers:[],
    inputvalue:'',
    input_txt:'',
    search_result:[],
    startPoint:null,
    endPoint:null,
    currentdatabase:[],
    place_img_src:[""],
    modalname:"",
    center_lat:31.838293,
    center_long:117.255652,
  },
  //获取输入的查询地址
  //TODO:模糊搜索算法改进:严格还是宽松?条目数量限制?
  inputplace:function(e){
    var value=e.detail.value;
    var flag1=true;
    if(value=="")flag1=false;
    var arr1=[];
    var arr2=[];
    if(value.length==1){
      arr1.push(value[0]);
      arr2.push(value[0]);
    }
    else{
      for(var i=0;i<value.length;i++){
        if(i<value.length/2)arr1.push(value[i]);
        else arr2.push(value[i]);
      }
    }
    var text1='.*'+arr1.join('.*')+'.*';
    var text2='.*'+arr2.join('.*')+'.*';
    var re1=new RegExp(text1);
    var re2=new RegExp(text2);
    var res=[];
    var st=new Set();
    for(var j=0;j<this.data.app_data.length;j++)
    {
      var place_lst=this.data.app_data[j];
      var len=place_lst.length;     
      for(var i=0;i<len;i++){
        if(flag1&&(re1.test(place_lst[i].name)||re2.test(place_lst[i].name))&&!st.has(place_lst[i].name)){
          res.push(place_lst[i]);
          st.add(place_lst[i].name);
        }
      }
    }
    this.setData({
      inputvalue:value,
      search_result:res,
      search_hidden:false,
    })
    if(res.length==0){
      this.setData({
        search_hidden:true,
      })
    }
  },
  getInputValue:function(e){
    this.setData({
      search_hidden:true,
      inputvalue:e.currentTarget.dataset.postname,
      input_txt:e.currentTarget.dataset.postname,
    })
  },
  click_input:function(e){
    if(this.data.search_result.length){
      this.setData({
        search_hidden:false,
      })
    }
  },
  map_click:function(e){
    this.setData({
      search_hidden:true,
    })
  },
  //搜索
  nearby_search:function(){
    //text是输入的地址
    var text = this.data.inputvalue;
    //返回的匹配完成的地址数组
    var res=[];
    var mark=[];
    mark.push(this.data.markers[0]);
    //待匹配的地址数组
    for(var j=0;j<this.data.app_data.length;j++)
    {
      var place_lst=this.data.app_data[j];
      var len=place_lst.length;
      //匹配,精确搜索
      for(var i=0;i<len;i++){
        if(text==place_lst[i].name){
          res.push(place_lst[i]);
        }
      }
    }
    //弹出框
    var texttitle = res.length?"搜索成功":"搜索失败";
    wx.showToast({
      title: texttitle,
      icon: 'success',
      duration: 2000
    })
    //更新markers标记点
    for(var i=0;i<res.length;i++) {
      let lat = res[i].latitude;
      let lon = res[i].longtitude;
      let name = res[i].name;
      var mark_tmp={
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
        }
      }
      mark.push(mark_tmp);
    }
    this.setData({
      markers:mark,
      currentdatabase:res,
      center_long:res[0].longtitude,
      center_lat:res[0].latitude,
    })
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效       
      var that = this;
      this.setData({
        search_hidden:true,
        app_data:[
          this.data.west_canteen,
          this.data.west_fruit,
          this.data.west_fooddelivery,
          this.data.west_teachingbuilding,
          this.data.west_library,
          this.data.west_lab_building,
          this.data.west_toilet,
          this.data.west_store,
          this.data.west_printing,
          this.data.west_delivery,
          this.data.west_gate,
          this.data.west_bicycle,
          this.data.west_bus,
          this.data.west_hospital,
          this.data.west_sports,
          this.data.west_scenery,
          this.data.west_dormitory,
        ],
      })
      //判断所在位置是否在校区内
      wx.getLocation({
        isHighAccuracy:true,
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
              ],
              center_lat:nowlatitude,
              center_long:nowlongitude,
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
                    ],
                    center_lat:31.838293,
                    center_long:117.255652,
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
                    ],
                    center_lat:nowlatitude,
                    center_long:nowlongitude,
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
    var i=e.detail.markerId;
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
      modalname:this.data.currentdatabase[i-1].name,
      startPoint:startPoint,
      endPoint:endPoint,
      place_img_src:this.data.currentdatabase[i-1].img
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
      center_lat:this.data.markers[0].latitude,
      center_long:this.data.markers[0].longitude,
    })
  }
})