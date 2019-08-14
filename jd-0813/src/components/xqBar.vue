<template>
  <div class="xqbar">
    <ul>
      <li class="left" v-for="(item,index) in xq" :key="index">
        
        <div class="xq1">
            <img :src="(item.url)"  @click="jumpto(item)"/>
            <p class="title" v-text="item.title"></p>
          <div class="bottom">
            <p class="price" v-text="item.prices"></p>
            <span class="smiliar">找相似</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.xqbar {
//   background-color: red;
  margin-top:-0.15rem;
  padding-left: 10px;
  padding-right: 10px;
  ul {
    overflow: hidden;
    li {
      width: 49%;
      height: 5rem;
      margin-bottom:2%;
      box-sizing: border-box;
      float: left;
      background-color: white;
      
      .xq1 {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          padding: 0;
        }
        p.title {
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          color: #232326;
          line-height: 0.4rem;
          font-size: 0.24rem;
          padding: 0 0.04rem;
          margin: 0;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          overflow: hidden;
        }
        .bottom {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          p.price {
            font-size: 0.3rem;
            color: red;
          }
          .smiliar {
            border: #bfbfbf 1px solid;
            margin-right:0.1rem;
            padding: 0rem 0.05rem;
            color: #686868;
            border-radius: 10%;

          }
          font-size: 0.3rem;
        }
      }
      &:nth-child(2n) {
        margin-left: 1.5%;
    //   &:nth-child(2n + 1) {
    //       margin-right: 2%;
    //     }
      }
    }
  }
}
</style>
<script>
export default {
  data: function() {
      return{
          xq: [
      {
        id:1,
        url: require('../assets/images/xq1.png'),
        title:
          "乐尔康全自动按摩椅家用多功能零重力太空豪华舱SL轨迹全身揉捏推拿电动按摩沙发 棕色音乐款",
        prices: "￥4180"
      },
      {
        id:2,
        url: require('../assets/images/xq2.png'),
        title:
          " 小孩抽绳帆布束口包袋水桶篮球包男士户外运动训练健身背包双肩包旅行 黑色",
        prices: "￥156"
      },
      {
        id:3,
        url: require('../assets/images/xq3.png'),
        title: "小狗（puppy）家用除螨无线挂式充电手持吸尘器T10 Cyclone",
        prices: "￥1099"
      },
      {
        id:4,
        url: require('../assets/images/xq4.png'),
        title:
          "卡汐沐 电动牙刷家用软毛非充电式声波防水美白自动情侣牙刷 随机款式颜色",
        prices: "￥59"
      },
      {
        id:5,
        url: require('../assets/images/xq5.png'),
        title:
          "狄派 i7升八核台式机电脑主机 /双硬盘/GTX1060/游戏电竞3D渲染吃鸡组装电脑整机全套 主机+27寸曲面电竞显示器 套餐二（八核/1060独显/120G+1T双硬盘)",
        prices: "￥3899"
      },
      {
        id:6,
        url: require('../assets/images/xq6.png'),
        title:
          "凉拖鞋女士家用夏天防滑家居室内情侣2019新款夏季儿童拖鞋男外穿 绿色小恐龙 0509 36-37 适合平时35-36码",
        prices: "￥53.36"
      }
    ],
      }
    
  },
  methods:{
      jumpto:function(item){
          this.$router.push({name:'product',query:{pid:item.id,title:item.title}})
      }
  }
};
</script>