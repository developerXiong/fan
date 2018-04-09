Page({

  /**
   * 页面的初始数据
   */
  data: {
    // progressDot:[
    //   progressDotClass:''
    // ]
    status:[],//本地
    message:[
      {
        listName:'公司注册',
        isOpen:false,
        code:1,
        words:['开始','准备材料','审核','领取营业材料','完成'],
        list:[
          {
            list_words:'会计记账',
            list_time_left:'AM',
            list_time:'10:50'
          },
          {
            list_words: '会计记账',
            list_time_left: 'AM',
            list_time: '10:50'
          }
        ]
      },
      {
        listName: '记账报税',
        isOpen: true,
        code: 4,
        words: ['开始', '收票', '记账', '报账', '完成'],
        list: [
          {
            list_words: '会计记账',
            list_time_left: 'AM',
            list_time: '10:50'
          },
          {
            list_words: '会计记账',
            list_time_left: 'AM',
            list_time: '10:50'
          },
          {
            list_words: '会计记账',
            list_time_left: 'AM',
            list_time: '10:50'
          }
        ]
      },
      {
        listName: '公司变更',
        isOpen: false,
        code: 3,
        words: ['开始', '准备材料', '审核', '变更', '完成'],
        list: [
          {
            list_words: '会计记账',
            list_time_left: 'AM',
            list_time: '10:50'
          },
          {
            list_words: '会计记账',
            list_time_left: 'AM',
            list_time: '10:50'
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.monthId)
    // let total = 30,step=6
    // let mess = this.data.message
    // // for( var i=0;i<mess.length;i++){
    //   let code=mess[0].code;
    //   var len = (code+1)*step
    //   for(var z=0;z<total;z++){
    //     var sss = []
    //     if(z<len){
    //       sss.push('prog_dot_show')
    //     }else{
    //       sss.push('prog_dot_default')
    //     }
    //     this.setData({
    //       status: sss
    //     });
    //   }
    // // }
    // console.log(this.data.status)

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

  goBack:function(){
    // wx.navigateTo({
    //   url: '../index/index'
    // })
    wx.navigateBack({
      delta: 1
    })
  },


  openList:function(e){
    //点击打开或者关闭

    var index = e.currentTarget.dataset.index
    var open = 'message[' + index +'].isOpen'
    console.log(index)
    if (this.data.message[index].isOpen){
      this.setData({
        [open] : false
      })
    }else{
      this.setData({
        [open]: true
      })
    }
    
    

  }

})