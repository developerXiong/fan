$(function () {

    // var details=[];
    // $.ajax({
    //     type:'GET',
    //     url:'xxxxxx',
    //     dataType:'json',
    //     contentType:'application/json',
    //     success:function (res) {
    //         details=res.data
    //     }
    // })

    var details = [
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
        info:'中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。'
    },
        {
            areaId:'',
            userId:'',
            url:'http://www.baidu.com',
            share_num:447,
            comment_num:447,
            praise_num:447,
            praise:false,
            title:'中华麋鹿保护区',
            imgSrc:'../img/Bitmap.png',
            info:'中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。'
        },
        {
            areaId:'',
            userId:'',
            url:'http://www.baidu.com',
            share_num:447,
            comment_num:447,
            praise_num:447,
            praise:false,
            title:'中华麋鹿保护区',
            imgSrc:'../img/Bitmap.png',
            info:'中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。中华麋鹿保护区，是中国唯一一个保护区，是国家5A级旅游景区。'
        }
    ]


    let vm = new Vue({
        el:'#strategy',
        data:{
            details:details
        },
        methods:{
            praise(index){
                let _that=this.details[index]
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

            },
            goComment(index){
                console.log(this.details[index].userId)
                if(this.details[index].userId !== ''){
                    sessionStorage.setItem("id","1")
                    console.log(sessionStorage.getItem("id"))
                    window.location.href=this.details[index].comment_url
                }else if(this.details[index].userId === ''){
                    alert('提示登录')
                }

            }
        },
        computed:{

        }
    })

})