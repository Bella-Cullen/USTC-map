// index.js
let index = 0,
  items = [{width:2401,height:1294,id:1,top:-200,left:-200,x:1000,y:447,scale:1,active:true}],
  flag = true,
  scale_step=0.1,
  scale_max=4,
  scale_min=0.5,
  img0="",
  cur=0
Page({
  data:{
    inputValue: "",
    searchIcon:"../../images/searchIcon.jpg",
    searchResult: [],
    itemList: items,
    selected_place:"",
    img:"../../images/map.jpg",
  },
  show_result(e){
    items[0].active=false;
    this.setData({
      itemList:items
    })
  },
  getUpdateMap(e){
    this.setData({
      selected_place: e.currentTarget.dataset.postname
    })
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:8000/map/',
      data:{destination:this.data.selected_place},
      method:'POST',
      success:function(res){
        that.onShow("data:image/jpeg;base64,"+res.data)
      },
    })
  },

  onShow(img_url){
    img0=img_url
    console.log(img0.length)

    var base64 = img0;//base64格式图片
    var imgPath = wx.env.USER_DATA_PATH+'/map'+cur+'.jpg';
    console.log(imgPath)
    var imageData = base64.replace(/^data:image\/\w+;base64,/, "");
    var fs = wx.getFileSystemManager();
    fs.open({
      filePath:imgPath,
      flag:'w',
    })
    fs.writeFileSync(imgPath, imageData, "base64");
    this.setData({
      img:imgPath
    })
    console.log(this.data.img)
    cur+=1;
  },

  getInputValue(e) {
    items[0].active=false;
    this.setData({
      itemList:items
    })
    this.setData({
      inputValue: e.detail.value
    })
    this.setData({
      searchresult: true,
    })
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8000/wx_login/',
      data:{inputValue:this.data.inputValue},
      method:'POST',
      success:function(res){
        that.setData({
          searchResult:res.data,
        })
      },
    })
  },
  
  WraptouchStart: function(e) {
    for (let i = 0; i < items.length; i++) {
      items[i].active = false;
      if (e.currentTarget.dataset.id == items[i].id) {
        index = i;
        items[index].active = true;
      }
    }
    this.setData({
      itemList: items
    })

    items[index].lx = e.touches[0].clientX;
    items[index].ly = e.touches[0].clientY;
    console.log(items[index]) 
  },
  WraptouchMove(e) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        flag = true;
      }, 1000)
    }
    console.log('WraptouchMove', e)
    items[index]._lx = e.touches[0].clientX;
    items[index]._ly = e.touches[0].clientY;

    items[index].left += items[index]._lx - items[index].lx;
    items[index].top += items[index]._ly - items[index].ly;
    items[index].x += items[index]._lx - items[index].lx;
    items[index].y += items[index]._ly - items[index].ly;

    items[index].lx = e.touches[0].clientX;
    items[index].ly = e.touches[0].clientY;
    this.setData({
      itemList: items
    })      
  },
  large:function(e){
    if(items[0].scale<scale_max){
      var offset_x=(items[0].x-210)*scale_step/items[0].scale;
      items[0].x+=offset_x;
      items[0].left+=offset_x;
      var offset_y=(items[0].y-210)*scale_step/items[0].scale;
      items[0].y+=offset_y;
      items[0].top+=offset_y;
      items[0].scale+=scale_step;
      this.setData({
        itemList: items
      })
    }
  },
  small:function(e){   
    if(items[0].scale>scale_min){
      var offset_x=(items[0].x-210)*scale_step/items[0].scale;
      items[0].x-=offset_x;
      items[0].left-=offset_x;
      var offset_y=(items[0].y-210)*scale_step/items[0].scale;
      items[0].y-=offset_y;
      items[0].top-=offset_y;
      items[0].scale-=scale_step;
      console.log(items[0].scale);
      this.setData({
        itemList:items
      })
    }
  }
})