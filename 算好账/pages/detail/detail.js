Page({
  data: {
    scrollLeft: 0,
    month: [
      {
        id: 0,
        words: '1月',
        isSelect: false
      },
      {
        id: 1,
        words: '2月',
        isSelect: false
      },
      {
        id: 2,
        words: '3月',
        isSelect: false
      },
      {
        id: 3,
        words: '4月',
        isSelect: false
      },
      {
        id: 4,
        words: '5月',
        isSelect: false
      },
      {
        id: 5,
        words: '6月',
        isSelect: false
      },
      {
        id: 6,
        words: '7月',
        isSelect: false
      },
      {
        id: 7,
        words: '8月',
        isSelect: false
      },
      {
        id: 8,
        words: '9月',
        isSelect: false
      },
      {
        id: 9,
        words: '10月',
        isSelect: false
      },
      {
        id: 10,
        words: '11月',
        isSelect: false
      },
      {
        id: 11,
        words: '12月',
        isSelect: false
      }
    ],
    monthId: null,
    statusCode:0,


    //现金流利润表
    title:'现金流', 
    details_title:'现金流明细',
    wordsTop:'本月累计（元）',
    wordsLeft: '期初',
    wordsRight: '期末',
    numTop:'345.50',
    numLeft:'132,000.00',
    numRight: '64,000.00',
    list:[
     
      {
        listLeft:'库存现金',
        important:true,
        isPluse: true,
        listNum: '3.50',
        listRightTopWords:'期初',
        listRightBotWords: '期末',
        listRightTopNum: '1231,121.50',
        listRightBotNum: '1231,121.50'
      },
      {
        listLeft: '库存现金',
        important: false,
        isPluse: true,
        listNum: '3.50',
        listRightTopWords: '期初',
        listRightBotWords: '期末',
        listRightTopNum: '1231,121.50',
        listRightBotNum: '1231,121.50'
      },
      {
        listLeft: '库存现金',
        important: false,
        isPluse: true,
        listNum: '3.50',
        listRightTopWords: '期初',
        listRightBotWords: '期末',
        listRightTopNum: '1231,121.50',
        listRightBotNum: '1231,121.50'
      },
      {
        listLeft: '库存现金',
        important: false,
        isPluse: true,
        listNum: '3.50',
        listRightTopWords: '期初',
        listRightBotWords: '期末',
        listRightTopNum: '1231,121.50',
        listRightBotNum: '1231,121.50'
      },
      {
        listLeft: '库存现金',
        important: false,
        isPluse: true,
        listNum: '3.50',
        listRightTopWords: '期初',
        listRightBotWords: '期末',
        listRightTopNum: '1231,121.50',
        listRightBotNum: '1231,121.50'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var code = options.statusCode
    //code代表不同详情页，通过判断code来隐藏掉某些部分
    // 0代表纳税表 1代表现金流和利润表 3代表 应收应付和负债
    var monthId = options.monthId
    
    console.log(monthId)

    this.setData({
      statusCode:code,
      monthId: monthId,
      scrollLeft: (monthId) * 55
    })

    var month = 'month[' + this.data.monthId + '].isSelect'
    this.setData({
      [month]: true
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },


  prev:function () {
    //点击月份左侧按钮

    if (this.data.scrollLeft > 0) {
      this.setData({
        scrollLeft: this.data.scrollLeft - 120
      })
    }

  },
  next: function () {
    //点击月份右侧按钮
    if ((this.data.scrollLeft + 120) < 778) {
      this.setData({
        scrollLeft: this.data.scrollLeft + 120
      })
    } else {
      this.setData({
        scrollLeft: 778
      })
    }
  },

  scroll: function (e) {
    //手动滚动月份时取数值
    this.setData({

      scrollLeft: e.detail.scrollLeft
    })
  },
  selectMonth: function (e) {
    //选中月份时
    //切换样式
  
    for (var i = 0; i < this.data.month.length; i++) {
      var month = 'month[' + i + '].isSelect'
      this.setData({
        [month]: false
      })
    }
    var id = e.currentTarget.id



    var month = 'month[' + id + '].isSelect'
    this.setData({
      [month]: true
    })




    this.setData({
      //得到月份id 切换时传参
      monthId: e.target.id
    })
    console.log(this.data.monthId)

    //请求数据
    // wx.request({
    //   url: '',
    // })


  },


  goBack: function () {

    // wx.navigateTo({
    //   url: '../index/index'
    // })
    wx.navigateBack({
      delta: 1
    })
  }
})