var app=getApp();
Page({
  data: {
    select_left:"../../images/select_left.png",
    select_right:"../../images/select_right.png",
    select_hidden:true,
    select_array:['西校区','中校区','东校区','东中西校区','高新区'],
    select_value:'西校区',
    food_icon:"../../images/campus_food.png",
    canteen_icon:"../../images/campus_canteen.png",
    fruit_icon:"../../images/campus_fruit.png",
    food_delivery_icon:"../../images/campus_food_delivery.png",
    study_icon:"../../images/campus_study.png",
    teaching_building_icon:"../../images/campus_teaching_building.png",
    library_icon:"../../images/campus_library.png",
    lab_building_icon:"../../images/campus_lab_building.png",
    traffic_icon:"../../images/campus_traffic.png",
    gate_icon:"../../images/campus_gate.png",
    bicycle_icon:"../../images/campus_bicycle.png",
    bus_icon:"../../images/campus_bus.png",
    convenience_icon:"../../images/campus_convenience.png",
    toilet_icon:"../../images/campus_toilet.png",
    delivery_icon:"../../images/campus_delivery.png",
    store_icon:"../../images/campus_store.png",
    printing_icon:"../../images/campus_printing.png",
    other_icon:"../../images/campus_other.png",
    sports_icon:"../../images/campus_sports.png",
    scenery_icon:"../../images/campus_scenery.png",
    dormitory_icon:"../../images/campus_dormitory.png",
    hospital_icon:"../../images/campus_hospital.png",
    aed_icon:"../../images/campus_aed.png",
    others_icon:"../../images/campus_others.png",
    all_icon:"../../images/campus_all.png",
  },
  select_show:function(e){
    this.setData({
      select_hidden:!this.data.select_hidden,
    })
  },
  getSelectValue:function(e){
    this.setData({
      select_hidden:true,
      select_value:e.currentTarget.dataset.postname,
    })
  },
  canteen:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=0&mode_index3=0&mode_image=../../images/campus_canteen.png',
    })
  },
  fruit:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=0&mode_index3=1&mode_image=../../images/campus_fruit.png',
    })
  },
  food_delivery:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=0&mode_index3=2&mode_image=../../images/campus_food_delivery.png',
    })
  },
  teaching_building:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=1&mode_index3=0&mode_image=../../images/campus_teaching_building.png',
    })
  },
  library:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=1&mode_index3=1&mode_image=../../images/campus_library.png',
    })
  },
  lab_building:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=1&mode_index3=2&mode_image=../../images/campus_lab_building.png',
    })
  },
  gate:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=3&mode_index3=0&mode_image=../../images/campus_gate.png',
    })
  },
  bicycle:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=3&mode_index3=1&mode_image=../../images/campus_bicycle.png',
    })
  },
  bus:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=3&mode_index3=2&mode_image=../../images/campus_bus.png',
    })
  },
  toilet:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=2&mode_index3=0&mode_image=../../images/campus_toilet.png',
    })
  },
  delivery:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=2&mode_index3=1&mode_image=../../images/campus_delivery.png',
    })
  },
  store:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=2&mode_index3=2&mode_image=../../images/campus_store.png',
    })
  },
  printing:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=2&mode_index3=3&mode_image=../../images/campus_printing.png',
    })
  },
  sports:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=4&mode_index3=0&mode_image=../../images/campus_sports.png',
    })
  },
  scenery:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=5&mode_index3=0&mode_image=../../images/campus_scenery.png',
    })
  },
  dormitory:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=6&mode_index3=0&mode_image=../../images/campus_dormitory.png',
    })
  },
  hospital:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=7&mode_index3=0&mode_image=../../images/campus_hospital.png',
    })
  },
  aed:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=7&mode_index3=1&mode_image=../../images/campus_aed.png',
    })
  },
  others:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=8&mode_index3=0&mode_image=../../images/campus_others.png',
    })
  },
  all:function(e){
    var mode1;
    var value=this.data.select_value;
    if(value=='西校区') mode1='0';
    else if(value=='中校区') mode1='1';
    else if(value=='东校区') mode1='2';
    else if(value=='高新区') mode1='3';
    else mode1='4';
    wx.navigateTo({
      url: '../../pages/campus_next/campus_next?mode_index1='+mode1+'&mode_index2=9&mode_index3=0&mode_image=../../images/campus_n_all.png',
    })
  },
})