<template>
  <div class="gouwu">
    <proTitle>购物车</proTitle>
    <gouwus  @allselect="alls" @changesum="sums" @changetotal="totals" :selects = "flags"></gouwus>
    <div class="dibu">
      <div class="anniu">
        <img :src="flags?selected:select" @click="flags = !flags" />
        <div class="selector" >全选</div>
      </div>
      <div class="left">
        <div class="zongji">总价:</div>
        <p class="jiage">¥ {{sum}}</p>
        <div class="jiesuan" v-bind:class="sum>0?'active':''">
          去结算
          <span>({{total}}件)</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.dibu {
  width: 100%;
  height: 1rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  .anniu {
    img {
      width: 0.4rem;
      height: 0.4rem;
      text-align: center;
      margin-left: 0.2rem;
      margin-top: 0.15rem;
    }
    .selector {
      color: #999;
      font-size: 0.16rem;
      text-align: center;
      margin-left: 0.16rem;
      margin-top: -0.1rem;
    }
  }
  .left {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    .jiesuan {
      width: 2.2rem;
      height: 1rem;
      background: #d7d7d7;
      line-height: 1rem;
      font-size: 0.32rem;
      text-align: center;
      font-weight: 700;
      color: #fff;
      
    }
    .active{
      background-color: red;
    }
    

    .zongji{
      margin-top: 0.25rem;
      margin-right: 0.05rem;
      font-weight: bold;
    }
    p.jiage{
      line-height: 1rem;
      margin-right: 0.3rem;
      color: red;
      font-weight: bold;
    }
  }
}
</style>
<script>
import proTitle from "@/components/proTitle.vue";
import gouwus from "@/components/gouwu.vue";
import "../assets/font_1348016_mhcybahh23/iconfont.css";
export default {
  data: function() {
    return {
      select:require("../assets/icons/xuan.png"),
      selected:require("../assets/icons/xuan-active.png"),
      flags:false,
      sum:0,
      total:0,
    };
  },
  props: {

  },
  methods:{
    alls:function(e){
      console.log(e)
        this.flags = e;
    },
    sums:function(e){
      this.sum = e
    },
    totals:function(e){
      this.total = e
    },
  },
  mounted: function() {
    this.current = this.$route.path;
  },
  components: {
    proTitle,
    gouwus
  }
};
</script>