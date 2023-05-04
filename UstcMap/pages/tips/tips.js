//TODO:小程序开发添加以下2个域名
Page({
  data: {
    pdf_url1:"https://myustc.feixu.site/hello/%E4%B8%AD%E7%A7%91%E5%A4%A7%E6%96%B0%E7%94%9F%E6%8C%87%E5%8C%97.pdf",
    pdf_url2:"https://git.lug.ustc.edu.cn/-/ide/project/ysc/pdf/edit/main/-/%E4%B8%AD%E7%A7%91%E5%A4%A7%E4%B8%8D%E5%AE%8C%E5%85%A8%E5%85%A5%E5%AD%A6%E6%8C%87%E5%8D%97.pdf"
  },
  show1:function(e){
    wx.downloadFile({ //将文档下载到本地
      url: this.data.pdf_url1,//pdf链接
      success(res) {
        wx.openDocument({ //打开文档
          filePath: res.tempFilePath,//本地文档路径
          fileType: "pdf",//文档类型
          showMenu: true,
          success: function (res) {
            wx.showToast({
              title: '打开文档成功',
            })
          },
          fail: function (res) {
            wx.showToast({
              title: '打开文档失败',
            })
          },
        })
      },
      fail:function(res){
        console.log("fail")
      }
    })
  },
  show2:function(e){
    wx.downloadFile({ //将文档下载到本地
      url: this.data.pdf_url2,//pdf链接
      success(res) {
        wx.openDocument({ //打开文档
          filePath: res.tempFilePath,//本地文档路径
          fileType: "pdf",//文档类型
          showMenu: true,
          success: function (res) {
            wx.showToast({
              title: '打开文档成功',
            })
          },
          fail: function (res) {
            wx.showToast({
              title: '打开文档失败',
            })
          },
        })
      },
      fail:function(res){
        console.log("fail")
      }
    })
  }
})