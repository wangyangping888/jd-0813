<template>
  <div class="searchbar" :class="{fixed:isScroll}">
    <div class="catc"></div>
    <div class="search">
      <img class="logo" src="../assets/tupiao.png" />
      <span class="iconfont">&#xe62a;</span>
      <input type="text" placeholder="美孚一号" />
    </div>
    <div class="login" @click="gotologin">登录</div>
  </div>
</template>

<style lang="less">
.searchbar {
//   background-color: red;
  display: flex;
  width: 100%;
  height: 0.88rem;
  padding-top: 0.14rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 999;
  
  .search {
    height: 0.6rem;
    border-radius: 0.3rem;
    background: #fff;
    flex: 1;
    display: flex;
    .logo {
      margin-left: 0.3rem;
      width: 0.4rem;
      height: 0.3rem;
      border-right: 1px solid #cdcdcd;
      margin-top: 0.15rem;
      padding-right: 0.1rem;
    }
    .iconfont {
      font-size: 0.45rem;
      color: #cdcdcd;
      margin-left: 0.08rem;
      margin-top: -0.02rem;
      
    }
    input{
        border: none;
        margin: 0rem;
        width:3.5rem;
        &:focus{
          outline: none;
        }
    }
  }
  .catc {
    width: 1rem;
    background: url(../assets/caidan.png);
    background-size: 0.6rem;
    background-position: center 0rem;
    background-repeat: no-repeat;
  }
  .login {
    width: 1rem;
    text-align: center;
    line-height: 0.6rem;
    color: #fff;
  }
}
.fixed{
      background-color: red;
  }
</style>
<script>
import "../assets/font_1348016_mhcybahh23/iconfont.css"
export default {
    data:function(){
        return{
            isScroll:false
        }

    },
    created:function(){
        window.onscroll = (e) => {
            var s =document.body.scrollTop ||document.documentElement.scrollTop
            if(s>50){
                this.isScroll = true;
            }else{
                this.isScroll = false;
            }
        }
    },
    methods:{
      gotologin:function(){
        this.$router.push("/login")
      }
    },
};
</script>