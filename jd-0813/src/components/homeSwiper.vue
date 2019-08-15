<template>
  <div class="swiper-container" id="swiper3">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in imgs " :key="index">
        <img :src="item" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" id="swiper4"></div>
  </div>
</template>
<style lang="less">
.swiper-container {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
}
</style>
<script>
import "swiper/dist/css/swiper.min.css";
import swiper from "swiper";
export default {
  data: function() {
    return {
      swiper: null,
      imgs: [
        require("../assets/images/banner1.jpg"),
        require("../assets/images/banner2.jpg"),
        require("../assets/images/banner3.jpg"),
        require("../assets/images/banner4.jpg"),
        require("../assets/images/banner5.jpg")
      ]
    };
  },
  mounted: function() {
    this.swiper = new swiper("#swiper3", {
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: "#swiper4",
        clickable: true
      }
    });
  }
};
</script>