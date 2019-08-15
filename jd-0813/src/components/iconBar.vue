<template>
  <div class="iconbar">
    <div class="swiper-container" id="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li v-for="(item,index) in icon" :key="index">
              <img :src="(item.url)" />
              <p v-text="item.title"></p>
            </li>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul>
            <li v-for="(item,index) in icon2" :key="index">
              <img :src="(item.url)" />
              <p v-text="item.title"></p>
            </li>
          </ul>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination" id="swiper2"></div>
    </div>
  </div>
</template>
<style lang="less" >
.iconbar {
  //   width: 7.3rem;
  //   margin: 0 auto;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  margin-top: -0.2rem;
  position: relative;
  top: -0.05rem;
  z-index: 99;
  .swiper-container {
    width: 100%;
  }

  ul {
    margin-left: 0.1rem;
    padding-top: 0.2rem;
    box-sizing: border-box;
    float: left;
    li {
      float: left;
      margin: 0;
      padding: 0;
      width: 13%;
      margin-left: 0.25rem;
      margin-right: 0.25rem;

      img {
        width: 100%;
      }
      p {
        font-size: 0.2rem;
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
<script>
import "swiper/dist/css/swiper.min.css";
import swiper from "swiper";
export default {
  data: function() {
    return {
      swiper: null,
      icon: [
        {
          url: require("../assets/icons/1.png"),
          title: "京东超市"
        },
        {
          url: require("../assets/icons/2.png"),
          title: "数码电器"
        },
        {
          url: require("../assets/icons/3.png"),
          title: "京东服饰"
        },
        {
          url: require("../assets/icons/4.png"),
          title: "京东生鲜"
        },
        {
          url: require("../assets/icons/5.png"),
          title: "京东到家"
        },
        {
          url: require("../assets/icons/6.png"),
          title: "充值缴费"
        },
        {
          url: require("../assets/icons/7.png"),
          title: "9.9元拼"
        },
        {
          url: require("../assets/icons/8.png"),
          title: "领券"
        },
        {
          url: require("../assets/icons/9.png"),
          title: "赚钱"
        },
        {
          url: require("../assets/icons/10.png"),
          title: "PLUS会员"
        },
      ],
      icon2: [
        {
          url: require("../assets/images/icon11.png"),
          title: "京东超市"
        },
        {
          url: require("../assets/images/icon12.png"),
          title: "数码电器"
        },
        {
          url: require("../assets/images/icon13.png"),
          title: "京东服饰"
        },
        {
          url: require("../assets/images/icon14.png"),
          title: "京东生鲜"
        },
        {
          url: require("../assets/images/icon15.png"),
          title: "京东到家"
        },
        {
          url: require("../assets/images/icon16.png"),
          title: "充值缴费"
        },
        {
          url: require("../assets/images/icon17.png"),
          title: "9.9元拼"
        },
        {
          url: require("../assets/images/icon18.png"),
          title: "领券"
        },
        {
          url: require("../assets/images/icon19.png"),
          title: "赚钱"
        },
        {
          url: require("../assets/images/icon20.png"),
          title: "PLUS会员"
        },
      ]
    };
  },
  mounted: function() {
    this.swiper = new swiper("#swiper1", {
      pagination: {
        el: "#swiper2",
        clickable: true,
        
      }
    });
  }
};
</script>