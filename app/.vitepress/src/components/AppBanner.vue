<script lang="ts" setup>
import banner from '@/assets/category/calendar/banner-event.png';

defineProps({
  option: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <div class="app-banner" :style="{ backgroundImage: `url(${banner})` }">
    <div class="inner">
      <div class="info">
        <h2 class="title">{{ option.title }}</h2>
      </div>
      <div class="cover">
        <img :src="option.cover" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-banner {
  width: 100%;
  background: #0d8dff no-repeat;
  .inner {
    max-width: 1416px;
    margin: 0 auto;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }

    .title {
      font-size: 54px;
      font-weight: 500;
      color: #fff;
      line-height: 76px;
      @media screen and (max-width: 768px) {
        margin: 0 16px;
        text-align: center;
        font-size: 24px;
        line-height: normal;
      }
    }

    .cover {
      max-width: 542px;
      display: flex;
      height: 100%;
      align-items: center;
      transition: all 0.3s;
      img {
        height: 288px;
        object-fit: cover;
      }
    }
    @media screen and (max-width: 1439px) {
      max-width: 1080px;
    }
  }
}
</style>
