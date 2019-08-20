<template>
  <div class="fenlei">
    <proTitle>
      <span>商品分类</span>
    </proTitle>
    <div class="cate">
      <aside
        ref="aside"
        @touchstart="ontouchstart"
        @touchmove="ontouchmove"
        @touchend="ontouchend"
        :class="{transition:transition}"
        @touchcancle="ontouchcancle"
      >
        <ul ref="scroll" :style="{top:tmp+'px'}">
          <li
            v-for="(item,index) in lei"
            :key="index"
            @click="onClick(index)"
            v-text="item"
            :class="{active:navIndex==index}"
          ></li>
        </ul>
      </aside>
      <div class="right">
        <p class="text"></p>
      </div>
    </div>
    <navBar></navBar>
  </div>
</template>
<style lang="less">
.fenlei {
  height: 100%;
  width: 100%;
  .cate {
    text-align: center;
    width: 100%;
    height: 100%;
    padding-top: 1.06rem;
    padding-bottom: 0.98rem;
    box-sizing: border-box;
    color: black;
    background-color: #fff;
    aside {
      width: 2rem;
      background-color: #f8f8f8;
      display: inline-block;
      height: 100%;
      position: relative;
      overflow: hidden;
      ul {
        position: absolute;
        left: left;
        width: 100%;
        li {
          padding-left: 0.15rem;
          padding-right: 0.15rem;
          padding-bottom: 0.3rem;
          padding-top: 0.3rem;
          &.active {
            color: red;
            background: #fff;
          }
        }
      }
    }
  }
  .right {
    display: inline-block;
    background-color: blue;
    width: 73%;
    height: 100%;
  }
  .transition {
    transition: top 0.3s linear;
  }
}

.transition {
  transition: top 0.3s linear;
}
</style>
<script>
import proTitle from "@/components/proTitle.vue";
import navBar from "@/components/NavBar.vue";
import "../assets/font_1348016_mhcybahh23/iconfont.css";
export default {
  data: function() {
    return {
      lei: [
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
      navIndex: 0,
      startY: 0,
      offsetTop: 0,
      limitTop: 0,
      tmp: 0,
      transition: false
    };
  },
  components: {
    proTitle,
    navBar,
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
      this.tmp = this.tmp > 150 ? 150 : this.tmp;
      this.tmp = this.tmp < this.limitTop ? this.limitTop : this.tmp;
    },
    ontouchend: function(e) {
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? (this.limitTop + 150) : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    },
    ontouchcancle(e) {
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? -(this.limitTop + 150) : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    },
    onClick(index) {
      this.navIndex = index;
      // 根据 索引值计算滚动的距离
      this.tmp = this.$refs["scroll"].offsetHeight * (this.navIndex / 26) * -1;

      // 越界处理
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? this.limitTop + 150 : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    }
  },
  mounted: function() {
    this.limitTop =
      this.$refs["aside"].offsetHeight -
      this.$refs["scroll"].offsetHeight -
      150;
  }
};
</script>