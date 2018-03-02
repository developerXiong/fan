$(function () {
    // console.log(sessionStorage.getItem("id"))
    var details =
        {
            areaId:'',
            userId:'1',
            url:'http://www.baidu.com',
            share_num:447,
            comment_num:447,
            comment_url:'../html/comment.html',
            praise_num:447,
            praise:true,
            title:'中华麋鹿保护区',
            imgSrc:'../img/Bitmap.png',
            info:'中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。',
            comment_list:[
                {
                    head:"../img/ic_zhifubao@2x.png",
                    userName:"啊哈哈",
                    comment_content:'陈翔六点半，啊哈哈哈哈哈哈哈哈，这是ISIhi是i1陈翔六点半，啊陈翔六点半，啊哈哈哈哈哈哈哈哈，这是ISIhi是i1陈翔六点半，啊陈翔六点半，啊哈哈哈哈哈哈哈哈，这是ISIhi是i1陈翔六点半，啊陈翔六点半，啊哈哈哈哈哈哈哈哈，这是ISIhi是i1陈翔六点半，啊'
                },
                {
                    head:"../img/bg@2x.png",
                    userName:"啊哈哈",
                    comment_content:'陈翔111111111六点半，啊哈哈哈哈哈哈哈哈，这是ISIhi是i1陈翔六点半，啊'
                }
                ,
                {
                    head:"../img/ic_zhifubao@2x.png",
                    userName:"啊哈哈",
                    comment_content:'陈翔六点半，啊哈哈哈哈哈哈哈哈，这是ISIhi是i1陈翔六点半，啊'
                }
            ]
        }






    let vm = new Vue({
        el:'#board',
        data:{
            details:details
        },
        methods:{
            praise(){
                let _that=this.details
                if(_that.userId !== ''){
                    if(_that.praise){
                        _that.praise_num = parseInt(_that.praise_num)-1
                    }else {
                        _that.praise_num = parseInt(_that.praise_num)+1
                    }
                    _that.praise = !_that.praise

                    $.ajax({
                        type:'POST',
                        url:'xxxxxx',
                        data:{
                            areaId:_that.areaId,
                            userId:_that.userId,
                            praise_num:_that.praise_num,
                            praise:_that.praise,
                        },
                        dataType:'json',
                        contentType:'application/json',
                        success:function (res) {
                            details=res.data
                        }
                    })
                }else {
                    alert('提示登录')
                }

            }
        },
        computed:{

        }
    })
})