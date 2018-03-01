$(function () {
    $(".back").click(function () {
        window.history.go(-1)
    })
    function getQueryString(name) {

        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

        var r = window.location.search.substr(1).match(reg);

        if (r != null){
            return unescape(r[2]);
        }else {
            return null;
        }
    }
    var id = getQueryString('id');
    // var name = getQueryString('name');
    console.log(id)
    // console.log(name)

    // var details={};
    //
    // $.ajax({
    //     type:'get',
    //     url:'xxxxxx'+id,
    //     dataType:'json',
    //     contentType:'application/json',
    //     success:function (res) {
    //         details=res.data
    //     }
    // })

    var details = {
        id:id,
        name:'郭村服务区',
        imgSrc:'../img/p3.jpg',
        phone:12345,
        stake:'K690+000',
        section:'G2京沪高速公路临沂段',
        flow:'4000',
        service_details:'郭村镇位于扬州市江都区的东郊，与地级市泰州接壤。南与浦头\n' +
        '镇相连，西与宜陵镇、吴桥镇毗邻、北与小纪镇交界，328国道，\n' +
        '新、老通扬运河，宁启铁路横贯全镇东西，是扬州市、江都区的\n' +
        '东大门。\n' +
        '郭村是革命老区，系江都革命的发祥地，新四军渡江北上抗日，\n' +
        '在此成立指挥部，誓师东进黄桥，著名的郭村保卫战在这里响。\n' +
        '1940年7月，苏中第一个县级抗日民主政权——江都县人民政府在此成立。党和国家领导人陈毅、粟裕、谭震林、叶飞、陈丕显、彭冲、姬鹏飞等均在此留下战斗足迹。境内于氏姐妹楼，是我军东进抗日和大军渡江时的领导、指挥机关驻地；郭村保卫战纪念馆是红色旅游胜地。\n' +
        '全镇区域总面积104.6平方公里，人口8.7万人，辖23个行政村，\n' +
        '3个居委会。现全镇有以机械、工具、化工、猪鬃、鞋服、电子为\n'
    }



    let vm = new Vue({
        el:'#details',
        data:{
            details:details
        }
    })



})