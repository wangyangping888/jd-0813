<template>
  <ul class="toptitle">
    <li v-for="(item,index) in nav " :key="index" @click="flag=index">
      <div class="tubiao" v-show="index==flag" >
        <img src="../assets/icons/tubiao.png" />
      </div>
      <p v-text="item" :class="{red:index==flag}"></p>
    </li>
  </ul>
</template>
<style lang="less">
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
<script>
export default {
  data: function() {
    return {
      flag:0,
      nav: ["商品", "评价", "详情", "推荐"]
    };
  },
  methods:{
      tubiao:function(){
        //   this.flag = !this.flag
      }
  }
};
</script>