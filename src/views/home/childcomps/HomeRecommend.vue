<template>
  <div class="recommend1">
    <div v-for="(items,index) in recommendList" :key="index" class="recommend2">
      <a :href="items.link">
        <img :src="items.image" alt />
        {{items.title}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommendList: {
      type: Array,
    },
  },
};
</script>
<style scoped>
.recommend1 {
  width: 100%;
  display: flex;
  text-align: center;
  margin-top: 8px;
  padding-bottom: 12px;
  border-bottom: solid 8px #eee;
  
}

.recommend2 img {
  width: 93%;
}
</style>