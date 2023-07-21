// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  if(event.action=="dianzan")
  {
    return await cloud.database().collection("actions").doc(event.id)
    .update({
      data:{
        prizeList:event.prizeList
      },
    })
    .then(res=>{
      console.log("success",res)
      return res
    })
    .catch(res=>{
      console.log("fail",res)
      return res
    })
  }
  // 评论函数
  else if(event.action=="pinglun")
  {
    return await cloud.database().collection("actions").doc(event.id)
    .update({
      data:{
        commentList:event.pinglun,
      },
    })
    .then(res=>{
      console.log("success",res)
      return res
    })
    .catch(res=>{
      console.log("fail",res)
      return res
    })
  }
}