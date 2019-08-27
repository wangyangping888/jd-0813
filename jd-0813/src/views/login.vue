<template>
  <div class="login1">
    <proTitle>登录</proTitle>
    <form>
      <div class="username">
        <input type="text" maxlength="20" placeholder="用户名/邮箱/已验证手机" @focus="huoqu" @blur="cancel"  v-model="username"/>
        <img src="../assets/icons/cha.png" v-show="flag" @click="qinchu1" />
      </div>
      <div class="password">
        <input :type="isshow?'password':'text'"  maxlength="10" placeholder="请输入密码" @focus="huoqu1" @blur="cancel1" v-model="password"/>
        <img class="cha" src="../assets/icons/cha.png" v-show="flag1" @click="qinchu2"/>
        <img class="yan" :src="isshow?require('../assets/icons/biyan.png'):require('../assets/icons/openeyes.png')" @click="dianji" />
        <span class="xian">|</span>
        <span class="pwd">忘记密码</span>
      </div>
      <div class="denglu" @click="login" :class="{active:username!=''&&password!=''} " >登录</div>
      <div class="denglu2">注册</div>
    </form>
  </div>
</template>
<script>
import proTitle from "@/components/proTitle.vue";
export default {
  data: function() {
    return {
      flag: false,
      flag1: false,
      username:'',
      password:'',
      isshow:true,
    };
  },
  methods: {
    qinchu1:function(){
        this.username = '';
    },
    qinchu2:function(){
        this.password = '';
    },
    dianji:function(){
        this.isshow = !this.isshow;

    },
    huoqu: function() {
      this.flag = true;
    },
    cancel: function() {
      if(this.username != ''){
          this.flag = true;
      }else{
          this.flag = false;
      }
    },
    huoqu1: function() {
      this.flag1 = true;
    },
    cancel1: function() {
      if(this.username != ''){
          this.flag = true;
      }else{
          this.flag = false;
      }
    },
    login:function(){
        if(this.username == "wangyangping" && this.password == "123456" ){
            this.$store.commit("setlogin",true);
            this.$router.push("/denglu");
        }else{
            alert("登录失败")
        }
    }
  },
  components: {
    proTitle
  },
  computed:{

  }
};
</script>
<style lang="less">
.login1 {
  background-color: #fff;
  height: 7rem;
  form{
	  padding-top:1.2rem;
	 .username {
	   width: 6.5rem;
	   margin: 0.3rem auto;
	   border-bottom: 1px solid #efefef;
	   position: relative;
	   input {
	     display: inline-block;
	     height: 0.7rem;
	     width: 90%;
	     border: none;
	     outline: none;
	     font-size: 16px;
	     color: #222;
	   }
	   img {
	     width: 0.48rem;
	     height: 0.48rem;
	     vertical-align: middle;
	     text-align: center;
	     position: absolute;
	     top: 0;
	     right: 0;
	     margin-top: 0.1rem;
	   }
	 }
	 .password {
	   width: 6.5rem;
	   margin: 0.3rem auto;
	   border-bottom: 1px solid #efefef;
	   position: relative;
	   img.yan {
	     width: 0.48rem;
	     height: 0.48rem;
	     text-align: center;
	     vertical-align: middle;
	     padding-right: 0.2rem;
	   }
	   span {
	     &.xian {
	       color: #ccc;
	       padding-right: 0.2rem;
	       box-sizing: border-box;
	     }
	     &.pwd {
	       font-size: 14px;
	     }
	   }
	   input {
	     width: 67%;
	     height: 0.7rem;
	     border: none;
	     outline: none;
	     font-size: 16px;
	     color: #222;
	   }
	   img.cha {
	     width: 0.48rem;
	     height: 0.48rem;
	     vertical-align: middle;
	     text-align: center;
	     position: absolute;
	     top: 0;
	     right: 2.2rem;
	     margin-top: 0.1rem;
	   }
	 }
	 .denglu {
	   width: 6.5rem;
	   margin: 0.5rem auto;
	   height: 1rem;
	   color: white;
	   background-color: #ffcaba;
	   border-radius: 25px;
	   text-align: center;
	   line-height: 1rem;
	   
	 }
	 .active{
	       background-color: red;
	       color: white;
	   }
	 .denglu2 {
	   width: 6.5rem;
	   margin: 0.5rem auto;
	   height: 1rem;
	   color: #f10000;
	   background: #fff;
	   border: 1px solid #ff2000;
	   border-radius: 25px;
	   text-align: center;
	   line-height: 1rem;
	 } 
  }
  
}
</style>