// pages/new/new.js
var util=require('../../utils/util.js')
const app=getApp();
Page({

  data: {
    actionsList:[],
    myOpenid:'',
    showInputDialog:false,
    commentValue:'',
    id:'',
    inputValue:'',
    isPrized:'',
    name:'',
    intro:'',
    isLogin:'',
    sumRate:Number,
  },

  onLoad(options) {
    wx.stopPullDownRefresh();
    if(this.data.name==""){
      this.setData({
        name:options.name,
        intro:options.intro,
      })
    }
    console.log(this.data.name)
    var that=this;
    
    this.setData({
      myOpenid:app.globalData.openid,
      isLogin:app.globalData.userinfo,
    })

    console.log("openid",this.data.myOpenid)
    wx.cloud.database().collection('actions').orderBy('time','desc')
    .where({
      placeid:this.data.name
    })
    .get({
      success(res){
        console.log(res)
        var list=res.data;
        var sum=0.0;
        var i=0.0;
        for(var l in list){
          list[l].time=util.formatTime(new Date(list[l].time))
          sum=sum+list[l].rate
          i=i+1
        }
        sum=sum/i
        sum=sum.toFixed(2)
        console.log("this is sum",sum)
        that.setData({
          actionsList:res.data,
          sumRate:sum
        })
      }
    })

  },

  
  sendComment(){
    if(app.globalData.userinfo == null){
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }else{
    wx.navigateTo({
      url:'/pages/create/create?name='+this.data.name,
    })}
  },

  deleteAction(event){
    var that=this;
    console.log(event.currentTarget.dataset.id)
    wx.cloud.database().collection('actions')
    .doc(event.currentTarget.dataset.id)
    .remove({
      success(res){
        console.log(res)
        wx.showToast({
          title: '删除成功！',
        })
        that.onLoad()
        that.getActionsList()
      }
    })
  },

  onPullDownRefresh(){
    this.onLoad()
  },
//获取输入
  onInput(e){
    console.log(e.detail.value)
    this.setData({
      commentValue:e.detail.value
    })
  },


  subcomment(e){
    var that=this;
    if(app.globalData.userinfo==null)
    {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }else{
      if(this.data.commentValue.length<3)
      {
        wx.showToast({
          icon:"none",
          title: '字数不足！',
        })
        return
      }
      console.log(e.currentTarget.dataset.id)

      let action=''
      let comment={}
      let commentarr=[]

      wx.cloud.database().collection('actions').doc(e.currentTarget.dataset.id)
      .get({
        success(res){
          console.log(res)
          action=res.data
          //加入新评论
          comment.nickname=app.globalData.userinfo.nickName;
          comment.openid=app.globalData.openid;
          comment.text=that.data.commentValue
          comment.time=new Date()
          comment.toOpenid=''
          comment.tonickName=''
          commentarr=action.commentList
          commentarr.push(comment)
          //云函数防止权限问题
          wx.cloud.callFunction({
            name:"shoucang",
            data:{
              action:"pinglun",
              id:e.currentTarget.dataset.id,
              pinglun:commentarr,
            }
          }).then(res=>{
            console.log("success",res)
            that.setData({
              inputValue:''
            })
            wx.showToast({
              title: '评论成功！',
            })
            that.onLoad()
          })
          .catch(res=>{
            console.log("fail",res)
          })
        }
      })
    }
 },
//删除评论（长按）
deleteComment(event){
  var that=this;
  console.log(event.currentTarget.dataset.thisid)
  var myOpenid=this.data.myOpenid
  if(app.globalData.openid&&(event.currentTarget.dataset.openid==myOpenid||event.currentTarget.dataset.thisid==myOpenid)){
  wx.showModal({
    title:'提示',
    content:'确定要删除此评论吗?',
    success(res){
      if(res.confirm){
        console.log(event.currentTarget.dataset.id)
        console.log(event.currentTarget.dataset.index)
        var index=event.currentTarget.dataset.index;
        wx.cloud.database().collection('actions').doc(event.currentTarget.dataset.id)
        .get({
          success(res){
            var action=res.data
            action.commentList.splice(index,1)
            //云函数防止权限问题
            wx.cloud.callFunction({
              name:"shoucang",
              data:{
                action:"pinglun",
                id:event.currentTarget.dataset.id,
                pinglun:action.commentList,
              }
            }).then(res=>{
              console.log("success",res)
              wx.showToast({
                title: '删除成功！',
              })
              that.onLoad()
            })
            .catch(res=>{
              console.log("fail",res)
            })
          }
        })
      }
      else if(res.cancel){
        console.log("取消")
      }
    }
  })
}
},

prizeAction(e){
  if(app.globalData.userinfo==null)
  {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }else{
    var that=this;
    console.log(e)
    wx.cloud.database().collection('actions').doc(e.currentTarget.dataset.id)
    .get({
      success(res){
        var action=res.data
        var prizeList=action.prizeList
        var index;
        var tag=false;
        for(var l in prizeList){
          if(prizeList[l]==app.globalData.openid){
            console.log("有重复的1")
            tag=true;
            index=l;
            break
          }
        }
        //之前点赞过
        if(tag){
          prizeList.splice(index,1);
          wx.cloud.callFunction({
            name:"shoucang",
            data:{
              action:"dianzan",
              id:e.currentTarget.dataset.id,
              prizeList:prizeList,
            }
          }).then(res=>{
            console.log("success",res)
            that.onLoad()
          })
          .catch(res=>{
            console.log("fail",res)
          })

        }
        else{
          prizeList.push(app.globalData.openid)
          wx.cloud.callFunction({
            name:"shoucang",
            data:{
              action:"dianzan",
              id:e.currentTarget.dataset.id,
              prizeList:prizeList,
            }
          }).then(res=>{
            console.log("success",res)
            that.onLoad()
          })
          .catch(res=>{
            console.log("fail",res)
          })
        }
      }
    })
  }
},

})