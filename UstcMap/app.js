// app.ts
//TODO:搭建图片网站,每个图片对应一个url,放在map.data.img里
App({
  globalData: {
    map:[
      {
      "data":[
        {
          latitude:31.840702,
          longtitude:117.253928,
          name:"西区学生食堂",
          img:["https://i0.hdslb.com/bfs/archive/5c85359983cc3aa8860734698df255bd9825b1eb.jpg"]
        },
        {
          latitude:31.840456,
          longtitude:117.253904,
          name:"金桔餐厅",
        },
        {
          latitude:31.837194,
          longtitude:117.258628,
          name:"芳华餐厅",
        },
      ]
      }
    ]
  },
  onLaunch() {

  },
})