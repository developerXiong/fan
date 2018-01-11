<template>
  <div>
    <p>确定要退出么?</p>
    <div class="sure" @click="sure">确定</div>
    <div class="cancel" @click="cancel">取消</div>
  </div>
</template>
<script>
export default {
  methods: {
    sure () {
      this.$emit('close-quit')
    },
    cancel () {
      this.$emit('cancel-quit')
    }
  }
}
</script>
<style scoped>
.sure,.cancel{
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
.sure{
  float: left;
  margin-left: 50px;
  background: gainsboro;
}
.cancel{
  float: right;
  margin-right: 50px;
  background: gainsboro;
}
</style>
