Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    chineseScore:'',
    mathScore: '',
    avg:'',
    flag:true
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


  input1:function(e){
    var input = e.detail.value;
    this.setData({
      name:input
    })
  },

  input2: function (e) {
    var input = e.detail.value;
    if(!isNaN(input)){
      this.setData({
        chineseScore: input
      })
    }
    
  },

  input3: function (e) {
    var input = e.detail.value;
    if (!isNaN(input)) {
      this.setData({
        mathScore: input
      })
    }
    
  },
  test:function(){
    if(this.data.name==''||this.data.chineseScore==''||this.data.mathScore==''){
      return;
    }else{
      var result = (this.data.chineseScore*1+this.data.mathScore*1)/2
      this.setData({
        avg:result,
        flag:false
      })
    }
  }

})