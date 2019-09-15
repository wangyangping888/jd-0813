<template>
<div class="gouwu">
    <div class="cart" v-for="(item,index) in products" :key="index">
      <div class="top">
        <div class="button">
          <img :src="item.flag?b:a" @click="select(index,item)" />
        </div>
        <div class="title" v-text="item.title1"></div>
      </div>
      <div class="center">
        <div class="button" >
          <img :src="item.flag?b:a" @click="select(index,item)" />
        </div>
        <div class="image">
          <img :src="item.img" />
        </div>
        <div class="contain">
          <div class="title" v-text="item.title2"></div>
          <div class="title3" v-text="item.title3"></div>
        </div>
      </div>
      <div class="bottom">
        <div class="price">¥{{item.price}}</div>
        <div class="jisuan">
          <span  @click="item.number<=1?1:--item.number">-</span>
          <input type="number" v-model="item.number" />
          <span @click="item.number++">+</span>
        </div>
      </div>
    </div>
    {{sum}}{{total}}
    <div style="height:2rem"></div>
</div>
</template>
<script>
export default {
    data:function(){
        return{
            number:1,
            a:require('../assets/icons/xuan.png'),
            b:require('../assets/icons/xuan-active.png'),
            select1:[],
            products:[{
              flag:false,
              number:1,
              id:1,
              title1:"乐尔康享购专卖店",
              img:require("../assets/images/product1.jpg"),
              title2:"乐尔康（Le er kang）颈椎按摩椅全自动家用多功能太空豪华舱全身揉捏推拿按摩椅电动沙发椅 尊享版白金色",
              price:"2180",
              title3:"尊享版白金色",
            },
            {
              flag:false,
              number:1,
              id:1,
              title1:"绿州服饰专营店",
              img:require("../assets/images/pro-bag.png"),
              title2:"小孩抽绳帆布束口包袋水桶篮球包男士户外运动训练健身背包双肩包旅行 黑色",
              price:"156",
              title3:"黑色",
            },
            {
              flag:false,
              number:1,
              id:1,
              title1:"京东自营",
              img:require("../assets/images/xq3.png"),
              title2:"小狗（puppy）家用除螨无线挂式充电手持吸尘器T10 Cyclone",
              price:"1099",
              title3:"直线风轨 45分钟长续航",
            },]
        }

    },
    props:{
       selects:{
         type:Boolean,
         default:false,
       }
    },
    watch:{
      select1:function(newval,oldval){
          if(newval.length == this.products.length){
            console.log(123)
              this.$emit('allselect',true);
          } else{
              this.$emit('allselect',false);

          }
      },
      selects:function(e){
          console.log(e);
          this.products.forEach(function(item,index){
                item.flag = e;
          })
      },
    },
    created:{

    },
    computed:{
      sum:function(){
        var n = 0;
        this.products.forEach(function(item){
            if(item.flag){
              n += item.number * item.price;
            }
        });
        this.$emit("changesum",n);
        return n;
        
      },
      total:function(){
        var n = 0;
        this.products.forEach(function(item){
            if(item.flag){
              n += item.number;
            }
        });
        this.$emit("changetotal",n)
        return n;
      },
    },
    methods:{
      select:function(index,item){
        item.flag = !item.flag;
        if(item.flag){
          this.select1.push(index);
        }else{
          this.select1.forEach((item,ind)=>{
              if(item == index){
                this.select1.splice(ind,1);
              }
          })
          

        }
        console.log(this.select1);
      }
    },
}
</script>
<style lang="less">
.gouwu {
	
  .cart {
    background-color: #fff;
	padding-top:1.2rem;
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
          width: 0.4rem;
          height: 0.4rem;
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
          width: 0.4rem;
          height: 0.4rem;
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
        .title3 {
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