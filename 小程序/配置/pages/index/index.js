//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("--index page onLoad--")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("--index page onReady--")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("--index page onShow--")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("--index page onHide--")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("--index page onUnload--")
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
  itemClick1 : function (){
    wx.navigateTo({
      url: '../details/details?id=1',
    })
  },
  itemClick2 : function (){
    wx.redirectTo({
      url: '../details/details',
    })
  },
  itemClick3: function(){
    wx.switchTab({
      url: '../logs/logs',
    })
  }
})
