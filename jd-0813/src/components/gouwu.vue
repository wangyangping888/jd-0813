<template>
<div class="gouwu">
    <div class="cart">
      <div class="top">
        <div class="button">
          <img :src="flag?b:a" @click="flag=!flag"/>
        </div>
        <div class="title">乐尔康享购专卖店</div>
      </div>
      <div class="center">
        <div class="button" >
          <img :src="flag?b:a" @click="flag=!flag" />
        </div>
        <div class="image">
          <img src="../assets/images/product1.jpg" />
        </div>
        <div class="contain">
          <div class="title">乐尔康（Le er kang）颈椎按摩椅全自动家用多功能太空豪华舱全身揉捏推拿按摩椅电动沙发椅 尊享版白金色</div>
          <input type="text" readonly="readonly" value="尊享版白金色" />
        </div>
      </div>
      <div class="bottom">
        <div class="price" v-text="price"></div>
        <div class="jisuan">
          <span  @click="number<=1?1:--number">-</span>
          <input type="number" v-model="number" />
          <span @click="number++">+</span>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
    data:function(){
        return{
            number:1,
            a:require('../assets/icons/xuan.png'),
            b:require('../assets/icons/xuan-active.png'),
            flag:false,
            price:"￥2180",
        }
    },
    props:{

    },
    watch:{

    },
    created:{

    }
}
</script>
<style lang="less">
    .gouwu {
  .cart {
    background-color: #fff;
    margin-top: 1.2rem;
    overflow: hidden;
    .top {
      border-top: 1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
      overflow: hidden;
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
      box-sizing: border-box;
      vertical-align: center;
      width: 100%;
      .button {
        display: inline-block;
        padding-left: 0.1rem;
        box-sizing: border-box;
        width: 10%;

        img {
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
        }
      }
      .title {
        display: inline-block;
        padding-left: 0.1rem;
        vertical-align: super;
        font-weight: bold;
        margin-top: -2rem;
      }
    }
    .center {
      padding-left: 0.1rem;
      padding-top: 0.2rem;
      .button {
        display: inline-block;
        width: 10%;
        vertical-align: top;
        padding-top: 0.5rem;
        img {
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
        }
      }
      .image {
        display: inline-block;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      .contain {
        margin-left: 0.1rem;
        width: 5rem;
        display: inline-block;
        vertical-align: top;
        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 14px;
        }
        input {
          display: inline-block;
          width: 4.9rem;
          height: 0.5rem;
          border: 1px solid #e5e5e5;
          margin-top: 0.15rem;
          font-size: 14px;
        }
      }
    }
    .bottom {
      width: 4.9rem;
      float: right;
      overflow: hidden;
      margin-top: 0.1rem;
      .price {
        color: red;
        width: 1.5rem;
        float: left;
      }
      .jisuan {
        float: right;
        margin-bottom: 0.2rem;

        input {
          width: 1.2rem;
          height: 0.5rem;
          background-color: #f7f7f7;
          border: none;
          text-align: center;
          vertical-align: top;
        }
        span {
          display: inline-block;
          vertical-align: top;
          width: 0.5rem;
          height: 0.5rem;
          background-color: #f7f7f7;
          margin-left: 0.1rem;
          text-align: center;
          margin-right: 0.1rem;
          display: inline-block;
          font-size: 0.68rem;
          line-height: 0.4rem;
        }
      }
    }
  }
}
</style>