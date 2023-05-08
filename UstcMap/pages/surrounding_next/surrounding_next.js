var app=getApp();
Page({
  data: {
    search_array:[],
  },
  onLoad:function(options){
    this.setData({
      search_array:app.globalData.surroundings[options.mode],
    })
  },
})