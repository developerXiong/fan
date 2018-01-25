<template>
<div class="layout">
  <div class="cont">

  </div>
  <div class="footer">
    <ul>
      <router-link class="footer_li" :to="{ name:'一' }">
        一
      </router-link>
      <router-link class="footer_li" :to="{ name:'二' }">
        二
      </router-link>
      <router-link class="footer_li" to="li" path="三">
        三
      </router-link>
      <router-link class="footer_li" to="li" path="四">
        四
      </router-link>
    </ul>
  </div>
</div>

</template>

<script>
export default {
  name: 'layout',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout{
    height: 100%;
  }
  .cont{
    width: 100%;
    height: calc(100% - 60px);
    background: pink;
  }
.footer{
  width: 100%;
  height: 60px;
  background: black;
}
  .footer .footer_li{
    width: calc(100% / 4);
    float: left;
    color: white;
    line-height: 60px;
    text-align: center;
    font-size: 30px;
  }
</style>
