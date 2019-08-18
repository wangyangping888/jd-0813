<template>
  <div class="swiper-container" id="swiper3" :class="{'productmask':flag}" @click="dianji">
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
  &.productmask {
    background-color: #000;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .swiper-wrapper {
      position: absolute;
      top: 20%;
    }
    .swiper-pagination {
      display: none;
    }
  }
  .swiper-pagination {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  .swiper-pagination-bullet {
    margin: 0 4px;
  }
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
        require("../assets/images/product1.jpg"),
        require("../assets/images/product2.jpg"),
        require("../assets/images/product3.jpg"),
        require("../assets/images/product4.jpg"),
        require("../assets/images/product5.jpg"),
        require("../assets/images/product6.jpg"),
        require("../assets/images/product7.jpg"),
        require("../assets/images/product8.jpg")
      ],
      flag: false,
      hua: false
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
  },
  methods: {
    dianji: function() {
      this.flag = !this.flag;
      this.hua = !this.hua;
      console.log(this.hua);
    }
  }
};
</script>