<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from "../src/components/content/mainTabBar"

export default {
  components:{
    mainTabBar
  }
}
</script>

<style>
   @import "../src/assets/css/base.css"
</style>
