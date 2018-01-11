<template>
  <div>
    <div
      style="display: inline-block; width: 180px; padding: 10px; overflow: hidden;"
      class="layui-tree">
      <ul id="demo1"></ul>
    </div>
    <p @click="con">dian</p>
  </div>
</template>

<script>
  export default {
    props: {
      nodes: {
        type: Array,
        default: []
      }
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
        , nodes: this.nodes
      });

    },
    created() {
    }
  }
</script>

<style scoped>

</style>
