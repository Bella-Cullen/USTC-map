//TODO1:历史记录
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
    app_data:[],
    hidden:true,
    search_hidden:true,
    page_hidden:true,
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
    fraction:0.000001,
    cur_name:"",
    cur_intro:"",
    history_hidden:true,
    history:[],
  },
  //获取输入的查询地址
  inputplace:function(e){
    var value=e.detail.value;
    if(value==''){
      this.setData({
        history_hidden:false,
      })
    }
    else{
      this.setData({
        history_hidden:true,
      })
    }
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
    for(var i0=0;i0<this.data.app_data.length;i0++)
    for(var i1=0;i1<this.data.app_data[i0].length;i1++)
    for(var i2=0;i2<this.data.app_data[i0][i1].length;i2++)
    {
      var place_lst=this.data.app_data[i0][i1][i2];
      var len=place_lst.length;     
      for(var i=0;i<len;i++){
        if(flag1==false||res.length>=15)//最多显示15条
          break;
        if(st.has(place_lst[i].name))
          continue;
        if(value==place_lst[i].name){
          res.unshift(place_lst[i]);
          st.add(place_lst[i].name);
        }
        else if(re1.test(place_lst[i].name)||re2.test(place_lst[i].name)){
          res.push(place_lst[i]);
          st.add(place_lst[i].name);
        }
        else if(place_lst[i].other_name!=""&&(re1.test(place_lst[i].other_name)||re2.test(place_lst[i].other_name))){
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
      history_hidden:true,
    })
  },
  click_input:function(e){
    if(this.data.search_result.length){
      this.setData({
        search_hidden:false,
      })
    }
    if(this.data.history.length&&this.data.inputvalue==''){
      this.setData({
        history_hidden:false,
      })
    }
  },
  map_click:function(e){
    this.setData({
      search_hidden:true,
      history_hidden:true,
    })
  },
  //搜索
  nearby_search:function(){
    //text是输入的地址
    var text = this.data.inputvalue;   
    var his = [...this.data.history];
    if(!his.includes(text))his.unshift(text);
    else{
      var tmp=his.indexOf(text);
      for(var i=tmp;i>=1;i-=1){
        his[i]=his[i-1];
      }
      his[0]=text;
    }
    //返回的匹配完成的地址数组
    var res=[];
    var mark=[];
    mark.push(this.data.markers[0]);
    //待匹配的地址数组
    for(var i0=0;i0<this.data.app_data.length;i0++)
    for(var i1=0;i1<this.data.app_data[i0].length;i1++)
    for(var i2=0;i2<this.data.app_data[i0][i1].length;i2++)
    {
      var place_lst=this.data.app_data[i0][i1][i2];
      var len=place_lst.length;
      //匹配,精确搜索
      for(var i=0;i<len;i++){
        if(text==place_lst[i].name){
          res.push(place_lst[i]);
        }
      }
    }
    var texttitle = res.length?"搜索成功":"搜索失败";
    if(res.length){
      this.setData({
        history:his,
      })
    }   
    if(res.length){
      wx.showToast({
        title: texttitle,
        icon: 'success',
        duration: 2000
      })
    }
    else{
      wx.showToast({
        title: texttitle,
        icon: 'none',
        duration: 2000
      })
    }
    //更新markers标记点
    var door_num=100;
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
      for(var j=0;j<res[i].doors.length;j++){
        mark_tmp={
          id:door_num,
          latitude: res[i].doors[j].latitude,
          longitude: res[i].doors[j].longtitude,
          iconPath: "../../images/doors.png",
          width: 10,
          height: 10,
          label: {
            content: res[i].doors[j].name,
            color: '#4B0082',
            bgColor:'#FFFFFF',
            fontSize: 7,
            anchorX:2,
            anchorY:-2,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#6495ED',
            padding: 1,
          }
        }
        door_num++;
        mark.push(mark_tmp);
      }
    }
    if(res.length)
    {
      this.setData({
        markers:mark,
        currentdatabase:res,
        center_long:res[0].longtitude,
        center_lat:res[0].latitude,
      })
    } 
  },
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效       
    var that = this;
    this.setData({
      search_hidden:true,
      history_hidden:true,
      fraction:0.000001,
      app_data:[
        app.globalData.campus[0].data_west,
        app.globalData.campus[0].data_mid,
        app.globalData.campus[0].data_east,
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
                    },
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
    // if(i>=100){
    //   console.log("return");
    //   return;
    // }
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
      page_hidden:false,
      modalname:this.data.currentdatabase[i-1].name,
      startPoint:startPoint,
      endPoint:endPoint,
      place_img_src:this.data.currentdatabase[i-1].img,
      cur_name:this.data.currentdatabase[i-1].name,
      cur_intro:this.data.currentdatabase[i-1].page_link,
    })
  },
  page_click:function(){
    wx.navigateTo({
      url: '../../pages/new/new?name='+this.data.cur_name+'&intro='+this.data.cur_intro,
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
    console.log(this.data.center_lat)
    this.setData({
      center_lat:this.data.markers[0].latitude+this.data.fraction,
      center_long:this.data.markers[0].longitude+this.data.fraction,
      fraction:-this.data.fraction,
    })
  }
})