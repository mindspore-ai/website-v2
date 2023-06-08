<script setup lang="ts">
import AOS from 'aos';
import { computed, onMounted } from 'vue';

const props = defineProps({
  lecturerList: {
    type: Object,
    required: true,
    default: () => null,
  },
  shape: {
    type: String,
    default: 'circle',
  },
  webColumnsNum: {
    type: Number,
    default: 4,
  },
  mobileColumnsNum: {
    type: Number,
    default: 2,
  },
});

const summitStyle = computed(() => {
  return {
    '--shape': props.shape,
    '--webColumnsNum':
      props.webColumnsNum < 1
        ? 4
        : props.webColumnsNum > 8
        ? 8
        : props.webColumnsNum,
    '--mobileColumnsNum':
      props.mobileColumnsNum < 1
        ? 1
        : props.mobileColumnsNum > 2
        ? 2
        : props.mobileColumnsNum,
  };
});
onMounted(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    delay: 100,
  });
});
</script>

<template>
  <div class="lecturer-list" :style="(summitStyle as any)">
    <div
      v-for="item in lecturerList"
      :key="item.NAME"
      data-aos="fade-up"
      class="lecturer-list-item"
    >
      <div
        :class="
          summitStyle['--shape'] === 'square'
            ? 'lecturer-list-item-square'
            : 'lecturer-list-item-circle'
        "
      >
        <img :src="item.img" />
      </div>
      <p class="name">{{ item.name }}</p>
      <p
        v-for="titleItem in item.position"
        :key="titleItem"
        class="lecturer-list-item-title"
      >
        {{ titleItem }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dark img {
  filter: brightness(0.8) grayscale(0.2) contrast(1.2);
}
.lecturer-list {
  margin: var(--o-spacing-h2) auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(82px, 1fr));
  gap: 40px;
  @media (max-width: 1416px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .lecturer-list-item {
    // width: 354px;
    @media (max-width: 780px) {
      width: 100%;
      margin: 0 auto;
    }
    .lecturer-list-item-square {
      display: block;
      height: 130px;
      width: 130px;
      overflow: hidden;
      position: relative;
      left: 10%;
      img {
        width: 190px;
        height: 190px;
        position: relative;
        bottom: 20%;
        right: 25%;
      }
    }
    .lecturer-list-item-circle {
      img {
        width: 120px;
        height: 120px;
        margin: 0 auto;
        display: block;
        @media (max-width: 780px) {
          width: 95px;
          height: 95px;
        }
      }
    }
    .name {
      font-size: var(--o-font-size-h8);
      line-height: var(--o-line-height-h8);
      color: var(--o-color-brand1);
      text-align: center;
      margin: 14px 0;
      @media (max-width: 780px) {
        font-size: var(--o-font-size-text);
        line-height: var(--o-line-height-text);
        margin-top: 6px;
      }
    }
    .lecturer-list-item-title {
      color: var(--o-color-text1);
      font-size: var(--o-font-size-text);
      font-weight: 400;
      text-align: center;
      line-height: var(--o-line-height-text);
      @media (max-width: 780px) {
        font-size: var(--o-font-size-tip);
        line-height: var(--o-line-height-tip);
        padding: 0 8px;
      }
      & + .lecturer-list-item-title {
        margin-top: 2px;
      }
    }
  }
}
</style>
