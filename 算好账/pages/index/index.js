Page({


  /**
   * 页面的初始数据
   */
  data: {
    scrollLeft:0,
    sideShow:false,
    month:[
      {
        id:0,
        words:'1月',
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
    message:{
      orderNum:1,//左侧侧边栏的订单数量
      profit:'32345.50',//本月利润
      income:'1300000',//收入
      pay:'1300000',//支出
      monthId:'6',//默认选中的月份
      list:[
        //此处code用来控制下一级详情页的样式，因为6个页面并非同一模板，对应的code不要改
        {
          words:'纳税表',
          key:'nashui',
          code:0,
          num:'1.4k'
        },
        {
          words: '现金流',
          key: 'xianjin',
          code: 1,
          num: '1.4k'
        },
        {
          words: '利润表',
          key: 'lirun',
          code: 1,
          num: '1.4k'
        },
        {
          words: '应收账款',
          key: 'yingshou',
          code: 2,
          num: '1.4k'
        },
        {
          words: '应付账款',
          key: 'yingfu',
          code: 2,
          num: '1.4k'
        },
        {
          words: '资产负债表',
          key: 'fuzhai',
          code: 2,
          num: '1.4k'
        }
      ]
    },
    monthId:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      monthId: this.data.message.monthId,
      scrollLeft: (this.data.message.monthId)*55,
      
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


  prev:function(){
    //点击月份左侧按钮

    if (this.data.scrollLeft > 0) {
      this.setData({
        scrollLeft: this.data.scrollLeft - 120
      })
    }

  },
  next: function () {
    //点击月份右侧按钮
    console.log(this.data.scrollLeft)
    if ((this.data.scrollLeft+120) <778) {
      this.setData({
        scrollLeft: this.data.scrollLeft + 120
      })
    }else{
      this.setData({
        scrollLeft: 778
      })
    }
  },
  scroll:function(e){ 
    //手动滚动月份时取数值
    // console.log(e.detail.scrollWidth)
    this.setData({
      scrollLeft:e.detail.scrollLeft
    })
  },
  selectMonth:function(e){
    //选中月份时
    //切换样式

    for( var i = 0 ; i<this.data.month.length ; i++){
      var month = 'month[' + i + '].isSelect'
      this.setData({
        [month]: false
      })
    }
    var id=e.currentTarget.id
    


    var month = 'month[' + id + '].isSelect'
    this.setData({
      [month]: true
    })

    
    
    
    this.setData({
      //得到月份id 跳转时传参
      monthId: e.target.id
    })

    //请求数据
    // wx.request({
    //   url: '',
    // })
    
    
  },


  format:function(num){
    //格式化数字的正则
    var num = (num || 0).toString(), temp = num.length % 3;
    switch (temp) {
      case 1:
        num = '00' + num;
        break;
      case 2:
        num = '0' + num;
        break;
    }
    return num.match(/\d{3}/g).join(',').replace(/^0+/, '');
  },


  goPrograss:function(){
    //点击订单进程

    wx.navigateTo({
      url: '../process/process?monthId=' + this.data.monthId
    })
  },

  goMy:function(){
    //点击打开我的按钮
    this.setData({
      sideShow:true
    })
  },

  backIndex:function(){
    this.setData({
      sideShow: false
    })
  },


  goOrder:function(){
    var orderNum = 'meesage.orderNum'
    this.setData({
      [orderNum]: 0
    })

    wx.navigateTo({
      url: '../order/order'
    })
  },
  
  
  
  goContact: function () {
    wx.navigateTo({
      url: '../contact/contact'
    })
  }


})