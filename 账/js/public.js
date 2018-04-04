$(function () {
    //移动端点击右侧按钮
    $(".header_btn").click(function () {
        $(".menu_hide").toggleClass("menu_hide_show")
        $(".open").toggleClass("header_btn_show")
        $(".close").toggleClass("header_btn_show")
    })
    //鼠标移入导航栏效果
    var menu_index=$(".menu li").index($(".menu_select"));
    $(".menu li").each(function () {
        $(this).mouseover(function () {
            $(this).addClass("active")
        }).mouseout(function () {
            $(this).removeClass("active")
        })
    })
    $(".menu li").eq(menu_index).mouseover(function () {
        console.log(1)
        $(this).addClass("active")
    }).mouseout(function () {
        $(this).addClass("active")
    })

    $(".menu_hide li").each(function () {
        $(this).click(function () {
            $(this).addClass("active")
        })
    })

    //选择选项效果
    $(".option_item").click(function () {
        $(this).addClass("option_item_active").siblings().removeClass("option_item_active")
    })

    //点击去顶部
    $(".goTop").click(function () {
        $("html,body").animate({             //$('html,body')兼容问题
            scrollTop: 0
        },500)
    })

})
