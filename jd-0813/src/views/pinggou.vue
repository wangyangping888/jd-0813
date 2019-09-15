<template>
  <div class="pinggou">
    <proTitle>京东拼购</proTitle>
    <div class="top">
      <div class="search">
        <div class="search-all">
          <span class="iconfont">&#xe62a;</span>
          <input type="text" placeholder="请输入搜索内容" />
        </div>
        <div class="button">取消</div>
      </div>
    </div>
    <div class="container">
      <div class="hot-word">
        <p v-if="history.length>0">
          历史搜索
          <span class="garbage" @click="history=[];"></span>
        </p>
        <span
          class="tag"
          v-for="item in history"
          v-text="item"
          :key="item"
          @click="$router.push({path:'/result',query:{search:item}});"
        ></span>
        <p>热门搜索</p>
        <span
          class="tag"
          v-for="(item,index) in hot"
          v-text="item"
          :key="index"
          @click="$router.push({path:'/result',query:{search:item}});"
        ></span>
      </div>
      <div class="recommend-word" v-show="search.length>0">
        <!-- 推荐的词 -->
        <ul>
          <li
            class="clear"
            v-for="(item,index) in searchWord"
            :key="index"
            @click="$router.push({path:'/result',query:{search:item.title}});"
          >
            {{item.title}}
            <span
              class="tag right"
              v-for="(sub,j) in item.tag.split(',')"
              :key="j"
            >{{sub}}</span>
          </li>
        </ul>
      </div>
    </div>
    <navBar></navBar>
  </div>
</template>
<style lang="less">
.pinggou {
  background-color: #fff;
  .top {
    .search {
      margin-top: 1.01rem;
      padding: 0.2rem 0;
      box-sizing: border-box;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      width: 100%;
      .search-all {
        background-color: #f2f2f7;
        border-radius: 20px;
        width: 80%;
        height: 0.6rem;
        position: relative;
        .iconfont {
          font-size: 0.45rem;
          color: #cdcdcd;
          margin-left: 0.08rem;
          margin-top: -0.02rem;
        }
        input {
          border: none;
          margin-top: -0.5rem;
          box-sizing: border-box;
          background-color: #f2f2f7;
          color: #333;
          font-size: 14px;
          position: absolute;
          top: 0.65rem;
          left: 0.6rem;
          &:focus {
            outline: none;
          }
        }
      }
      .button {
        width: 1rem;
        height: 0.6rem;
        background-color: #e93b3d;
        border-radius: 10%;
        color: #fff;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.16rem;
      }
    }
  }
  .recommend-word {
    width: 100%;
    background-color: #ffffff;
    position: fixed;
    top: 0.9rem;
    left: 0;
    ul {
      padding: 0 0.24rem;
    }
    li {
      line-height: 0.84rem;
      font-size: 0.26rem;
      color: #232326;
    }
    .tag {
      color: #686868;
      font-size: 0.24rem;
      display: block;
      height: 0.46rem;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      background-color: #f0f2f5;
      border-radius: 0.06rem;
      line-height: 0.46rem;
      margin-left: 0.2rem;
      margin-top: 0.18rem;
    }
  }
  .hot-word {
    padding: 1rem 0.24rem 0;
    p {
      font-size: 0.3rem;
      line-height: 0.3rem;
      color: #232326;
      width: 100%;
      margin: 0.3rem 0 0.2rem;
    }

    .garbage {
      float: right;
      display: block;
      width: 0.3rem;
      height: 0.3rem;
      background-image: url(../assets/icons/icon-delet.png);
      background-size: contain;
    }
    .tag {
      height: 0.46rem;
      line-height: 0.46rem;
      border-radius: 0.06rem;
      display: inline-block;
      color: #686868;
      white-space: nowrap;
      text-overflow: ellipsis;
      background-color: #f0f2f5;
      padding-left: 0.26rem;
      padding-right: 0.26rem;
      overflow: hidden;
      box-sizing: border-box;
      margin: 0 0.2rem 0.2rem 0;
    }
  }
}
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
    a {
      line-height: 1;
    }
    img {
      width: 0.46rem;
      height: 0.46rem;
    }
    p {
      font-size: 0.2rem;
      text-align: center;
      margin-top: 0rem;
      padding-top: 0rem;
    }
    .current {
      color: red;
    }
  }
}
</style>
<script>
import "../assets/font_1348016_mhcybahh23/iconfont.css";
import navBar from "@/components/NavBar.vue";
import proTitle from "@/components/proTitle.vue";
export default {
  data: function() {
    return {
      shortcut: false,
      search: "",
      searchWord: [],
      history: ["手机", "男装", "运动鞋"],
      hot: ["华为手机", "苹果手机", "男人的衣柜", "衣服"]
    };
  },
  mounted: function() {
    console.log(this.$route);
    this.current = this.$route.path;
  },
  methods:{
    searchTips(str) {
      axios
        .post(this.api.searchHotWord, qs.stringify({ keyword: this.search }))
        .then(res => {
          console.log(res);
          this.searchWord = res.data;
        })
        .catch();
    },
    searchGo() {
      if (this.search != "")
        this.$router.push({ path: "/result", query: { search: this.search } });
    }
  },
  components: {
    navBar,
    proTitle
  }
};
</script>