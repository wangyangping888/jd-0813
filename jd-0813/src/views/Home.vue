<template>
  <div class="home">
    <searchbar></searchbar>
    <homeswiper></homeswiper>
    <navbar></navbar>
    <iconBar></iconBar>
    <miaosha></miaosha>
    <div class="biaoti">
      <img src="../assets/images/xq-biaoti.png" />
    </div>
    <xqBar></xqBar>
    <div class="gao"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import searchbar from "@/components/SearchBar.vue"
import navbar from "@/components/NavBar.vue"
import homeswiper from "@/components/homeSwiper.vue"
import iconBar from "@/components/iconBar.vue"
import xqBar from "@/components/xqBar.vue"
import miaosha from "@/components/miaosha.vue"


export default {
  name: 'home',
  components:{
    searchbar,
    navbar,
    homeswiper,
    iconBar,
    xqBar,
    miaosha,
  }
}
</script>
<style lang="less">
  .biaoti {
    width: 100%;
    margin-top: 0.2rem;
    img {
      width: 100%;
    }
  }
  .gao{
    height: 100rem;
  }
</style>