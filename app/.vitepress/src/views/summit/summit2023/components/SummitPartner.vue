<script setup lang="ts">
import { useAttrs } from 'vue';
import partnerData from '../data/partner';

const attrs = useAttrs();
const props = defineProps({
  partnerData: {
    type: Object,
    required: true,
    default: () => null,
  },
  row: {
    type: Number,
    required: false,
    default: 4,
  },
});
</script>

<template>
  <div
    v-for="item in partnerData.partnerList"
    :key="item.subTitle"
    class="partner-item"
  >
    <h2>{{ item.subTitle }}</h2>
    <div class="picture-panel" v-bind="attrs">
      <div
        v-for="itemLogo in item.logoList"
        :key="itemLogo.img"
        class="link-item"
      >
        <img
          v-if="itemLogo.img || itemLogo.img_dark"
          :src="attrs.theme === 'light' ? itemLogo.img : itemLogo.img_dark"
        />
        <p v-else>{{ itemLogo.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.partner-item {
  margin-top: var(--o-spacing-h1);
  @media screen and (max-width: 768px) {
    margin-top: var(--o-spacing-h4);
  }
  h4 {
    font-size: var(--o-font-size-h5);
    line-height: var(--o-line-height-h5);
    color: var(--o-color-text1);
    font-weight: 400;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: var(--o-font-size-text);
      line-height: var(--o-line-height-text);
    }
  }
  .picture-panel {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 910px;
    // grid-template-columns: repeat(v-bind('props.row'), minmax(82px, 1fr));
    // column-gap: 0;
    // row-gap: 0;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(
        v-bind('(props.row)-2'),
        minmax(82px, 270px)
      );
    }
    @media screen and (max-width: 500px) {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(
        v-bind('(props.row)-2'),
        minmax(82px, 270px)
      );
    }
    .link-item {
      align-items: center;
      // border: 1px solid var(--o-color-division1);
      overflow: hidden;
      margin-right: 24px;
      padding: 0 16px;
      & ~ .link-item {
        @media screen and (max-width: 500px) {
          margin-left: 0;
          padding: 0;
        }
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      p {
        font-size: 20px;
        line-height: 44px;
        text-align: center;
        min-width: 60px;
        @media screen and (max-width: 768px) {
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
    :deep(a) {
      cursor: default;
    }
  }
}
</style>
