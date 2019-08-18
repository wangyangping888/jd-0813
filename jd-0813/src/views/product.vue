<template>
  <div class="product">
    <proTitle>
      <ul class="toptitle">
        <li v-for="(item,index) in nav " :key="index" @click="onchange(index)"  >
          <div class="tubiao" v-show="index==navIndex" >
            <img src="../assets/icons/tubiao.png" />
          </div>
          <p v-text="item" :class="{red:index==navIndex}"></p>
        </li>
      </ul>
    </proTitle>
    <productSwiper></productSwiper>
    <button>购物</button>
    <div class="shangpin" style="height: 500px; background-color:red;">
      <p ref="product">商品</p>
    </div>
    <div class="pingjia" style="height: 500px; background-color:blue;">
      <p ref="comment">评价</p>
    </div>
    <div class="xiangqin" style="height: 500px;background-color:green;">
      <p ref="xiangqin">详情</p>
    </div>
    <div class="tuijian" style="height: 500px;background-color:pink;">
      <p ref="tuijian">推荐</p>
    </div>
    <suk v-model="isshow"></suk>
    <bottomCart></bottomCart>
  </div>
</template>
<script>
import proTitle from "@/components/proTitle.vue";
import suk from "@/components/suk.vue";
import productSwiper from "@/components/productSwiper.vue";
import bottomCart from "@/components/bottomCart.vue";
export default {
  name: "product",
  components: {
    proTitle,
    suk,
    productSwiper,
    bottomCart
  },
  data: function() {
    return {
      id: null,
      title: "",
      isshow: false,
      navIndex: 0,
      scrollt: [],
      flag:0,
      nav: ["商品", "评价", "详情", "推荐"]
    };
  },
  mounted: function() {
    console.log(this.$route);
    this.id = this.$route.query.pid;
    this.title = this.$route.query.title;
    console.log(this.$router);
    console.log(this.$route);
    this.pid = this.$route.query.pid;
    this.title = this.$route.query.title;
    // console.log(this.$refs['detail'].offsetTop);
    this.scrollt[0] = this.$refs["product"].offsetTop;
    this.scrollt[1] = this.$refs["comment"].offsetTop;
    this.scrollt[2] = this.$refs["xiangqin"].offsetTop;
    this.scrollt[3] = this.$refs["tuijian"].offsetTop;

    window.onscroll = e => {
      var s = document.body.scrollTop || document.documentElement.scrollTop;
      console.log(s);
      this.scrollt.forEach((item, index) => {
        if (Math.abs(item - s) < 100) {
          this.navIndex = index;
        }
      });
    };
  },
  methods: {
   
    onchange(ind) {
      this.navIndex = ind;
      document.documentElement.scrollTop = this.scrollt[ind] - 50;
    },

    scrollTop(val) {
      // 当前值
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      // 目标值
      let target = val - 50;
      // 动画时长
      let duration = 300;
      // 动画次数
      let count = 50;
      // 时间片
      let timeOut = duration / count;
      // 步进值
      let step = (target - scrollTop) / count;

      let t = setInterval(() => {
        scrollTop += step;
        document.documentElement.scrollTop = scrollTop;
        count--;
        if (count <= 0) {
          clearInterval(t);
        }
      }, timeOut);

      document.documentElement.scrollTop = val - 50;
    }
  }
};
</script>
<style lang="less" >
ul.toptitle{
    overflow: hidden;
  li {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    font-size: 0.3rem;
    overflow: hidden;
    float: left;
    .tubiao {
        float: left;
      img {
        width: 0.16rem;
        height: 0.24rem;

      }
    }
    p{
        float: right;
        margin-left: 0.1rem;
    }
    .red{
        color: red;
    }
  }
}
</style>