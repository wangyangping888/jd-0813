<template>
  <div class="denglu">
    登陆
    <navBar></navBar>
    <div>登录：{{$store.state.login}}</div>
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
import navBar from "@/components/NavBar.vue";
export default {
  data: function() {
    return {
      
    };
  },
  components:{
    navBar,},
  mounted:function(){
    this.current = this.$route.path
  }
};
</script>