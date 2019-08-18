<template>
  <div class="title">
    <div class="top">
      <div class="back">
        <img src="../assets/images/back.png" @click="$router.go(-1)"/>
      </div>
      <div class="center">
        <slot></slot>
      </div>
      <div class="caidan" @click="caidan">
        <img src="../assets/images/caidan.png" />
      </div>
    </div>
    <div class="all" v-show="flag">
        <div class="san"></div>
        <div class="menu">
        <ul>
            <li v-for="(item,index) in list" :key="index">
            <span class="icon fa" :class="item.url"></span>
            <span v-text="item.title" class="text"></span>
            </li>
        </ul>
        </div>
    </div>
    <div class="mask" v-show="flag" @click="mask"></div>
  </div>
</template>
<style lang="less">
.title {
 position: relative;
  .top {
    background-color: #fff;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    .back {
      margin: 0;
      margin-top: 0.3rem;
      margin-left: 0.3rem;
      margin-bottom: 0.2rem;
      img {
        width: 0.3rem;
        height: 0.4rem;
        text-align: center;
      }
    }
    .center {
      float: left;
      margin-top: 0.3rem;
      margin-bottom: 0.2rem;
    }
    .caidan {
      margin-top: 0.2rem;
      margin-right: 0.3rem;
      margin-bottom: 0.2rem;
      img {
        width: 20px;
      }
    }
   
  }
  .san{
        background-color: #000;
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        top:1.22rem;
        right: 0.35rem;
        transition: all;
        transform: rotateZ(45deg);
        -webkit-transition: all;
        -webkit-transform: rotate(45deg);

    }
  .menu {
    
    background-color: #000;
    width: 2.5rem;
    height: 4rem;
    position: absolute;
    top: 1.3rem;
    right: 0.3rem;
    color: white;
    border-radius: 2%;
    ul{
        li{
            text-align: left;
            margin-left: 0.2rem;
            width:2.5rem;
            margin-top: 0.1rem;
            margin-bottom: 0.1rem;
            span.text{
                margin-left: 0.3rem;
                display: inline-block;
                border-bottom: gray 1px solid;
                width: 1.69rem;
            }
            &:last-child{
                span{
                    border: none;
                }
            }
        }
    }
  }

  .mask {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
<script>
export default {
  data: function() {
    return {
      flag:false,
      list: [
        {
          url: "fa-home",
          title: "首页"
        },
        {
          url: "fa-search",
          title: "分类搜索"
        },
        {
          url: "fa-user-circle-o",
          title: "我的京东"
        },
        {
          url: "fa-paw",
          title: "浏览记录"
        },
        {
          url: "fa-heart-o",
          title: "我的关注"
        },
        {
          url: "fa-share-square-o",
          title: "分享"
        }
      ]
    };
  },
  methods:{
      caidan:function(){
          console.log(1)
          this.flag=!this.flag
      },
      mask:function(){
          this.flag = false;
      }

  }
};
</script>