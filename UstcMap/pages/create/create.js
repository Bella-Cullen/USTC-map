// pages/create/create.js
const app=getApp();
Page({
  data: {
    inputValue:'',
    name:'',
    rate:Number,

  },
  onLoad(options) {
    console.log(app.globalData.userinfo)
    this.setData({
      name:options.name
    })
  },

  getValue(e){
    console.log(e.detail.value)
    this.setData({
      inputValue:e.detail.value
    })
  },

  createNew(){
    // 发布评论，加入数据库
    var that=this;
    if(this.data.inputValue.length<3)
    {
      wx.showToast({
        icon:"none",
        title: '字数不足！',
      })
      return
    }
    wx.cloud.database().collection('actions').add({
      data:{
        nickname:app.globalData.userinfo.nickName,
        faceImg:app.globalData.userinfo.avatarUrl,
        text:this.data.inputValue,
        commentList:[],
        prizeList:[],
        rate:this.data.rate,
        placeid:this.data.name,
        time:Date.now()
      }
    })
    .then(res=>{
      console.log("success",res)
      wx.navigateBack({
        success(res){
          wx.showToast({
            title: '发布成功！',
          })
        }
      })
    })
    .catch(res=>{
      console.log("fail",res)
    })

  },

  rate1(){
    this.setData({
      rate:1,
    })
  },

  rate2(){
    this.setData({
      rate:2,
    })
  },

  rate3(){
    this.setData({
      rate:3,
    })
  },

  rate4(){
    this.setData({
      rate:4,
    })
  },

  rate5(){
    this.setData({
      rate:5,
    })
  },
})