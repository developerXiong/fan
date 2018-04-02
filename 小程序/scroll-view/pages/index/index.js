Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrolltop:0,
    intoview:null
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

  scrollToUp:function(event){
    console.log(event)
    //一般会在这里刷新或加载新数据
  },

  scrollToLower:function(event){
    console.log(event)
    //一般会在这里加载更多
  },


  scroll:function(event){
    // console.log(event)
  },


  click:function(){
    // this.setData({scrolltop:this.data.scrolltop + 10})
    this.setData({ intoview: 'yellow' })
  }

})