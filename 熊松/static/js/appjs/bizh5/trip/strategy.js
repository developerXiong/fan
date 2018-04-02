$(function () {
    var details = JSON.parse($("#tripList").val());
    var banners = JSON.parse($("#banners").val());
    showBanners(banners);
    let vm = new Vue({
        el:'#strategy',
        data:{
            details:details,
            banners:banners
        },
        methods:{
            praise: function(id,index){
            	var _this = this;
            	// 点赞
            	$.ajax({
            		url : '/bizh5/trip/praise',
            		type : 'POST',
            		data : JSON.stringify({
            			'id' : id,
            			'count' : 1,
            			'type' : 1
            		}),
            		contentType : 'application/json',
            		success : function(data) {
            			// $("#praise_"+index).attr("src","/img/bizh5/trip/praised.png");
            			var tcount = parseInt($("#zanCount_"+index).html());
            			tcount++;
            			$("#zanCount_"+index).html(tcount);
            		}
            	});
            },
            godetail: function(id){
            	// 详情
            	window.location.href = "/bizh5/trip/detail/"+id;
            },
            share: function (item,index){
            	var id = item.id;
            	var data={
                        'action' :"share",
                        'img' :item.imgUrl,
                        'title' :item.title,
                        'url' :item.sysHost+"/bizh5/trip/detail/"+id,
                        'info' :item.content 
                    };
            	yls.event(JSON.stringify(data));
            	$.ajax({
            		url : '/bizh5/trip/praise',
            		type : 'POST',
            		data : JSON.stringify({
            			'id' : id,
            			'count' : 1,
            			'type' : 2
            		}),
            		contentType : 'application/json',
            		success : function(data) {
            			var tcount = parseInt($("#shareCount_"+index).html());
            			tcount++;
            			$("#shareCount_"+index).html(tcount);
            		}
            	});
            }
        }
    })

});

function showBanners(banners)
{
	$("#bannerList").empty();
	var htmlData = '';
	for(var i=0;i<banners.length;i++)
	{
		htmlData += '<div class="swiper-slide">';
		htmlData += '<img src="'+banners[i]+'" alt="">';
		htmlData += '</div>';
	}
	$("#bannerList").append(htmlData);
	var swiper = new Swiper('.swiper-container', {
		loop : true,
		pagination : {
			el : '.swiper-pagination',
		},
		autoplay : {
			delay : 2500,
			disableOnInteraction : false,
		},
	});
}