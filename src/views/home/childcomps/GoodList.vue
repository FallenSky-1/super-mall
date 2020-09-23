<template>
  <div id="good-list">
    <div v-for="(items,index) in goodlist" :key="index" class="good-list-items">
      <img :src="items.show.img" alt @load="loadFunction"/>
      <div class="goods-info">
        <p class="title">{{items.title}}</p>
        <span class="price">{{items.price}}</span>
        <span class="collect">{{items.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: null,
    };
  },

  props: {
    goodlist: {
      type: Array,
    },
  },
  methods: {
    loadFunction(){
      this.$bus.$emit("refreshFunction")
    }
  },
};
</script>
<style scoped>
#good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.good-list-items {
  width: 47%;
  padding: 5px;
}
img {
  width: 100%;
  height: 85%;
}
.goods-info {
  text-align: center;
  font-size: 12px;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.collect {
  position: relative;
}
</style>