<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useData, useRouter } from 'vitepress';
import { useI18n } from '@/i18n';

import AppContent from '@/components/AppContent.vue';
import HomeBanner from './HomeBanner.vue';
import HomeVideo from './HomeVideo.vue';

import advantage1 from '@/assets/category/home/advantage/img1.png';
import advantage2 from '@/assets/category/home/advantage/img2.png';
import advantage3 from '@/assets/category/home/advantage/img3.png';
import advantage4 from '@/assets/category/home/advantage/img4.png';

import HomeConfig from '@/data/home/';

const { lang } = useData();
const i18n = useI18n();

onMounted(() => {});

//特性图标
const advantageIcon = [advantage1, advantage2, advantage3, advantage4];
</script>

<template>
  <HomeBanner />
  <AppContent>
    <h2 class="home-title">{{ i18n.home.advantage.title }}</h2>
    <p class="advantage-text">{{ i18n.home.advantage.description }}</p>
    <OContainer class="advantage-contnet">
      <div
        v-for="(item, index) in i18n.home.advantage.list"
        :key="item.title"
        class="advantage-contnet-item"
      >
        <img :src="advantageIcon[index]" class="top-image" :alt="item.title" />
        <p class="title">{{ item.title }}</p>
        <p class="desc">{{ item.description }}</p>
      </div>
    </OContainer>
  </AppContent>
  <HomeVideo />
</template>

<style lang="scss" scoped>
.home-title {
  text-align: center;
  color: var(--o-color-text1);
  font-size: var(--o-font-size-h3);
  line-height: var(--o-line-height-h3);
  font-weight: 300;
  @media screen and (max-width: 1100px) {
    font-size: var(--o-font-size-h8);
    line-height: var(--o-line-height-h8);
    margin-bottom: var(--o-spacing-h5);
  }
}
.advantage-text {
  font-size: var(--o-font-size-h7);
  line-height: var(--o-line-height-h7);
  color: var(--o-color-text1);
  font-weight: 500;
  margin: 24px 0 40px;
  text-align: center;
}
.advantage-contnet {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  gap: 100px;
  &-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
      width: 100%;
      align-items: flex-start;
      justify-content: center;
      margin-bottom: 16px;
    }
    .top-image {
      width: 124px;
      height: 124px;
    }
    .title {
      font-size: var(--o-font-size-h7);
      line-height: var(--o-line-height-h7);
      color: var(--o-color-text1);
      font-weight: 500;
      margin: 16px 0 24px;
    }
    .desc {
      font-size: var(--o-font-size-text);
      line-height: var(--o-line-height-text);
      color: var(--o-color-text4);
    }
  }
  @media (max-width: 1400px) {
    gap: 64px;
  }
  @media (max-width: 1100px) {
    padding: 24px;
    gap: 40px;
  }
  @media (max-width: 768px) {
    padding: 16px;
    display: block;
  }
}
</style>
