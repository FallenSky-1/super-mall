
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"NavBar",
  data() {
    return {};
  },
};
</script>
<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.middle{
  flex:1;
}

.left,.right{
  width: 60px;
}
</style>