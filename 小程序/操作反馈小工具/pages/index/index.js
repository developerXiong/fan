Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionSheetHidden:true,
    modal1Hidden:true,
    modal2Hidden: true,
    toast1Hidden:true,
    loadingHidden:true
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


  click:function(){
    this.setData({ actionSheetHidden:false})
  },


  actionSheetChange:function(){
    //点击取消以及actionsheet其他部位 触发本事件
    this.setData({ actionSheetHidden: true })
  },

  itemClick:function(event){
    console.log(event)
  },


  click1:function(){
    this.setData({modal1Hidden: false })
  },


  modal1Confirm:function(){
    this.setData({ modal1Hidden: true })
    console.log("modal1Confirm")
  },

  modal1Concel: function () {
    this.setData({ modal1Hidden: true })
    console.log("modal1Concel")
  }
,


  click2: function () {
    this.setData({ modal2Hidden: false })
  },


  modal2Confirm: function () {
    this.setData({ modal2Hidden: true })
    console.log("modal2Confirm")
  },

  modal2Concel: function () {
    this.setData({ modal2Hidden: true })
    console.log("modal2Concel")
  },

  click3:function(){
    this.setData({ toast1Hidden: false })
  },

  toast1Change:function(){
    //相当于设置的时间之后触发本方法
    this.setData({ toast1Hidden: true })
  },



  click4: function () {
    this.setData({ loadingHidden: false })
    var that=this
    //当处理完业务逻辑后，手动更改是否隐藏
    setTimeout(function(){
      that.setData({ loadingHidden: true })
    },1500)
  }
})