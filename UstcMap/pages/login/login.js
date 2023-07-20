const app=getApp()
Page({
  data:{
    userInfo:'',
  },
  onLoad(){
    // console.log('enter page')
    // let user=wx.getStorageSync('user')
    // console.log(user)
    // this.setData({
    //   userInfo:user
    // })
  },

  login(){
    // 调用 wx.login 方法获取用户登录凭证 code
    let that=this;
    console.log('执行')
    wx.getUserProfile({
      desc:'用于获取用户信息',
      success:res=>{
        console.log('success',res.userInfo)
        //缓存用户信息
        app.globalData.userinfo=res.userInfo;
        wx.setStorageSync('user', res.userInfo)
        that.setData({
          userInfo:res.userInfo
        })
        wx.navigateBack();
      },
      fail:res=>{
        console.log('fail',res)
      }
    })
    
    },

  logout() {
    this.setData({
      userInfo:''
    })
    //wx.setStorageSync('user', '')
    app.globalData.openid=''
  },

  jump(){
    // wx.navigateTo({
    //   url: '/pages/new/new'
    // })
    wx.navigateBack();
  },

  
});