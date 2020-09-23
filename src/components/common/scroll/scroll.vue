<!--  -->
<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeTypeIndex: {
      type: Number,
    },
    pullup:{
      type:Boolean,
    }
  },
  updated() {
    //  必须加这行注释,原因:使用better-scroll时会默认阻止浏览器的各种原生事件(例如说click,mouseWheel)
    const options = {
      click: true,
      taps: true,
      mouseWheel: true,
      probeType: this.probeTypeIndex,
      pullUpLoad:this.pullup,
    };
    // 如果一个页面中有许多个class为wrapper的元素，那么better-scroll究竟该创建哪个元素会形成歧义
    // 因此可以直接用this.$refs访问
    this.scroll = new BScroll(this.$refs.wrapper, options);
    
    // 监听滚动的位置
    this.scroll.on("scroll",position=>{
        this.$emit("positionCheck",position)
    })

    this.scroll.on("pullingUp",()=>{
      this.$emit("pullConvey")
    })
  },
  methods: {
    back() {
      this.scroll.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
</style>