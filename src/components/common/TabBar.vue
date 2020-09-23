<!--  -->
<template>
    <div class="tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
   name:"TabBar",
  //  props:{
  //   path:String,
  //  },
  //  methods: {
  //    toPath(){
  //       this.$router.replace(this.path)
  //    },
  //  },
}

</script>
<style scoped>
   .tabbar{
     display: flex;
     background-color: rgb(243,243,243);
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
   }
</style>