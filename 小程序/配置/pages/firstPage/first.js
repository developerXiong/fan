Page({
  data: {
      text:"这是内容",
      btnText:"这是按钮的内容",
      show:true,
      news: ['a', 'b', 'c']
  },
  btnClick:function(){
    console.log("按钮被点击了")
    var isShow = this.data.show;
    console.log(isShow)
    var newsdata = this.data.news;
    newsdata.shift()
    this.setData({ text: "这是一个新内容", show: !isShow,news:newsdata})
  }
})