//弹窗
// $(function() {
//     $("#goodcover1").hide();
//     $("#code1").hide();
//     //alert($(window).height());
//     $('#ClickMe1').click(function() {
//         $('#code1').center();
//         $('#goodcover1').show();
//         $('#code1').fadeIn();
//     });
//     $('#closebt1').click(function() {
//         $('#code1').hide();
//         $('#goodcover1').hide();
//     });
//     $('#goodcover1').click(function() {
//         $('#code1').hide();
//         $('#goodcover1').hide();
//     });
//     /*var val=$(window).height();
//     var codeheight=$("#code").height();
//     var topheight=(val-codeheight)/2;
//     $('#code').css('top',topheight);*/
//     jQuery.fn.center = function(loaded) {
//         var obj = this;
//         body_width = parseInt($(window).width());
//         body_height = parseInt($(window).height());
//         block_width = parseInt(obj.width());
//         block_height = parseInt(obj.height());
//
//         left_position = parseInt((body_width / 2) - (block_width / 2) + $(window).scrollLeft());
//         if (body_width < block_width) {
//             left_position = 0 + $(window).scrollLeft();
//         };
//
//         top_position = parseInt((body_height / 2) - (block_height / 2) + $(window).scrollTop());
//         if (body_height < block_height) {
//             top_position = 0 + $(window).scrollTop();
//         };
//
//         if (!loaded) {
//
//             obj.css({
//                 'position': 'absolute'
//             });
//             obj.css({
//                 'top': ($(window).height() - $('#code').height()) * 0.5,
//                 'left': left_position
//             });
//             $(window).bind('resize', function() {
//                 obj.center(!loaded);
//             });
//             $(window).bind('scroll', function() {
//                 obj.center(!loaded);
//             });
//
//         } else {
//             obj.stop();
//             obj.css({
//                 'position': 'absolute'
//             });
//             obj.animate({
//                 'top': top_position
//             }, 200, 'linear');
//         }
//     }
//
// })
// $(function() {
//     $("#goodcover2").hide();
//     $("#code2").hide();
//     //alert($(window).height());
//     $('#ClickMe2').click(function() {
//         $('#code2').center();
//         $('#goodcover2').show();
//         $('#code2').fadeIn();
//     });
//     $('#closebt2').click(function() {
//         $('#code2').hide();
//         $('#goodcover2').hide();
//     });
//     $('#goodcover2').click(function() {
//         $('#code2').hide();
//         $('#goodcover2').hide();
//     });
//     /*var val=$(window).height();
//     var codeheight=$("#code").height();
//     var topheight=(val-codeheight)/2;
//     $('#code').css('top',topheight);*/
//     jQuery.fn.center = function(loaded) {
//         var obj = this;
//         body_width = parseInt($(window).width());
//         body_height = parseInt($(window).height());
//         block_width = parseInt(obj.width());
//         block_height = parseInt(obj.height());
//
//         left_position = parseInt((body_width / 2) - (block_width / 2) + $(window).scrollLeft());
//         if (body_width < block_width) {
//             left_position = 0 + $(window).scrollLeft();
//         };
//
//         top_position = parseInt((body_height / 2) - (block_height / 2) + $(window).scrollTop());
//         if (body_height < block_height) {
//             top_position = 0 + $(window).scrollTop();
//         };
//
//         if (!loaded) {
//
//             obj.css({
//                 'position': 'absolute'
//             });
//             obj.css({
//                 'top': ($(window).height() - $('#code').height()) * 0.5,
//                 'left': left_position
//             });
//             $(window).bind('resize', function() {
//                 obj.center(!loaded);
//             });
//             $(window).bind('scroll', function() {
//                 obj.center(!loaded);
//             });
//
//         } else {
//             obj.stop();
//             obj.css({
//                 'position': 'absolute'
//             });
//             obj.animate({
//                 'top': top_position
//             }, 200, 'linear');
//         }
//     }
//
// })


$(function () {
    $("#goodcover1").hide();
    $("#code1").hide();
    $("#ClickMe1").click(function () {
        var width = $("#code1").width();
        var height = $("#code1").height();
        $("#goodcover1").show();
        $("#code1").show().fadeIn();
        $("#code1").css({
            'position':'absolute',
            'top':'50%',
            'left':'50%',
            'marginTop':-1 * height/2,
            'marginLeft':-1 * width/2
        })
    })
    $("#closebt1").click(function () {
        $("#goodcover1").hide();
        $("#code1").hide().fadeOut();
    })
    $("#goodcover2").hide();
    $("#code2").hide();
    $("#ClickMe2").click(function () {
        var width = $("#code2").width();
        var height = $("#code2").height();
        $("#goodcover2").show();
        $("#code2").show().fadeIn();
        $("#code2").css({
            'position':'absolute',
            'top':'50%',
            'left':'50%',
            'marginTop':-1 * height/2,
            'marginLeft':-1 * width/2
        })
    })
    $("#closebt2").click(function () {
        $("#goodcover2").hide();
        $("#code2").hide().fadeOut();
    })
})
