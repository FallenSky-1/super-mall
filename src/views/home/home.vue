<!--  -->
<template>
  <div id="home">
    <nav-bar class="home_navbar">
      <div slot="middle">购物街</div>
    </nav-bar>
    <scroll class="scroll-wrapper" ref="scroller" :probeTypeIndex="3"  @positionCheck="showBackTop" :pullup="true" @pullConvey="loadMore">
      <home-swiper :swiperList="swiperlist"></home-swiper>
      <home-recommend :recommendList="recommend"></home-recommend>
      <feature></feature>

      <!-- 引用数据类型之间的props传递要加: -->
      <tab-control :tabControl_list="['流行','新款','精选']" id="tab-control" @convey="getson"></tab-control>
      <good-list :goodlist="goods[index_type].list"></good-list>
    </scroll>

    <!-- 监听组件点击必须加上.native -->
    <!-- <back-top class="backtop" @click.native="backto"></back-top> -->
    <!-- 这时候如果给了v-show或者v-if，那么页面的刷新极其极其频繁 -->
  </div>
</template>

<script>
import NavBar from "../../components/common/NavBar";
import { getMuitlData, getMuitlData2 } from "../../network/home";
import HomeSwiper from "../home/childcomps/HomeSwiper";
import HomeRecommend from "./childcomps/HomeRecommend";
import Feature from "./childcomps/Feature";
import TabControl from "../../components/content/tabControl";
import GoodList from "./childcomps/GoodList";
import scroll from "../../components/common/scroll/scroll";
import BackTop from "../../components/content/backTop";

export default {
  name: "home",
  data() {
    return {
      swiperlist: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      //这里的默认值必须是"pop"，因为上面有goods[index_type].list,如果设置成null的话会在这步报错
      index_type: "pop",
      backTopShow: false,
    };
  },
  created() {
    this.getdata();
    this.getdata2("pop");
    this.getdata2("new");
    this.getdata2("sell");

    },
  
   mounted() {
     //在mounted里监听比在created里监听更好
     this.$bus.$on("refreshFunction",()=>{
        this.$refs.scroller.scroll.refresh()
   })
   },
  methods: {
    getdata() {
      getMuitlData().then((res) => {
        this.swiperlist = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getdata2(currentType) {
      const currentPage = this.goods[currentType].page + 1;
      getMuitlData2(currentType, currentPage).then((res) => {
        this.goods[currentType].list.push(...res.data.data.list);
        // console.log(res.data.data.list);
      });
      this.goods[currentType].page + 1;
      // this.refs.scroller.finshPullUp (现在还不知道有什么实际用，目前感觉加不加都行，也可以加在loadMore()里)
    },
    getson(index) {
      if (index == 0) {
        this.index_type = "pop";
      } else if (index == 1) {
        this.index_type = "new";
      } else if (index == 2) {
        this.index_type = "sell";
      }
    },
    backto() {
      this.$refs.scroller.back()
    },
    // 刷新频繁的导火线
    showBackTop(position){
      this.backTopShow = -position.y>520
    },
    // isShow(){
    //   if(true){
    //     console.log(this.$refs.scroller.conveyPosition)
    //   }
    // }
    loadMore(){
      this.getdata2(this.index_type)
    }
  },

  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    Feature,
    TabControl,
    GoodList,
    scroll,
    BackTop,
  },
};
</script>

<style scoped>
.home_navbar {
  width: 100%;
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: 999;
}

#home {
  padding-top: 44px;
}

/* 在这里定义CSS样式,而不是组件里,确保只有特定的tabControl组件具有sticky属性,而不是所有sticky都有 */
#tab-control {
  position: sticky;
  top: 43.5px;
  z-index: 9;
}

.scroll-wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
  /* height: 475px; */
}

/* .backtop{
  position: fixed;
  bottom: 55px;
  right: 8px;
} 
  这个属性可以放在backTop组件里，因为所有的backTop基本都在页面中的这个位置
*/
</style>