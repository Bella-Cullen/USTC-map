//TODO1:自定义中心点
var app=getApp();
Page({
  data: {
    select_left:"../../images/select_left.png",
    select_right:"../../images/select_right.png",
    select_hidden:true,
    select_array:['西区中心','中区中心','东区中心','高新区中心','当前位置'],
    select_value:'当前位置',
    search_array:[],
    mode:0,
    icon:"../../images/icon.png",
    lat:0,
    long:0,
    curlat:0,
    curlong:0,
  },
  select_show:function(e){
    this.setData({
      select_hidden:!this.data.select_hidden,
    })
  },
  getSelectValue:function(e){
    var value=e.currentTarget.dataset.postname;
    var lat,long;
    if(value==this.select_value)return;
    if(value=="当前位置"){
      lat=this.data.curlat;
      long=this.data.curlong;
    }
    else if(value=="西区中心"){
      lat=31.838293;
      long=117.255652;
    }
    else if(value=="中区中心"){
      lat=31.838677;
      long=117.263213;
    }
    else if(value=="东区中心"){
      lat=31.837021;
      long=117.269957;
    }
    else{
      lat=31.818393;
      long=117.129519;
    }
    var arr=this.data.search_array;
    for(var i=0;i<arr.length;i++){
      var distance=this.getDistance(lat,long,arr[i].latitude,arr[i].longtitude);
      arr[i].dist=distance;
    }
    arr.sort(function(a,b){return a.dist-b.dist});
    this.setData({
      search_array:arr,
      select_hidden:true,
      select_value:value,
      lat:lat,long:long,
    })
  },
  onLoad:function(options){
    var arr=app.globalData.surroundings[options.mode];
    var that=this;
    wx.getLocation({
      isHighAccuracy:true,
      type:'gcj02',
      success:function(res){
        var latitude=res.latitude;
        var longitude=res.longitude;
        that.setData({
          lat:latitude,
          long:longitude,
          curlat:latitude,
          curlong:longitude,
        })
        for(var i=0;i<arr.length;i++){
          var distance=that.getDistance(latitude,longitude,arr[i].latitude,arr[i].longtitude);
          arr[i].dist=distance;
        }
        arr.sort(function(a,b){return a.dist-b.dist});
        that.setData({
          search_array:arr,
          mode:options.mode,
        })
      }
    })
  },
  Rad(d){
    return d*Math.PI/180.0;
  },
  getDistance(lat1,lng1,lat2,lng2){
    var radLat1=this.Rad(lat1);
    var radLat2=this.Rad(lat2);
    var a=radLat1-radLat2;
    var b=this.Rad(lng1)-this.Rad(lng2);
    var s=2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2)+Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
    s=s*6378.137;
    s=Math.round(s*100)/100;
    return s;
  },
  navigate_next:function(e){
    var name=e.currentTarget.dataset.name;
    var lat=e.currentTarget.dataset.lat;
    var long=e.currentTarget.dataset.lon;
    var img=e.currentTarget.dataset.img;
    console.log(e)
    wx.navigateTo({
      url: '../../pages/surrounding_n_n/surrounding_n_n?name='+name+'&lat='+String(lat)+'&long='+String(long)+'&img='+img,
    })
    console.log('../../pages/surrounding_n_n/surrounding_n_n?name='+name+'&lat='+String(lat)+'&long='+String(long)+'&img='+img)
  },
})