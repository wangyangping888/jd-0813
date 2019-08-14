<template>
  <div class="denglu">
    购物
    <ul class="nav-bar">
      <li v-for="(item,index) in navlist" :key="index">
        <router-link :to="item.path">
          <img :src="(item.path==current)?item.active:item.url" />
          <p v-text="item.text" :class="(item.path==current)?'current':''"></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.nav-bar {
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  li {
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    a{
        line-height: 1;
    }
    img {
        width: 0.46rem;
        height: 0.46rem;
    }
    p{
        font-size: 0.2rem;
        text-align: center;
        margin-top: 0rem;
        padding-top: 0rem;
       

    }
    .current{
          color: red;
        }
  }
}
</style>
<script>
import "../assets/font_1348016_mhcybahh23/iconfont.css";
export default {
  data: function() {
    return {
      current:"/",
      navlist: [
        {
          url: require("../assets/images/首页.png"),
          active: require("../assets/images/首页hover.png"),
          path: "/",
          text:"首页"
        },
        {
          url: require("../assets/images/分类.png"),
          active: require("../assets/images/分类hover.png"),
          path: "/fenlei",
          text:"分类"
        },
        {
          url: require("../assets/images/拼图.png"),
          active: require("../assets/images/拼图hover.png"),
          path: "/pinggou",
          text:"拼购"
        },
        {
          url: require("../assets/images/购物车.png"),
          active: require("../assets/images/购物车hover.png"),
          path: "/gouwu",
          text:"购物车"
        },
        {
          url: require("../assets/images/登录.png"),
          active: require("../assets/images/登录hover.png"),
          path: "/denglu",
          text:"登录"
        }
      ]
    };
  },
  mounted:function(){
    this.current = this.$route.path
  }
  // props:{
  //     flag:{
  //         type:Boolean,
  //         default:false,
  //     }
  // },
  // methods:{
  //     dianji:function(){
  //         this.flag=!flag
  //     }
  // },
  // computed:{
  //     navStyle:function(){
  //         return this.flag?"":"weui-bar__item_on"
  //     }
  // }
};
</script>