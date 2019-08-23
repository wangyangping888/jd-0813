<template>
  <div class="bottombar">
    <div class="right">
      <div class="jiaru" @click="dianji">加入购物车</div>
      <div class="liji">立即购买</div>
    </div>
    <div class="left">
      <ul>
        <li class="lianxi" v-for="(item,index) in arr" :key="index">
          <img :src="item.url" />
          <p v-text="item.title"></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      arr: [
        {
          url: require("../assets/images/lianxi.png"),
          title: "联系客服"
        },
        {
          url: require("../assets/images/jindian.png"),
          title: "进店"
        },
        {
          url: require("../assets/images/che.png"),
          title: "购物车"
        }
      ],
      pan:false,
    };
  },
  props:{
    value:{
      type:Boolean,
      default:false,
    }
  },
  watch:{
    value:function(val){
      
    }
  },
  created:function(){
    
    
  },
  methods: {
    dianji: function() {
      this.$emit('isLogFn','log');
    },
  },
};
</script>
<style lang="less">
.bottombar {
  position: fixed;
  background-color: #fff;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  .right {
    width: 50%;
    text-align: center;
    overflow: hidden;
    float: right;
    .jiaru {
      width: 50%;
      background-color: #ffbc00;
      color: white;
      float: left;
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
    }
    .liji {
      width: 50%;
      background-color: #f10000;
      color: white;
      float: left;
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
    }
  }
  .left {
    float: left;
    width: 50%;
    overflow: hidden;
    .lianxi {
      float: left;
      width: 30%;
      text-align: center;
      margin-left: 0.1rem;

      img {
        width: 0.4rem;
        height: 0.4rem;
        text-align: center;
        margin-top: 0.2rem;
      }
      p {
        text-align: center;
        font-size: 0.2rem;
      }
    }
  }
}
</style>