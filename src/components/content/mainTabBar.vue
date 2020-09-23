
<template>
 <div>
 <tab-bar>
      <tab-bar-item path="/home">
        <img src="../../../src/assets/img/爱心.png" alt slot="item-icon" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="../../../src/assets/img/爱心.png" alt slot="item-icon" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="../../../src/assets/img/爱心.png" alt slot="item-icon" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="../../../src/assets/img/爱心.png" alt slot="item-icon" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
 </div>
</template>

<script>
import TabBar from "../common/TabBar"
import TabBarItem from "../common/TabBarItem"

export default {

 data () {
  return {

  };
 },

 components: {
    TabBar,
    TabBarItem
 },
}

</script>
<style scoped>
</style>