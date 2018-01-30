$(function () {
    $(".service_li").click(function () {
        // id = $(this).id
        id = 7

        goServiceDetails(id)
    })
    function goServiceDetails(id) {
        // alert(id)
        // url = "b.html?name="+name+"&age="+age;//此处拼接内容
        url = "serviceDetails.html?id="+id;
        window.location.href = url
    }
})