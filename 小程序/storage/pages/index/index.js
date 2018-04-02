//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {

    


    //删除存储
    wx.removeStorage({
      key: 'testKey',
      success: function(res) {
        console.log(2)
      },
      fail:function(res){
        console.log(3)
      }
    })


    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    //存储 异步存储，存储成功与否不影响下面代码的运行
    //如果后面要用到此时存储的数据，最好用同步存储
    wx.setStorage({
      key:"testKey",
      data:"testValue",
      success(res){
        console.log(res)
      },
      fail(res){
        console.log(res)
      },
      complete(res){

      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
