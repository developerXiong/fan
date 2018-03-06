$(function () {
    var serviceArea = [
        {
            id: 0,
            imgSrc: '../img/p3.jpg',
            name: '郭村服务区',
            address: 'S55宁',
            distance: '290.3'
        }
        ,
        {
            id: 1,
            imgSrc: '../img/p3.jpg',
            name: '郭村服务',
            address: 'S55宁宣',
            distance: '290.3'
        }
        ,
        {
            id: 2,
            imgSrc: '../img/p3.jpg',
            name: '郭村服',
            address: 'S55宁宣高',
            distance: '290.3'
        }
        ,
        {
            id: 3,
            imgSrc: '../img/p3.jpg',
            name: '郭村',
            address: 'S55宁宣高速',
            distance: '290.3'
        }
        ,
        {
            id: 4,
            imgSrc: '../img/p3.jpg',
            name: '郭',
            address: 'S55宁宣高速公',
            distance: '290.3'
        }
        ,
        {
            id: 5,
            imgSrc: '../img/p3.jpg',
            name: '郭',
            address: 'S55宁宣高速公',
            distance: '290.3'
        }
        ,
        {
            id: 6,
            imgSrc: '../img/p3.jpg',
            name: '郭',
            address: 'S55宁宣高速公',
            distance: '290.3'
        }
        ,
        {
            id: 7,
            imgSrc: '../img/p3.jpg',
            name: '郭',
            address: 'S55宁宣高速公',
            distance: '290.3'
        }
        ,
        {
            id: 8,
            imgSrc: '../img/p3.jpg',
            name: '郭',
            address: 'S55宁宣高速公',
            distance: '290.3'
        }
        ,
        {
            id: 9,
            imgSrc: '../img/p3.jpg',
            name: '郭',
            address: 'S55宁宣高速公',
            distance: '290.3'
        }
        ,
        {
            id: 10,
            imgSrc: '../img/p3.jpg',
            name: '郭',
            address: 'S55宁宣高速公',
            distance: '290.3'
        }
    ];

    let vm = new Vue({
        el: '#cont',
        data: {
            serviceArea:serviceArea
        },
        mounted:function () {
            // var _this=this;
            // $.ajax({
            //         type:'get',
            //         url:'xxxxxx'+id,
            //         dataType:'json',
            //         contentType:'application/json',
            //         success:function (res) {
            //             _this.serviceArea=res
            //         }
            // })
        },
        methods: {

        }
    });
})