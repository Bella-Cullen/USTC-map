//TODO1:page_link
//TODO2:campus页面和surrounding页面解决图字不对齐问题:截图当做整体
App({
  globalData: {
    userinfo: null,
    openid: null,
    campus: [
      {
        "data_west": [
          [//food
            [//canteen
              {
                latitude: 31.837194,
                longtitude: 117.258628,
                doors: [],
                name: "芳华餐厅",
                other_name: "芳华食堂",
                img: ["https://sbsk.gitee.io/image/photo/59.jpg"],
                page_link: "https://ysjt.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.840690,
                longtitude: 117.253785,
                doors: [
                  {
                    latitude: 31.840685,
                    longtitude: 117.253665,
                    name: "西门",
                  },
                  {
                    latitude: 31.840682,
                    longtitude: 117.253906,
                    name: "东门",
                  },
                ],
                name: "西区学生食堂",
                other_name: "西区学生餐厅",
                img: ["https://sbsk.gitee.io/image/westimage/westcanteen.jpg"],
                page_link: ["https://ysjt.ustc.edu.cn/main.htm"],
              },
              {
                latitude: 31.840690,
                longtitude: 117.253785,
                doors: [],
                name: "正阳楼",
                other_name: "食堂",
                img: ["https://sbsk.gitee.io/image/photo/59.jpg"],// TODO: 
                page_link: "https://ysjt.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.840485,
                longtitude: 117.253780,
                doors: [],
                name: "金桔餐厅",
                other_name: "金桔食堂",
                img: ["https://sbsk.gitee.io/image/photo/59.jpg"],// TODO:
                page_link: "https://ysjt.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.838380,
                longtitude: 117.259520,
                doors: [],
                name: "西区教工食堂",
                other_name: "西区教工餐厅",
                img: ["https://sbsk.gitee.io/image/photo/114.jpg"],
                page_link: "https://ysjt.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.837218,
                longtitude: 117.258877,
                doors: [],
                name: "西苑食堂",
                other_name: "西苑餐厅",
                img: ["https://sbsk.gitee.io/image/photo/58.jpg"],
                page_link: "https://ysjt.ustc.edu.cn/main.htm",
              },
            ],
            [//fruit
              {
                latitude: 31.840184,
                longtitude: 117.254530,
                doors: [],
                name: "水果",
                other_name: "水果摊",
                img: [""],// TODO:
                page_link: "",
              },
              {
                latitude: 31.838406,
                longtitude: 117.259575,
                doors: [],
                name: "水果",
                other_name: "水果摊",
                img: [""],// TODO:
                page_link: "",
              },
            ],
            [//food_delivery
              {
                latitude: 31.841206,
                longtitude: 117.257026,
                doors: [],
                name: "外卖架",
                other_name: "外卖柜",
                img: ["https://sbsk.gitee.io/image/photo/123.jpg"],
                page_link: "",
              },
              {
                latitude: 31.838787,
                longtitude: 117.259606,
                doors: [],
                name: "外卖架",
                other_name: "外卖柜",
                img: ["https://sbsk.gitee.io/image/photo/46.jpg"],
                page_link: "",
              },
            ],
          ],
          [//study
            [//teaching_building
              {
                latitude: 31.838449,
                longtitude: 117.255318,
                doors: [],
                name: "三教A楼",
                other_name: "3A",
                img: ["https://sbsk.gitee.io/image/photo/37.jpg"],
                page_link: "https://catalog.ustc.edu.cn/query/classroom",
              },
              {
                latitude: 31.838246,
                longtitude: 117.255026,
                doors: [],
                name: "三教B楼",
                other_name: "3B",
                img: ["https://sbsk.gitee.io/image/photo/38.jpg"],
                page_link: "https://catalog.ustc.edu.cn/query/classroom",
              },
              {
                latitude: 31.838028,
                longtitude: 117.254451,
                doors: [],
                name: "三教C楼",
                other_name: "3C",
                img: ["https://sbsk.gitee.io/image/photo/36.jpg"],
                page_link: "https://catalog.ustc.edu.cn/query/classroom",
              },
            ],
            [//library
              {
                latitude: 31.839098,
                longtitude: 117.257344,
                doors: [],
                name: "西区图书馆",
                other_name: "西图",
                img: ["https://sbsk.gitee.io/image/photo/40.jpg"],
                page_link: "https://lib.ustc.edu.cn/",
              },
            ],
            [//lab_building
              {
                latitude: 31.837496,
                longtitude: 117.255969,
                doors: [],
                name: "信息与计算机实验教学中心",
                other_name: "电四楼",
                img: ["https://sbsk.gitee.io/image/photo/35.jpg"],
                page_link: "https://etcis-web.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.838707,
                longtitude: 117.254329,
                doors: [],
                name: "微纳研究与制造中心",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westweina.jpg"],
                page_link: "http://nano.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.839766,
                longtitude: 117.253538,
                doors: [],
                name: "创新创业学院",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westnew.jpg"],
                page_link: "https://sie.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.838238,
                longtitude: 117.252972,
                doors: [],
                name: "KTX实验室",
                other_name: "KTX",
                img: ["https://sbsk.gitee.io/image/westimage/westktx.jpg"],
                page_link: "",
              },
              {
                latitude: 31.838302,
                longtitude: 117.253788,
                doors: [],
                name: "力五楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westli5.jpg"],
                page_link: "https://ses.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.837672,
                longtitude: 117.254896,
                doors: [],
                name: "电一楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/34.jpg"],
                page_link: "",
              },
              {
                latitude: 31.837591,
                longtitude: 117.256003,
                doors: [],
                name: "电三楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/33.jpg"],
                page_link: "",
              },
              {
                latitude: 31.837502,
                longtitude: 117.256792,
                doors: [],
                name: "电二楼", // TODO: 几个电楼相对位置参考https://map.ustc.edu.cn/
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/33.jpg"],
                page_link: "",
              },
              {
                latitude: 31.838986,
                longtitude: 117.254104,
                doors: [],
                name: "火灾楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westfire.jpg"],
                page_link: "",
              },
              {
                latitude: 31.837118,
                longtitude: 117.253608,
                doors: [],
                name: "火灾实验室",
                other_name: "火灾科学国家重点实验室",
                img: ["https://sbsk.gitee.io/image/westimage/westfirelab.jpg"],
                page_link: "http://sklfs.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.838222,
                longtitude: 117.256881,
                doors: [],
                name: "力一楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/31.jpg"],// TODO:  有人
                page_link: "https://ses.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.837988,
                longtitude: 117.257416,
                doors: [],
                name: "力二楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/30.jpg"],
                page_link: "https://ses.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.837465,
                longtitude: 117.257388,
                doors: [],
                name: "力四楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westli4.jpg"],
                page_link: "https://ses.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.838397,
                longtitude: 117.258171,
                doors: [],
                name: "力三楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/41.jpg"],
                page_link: "https://ses.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.840662,
                longtitude: 117.258749,
                doors: [],
                name: "信智学部",
                other_name: "信息与智能学部",
                img: ["https://sbsk.gitee.io/image/photo/120.jpg"],
                page_link: "",
              },
              {
                latitude: 31.839283,
                longtitude: 117.258949,
                doors: [],
                name: "生命科学大楼",
                other_name: "生科楼",
                img: ["https://sbsk.gitee.io/image/photo/119.jpg"],
                page_link: "https://biox.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.836686,
                longtitude: 117.255675,
                doors: [],
                name: "同步辐射实验室",
                other_name: "核科学技术学院",
                img: ["https://sbsk.gitee.io/image/photo/99.jpg"],
                page_link: "http://www.snst.ustc.edu.cn/main.htm",
              },
            ],
          ],
          [//convenience
            [//toilet
              {
                latitude: 31.839480,
                longtitude: 117.253292,
                doors: [],
                name: "厕所",
                other_name: "卫生间",
                img: [""],
                page_link: "",
              },
              {
                latitude: 31.838321,
                longtitude: 117.259490,
                doors: [],
                name: "厕所",
                other_name: "卫生间",
                img: [""],
                page_link: "",
              },
            ],
            [//delivery
              {
                latitude: 31.837939,
                longtitude: 117.259445,
                doors: [],
                name: "近邻宝",
                other_name: "快递",
                img: ["https://sbsk.gitee.io/image/photo/55.jpg"],
                page_link: "",
              },
              {
                latitude: 31.840753,
                longtitude: 117.254612,
                doors: [],
                name: "快递柜",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
              {
                latitude: 31.838490,
                longtitude: 117.259576,
                doors: [],
                name: "京东派",
                other_name: "快递",
                img: ["https://sbsk.gitee.io/image/photo/51.jpg"],
                page_link: "",
              },
              {
                latitude: 31.838787,
                longtitude: 117.259606,
                doors: [],
                name: "快递柜",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.836820,
                longtitude: 117.258473,
                doors: [],
                name: "快递柜",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
            ],
            [//store
              {
                latitude: 31.840884,
                longtitude: 117.254561,
                doors: [],
                name: "超市",
                other_name: "小店",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.840642,
                longtitude: 117.254851,
                doors: [],
                name: "超市",
                other_name: "小店",
                img: [""],
                page_link: "",
              },
              {
                latitude: 31.840151,
                longtitude: 117.253276,
                doors: [],
                name: "超市",
                other_name: "小店",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.839973,
                longtitude: 117.254523,
                doors: [],
                name: "超市",
                other_name: "小店",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.838367,
                longtitude: 117.259462,
                doors: [],
                name: "超市",
                other_name: "小店",
                img: [""], // TODO:
                page_link: "",
              },
            ],
            [//printing
              {
                latitude: 31.840658,
                longtitude: 117.255476,
                doors: [],
                name: "文印",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.838492,
                longtitude: 117.259602,
                doors: [],
                name: "文印",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
            ],
          ],
          [//traffic
            [//gate
              {
                latitude: 31.841225,
                longtitude: 117.256759,
                doors: [],
                name: "西区北门",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/122.jpg"], // TODO: 有人
                page_link: "",
              },
              {
                latitude: 31.838758,
                longtitude: 117.259700,
                doors: [],
                name: "西区东门",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/45.jpg"], // TODO: 有人
                page_link: "",
              },
            ],
            [//bicycle
              {
                latitude: 31.838456,
                longtitude: 117.254244,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.838198,
                longtitude: 117.255326,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.839273,
                longtitude: 117.253589,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.840443,
                longtitude: 117.253589,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.840189,
                longtitude: 117.255739,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.838680,
                longtitude: 117.256425,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.838914,
                longtitude: 117.257101,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.840937,
                longtitude: 117.258727,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.839283,
                longtitude: 117.258586,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.837338,
                longtitude: 117.258529,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.836510,
                longtitude: 117.257939,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
            ],
            [//bus
              {
                latitude: 31.838828,
                longtitude: 117.256579,
                doors: [],
                name: "西区公交站",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westbus.jpg"],
                page_link: "",
              },
            ],
          ],
          [//sports
            [//sports
              {
                latitude: 31.839356,
                longtitude: 117.252996,
                doors: [],
                name: "西区操场",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westplayground.jpg"],
                page_link: "",
              },
              {
                latitude: 31.839377,
                longtitude: 117.253698,
                doors: [],
                name: "西区活动中心",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westactivity.jpg"],
                page_link: "",
              },
              {
                latitude: 31.839488,
                longtitude: 117.253480,
                doors: [],
                name: "西区乒乓球馆",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westpingpong.jpg"], // TODO: 有人
                page_link: "",
              },
              {
                latitude: 31.836341,
                longtitude: 117.257809,
                doors: [],
                name: "气膜馆",
                other_name: "羽毛球馆",
                img: ["https://sbsk.gitee.io/image/photo/101.jpg"], // TODO: 有人
                page_link: "",
              },
            ],
          ],
          [//scenery
            [//scenery
              {
                latitude: 31.839185,
                longtitude: 117.254634,
                doors: [],
                name: "西区全民健身区",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/97.jpg"], // TODO: 有人
                page_link: "",
              },
              {
                latitude: 31.837867,
                longtitude: 117.255564,
                doors: [],
                name: "芦花映雪",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/121.jpg"], // TODO: 这里可能与严济慈广场填反了
                page_link: "",
              },
              {
                latitude: 31.840314,
                longtitude: 117.258388,
                doors: [],
                name: "严济慈广场", // TODO:
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/严济慈.jpg"],
                page_link: "",
              },
              {
                latitude: 31.839239,
                longtitude: 117.255305,
                doors: [],
                name: "也西湖",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westlake.jpg"],
                page_link: "",
              },
            ],
          ],
          [//dormitory
            [//dormitory
              {
                latitude: 31.841023,
                longtitude: 117.255007,
                doors: [],
                name: "学生公寓1号楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westdorm1.jpg"], // TODO: 有人
                page_link: "",
              },
              {
                latitude: 31.840626,
                longtitude: 117.255476,
                doors: [],
                name: "学生公寓2号楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westdorm2.jpg"], // TODO: 车牌号
                page_link: "",
              },
              {
                latitude: 31.840456,
                longtitude: 117.255431,
                doors: [],
                name: "学生公寓6号楼",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.840048,
                longtitude: 117.253866,
                doors: [],
                name: "学生公寓4号楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westdorm4.jpg"],
                page_link: "",
              },
              {
                latitude: 31.839578,
                longtitude: 117.253911,
                doors: [],
                name: "学生公寓5号楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westdorm5.jpg"],
                page_link: "",
              },
              {
                latitude: 31.838515,
                longtitude: 117.259134,
                doors: [],
                name: "西区1幢宿舍",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
              {
                latitude: 31.838245,
                longtitude: 117.259023,
                doors: [],
                name: "西区2幢宿舍",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
              {
                latitude: 31.837958,
                longtitude: 117.258984,
                doors: [],
                name: "西区3幢宿舍",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
              {
                latitude: 31.837682,
                longtitude: 117.258947,
                doors: [],
                name: "西区4幢宿舍",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
              {
                latitude: 31.837471,
                longtitude: 117.258906,
                doors: [],
                name: "西区5幢宿舍",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
              {
                latitude: 31.836654,
                longtitude: 117.258296,
                doors: [],
                name: "学生公寓11号楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/107.jpg"],
                page_link: "",
              },
              {
                latitude: 31.836386,
                longtitude: 117.258224,
                doors: [],
                name: "学生公寓10号楼",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
              {
                latitude: 31.835992,
                longtitude: 117.258124,
                doors: [],
                name: "学生公寓9号楼",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
              {
                latitude: 31.835662,
                longtitude: 117.257912,
                doors: [],
                name: "学生公寓8号楼",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
              {
                latitude: 31.835662,
                longtitude: 117.257912,
                doors: [],
                name: "学生公寓7号楼",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
            ],
          ],
          [//hospital
            [//hospital
              {
                latitude: 31.838941,
                longtitude: 117.253598,
                doors: [],
                name: "西区医院",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/westimage/westhospital.jpg"],
                page_link: "http://hospital.ustc.edu.cn/",
              },
            ],
            [//AED
              // TODO:
              {
                latitude: 31.835752,
                longtitude: 117.252742,
                doors: [],
                name: "同辐2号楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/同辐2号楼AED.jpg"],
              },
              {
                latitude: 31.835725,
                longtitude: 117.253357,
                doors: [],
                name: "同辐环大厅AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/同辐环大厅AED.jpg"],
              },
              {
                latitude: 31.835244,
                longtitude: 117.254063,
                doors: [],
                name: "同辐3号楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/同辐3号楼AED.jpg"],
              },
              {
                latitude: 31.8375,
                longtitude: 117.252675,
                doors: [],
                name: "KTXAED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/KTXAED.jpg"],
              },
              {
                latitude: 31.837171,
                longtitude: 117.253992,
                doors: [],
                name: "火灾AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/火灾AED.jpg"],
              },
              {
                latitude: 31.838641,
                longtitude: 117.254108,
                doors: [],
                name: "特种楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/特种楼AED.jpg"],
              },
              {
                latitude: 31.838957,
                longtitude: 117.253561,
                doors: [],
                name: "西活AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/西活AED.jpg"],
              },
              {
                latitude: 31.839795,
                longtitude: 117.25422,
                doors: [],
                name: "学生公寓5AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓5AED.jpg"], // TODO: 
              },
              {
                latitude: 31.840036,
                longtitude: 117.253996,
                doors: [],
                name: "学生公寓4AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓4AED.jpg"],
              },
              {
                latitude: 31.840993,
                longtitude: 117.255286,
                doors: [],
                name: "学生公寓1AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓1AED.jpg"], // TODO:
              },
              {
                latitude: 31.840624,
                longtitude: 117.255272,
                doors: [],
                name: "学生公寓2AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓2AED.jpg"],
              },
              {
                latitude: 31.840348,
                longtitude: 117.255416,
                doors: [],
                name: "学生公寓6AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓6AED.jpg"],
              },
              {
                latitude: 31.840988,
                longtitude: 117.256537,
                doors: [],
                name: "西北保安亭AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/西北保安亭AED.jpg"],
              },
              {
                latitude: 31.840648,
                longtitude: 117.258688,
                doors: [],
                name: "科技楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/科技楼AED.jpg"],
              },
              {
                latitude: 31.838792,
                longtitude: 117.259636,
                doors: [],
                name: "西东保安亭AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/西东保安亭AED.jpg"],
              },
              {
                latitude: 31.83565,
                longtitude: 117.258163,
                doors: [],
                name: "学生公寓8AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓8AED.jpg"],
              },
              {
                latitude: 31.835979,
                longtitude: 117.258508,
                doors: [],
                name: "学生公寓9AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓9AED.jpg"],
              },
              {
                latitude: 31.836361,
                longtitude: 117.258562,
                doors: [],
                name: "学生公寓10AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓10AED.jpg"],
              },
              {
                latitude: 31.839081,
                longtitude: 117.257338,
                doors: [],
                name: "西图AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/西图AED.jpg"],
              },
              {
                latitude: 31.838388,
                longtitude: 117.255329,
                doors: [],
                name: "3AAED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/3AAED.jpg"],
              },
              {
                latitude: 31.837819,
                longtitude: 117.254472,
                doors: [],
                name: "3CAED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/3CAED.jpg"], // TODO: 有人
              },
              {
                latitude: 31.837661,
                longtitude: 117.254897,
                doors: [],
                name: "电四楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/电四楼AED.jpg"],
              },
              {
                latitude: 31.837498,
                longtitude: 117.255853,
                doors: [],
                name: "电一楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/电一楼AED.jpg"],
              },
              {
                latitude: 31.837481,
                longtitude: 117.256685,
                doors: [],
                name: "电二楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/电二楼AED.jpg"],
              },
              {
                latitude: 31.838249,
                longtitude: 117.256863,
                doors: [],
                name: "力一楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/力一楼AED.jpg"],
              },
              {
                latitude: 31.838002,
                longtitude: 117.257387,
                doors: [],
                name: "力二楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/力二楼AED.jpg"],
              },
              {
                latitude: 31.837532,
                longtitude: 117.257366,
                doors: [],
                name: "力四楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/力四楼AED.jpg"],
              },
            ],
          ],
          [//other
            [//other
              {
                latitude: 31.840966,
                longtitude: 117.254723,
                doors: [],
                name: "理发店",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/96.jpg"],
                page_link: "",
              },
              {
                latitude: 31.838850,
                longtitude: 117.256277,
                doors: [],
                name: "西区USTC1958",
                other_name: "ustc1958",
                img: ["https://sbsk.gitee.io/image/photo/28.jpg"],
                page_link: "",
              },
            ],
          ],
        ],
        "data_mid": [
          [//food
            [//canteen
              {
                latitude: 31.838515,
                longtitude: 117.261460,
                name: "夜餐部",
                img: ["https://sbsk.gitee.io/image/photo/22.jpg"],
                doors: [],
                other_name: "",
                page_link: "",
              },
              {
                latitude: 31.838446,
                longtitude: 117.261092,
                name: "桃李苑",
                img: ["https://sbsk.gitee.io/image/photo/23.jpg"],
                doors: [],
                other_name: "",
                page_link: "",
              },
            ],
            [//fruit

            ],
            [//food_delivery
              {
                latitude: 31.841453,
                longtitude: 117.264015,
                name: "外卖架",
                img: ["https://sbsk.gitee.io/image/photo/10.jpg"], // TODO: 有人
                doors: [],
                other_name: "外卖柜",
                page_link: "",
              },
            ],
          ],
          [//study
            [//teaching_building

            ],
            [//library

            ],
            [//lab_building
              {
                latitude: 31.839517,
                longtitude: 117.261992,
                name: "科大医学楼",
                img: ["https://sbsk.gitee.io/image/photo/20.jpg"],// TODO: 车牌号
                doors: [],
                other_name: "医学楼",
                page_link: "http://biomed.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.839195,
                longtitude: 117.261311,
                name: "理化科学实验中心",
                img: ["https://sbsk.gitee.io/image/photo/21.jpg"],
                doors: [],
                other_name: "",
                page_link: "http://pic.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.838816,
                longtitude: 117.260468,
                name: "应用化学楼",
                img: ["https://sbsk.gitee.io/image/photo/26.jpg"],
                doors: [],
                other_name: "",
                page_link: "http://applchem.ustc.edu.cn/main.htm",
              },
            ],
          ],
          [//convenience
            [//toilet
              {
                latitude: 31.840000,
                longtitude: 117.264670,
                name: "厕所",
                other_name: "卫生间",
                img: [""],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.840109,
                longtitude: 117.264144,
                name: "厕所",
                other_name: "卫生间",
                img: [""],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.838498,
                longtitude: 117.261118,
                name: "厕所",
                img: [""],
                doors: [],
                other_name: "",
                page_link: "",
              },
            ],
            [//delivery
              {
                latitude: 31.839666,
                longtitude: 117.264430,
                name: "快递柜",
                other_name: "快递",
                img: ["https://sbsk.gitee.io/image/photo/中区快递柜.jpg"],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.840081,
                longtitude: 117.264438,
                name: "近邻宝",
                other_name: "快递",
                img: ["https://sbsk.gitee.io/image/photo/2.jpg"],// TODO:
                doors: [],
                page_link: "",
              },
            ],
            [//store
              {
                latitude: 31.838518,
                longtitude: 117.260957,
                name: "科大糕点",
                img: ["https://sbsk.gitee.io/image/photo/24.jpg"],// TODO:
                doors: [],
                other_name: "",
                page_link: "",
              },

            ],
            [//printing

            ],
          ],
          [//traffic
            [//gate
              {
                latitude: 31.841440,
                longtitude: 117.264019,
                name: "中区北门",
                img: ["https://sbsk.gitee.io/image/photo/9.jpg"],// TODO: 有人
                doors: [],
                other_name: "",
                page_link: "",
              },
              {
                latitude: 31.838701,
                longtitude: 117.259941,
                doors: [],
                name: "中区西门",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/27.jpg"],// TODO: 有人
                page_link: "",
              },

            ],
            [//bicycle
              {
                latitude: 31.838794,
                longtitude: 117.264183,
                name: "共享单车停放点",
                other_name: "",
                img: [""],// TODO:
                doors: [],
                page_link: "",
              },
            ],
            [//bus

            ],
          ],
          [//sports
            [//sports
              {
                latitude: 31.839587,
                longtitude: 117.264309,
                name: "悦动空间",
                other_name: "中区健身房",
                img: ["https://sbsk.gitee.io/image/photo/6.jpg"],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.839267,
                longtitude: 117.263663,
                name: "乒乓球台",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/12.jpg"],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.838056,
                longtitude: 117.263274,
                name: "中区体育馆",
                other_name: "",
                img: [""],// TODO:
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.838436,
                longtitude: 117.263974,
                name: "游泳馆",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/游泳馆.jpg"],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.838241,
                longtitude: 117.262567,
                name: "手球场",
                other_name: "中区足球场",
                img: ["https://sbsk.gitee.io/image/photo/15.jpg"],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.838527,
                longtitude: 117.262614,
                name: "夜光篮球场",
                img: ["https://sbsk.gitee.io/image/photo/16.jpg"],
                doors: [],
                other_name: "篮球场",
                page_link: "",
              },
            ],
          ],
          [//scenery
            [//scenery

            ],
          ],
          [//dormitory
            [//dormitory
              {
                latitude: 31.839282,
                longtitude: 117.262948,
                name: "中区学生公寓3号楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/中区3号楼.jpg"],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.839283,
                longtitude: 117.263773,
                name: "中区学生公寓2、4号楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/8.jpg"],// TODO: 有人
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.839829,
                longtitude: 117.264145,
                name: "中区学生公寓5、6号楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/11.jpg"],// TODO: 有人
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.839182,
                longtitude: 117.264171,
                name: "中区学生公寓1号楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/7.jpg"],
                doors: [],
                page_link: "",
              },
            ],
          ],
          [//hospital
            [//hospital

            ],
            [//AED
              // TODO:
              {
                latitude: 31.839213,
                longtitude: 117.261261,
                doors: [],
                name: "理化科学实验中心AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/理化科学实验中心AED.jpg"],
              },
            ],
          ],
          [//other
            [//other
              {
                latitude: 31.838486,
                longtitude: 117.264576,
                name: "警务站",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/124.jpg"],// TODO: 有人
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.838972,
                longtitude: 117.264444,
                name: "青年之家",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/1.jpg"],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.840074,
                longtitude: 117.264514,
                name: "中区教材书库",
                other_name: "书库",
                img: ["https://sbsk.gitee.io/image/photo/3.jpg"],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.839375,
                longtitude: 117.264358,
                name: "中区心理健康咨询",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/5.jpg"],
                doors: [],
                page_link: "",
              },
              {
                latitude: 31.838631,
                longtitude: 117.260731,
                name: "艺术教学中心",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/25.jpg"],
                doors: [],
                page_link: "",
              },
            ],

          ],
        ],
        "data_east": [
          [//food
            [//canteen
              {
                latitude: 31.836977,
                longtitude: 117.270554,
                doors: [],
                name: "东苑餐厅",
                other_name: "东苑食堂",
                img: ["https://sbsk.gitee.io/image/photo/东苑.jpg"],
                page_link: "https://ysjt.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.837156,
                longtitude: 117.270415,
                doors: [],
                name: "星座餐厅（清真）",
                other_name: "星座食堂",
                img: ["https://sbsk.gitee.io/image/photo/星座.jpg"],
                page_link: "https://ysjt.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.836606,
                longtitude: 117.270710,
                doors: [],
                name: "美食广场",
                other_name: "美广",
                img: ["https://sbsk.gitee.io/image/photo/美广.jpg"],
                page_link: "https://ysjt.ustc.edu.cn/main.htm",
              },
            ],
            [//fruit
              {
                latitude: 31.836830,
                longtitude: 117.270960,
                doors: [],
                name: "水果店",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },

            ],
            [//food_delivery

            ],
          ],
          [//study
            [//teaching_building
              {
                latitude: 31.838974,
                longtitude: 117.269105,
                doors: [],
                name: "第一教学楼",
                other_name: "一教",
                img: ["https://sbsk.gitee.io/image/photo/一教.jpg"],
                page_link: "https://catalog.ustc.edu.cn/query/classroom",
              },
              {
                latitude: 31.840791,
                longtitude: 117.270870,
                doors: [],
                name: "第五教学楼",
                other_name: "五教",
                img: ["https://sbsk.gitee.io/image/photo/五教.jpg"],
                page_link: "https://catalog.ustc.edu.cn/query/classroom",
              },
              {
                latitude: 31.837970,
                longtitude: 117.270529,
                doors: [],
                name: "第二教学楼",
                other_name: "二教",
                img: ["https://sbsk.gitee.io/image/photo/二教.jpg"], // TODO:
                page_link: "https://catalog.ustc.edu.cn/query/classroom",
              },
            ],
            [//library
              {
                latitude: 31.837023,
                longtitude: 117.269277,
                doors: [],
                name: "东区图书馆",
                other_name: "东图",
                img: ["https://sbsk.gitee.io/image/photo/东图.jpg"],
                page_link: "https://lib.ustc.edu.cn/",
              },

            ],
            [//lab_building
              {
                latitude: 31.832942,
                longtitude: 117.269404,
                doors: [],
                name: "理化大楼",
                other_name: "基础科学教学实验中心",
                img: ["https://sbsk.gitee.io/image/photo/理化大楼.jpg"],
                page_link: "",
              },
              {
                latitude: 31.841202,
                longtitude: 117.270761,
                doors: [],
                name: "地空学院",
                other_name: "地空",
                img: ["https://sbsk.gitee.io/image/photo/地空.jpg"], // TODO:
                page_link: "http://ess.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.841212,
                longtitude: 117.271839,
                doors: [],
                name: "数学科学学院",
                other_name: "数院",
                img: ["https://sbsk.gitee.io/image/photo/管科楼.jpg"], // TODO:
                page_link: "https://math.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.840877,
                longtitude: 117.272642,
                doors: [],
                name: "国家高性能计算中心",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/高性能.jpg"],
                page_link: "http://cs.ustc.edu.cn/2020/0905/c22639a448575/page.htm",
              },
              {
                latitude: 31.838027,
                longtitude: 117.270078,
                doors: [],
                name: "少年班学院",
                other_name: "少院",
                img: ["https://sbsk.gitee.io/image/photo/人上人.jpg"],
                page_link: "https://sgy.ustc.edu.cn/",
              },
              {
                latitude: 31.833541,
                longtitude: 117.268031,
                doors: [],
                name: "近代物理楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/近代物理楼.jpg"],
                page_link: "https://mphy.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.833764,
                longtitude: 117.268738,
                doors: [],
                name: "分子量子调控研究室",
                other_name: "",
                img: [""],// TODO:
                page_link: "",
              },
            ],
          ],
          [//convenience
            [//toilet
              {
                latitude: 31.836208,
                longtitude: 117.266382,
                doors: [],
                name: "厕所",
                other_name: "",
                img: [""],
                page_link: "",
              },

            ],
            [//delivery

            ],
            [//store
              {
                latitude: 31.835571,
                longtitude: 117.267600,
                doors: [],
                name: "小店",
                other_name: "",
                img: [""],
                page_link: "",
              },

            ],
            [//printing

            ],
          ],
          [//traffic
            [//gate
              {
                latitude: 31.838130,
                longtitude: 117.266748,
                doors: [],
                name: "东区西门",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/东西.jpg"],
                page_link: "",
              },
              {
                latitude: 31.833518,
                longtitude: 117.266817,
                doors: [],
                name: "东区南门",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/东南.jpg"],
                page_link: "",
              },
            ],
            [//bicycle
              {
                latitude: 31.837116,
                longtitude: 117.267694,
                doors: [],
                name: "共享单车停放点",
                other_name: "",
                img: [""],
                page_link: "",
              },

            ],
            [//bus
              {
                latitude: 31.838824,
                longtitude: 117.268207,
                doors: [],
                name: "校车站",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/东校.png"], // TODO:
                page_link: "",
              },
            ],
          ],
          [//sports
            [//sports
              {
                latitude: 31.836145,
                longtitude: 117.267340,
                doors: [],
                name: "东区操场",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/东操.png"], // TODO:
                page_link: "",
              },
              {
                latitude: 31.835591,
                longtitude: 117.266986,
                doors: [],
                name: "篮球场",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/东篮.png"],
                page_link: "",
              },

            ],
          ],
          [//scenery
            [//scenery
              {
                latitude: 31.83600,
                longtitude: 117.269929,
                doors: [],
                name: "校史馆",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/校史馆.jpg"],
                page_link: "http://arch.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.838212,
                longtitude: 117.269180,
                doors: [],
                name: "郭沫若广场",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/郭广.jpg"],
                page_link: "",
              },

            ],
          ],
          [//dormitory
            [//dormitory
              {
                latitude: 31.836907,
                longtitude: 117.267997,
                doors: [],
                name: "学生公寓320楼",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.836561,
                longtitude: 117.267956,
                doors: [],
                name: "学生公寓321楼",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.836204,
                longtitude: 117.267968,
                doors: [],
                name: "学生公寓322楼",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.835923,
                longtitude: 117.268078,
                doors: [],
                name: "学生公寓323楼",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
            ],
          ],
          [//hospital
            [//hospital
              {
                latitude: 31.833309,
                longtitude: 117.266422,
                doors: [],
                name: "东区校医院",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/东区校医院.jpg"],
                page_link: "http://hospital.ustc.edu.cn/",
              },
            ],
            [//AED
              // TODO:
              {
                latitude: 31.839183,
                longtitude: 117.269104,
                doors: [],
                name: "一教AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/一教AED.jpg"],
              },
              {
                latitude: 31.835892,
                longtitude: 117.266312,
                doors: [],
                name: "体育教学楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/体育教学楼AED.jpg"],
              },
              {
                latitude: 31.835538,
                longtitude: 117.266146,
                doors: [],
                name: "人文学院AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/人文学院AED.jpg"],
              },
              {
                latitude: 31.833397,
                longtitude: 117.266046,
                doors: [],
                name: "校医院AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/校医院AED.jpg"], // TODO:
              },
              {
                latitude: 31.834224,
                longtitude: 117.266391,
                doors: [],
                name: "环资楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/环资楼AED.jpg"],
              },
              {
                latitude: 31.83339,
                longtitude: 117.267261,
                doors: [],
                name: "材料楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/材料楼AED.jpg"],
              },
              {
                latitude: 31.833541,
                longtitude: 117.268001,
                doors: [],
                name: "近代物理楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/近代物理楼AED.jpg"],
              },
              {
                latitude: 31.83375,
                longtitude: 117.268714,
                doors: [],
                name: "单分子科学楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/单分子科学楼AED.jpg"],
              },
              {
                latitude: 31.832891,
                longtitude: 117.269558,
                doors: [],
                name: "理化大楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/理化大楼AED.jpg"],
              },
              {
                latitude: 31.833329,
                longtitude: 117.269566,
                doors: [],
                name: "物理楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/物理楼AED.jpg"],
              },
              {
                latitude: 31.834888,
                longtitude: 117.268426,
                doors: [],
                name: "学生服务中心AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生服务中心AED.jpg"],
              },
              {
                latitude: 31.834976,
                longtitude: 117.268468,
                doors: [],
                name: "东区治安点AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/东区治安点AED.jpg"],
              },
              {
                latitude: 31.836927,
                longtitude: 117.267898,
                doors: [],
                name: "学生公寓320AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓320AED.jpg"],
              },
              {
                latitude: 31.83657,
                longtitude: 117.267969,
                doors: [],
                name: "学生公寓321AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓321AED.jpg"],
              },
              {
                latitude: 31.836132,
                longtitude: 117.268023,
                doors: [],
                name: "学生公寓322AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓322AED.jpg"],
              },
              {
                latitude: 31.835199,
                longtitude: 117.268996,
                doors: [],
                name: "学生公寓229AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓229AED.jpg"],
              },
              {
                latitude: 31.834972,
                longtitude: 117.269046,
                doors: [],
                name: "学生公寓230AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓230AED.jpg"],
              },
              {
                latitude: 31.835414,
                longtitude: 117.270852,
                doors: [],
                name: "学生公寓215AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓215AED.jpg"],
              },
              {
                latitude: 31.835114,
                longtitude: 117.270864,
                doors: [],
                name: "学生公寓216AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓216AED.jpg"],
              },
              {
                latitude: 31.835308,
                longtitude: 117.269966,
                doors: [],
                name: "学生公寓221AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/学生公寓221AED.jpg"],
              },
              {
                latitude: 31.836485,
                longtitude: 117.270748,
                doors: [],
                name: "东活一楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/电一楼AED.jpg"],
              },
              {
                latitude: 31.836397,
                longtitude: 117.270951,
                doors: [],
                name: "东活四楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/东活四楼AED.jpg"],
              },
              {
                latitude: 31.836587,
                longtitude: 117.269941,
                doors: [],
                name: "行政楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/行政楼AED.jpg"],
              },
              {
                latitude: 31.837114,
                longtitude: 117.2692,
                doors: [],
                name: "东图AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/东图AED.jpg"],
              },
              {
                latitude: 31.837474,
                longtitude: 117.269244,
                doors: [],
                name: "老图书馆AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/老图书馆AED.jpg"],
              },
              {
                latitude: 31.837975,
                longtitude: 117.270597,
                doors: [],
                name: "二教AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/二教AED.jpg"],
              },
              {
                latitude: 31.839709,
                longtitude: 117.270491,
                doors: [],
                name: "所系结合专家公寓1楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/所系结合专家公寓1楼AED.jpg"],
              },
              {
                latitude: 31.838749,
                longtitude: 117.272238,
                doors: [],
                name: "幼儿园AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/幼儿园AED.jpg"],
              },
              {
                latitude: 31.840817,
                longtitude: 117.27139,
                doors: [],
                name: "五教AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/五教AED.jpg"],
              },
              {
                latitude: 31.841108,
                longtitude: 117.272783,
                doors: [],
                name: "科研楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/科研楼AED.jpg"],
              },
              {
                latitude: 31.841358,
                longtitude: 117.271978,
                doors: [],
                name: "管科楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/管科楼AED.jpg"],
              },
              {
                latitude: 31.841236,
                longtitude: 117.270955,
                doors: [],
                name: "教学行政楼AED",
                other_name: "AED",
                img: ["https://sbsk.gitee.io/image/photo/教学行政楼AED.jpg"],
              },
            ],
          ],
          [//other
            [//other
              {
                latitude: 31.840591,
                longtitude: 117.269520,
                doors: [],
                name: "专家楼",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/中区专家楼.jpg"],
                page_link: "",
              },
              {
                latitude: 31.834935,
                longtitude: 117.268748,
                doors: [],
                name: "东区派出所",
                other_name: "",
                img: [""], // TODO:
                page_link: "https://bwc.ustc.edu.cn/main.htm",
              },
              {
                latitude: 31.837388,
                longtitude: 117.268698,
                doors: [],
                name: "东区心理健康咨询",
                other_name: "",
                img: [""], // TODO:
                page_link: "",
              },
              {
                latitude: 31.837395,
                longtitude: 117.269123,
                doors: [],
                name: "教务处",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/老图书馆.jpg"], // TODO:
                page_link: "https://www.teach.ustc.edu.cn/",
              },
              {
                latitude: 31.836636,
                longtitude: 117.270699,
                doors: [],
                name: "校园卡补办处",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/美广.jpg"], // TODO:
                page_link: "https://passport.ustc.edu.cn/login?service=http%3A%2F%2Fecard.ustc.edu.cn%2Fcaslogin",
              },
              {
                latitude: 31.838482,
                longtitude: 117.268678,
                doors: [],
                name: "东区USTC1958",
                other_name: "ustc1958",
                img: ["https://sbsk.gitee.io/image/photo/东区1958.jpg"],
                page_link: "",
              },
              {
                latitude: 31.838398,
                longtitude: 117.270159,
                doors: [],
                name: "水上报告厅",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/水上报告厅.jpg"],
                page_link: "",
              },
              {
                latitude: 31.834256,
                longtitude: 117.268442,
                doors: [],
                name: "东区大礼堂",
                other_name: "",
                img: ["https://sbsk.gitee.io/image/photo/东区大礼堂.jpg"], // TODO: 车牌号
                page_link: "",
              },
            ],
          ],
        ],
        "data_gaoxin": [
          [//food
            [//canteen
              {
                name: "老食堂"
              }
            ],
            [//fruit

            ],
            [//food_delivery

            ],
          ],
          [//study test
            [//teaching_building

            ],
            [//library

            ],
            [//lab_building

            ],
          ],
          [//convenience
            [//toilet

            ],
            [//delivery

            ],
            [//store

            ],
            [//printing

            ],
          ],
          [//traffic
            [//gate

            ],
            [//bicycle

            ],
            [//bus

            ],
          ],
          [//sports
            [//sports

            ],
          ],
          [//scenery
            [//scenery

            ],
          ],
          [//dormitory
            [//dormitory

            ],
          ],
          [//hospital
            [//hospital

            ],
            [//AED
            ],
          ],
          [//other
            [//other
            ],
          ],
        ],
      }
    ],
    surroundings: [
      [//clothes
        {},
      ],
      [//restaurant
        {
          latitude: 31.838175,
          longtitude: 117.265271,
          name: "淘芳居知味餐厅",
          img: ["https://sbsk.gitee.io/image/photo/60.jpg"],
          intro: "",
        },
        {
          latitude: 31.838163,
          longtitude: 117.265532,
          name: "三孝口面馆",
          img: ["https://sbsk.gitee.io/image/photo/61.jpg"],
          intro: "",
        },
        {
          latitude: 31.838153,
          longtitude: 117.265652,
          name: "湘渝人家",
          img: ["https://sbsk.gitee.io/image/photo/62.jpg"],
          intro: "",
        },
        {
          latitude: 31.837924,
          longtitude: 117.265385,
          name: "老乡鸡",
          img: ["https://sbsk.gitee.io/image/photo/63.jpg"],
          intro: "",
        },
        {
          latitude: 31.838135,
          longtitude: 117.266034,
          name: "肯德基",
          img: ["https://sbsk.gitee.io/image/photo/65.jpg"],
          intro: "",
        },
        {
          latitude: 31.841326,
          longtitude: 117.261223,
          name: "东北王",
          img: ["https://sbsk.gitee.io/image/photo/88.jpg"],
          intro: "",
        },
        {
          latitude: 31.841301,
          longtitude: 117.261819,
          name: "川人川菜馆",
          img: ["https://sbsk.gitee.io/image/photo/87.jpg"],
          intro: "",
        },
        {
          latitude: 31.841511,
          longtitude: 117.267940,
          name: "塔斯汀汉堡",
          img: ["https://sbsk.gitee.io/image/photo/76.jpg"],
          intro: "",
        },
        {
          latitude: 31.840509,
          longtitude: 117.260186,
          name: "无锡汤包",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839014,
          longtitude: 117.260130,
          name: "杨国福麻辣烫",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839034,
          longtitude: 117.260113,
          name: "吉祥馄饨",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839095,
          longtitude: 117.260130,
          name: "老高烧烤",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839156,
          longtitude: 117.260135,
          name: "老地方川菜馆",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839467,
          longtitude: 117.260156,
          name: "么肆烤肉",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839885,
          longtitude: 117.260161,
          name: "毛记冒菜",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839820,
          longtitude: 117.260157,
          name: "尚螺螺狮粉",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.840008,
          longtitude: 117.260150,
          name: "肥叔锅贴",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839982,
          longtitude: 117.260153,
          name: "小高米线",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839911,
          longtitude: 117.260158,
          name: "酷壳花甲",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.840811,
          longtitude: 117.260092,
          name: "尼克斯汉堡",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.840891,
          longtitude: 117.260079,
          name: "马店羊汤馆",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839229,
          longtitude: 117.260133,
          name: "巴蜀人家",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.838880,
          longtitude: 117.260093,
          name: "沙县小吃",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.837881,
          longtitude: 117.265668,
          name: "汉堡王",
          img: ["https://sbsk.gitee.io/image/photo/64.jpg"],
          intro: "",
        },
        {
          latitude: 31.838924,
          longtitude: 117.260102,
          name: "兰州拉面",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//sports
        {},
      ],
      [//fruit
        {
          latitude: 31.840049,
          longtitude: 117.260226,
          name: "鲜丰",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//tea_coffee
        {
          latitude: 31.838942,
          longtitude: 117.267331,
          name: "量子咖啡",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841454,
          longtitude: 117.264528,
          name: "新月光茶馆",
          img: ["https://sbsk.gitee.io/image/photo/80.jpg"],
          intro: "",
        },
        {
          latitude: 31.840163,
          longtitude: 117.260169,
          name: "蜜雪冰城",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839569,
          longtitude: 117.260156,
          name: "来一杯",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839803,
          longtitude: 117.260158,
          name: "c忆",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.840011,
          longtitude: 117.260152,
          name: "沪上阿姨",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.840779,
          longtitude: 117.260111,
          name: "巴莉甜甜",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//store
        {
          latitude: 31.837898,
          longtitude: 117.265643,
          name: "邻几便利店",
          img: ["https://sbsk.gitee.io/image/photo/82.jpg"],
          intro: "",
        },
        {
          latitude: 31.841325,
          longtitude: 117.260763,
          name: "花店",
          img: ["https://sbsk.gitee.io/image/photo/89.jpg"],
          intro: "",
        },
        {
          latitude: 31.841418,
          longtitude: 117.264097,
          name: "邻几便利店",
          img: ["https://sbsk.gitee.io/image/photo/82.jpg"],
          intro: "",
        },
        {
          latitude: 31.839635,
          longtitude: 117.260157,
          name: "百分百超市",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841013,
          longtitude: 117.260091,
          name: "邻几便利店",
          img: ["https://sbsk.gitee.io/image/photo/82.jpg"],
          intro: "",
        },
        {
          latitude: 31.841038,
          longtitude: 117.260077,
          name: "来伊份",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839421,
          longtitude: 117.260219,
          name: "罗森",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839383,
          longtitude: 117.260178,
          name: "桂太太生活超市",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//drug_store
        {
          latitude: 31.841344,
          longtitude: 117.260292,
          name: "德康大药房",
          img: ["https://sbsk.gitee.io/image/photo/92.jpg"],
          intro: "",
        },
        {
          latitude: 31.841410,
          longtitude: 117.264351,
          name: "康德欣大药房",
          img: ["https://sbsk.gitee.io/image/photo/81.jpg"],
          intro: "",
        },
        {
          latitude: 31.840864,
          longtitude: 117.268084,
          name: "合肥大药房",
          img: ["https://sbsk.gitee.io/image/photo/73.jpg"],
          intro: "",
        },
        {
          latitude: 31.843316,
          longtitude: 117.259739,
          name: "百姓缘大药房",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//haircut
        {
          latitude: 31.840903,
          longtitude: 117.260077,
          name: "指标发型会所",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//bank
        {
          latitude: 31.841437,
          longtitude: 117.263636,
          name: "兴业银行",
          img: ["https://sbsk.gitee.io/image/photo/84.jpg"],
          intro: "",
        },
      ],
      [//mobile_store
        {
          latitude: 31.841361,
          longtitude: 117.260416,
          name: "中国联通",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841335,
          longtitude: 117.266059,
          name: "中国移动",
          img: ["https://sbsk.gitee.io/image/photo/79.jpg"],
          intro: "",
        },
        {
          latitude: 31.841357,
          longtitude: 117.266528,
          name: "华为手机店",
          img: ["https://sbsk.gitee.io/image/photo/72.jpg"],
          intro: "",
        },
        {
          latitude: 31.841467,
          longtitude: 117.267330,
          name: "兴亚电脑",
          img: ["https://sbsk.gitee.io/image/photo/77.jpg"],
          intro: "",
        },
        {
          latitude: 31.841536,
          longtitude: 117.268190,
          name: "联想电脑店",
          img: ["https://sbsk.gitee.io/image/photo/75.jpg"],
          intro: "",
        },
        {
          latitude: 31.840811,
          longtitude: 117.268036,
          name: "华为手机店",
          img: ["https://sbsk.gitee.io/image/photo/72.jpg"],
          intro: "",
        },
      ],
      [//delivery
        {
          latitude: 31.839368,
          longtitude: 117.260221,
          name: "菜鸟驿站",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//hotel
        {
          latitude: 31.834208,
          longtitude: 117.264648,
          name: "贝壳酒店",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841391,
          longtitude: 117.263255,
          name: "维多利亚酒店",
          img: ["https://sbsk.gitee.io/image/photo/85.jpg"],
          intro: "",
        },
        {
          latitude: 31.839846,
          longtitude: 117.267306,
          name: "锦江之星",
          img: ["https://sbsk.gitee.io/image/photo/70.jpg"],
          intro: "",
        },
        {
          latitude: 31.841326,
          longtitude: 117.261000,
          name: "7+1商务酒店",
          img: ["https://sbsk.gitee.io/image/photo/90.jpg"],
          intro: "",
        },
        {
          latitude: 31.838977,
          longtitude: 117.260114,
          name: "百富缘宾馆",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.833538,
          longtitude: 117.264556,
          name: "一路同行精选酒店",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//bicycle
        {},
      ],
      [//shared_ebike
        {
          latitude: 31.841624,
          longtitude: 117.256669,
          name: "还车点",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841336,
          longtitude: 117.256569,
          name: "还车点",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841275,
          longtitude: 117.259667,
          name: "还车点",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841190,
          longtitude: 117.260081,
          name: "还车点",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.840497,
          longtitude: 117.267763,
          name: "还车点",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841606,
          longtitude: 117.256815,
          name: "还车点",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.837182,
          longtitude: 117.265661,
          name: "还车点",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//traffic(including subway,bus,gaotie,airport)
        {
          latitude: 31.833581,
          longtitude: 117.265124,
          name: "机研所公交站",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841474,
          longtitude: 117.261663,
          name: "稻香村公交站",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841638,
          longtitude: 117.273107,
          name: "地铁站-中国科大东区",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.854538,
          longtitude: 117.255585,
          name: "地铁站-三里庵",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841389,
          longtitude: 117.250157,
          name: "公交站",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839380,
          longtitude: 117.251619,
          name: "公交站",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.841299,
          longtitude: 117.253029,
          name: "公交站",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.798961,
          longtitude: 117.290199,
          name: "高铁站-合肥南站",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.886239,
          longtitude: 117.317274,
          name: "高铁站-合肥站",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.985274,
          longtitude: 116.977942,
          name: "合肥新桥国际机场",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//hospital
        {
          latitude: 31.841494,
          longtitude: 117.268400,
          name: "合肥长淮中医医院",
          img: ["https://sbsk.gitee.io/image/photo/74.jpg"],
          intro: "",
        },
        {
          latitude: 31.844043,
          longtitude: 117.260109,
          name: "安徽省胸科医院",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.839764,
          longtitude: 117.260165,
          name: "合肥蜀山黄山路门诊部",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.850269,
          longtitude: 117.265669,
          name: "安徽医科大学附属口腔医院",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.850205,
          longtitude: 117.265933,
          name: "安医大第一附属医院",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.852529,
          longtitude: 117.258978,
          name: "安徽省中医院",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//mall
        {
          latitude: 31.853287,
          longtitude: 117.256390,
          name: "国购广场",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.853872,
          longtitude: 117.257412,
          name: "之心城",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//scenery
        {},
      ],
      [//cinema
        {},
      ],
      [//glasses
        {
          latitude: 31.840554,
          longtitude: 117.267639,
          name: "吴良材眼镜",
          img: ["https://sbsk.gitee.io/image/photo/71.jpg"],
          intro: "",
        },
        {
          latitude: 31.842137,
          longtitude: 117.259722,
          name: "精功眼镜",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.840405,
          longtitude: 117.260085,
          name: "吴良材眼镜",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.832619,
          longtitude: 117.266606,
          name: "中科眼镜",
          img: [""],// TODO:
          intro: "",
        },
      ],
      [//other
        {
          latitude: 31.841309,
          longtitude: 117.262544,
          name: "新大洲电动车",
          img: [""],// TODO:
          intro: "",
        },
        {
          latitude: 31.837050,
          longtitude: 117.264038,
          name: "知行书店",
          img: [""],// TODO:
          intro: "",
        },
      ],
    ]
  },
  onLaunch: function () {
    var that = this;
    wx.cloud.init({
      env: 'cloud1-4g5vv45i69fe6223',
    })

    wx.cloud.callFunction({
      name: 'getUserOpenid',
      success(res) {
        that.globalData.openid = res.result.openid
      }
    })
  },
})