$(function () {
	var pleasure = JSON.parse($("#freeList").val());
	var banners = JSON.parse($("#banners").val());
	showBanners(banners);
    let vm = new Vue({
        el:'#container',
        data:{
            pleasure:pleasure,
            banners:banners
        },
        methods:{
        	godetail: function(id)
        	{
        		window.location.href = "/bizh5/free/detail/"+id;
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
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
}