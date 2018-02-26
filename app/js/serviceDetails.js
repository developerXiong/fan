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
})