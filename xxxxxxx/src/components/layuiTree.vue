<template>
  <div>
    <div
      style="display: inline-block; width: 180px; padding: 10px; overflow: hidden;"
      class="layui-tree">
      <ul id="demo1"></ul>
    </div>
    <p @click="con">dian </p>
  </div>
</template>

<script>
  export default {
    props: {
      tree:{}
    },
    data () {
      return{

      }
    },
    methods:{
      con(){
        console.log(this.nodes)
      }
    },
    mounted() {
      window.$lay.tree({
        elem: '#demo1' //指定元素
        , target: '_blank' //是否新选项卡打开（比如节点返回href才有效）
        , click: function (item) { //点击节点回调
//          layer.msg('当前节名称：' + item.name + '<br>全部参数：' + JSON.stringify(item));
          console.log(item);
        }
        , nodes: [ //节点
          {
            name: '顶级节点'
            , id: 1
            , spread: true
            , children: [
            {
              name: '测试部'
              , id: 11
              , spread: true
              , children: [
              {
                name: '测试一部'
                , id: 111
              }, {
                name: '测试二部'
                , id: 112
              }
            ]
            },
            {
              name: '产品部'
              , id: 12
              , children: [
                {
                  name: '产品一部'
                  , id: 121
                }, {
                  name: '产品二部'
                  , id: 122
                }
              ]
            },
            {
              name: '销售部'
              , id: 13
              , children: [
              {
                name: '销售一部'
                , id: 131
              }, {
                name: '销售二部'
                , id: 132
              }
            ]
            },
            {
              name: '研发部'
              , id: 14
              , children: [
              {
                name: '研发一部'
                , id: 141
              }, {
                name: '研发二部'
                , id: 142
              }
            ]
            }
          ]
          }
        ]
      });

    },
    created() {
    }
  }
</script>

<style scoped>

</style>
