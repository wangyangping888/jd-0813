<template>
  <div class="gouwu">
    <proTitle>购物车</proTitle>
    <gouwu></gouwu>
    <div v-text="price">价格：</div>
    <div v-text="number">总件数</div>
    <div v-text="all">全选：</div>
    <navBar></navBar>
  </div>
</template>
<style lang="less">

</style>
<script>
import proTitle from "@/components/proTitle.vue";
import navBar from "@/components/NavBar.vue";
import gouwu from "@/components/gouwu.vue";
import "../assets/font_1348016_mhcybahh23/iconfont.css";
export default {
  data: function() {
    return {
      price:0,
      number:0,
      all:0,
    };
  },
  props:{
    
  },
  mounted: function() {
    this.current = this.$route.path;
  },
  components: {
    navBar,
    proTitle,
    gouwu,
  }
};
</script>