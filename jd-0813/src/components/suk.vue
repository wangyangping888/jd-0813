<template>
  <div class="sukbar" >
    <transition name="fade">
      <div class="suk" v-show="dian">
        <div class="box">
          <div class="amy">
            <img src="../assets/images/amy.png" />
          </div>
          <div class="price_all">
            <p>￥1980</p>
            <p class="selected">
              已选
            <span v-text="color[colorindex]"  ></span>
            <span> , {{number}}个</span>
            </p>
          </div>
        </div>
        <div class="cha" @click="$emit('input',false)">
          <img src="../assets/images/cha.png" />
        </div>
        <div class="color">
          <p>颜色</p>
          <ul class="color1">
            <li v-for="(item,index) in color " :key="index" @click="colorindex=index">
              <span v-text="item" :class="{active:index==colorindex}"></span>
            </li>
          </ul>
        </div>
        <div class="number">
          <p>数量</p>
          <div class="shuliang">
            <span class="jian"  @click="number<=1?1:--number">-</span>
            <input type="text" v-model="number" />
            <span class="jia" @click="number++">+</span>
          </div>
        </div>
        <div class="goumai-all">
          <div class="jiaru">加入购物车</div>
          <div class="goumai">立即购买</div>
        </div>
      </div>
    </transition>
    <div class="masks" v-show="dian" @click="$emit('input',false)"></div>
  </div>
</template>
<style lang="less">
.sukbar {
  .suk {
    width: 100%;
    background-color: white;
    max-height: 10rem;
    min-height: 7rem;
    position: fixed;
    z-index: 999;
    bottom: 0;
    .box {
      position: relative;
      .amy {
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: -0.5rem;
        left: 0.3rem;
        img {
          width: 100%;
        }
      }
      .price_all {
        margin-left: 2.5rem;
        color: red;
        .selected {
          color: #999;
          font-size: 0.3rem;
        }
      }
    }
    .cha {
      width: 0.25rem;
      height: 0.25rem;
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .color {
      p {
        color: #999;
        margin-top: 0.8rem;
        font-size: 0.3rem;
        margin-left: 0.3rem;
      }
      .color1 {
        overflow: hidden;
        margin-left: 0.3rem;
        li {
          span {
            display: block;
            float: left;
            background-color: #f7f7f7;
            min-width: 1rem;
            max-width:3rem;
            padding: 0.1rem;
            text-align: center;
            margin-right: 0.1rem;
            margin-top: 0.2rem;
            border-radius: 5%;
          }
          .active {
            color: white;
            background-color: red;
          }
        }
      }
    }
    .number {
      overflow: hidden;
      margin-top: 0.3rem;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      p {
        margin-left: 0.3rem;
      }
      .shuliang {
        margin-right: 0.25rem;
        input {
          width: 1.2rem;
          height: 0.5rem;
          background-color: #f7f7f7;
          text-align: center;
          border: 0;
          vertical-align: top;
        }
        span {
          &.jia {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            background-color: #f7f7f7;
            text-align: center;
            font-size: 0.6rem;
            vertical-align: top;
            line-height: 0.4rem;
            margin-left: 0.1rem;
          }
          &.jian {
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            background-color: #f7f7f7;
            text-align: center;
            font-size: 0.68rem;
            vertical-align: top;
            line-height: 0.4rem;
            margin-right: 0.1rem;
          }
        }
      }
    }
    .goumai-all{
      width: 100%;
      // height: 5rem;
      color: white;
      text-align: center;
      overflow: hidden;
      position: fixed;
      bottom: 0;
      .jiaru{
        background-color: #ffbc00;
        float: left;
        width: 50%;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        box-sizing: border-box;
      }
      .goumai{
        background-color: #f10000;
        float: left;
        width: 50%;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        box-sizing: border-box;
      }
    }
  }
 .masks {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
}
.fade-enter {
  transform: translateY(100%);
}
.fade-enter-to {
  transform: translateY(0%);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-leave {
  transform: translateY(0%);
}
.fade-leave-to {
  transform: translateY(100%);
}
</style>
<script>
export default {
  data() {
    return {
      dian: false,
      color: ["金色音乐款", "棕色音乐款"],
      colorindex: 0,
      number:1,
      flag:false,
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {   
    
  },
  watch: {
    value: function(value) {
      this.dian = value;
    }
  },
  created: function() {
    this.dian = this.value;
  },
  methods:{
	  dianji:function(){
		 this.$emit('input',this.dian) 
	  }
      
  }
};
</script>