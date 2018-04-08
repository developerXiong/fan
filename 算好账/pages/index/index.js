Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollLeft:0,
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
    selectMonth:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.setData({
      scrollLeft: this.data.scrollLeft - 130
      
    })
    if (this.scrollLeft <= 0) {
      this.setData({
        scrollLeft:0

      })
    }
  },
  next: function () {
    //点击月份右侧按钮
    this.setData({
      scrollLeft: this.data.scrollLeft + 120
    })
    if (this.scrollLeft >= 1600) {
      this.setData({
        scrollLeft: 1600

      })
    }
  },
  scroll:function(e){ 
    //手动滚动月份时取数值
    this.setData({
      scrollLeft:e.detail.scrollLeft
    })
  },
  selectMonth:function(e){
    //选中月份时
    //切换样式
    var id=e.currentTarget.id
    
    try {
      var value = wx.getStorageSync('lastMonth')
      if (value) {
        console.log(value+id)
        if(value === id){
          var month = 'month[' + id + '].isSelect'
          this.setData({
            [month]: true
          })
        }else{
          var month = 'month[' + value + '].isSelect'
          this.setData({
            [month]: false
          })
        }
      }
    } catch (e) {
    }
    wx.setStorageSync('lastMonth', id)
    


    var month = 'month[' + id + '].isSelect'
    this.setData({
      [month]: true
    })

    
    
    
    this.setData({
      //得到月份id 跳转时传参
      selectMonth: e.target.id
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
      url: '../process/process?monthId=' + this.selectMonth,
    })
  }


})