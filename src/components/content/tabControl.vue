<template>
  <div id="tab-control">
    <div
      v-for="(items,index) in tabControl_list"
      :key="index"
      class="tab-control-item"
      :class="{active:index===currentIndex}"
    >
      <span @click="getCurrentIndex(index)">{{items}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      currentIndex2:null,
    };
  },

  props: {
    tabControl_list: {
      type: Array,
    },
  },

  methods: {
    getCurrentIndex(index) {
      this.currentIndex = index;
      this.currentIndex2 = index;
      this.$emit("convey",this.currentIndex2);
    },
    // getIndexOfgoodlist(index){
    //   this.currentIndex2 = index;
    //   this.$emit("convey",this.currentIndex2);
    // }
  },
};
</script>
<style scoped>
#tab-control {
  display: flex;
  text-align: center;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
  font-size: 13.5px;
  line-height: 32px;
}

.active span {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>