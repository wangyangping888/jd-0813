<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
html,body,#app{
  height: 100%;
  overflow: hidden;
}
*{
  margin: 0;
  padding:0;
}
html{
  font-size: calc(100vw/7.5)
}
body{
  font-size: 0.32rem;
  background-color: #f6f6f6;
  color: #333;
  line-height: 1.5;
}
a{
 text-decoration: none;
 color: #333;
}
img{
  border:0px;
}
ul{
  list-style: none;
  
}
ul li{
  margin: 0;
  padding: 0;
}
</style>
<script>
export default {
  
}
</script>