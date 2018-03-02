// $(function () {
//     img_width()
    var strategy = {
        title: "水运风情逍遥游",
        imgUrl: [
                '../img/Group%202.png',
                '../img/kefu.png',
                '../img/Group%202.png',
                '../img/Group%202.png',
                '../img/Group%202.png'
        ],
        trip_list: [
            {
            "time": "D1",
            "time2":'第一天',
            "content": "东水关—白鹭洲公园—桃叶渡—泮池—中华门—大报恩寺",
            "viewspot_list": [
                    {
                    "name": "东水关",
                    "imgurl": "../img/guide_1.png",
                    "reason": "秦淮河风景区地处南京城南，秦淮河东起东水关淮清桥秦淮水亭，越过文德桥，直到中华门城堡延伸直西水关的内秦淮河地带。一千八百年以来，这里始终是南京最繁华的地方之一，美称\"十里珠帘\"。风景区以夫子庙为中心，具有明清风格、是庙市街景合一的文化、旅游、商业、服务等多功旅游胜地。"
                    },
                    {
                    "name": "桃叶渡",
                    "imgurl": "../img/guide_1.png",
                    "reason": "秦淮河风景区地处南京城南，秦淮河东起东水关淮清桥秦淮水亭，越过文德桥，直到中华门城堡延伸直西水关的内秦淮河地带。一千八百年以来，这里始终是南京最繁华的地方之一，美称\"十里珠帘\"。风景区以夫子庙为中心，具有明清风格、是庙市街景合一的文化、旅游、商业、服务等多功旅游胜地。"
                    }
                ]
            },
            {
            "time": "D2",
            "time2":'第二天',
            "content": "船板巷—西水关—集庆门—雨花门—东水关",
            "viewspot_list": [
                {
                    "name": "船板巷",
                    "imgurl": "../img/guide_1.png",
                    "reason": "秦淮河风景区地处南京城南，秦淮河东起东水关淮清桥秦淮水亭，越过文德桥，直到中华门城堡延伸直西水关的内秦淮河地带。一千八百年以来，这里始终是南京最繁华的地方之一，美称\"十里珠帘\"。风景区以夫子庙为中心，具有明清风格、是庙市街景合一的文化、旅游、商业、服务等多功旅游胜地。"
                },
                {
                    "name": "西水关",
                    "imgurl": "../img/guide_1.png",
                    "reason": "秦淮河风景区地处南京城南，秦淮河东起东水关淮清桥秦淮水亭，越过文德桥，直到中华门城堡延伸直西水关的内秦淮河地带。一千八百年以来，这里始终是南京最繁华的地方之一，美称\"十里珠帘\"。风景区以夫子庙为中心，具有明清风格、是庙市街景合一的文化、旅游、商业、服务等多功旅游胜地。"
                }
                ]
            }
        ]
    }

    function img_width() {
    // console.log(strategy)
        var num=strategy.imgUrl.length;
//            console.log(num)
        var width=num*18-0.83;
        $(".banner_ul").width
        (width+"rem")
    }



    let vm = new Vue({
        el:'#cont',
        data:{
            strategy:strategy
        },
        methods:{

        }
    })
// })
