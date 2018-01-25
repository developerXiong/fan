$(function () {

    //点击左侧，右侧滑动
    $(".tab_li").click(function () {
        $(this).addClass('tab_li_active').siblings().removeClass('tab_li_active')
    });

    var cart_num = $(".cart_num").html();
    //判断购物车数量
    function cart_n() {
        if (cart_num<=0){
            $(".cart_num").hide()
        }else {
            $(".cart_num").show()
        }
    }
    cart_n()
    //商品右侧添加点击
    $(".a_c_li_add").click(function () {
        // alert(1)
        cart_num++;
        $(".cart_num").html(cart_num)
        cart_n()
    })

    //判断购物车大于0时点击购物车，显示已选商品
    $(".cart").click(function () {
        if(cart_num>0){
            $(".selected").toggleClass("selected_hide")
            $(".sele_num").html(cart_num)
        }
    })

    //点击已选商品界面加减号
    //判断已选商品界面数量，改变加减号状态

    $(".minus").click(function () {
        var every_num = $(this).siblings('.every_num').html();
        every_num--;
        $(this).css('color','yellow')
        if (every_num<=0){
            $(this).addClass("disable")
            every_num = 0
        }else {
            $(this).removeClass("disable")
        }
        $(this).siblings('.every_num').html(every_num)
    })
    $(".plus").click(function () {
        var every_num = $(this).siblings('.every_num').html();
        every_num++;
        if (every_num>0){
            $(this).removeClass("disable")
            $(this).siblings('.minus').removeClass("disable")
        }
        $(this).siblings('.every_num').html(every_num)
    })


    //点击去结算
    $(".settlement").click(function () {
        if(cart_num<=0){
            $(".tishi").removeClass('tishi_hide');
            setTimeout(function () {
                $(".tishi").addClass('tishi_hide');
            },1500)
        }else {
            $(this).attr('href','pay.html')
        }
    })



})