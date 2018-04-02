$(function () {
	getLocation();
	var banners = JSON.parse($("#banners").val());
	showBanners(banners);
    let vm = new Vue({
        el: '#dataList',
        data: {
            serviceArea:[],
            banners:banners
        },
        mounted:function () {
        	var _this = this;
        	setTimeout(function () {
    		$.ajax({
        		type : 'GET',
        		data : {
        			'offset' : 0,
        			'limit' : 5,
        			'longitude' : $("#longitude").val(),
    				'latitude' : $("#latitude").val()
        		},
        		url : '/bizh5/area/getAreaList',
        		success : function(data) {
        			_this.serviceArea = data;
        		}
        	});},3000);
        },
        methods: {
        	goServiceDetails: function(id){
        		window.location.href = "/bizh5/area/detail/"+id;
        	}
        }
    });
})

function goAreaList(){
	window.location.href = "/bizh5/area/list";
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "该浏览器不支持获取地理位置。";
	}
}
function showPosition(position) {
	var lat = position.coords.latitude; //纬度 
	var lag = position.coords.longitude; //经度 
	$("#longitude").val(lag);
	$("#latitude").val(lat);
}
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
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
function goShop()
{
	var data = {'action':'goShop'};
	yls.event(JSON.stringify(data));
}
