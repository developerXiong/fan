$(function () {
	getLocation();
    let vm = new Vue({
        el: '#dataList',
        data: {
            mescroll:null,
            pdlist: []
        },
        mounted:function () {
            var self = this;
            self.mescroll = new MeScroll("mescroll",{
                down: {
                    auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
                    callback: self.downCallback //下拉刷新的回调
                },
                up: {
                    callback: self.upCallback,//上拉回调
                    //以下参数可删除,不配置
                    isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
                    //page:{size:8}, //可配置每页8条数据,默认10
                    toTop:{ //配置回到顶部按钮
                        src : "/img/bizh5/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
                        //html: null, //html标签内容,默认null; 如果同时设置了src,则优先取src
                        //offset : 1000
                    },
                    empty:{ //配置列表无任何数据的提示
                        warpId:"dataList",
                        icon : "/img/bizh5/mescroll-empty.png" ,
						  	tip : "亲,暂无相关数据哦~" ,
//						  	btntext : "去逛逛 >" ,
//						  	btnClick : function() {
//						  		alert("点击了去逛逛按钮");
//						  	}
                    },
                    //vue的案例请勿配置clearId和clearEmptyId,否则列表的数据模板会被清空
                    //vue的案例请勿配置clearId和clearEmptyId,否则列表的数据模板会被清空
//						clearId: "dataList",
//						clearEmptyId: "dataList"
                }
            });
        },
        methods: {
             goServiceDetails(id) {
                window.location.href = "/bizh5/area/detail/"+id;
             },
            downCallback:function () {
                console.log(1)
                //调数据，在调数据的回调函数里面调用endSuccess
                this.mescroll.endSuccess()
            },
            //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
            upCallback: function(page) {
                //联网加载数据
                var self = this;
                getListDataFromNet(page.num, page.size, function(curPageData) {
                    //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置

                    //如果是第一页需手动制空列表 (代替clearId和clearEmptyId的配置)
                    if(page.num === 1) self.pdlist = [];

                    //更新列表数据
                    self.pdlist = self.pdlist.concat(curPageData);

                    //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
                    //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
                    // console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length+", self.pdlist.length==" + self.pdlist.length);

                    //方法一(推荐): 后台接口有返回列表的总页数 totalPage
                    //self.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

                    //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
                    //self.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

                    //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
                    //self.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

                    //方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.

                    self.mescroll.endSuccess(curPageData.length);

                }, function() {
                    //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                    self.mescroll.endErr();
                });
            }
        }
    });
});

/*联网加载列表数据
		 请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
		 实际项目以您服务器接口返回的数据为准,无需本地处理分页.
 * */
function getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
	//延时一秒,模拟联网
	setTimeout(function () {
		$.ajax({
			type : 'GET',
			data : {
				'offset' : (pageNum-1) * pageSize,
				'limit' : pageSize,
				'longitude' : $("#longitude").val(),
				'latitude' : $("#latitude").val()
			},
			url : '/bizh5/area/getAreaList',
			success : function(data) {
				successCallback&&successCallback(data);
			}
		});
	},3000)
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