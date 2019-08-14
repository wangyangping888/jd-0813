<template>
  <div class="swiper-container" id="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination" id="swiper-pagination"></div>
  </div>
</template>
<style lang="less">

</style>
<script>
import "swiper/dist/css/swiper.min.css";
import swiper from "swiper";
export default {
  data:function(){
    return{
      swiper:null,
    }
  },
  mounted:function(){
    this.swiper = new swiper('#swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '#swiper-pagination',
        clickable: true,
      },
    });
  }
}
</script>