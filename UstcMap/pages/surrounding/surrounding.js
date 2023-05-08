var app=getApp();
Page({
  data: {
    restaurant:"../../images/restaurant.png",
    hotel:"../../images/hotel.png",
    traffic:"../../images/traffic.png",
    delivery:"../../images/delivery.png",
    hospital:"../../images/hospital.png",
    drug:"../../images/drug.png",
    sports:"../../images/sports.png",
    store:"../../images/store.png",
    hair:"../../images/hair.png",
    mobile:"../../images/mobile.png",
    fruit:"../../images/fruit.png",
    tea:"../../images/tea.png",
    mall:"../../images/mall.png",
    scenery:"../../images/scenery.png",
    cinema:"../../images/cinema.png",
    ebike:"../../images/ebike.png",
    glasses:"../../images/glasses.png",
    bank:"../../images/bank.png",
    clothes:"../../images/clothes.png",
    bicycle:"../../images/bicycle.png",
    other:"../../images/icon5.png",
  },
  restaurant:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=1',
    })
  },
  hotel:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=11',
    })
  },
  traffic:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=14',
    })
  },
  delivery:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=10',
    })
  },
  hospital:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=15',
    })
  },
  drug:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=6',
    })
  },
  sports:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=2',
    })
  },
  store:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=5',
    })
  },
  hair:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=7',
    })
  },
  mobile:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=9',
    })
  },
  fruit:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=3',
    })
  },
  tea:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=4',
    })
  },
  mall:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=16',
    })
  },
  scenery:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=17',
    })
  },
  cinema:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=18',
    })
  },
  ebike:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=13',
    })
  },
  glasses:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=19',
    })
  },
  bank:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=8',
    })
  },
  clothes:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=0',
    })
  },
  bicycle:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=12',
    })
  },
  other:function(){
    wx.navigateTo({
      url: '../../pages/surrounding_next/surrounding_next?mode=20',
    })
  },
})