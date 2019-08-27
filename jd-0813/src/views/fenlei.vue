<template>
  <div class="fenlei">
    <proTitle>商品分类</proTitle>
    <div class="cate">
      <aside
        ref="aside"
        @touchstart="ontouchstart"
        @touchmove="ontouchmove"
        @touchend="ontouchend"
        :class="{transition:transition}"
        @touchcancle="ontouchcancle"
      >
        <ul ref="scroll" :style="{top:tmp+'px'}">
          <li
            v-for="(item,index) in lei"
            :key="index"
            @click="onClick(index)"
            v-text="item"
            :class="{active:navIndex==index}"
          ></li>
        </ul>
      </aside>
      <div class="right">
        <p class="text" v-text="txt1"></p>
		<ul>
			<li v-for="(item,index) in img" :key="index" ref = "flitem">
				<img :src="item.url" />
				<p v-text="item.title"></p>
			</li>
		</ul>
      </div>
    </div>
    <navBar></navBar>
  </div>
</template>
<style lang="less">
.fenlei {
  height: 100%;
  width: 100%;
  .cate {
    text-align: center;
    width: 100%;
    height: 100%;
    padding-top: 1.06rem;
    padding-bottom: 0.98rem;
    box-sizing: border-box;
    color: black;
    background-color: #fff;
	display:flex;
	flex-wrap:nowrap;
	justify-content:space-between;
    aside {
      width: 2rem;
      background-color: #f8f8f8;
      display: inline-block;
      height: 100%;
      position: relative;
      overflow: hidden;
      ul {
        position: absolute;
        left: left;
        width: 100%;
        li {
          padding-left: 0.15rem;
          padding-right: 0.15rem;
          padding-bottom: 0.3rem;
          padding-top: 0.3rem;
          &.active {
            color: red;
            background: #fff;
          }
        }
      }
    }
	.right {
	  display: inline-block;
	  background-color: white;
	  width: 73%;
	  height: 100%;
	  
	  p.text{
		  text-align: left;
		  margin-top: 20px;
		  margin-left: 10px;
		  font-weight: bold;
	  }
	  ul{
		  width: 100%;
		  display:flex;
		  justify-content:space-between;
		  flex-wrap:wrap;
		  li{
			  text-align:left;
			  width:28%;
			  img{
				  width: 1.4rem;
				  height: 1.4rem;
			  }
			  p{
				text-align: center;  
			  }
		  }
	  }
	}
  }
  
  .transition {
    transition: top 0.3s linear;
  }
}

.transition {
  transition: top 0.3s linear;
}
</style>
<script>
import proTitle from "@/components/proTitle.vue";
import navBar from "@/components/NavBar.vue";
import "../assets/font_1348016_mhcybahh23/iconfont.css";
export default {
  data: function() {
    return {
      lei: [
        "热门推荐",
        "手机数码",
        "家用电器",
        "电脑办公",
        "计生情趣",
        "美妆护肤",
        "个护清洁",
        "汽车生活",
        "京东超市",
        "男装",
        "男鞋",
        "女装",
        "女鞋",
        "母音童装",
        "图书音像",
        "户外运动",
        "内衣配饰",
        "食品生鲜",
        "酒水饮料",
        "家居家装",
        "家居厨具",
        "箱包手袋",
        "钟表珠宝",
        "玩具乐器",
        "医药保健",
        "宠物生活"
      ],
	  img:[{
		  url:require("../assets/images/phone.png"),
		  title:"手机",
	  },
	  {
	  		  url:require("../assets/images/erji.png"),
	  		  title:"耳机",
	  },
	  {
	  		  url:require("../assets/images/huawei.png"),
	  		  title:"华为",
	  },
	  {
	  		  url:require("../assets/images/dianfan.png"),
	  		  title:"电饭煲",
	  },
	  ],
      navIndex: 0,
      startY: 0,
      offsetTop: 0,
      limitTop: 0,
      tmp: 0,
	  txt1:'热门推荐',
      transition: false
    };
  },
  components: {
    proTitle,
    navBar,
  },
  methods: {
    ontouchstart: function(e) {
      this.startY = e.changedTouches[0].clientY;
      this.transition = false;
    },
    ontouchmove: function(e) {
      let y = e.changedTouches[0].clientY;
      // // 计算滑动的距离
      this.tmp = this.offsetTop + y - this.startY;
      // // 限定滑动的长度（150）
      this.tmp = this.tmp > 150 ? 150 : this.tmp;
      this.tmp = this.tmp < this.limitTop ? this.limitTop : this.tmp;
    },
    ontouchend: function(e) {
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? (this.limitTop + 150) : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    },
    ontouchcancle(e) {
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =
        this.tmp < this.limitTop + 150 ? -(this.limitTop + 150) : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
    },
    onClick(index) {
      this.navIndex = index;
      // 根据 索引值计算滚动的距离
      this.tmp = this.$refs["scroll"].offsetHeight * (this.navIndex / 26) * -1;

      // 越界处理
      this.tmp = this.tmp > 0 ? 0 : this.tmp;
      this.tmp =this.tmp < this.limitTop + 150 ? this.limitTop + 150 : this.tmp;
      this.offsetTop = this.tmp;
      this.transition = true;
	  this.txt1 = this.lei[index];
	  // var image = this.img;
	  if(index %2  == 0) {
		  this.img.reverse();
	  }
    }
  },
  mounted: function() {
    this.limitTop =
      this.$refs["aside"].offsetHeight -
      this.$refs["scroll"].offsetHeight -
      150;
  }
};
</script>