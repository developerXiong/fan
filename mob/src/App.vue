<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    height: 100%;
    font-size: 12rem;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img{
    border: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
}
</style>
