<template>
  <div>
    <swiper>
      <swiper-item v-for="(items,index) in swiperList" :key="index">
        <a :href="items.link">
          <img :src="items.image" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "../../../components/common/swiper/Swiper";
import SwiperItem from "../../../components/common/swiper/SwiperItem";

export default {
  data() {
    return {};
  },

  props: {
    swiperList: {
      type: Array,
    },
  },

  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
</style>