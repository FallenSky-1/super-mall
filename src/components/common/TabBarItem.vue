<!--  -->
<template>
  <div class="tab-bar-item" @click="toPath">
    <!-- 用div里面slot的方式进行:class的传递以及属性(例如说字体颜色的变化) -->
    <div>
      <slot name="item-icon"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     isActive: true,
  //     // path:"",path一定要放在props,经由App组件里传过来
  //   };
  // },
   props:{
    path:String,
   },
   methods: {
     toPath(){
      //  this也可以访问props里面的数据
      if(this.$route.path !== this.path)
        this.$router.replace(this.path)
     },
   },
   computed: {
     isActive(){
      //  用this.$route.path来控制字体的颜色
      //  实际上刚点进去时，首页按钮并不是被选中的状态
      //  每个元素都有一个单独的this.path属性
      //  实际上是进行了四次判断(把判断结果为true的伶出来)
       return this.$route.path == this.path;
      /*
         activeStyle(){
           return this.isActive?{color:this.activecolor}:{}
           然后给div动态绑定style:"activeStyle"之后,就自己在App.vue通过props传想要的颜色了
          
         }
      */
     }
   },
};
</script>
<style  scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

.active{
  color: red;
}
</style>