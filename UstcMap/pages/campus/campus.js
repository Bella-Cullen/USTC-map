var app=getApp();
Page({
  data: {
    select_left:"../../images/select_left.png",
    select_right:"../../images/select_right.png",
    select_hidden:true,
    select_array:['西校区','中校区','东校区','东中西校区','高新区'],
    select_value:'',
  },
  select_show:function(e){
    this.setData({
      select_hidden:false,
    })
  },
  getSelectValue:function(e){
    this.setData({
      select_hidden:true,
      select_value:e.currentTarget.dataset.postname,
    })
  },
})