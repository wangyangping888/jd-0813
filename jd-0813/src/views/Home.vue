<template>
  <div class="home">
    <searchbar></searchbar>
    <homeswiper></homeswiper>
    <navbar></navbar>
    <div class="gao"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import searchbar from "@/components/SearchBar.vue"
import navbar from "@/components/NavBar.vue"
import homeswiper from "@/components/homeSwiper.vue"


export default {
  name: 'home',
  components:{
    searchbar,
    navbar,
    homeswiper,
  }
}
</script>
<style lang="less">
  .gao{
    height: 100rem;
  }
</style>