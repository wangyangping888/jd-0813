<template>
  <div class="fenlei">
    <proTitle>
      <span>商品分类</span>
    </proTitle>
    <div class="cate">
      <aside ref="aside" @touchstart="ontouchstart" @touchmove="ontouchmove" @touchend="ontouchend">
        <ul ref="scroll" :style="{top:tmp+'px'}">
          <li
            v-for="(item,index) in fenlei"
            :key="index"
            @click="colorindex = index"
            v-text="item"
            :class="{active:index == colorindex}"
            ref="litem"
          ></li>
        </ul>
      </aside>
    </div>
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
.fenlei {
  .cate {
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 0.88rem 0 1rem;
    color: black;
    background-color: #fff;
    aside {
      width: 2rem;
      background-color: #f8f8f8;
      height: 100%;
      overflow: hidden;
      ul {
        height: 100%;
        li {
          padding-left: 0.15rem;
          padding-right: 0.15rem;
          padding-bottom: 0.3rem;
          padding-top: 0.3rem;
        }
      }
    }
  }

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
      a {
        line-height: 1;
      }
      img {
        width: 0.46rem;
        height: 0.46rem;
      }
      p {
        font-size: 0.2rem;
        text-align: center;
        margin-top: 0rem;
        padding-top: 0rem;
      }
      .current {
        color: red;
      }
    }
  }
  .transition {
			transition: top 0.3s linear;
		}
}
.active {
  color: red;
  background: #fff;
}
</style>
<script>
import proTitle from "@/components/proTitle.vue";
import "../assets/font_1348016_mhcybahh23/iconfont.css";
export default {
  data: function() {
    return {
      current: "/fenlei",
      navlist: [
        {
          url: require("../assets/images/首页.png"),
          active: require("../assets/images/首页hover.png"),
          path: "/",
          text: "首页"
        },
        {
          url: require("../assets/images/分类.png"),
          active: require("../assets/images/分类hover.png"),
          path: "/fenlei",
          text: "分类"
        },
        {
          url: require("../assets/images/拼图.png"),
          active: require("../assets/images/拼图hover.png"),
          path: "/pinggou",
          text: "拼购"
        },
        {
          url: require("../assets/images/购物车.png"),
          active: require("../assets/images/购物车hover.png"),
          path: "/gouwu",
          text: "购物车"
        },
        {
          url: require("../assets/images/登录.png"),
          active: require("../assets/images/登录hover.png"),
          path: "/denglu",
          text: "登录"
        }
      ],
      fenlei: [
        "热门推荐",
        "手机数码",
        "家用电器",
        "电脑办公",
        "计生情趣",
        "美妆护肤",
        "个护清洁",
        "汽车生活",
        "京东超市",
        "男装",
        "男鞋",
        "女装",
        "女鞋",
        "母音童装",
        "图书音像",
        "户外运动",
        "内衣配饰",
        "食品生鲜",
        "酒水饮料",
        "家居家装",
        "家居厨具",
        "箱包手袋",
        "钟表珠宝",
        "玩具乐器",
        "医药保健",
        "宠物生活"
      ],
      colorindex: 0,
      startY: 0,
      offsetTop: 0,
      limitTop: 0,
      tmp: 0,
      transition: false
    };
  },
  components: {
    proTitle
  },
  methods: {
    ontouchstart: function(e) {
      this.startY = e.changedTouches[0].clientY;
      this.transition = false;
    },
    ontouchmove: function(e) {
      let y = e.changedTouches[0].clientY;
      // // 计算滑动的距离
      this.tmp = this.offsetTop + y - this.startY;
      // // 限定滑动的长度（150）
      // this.tmp = this.tmp > 150 ? 150 : this.tmp;
      // this.tmp = this.tmp < -this.limitTop ? -this.limitTop : this.tmp;
    },
    ontouchend: function(e) {
      // this.tmp = this.tmp > 0 ? 0 : this.tmp;
      // this.tmp =this.tmp < -(this.limitTop + 150) ? -(this.limitTop + 150) : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
      // this.transition = true;
    }
    // onClick(index) {
    //   this.navIndex = index;
    //   // 根据 索引值计算滚动的距离
    //   this.tmp = this.$refs["scroll"].offsetHeight * (this.navIndex / 100) * -1;

    //   // 越界处理
    //   this.tmp = this.tmp > 0 ? 0 : this.tmp;
    //   this.tmp =
    //     this.tmp < this.limitTop + 150 ? this.limitTop + 150 : this.tmp;
    //   this.offsetTop = this.tmp;
    //   this.transition = true;
    // }
  },
  mounted: function() {
    // let hei = this.$refs["warp"].offsetTop
    // console.log(hei)
    this.limitTop = this.$refs["aside"].offsetHeight-this.$refs["scroll"].offsetHeight-150;
    console.log(this.limitTop);
  }
};
</script>