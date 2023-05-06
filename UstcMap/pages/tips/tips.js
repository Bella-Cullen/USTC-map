//TODO1:联系地大小程序开发者
//TODO2:反馈样式(现在已hidden)
Page({
  data: {
    pdf_url1:"https://myustc.feixu.site/hello/%E4%B8%AD%E7%A7%91%E5%A4%A7%E6%96%B0%E7%94%9F%E6%8C%87%E5%8C%97.pdf",
    pdf_url2:"https://sunxk2020.github.io/pdf/ustcnew.pdf",
    book_title_icon:"../../images/book_title.png",
    book_book_icon:"../../images/book_book.png",
    link_title_icon:"../../images/link_title.png",
    link_link_icon:"../../images/link_link.png",
    about_title_icon:"../../images/about_title.png",
    about_qq_icon:"../../images/QQ.png",
    about_wx_icon:"../../images/wx.png",
    about_shengming_icon:"../../images/shengming.png",
    about_thanks_icon:"../../images/thanks.png",
    about_feedback_icon:"../../images/feedback.png",
  },
  book_show1:function(e){
    wx.showLoading({
      title: '加载中',
    })
    wx.downloadFile({ //将文档下载到本地
      url: this.data.pdf_url1,//pdf链接
      success(res) {
        wx.openDocument({ //打开文档
          filePath: res.tempFilePath,//本地文档路径
          fileType: "pdf",//文档类型
          showMenu: true,
          success: function (res) {
            wx.hideLoading();
            wx.showToast({
              title: '打开文档成功',
            })
          },
          fail: function (res) {
            wx.hideLoading();
            wx.showToast({
              title: '打开文档失败',
            })
          },
        })
      },
      fail:function(res){
        console.log("fail");
        wx.hideLoading();
      }
    })
  },
  book_show2:function(e){
    wx.showLoading({
      title: '加载中',
    })
    wx.downloadFile({ //将文档下载到本地
      url: this.data.pdf_url2,//pdf链接
      success(res) {
        wx.openDocument({ //打开文档
          filePath: res.tempFilePath,//本地文档路径
          fileType: "pdf",//文档类型
          showMenu: true,
          success: function (res) {
            wx.hideLoading();
            wx.showToast({
              title: '打开文档成功',
            })
          },
          fail: function (res) {
            wx.hideLoading();
            wx.showToast({
              title: '打开文档失败',
            })
          },
        })
      },
      fail:function(res){
        console.log("fail");
        wx.hideLoading();
      }
    })
  },
  link_show1:function(e){
    wx.showModal({
      title: '我的科大',
      content: 'https://wdkd.feixu.site/',
      confirmText:"复制文本",
      success(res) {
        if (res.confirm) {
          wx.setClipboardData({
            data: 'https://wdkd.feixu.site/',
            success(res) {
              wx.showToast({
                title: '复制成功',
              })
            },
            fail(res){
              wx.showToast({
                title: '复制失败',
              })
            }
          })
        }
      }
    })
  },
  link_show2:function(e){
    wx.showModal({
      title: '评课社区',
      content: 'https://icourse.club/',
      confirmText:"复制文本",
      success(res) {
        if (res.confirm) {
          wx.setClipboardData({
            data: 'https://icourse.club/',
            success(res) {
              wx.showToast({
                title: '复制成功',
              })
            },
            fail(res){
              wx.showToast({
                title: '复制失败',
              })
            }
          })
        }
      }
    })
  },
  about_shengming:function(e){
    wx.showModal({
      title: '声明',
      content: '小程序为中科大个人开发者所有,若参考使用请联系开发者',
    })
  },
  about_thanks:function(e){
    wx.showModal({
      title: '鸣谢',
      content: '本次小程序开发为中科大2023春程设进阶作业,感谢孙广中老师对我们的指导,同时感谢中国地质大学导航提供的开源代码',
    })
  },
  about_qq:function(e){
    wx.setClipboardData({
      data: '3118592648',
      success(res) {
        wx.showToast({
          title: '复制成功',
        })
      },
      fail(res){
        wx.showToast({
          title: '复制失败',
        })
      }
    })
  },
  about_wx:function(e){
    wx.setClipboardData({
      data: 'sw02230524',
      success(res) {
        wx.showToast({
          title: '复制成功',
        })
      },
      fail(res){
        wx.showToast({
          title: '复制失败',
        })
      }
    })
  },
})