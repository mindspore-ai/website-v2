<script setup lang="ts">
import { useAttrs } from 'vue';
import partnerData from '../data/partner';

const attrs = useAttrs();
const props = withDefaults(
  defineProps<{
    row?: number;
  }>(),
  {
    row: 4,
  }
);
</script>

<template>
  <div class="partner">
    <h3 class="partner-title">
      {{ partnerData.title }}
    </h3>
    <div
      v-for="item in partnerData.partnerList"
      :key="item.subTitle"
      class="partner-item"
    >
      <h4>{{ item.subTitle }}</h4>
      <div class="picture-panel" v-bind="attrs">
        <a
          v-for="itemLogo in item.logoList"
          :key="itemLogo.img"
          class="link-item"
        >
          <img
            :src="attrs.theme === 'light' ? itemLogo.img : itemLogo.img_dark"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.picture-panel {
  display: grid;
  grid-template-columns: repeat(v-bind('props.row'), minmax(82px, 1fr));
  column-gap: 0;
  row-gap: 0;
  .link-item {
    display: flex;
    margin: 0px -1px -1px 0px;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--o-color-division1);
    background-color: var(--o-color-bg2);
    max-height: 120px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 1416px) {
    grid-template-columns: repeat(v-bind('(props.row)-1'), minmax(82px, 270px));
    justify-content: center;
    .link-item {
      min-height: 40px;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(v-bind('(props.row)-2'), minmax(82px, 270px));
  }
}
.partner {
  margin-top: var(--o-spacing-h2);
  @media screen and (max-width: 768px) {
    margin-top: var(--o-spacing-h4);
  }
  h3 {
    text-align: center;
    font-size: var(--o-font-size-h3);
    line-height: var(--o-line-height-h3);
    color: var(--o-color-text1);
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: var(--o-font-size-h8);
      line-height: var(--o-line-height-h8);
    }
  }
  .partner-item {
    margin-top: var(--o-spacing-h2);
    @media screen and (max-width: 768px) {
      margin-top: var(--o-spacing-h4);
    }
    &:nth-of-type(1) {
      margin-top: 20px;
      @media screen and (max-width: 768px) {
        margin-top: var(--o-spacing-h5);
      }
    }
    &:nth-of-type(2) {
      .picture-panel {
        max-width: 702px;
        grid-template-columns: repeat(2, minmax(82px, 1fr));
      }
    }
    &:nth-of-type(3) {
      .picture-panel {
        max-width: 351px;
        grid-template-columns: repeat(1, minmax(82px, 1fr));
        @media screen and (max-width: 650px) {
          max-width: 100%;
        }
        :deep(a) {
          @media screen and (max-width: 650px) {
            width: 50%;
            margin: 0 auto;
          }
        }
      }
    }
    &:nth-of-type(1),
    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6) {
      .picture-panel {
        @media screen and (max-width: 1416px) {
          max-width: 1053px;
          grid-template-columns: repeat(3, minmax(82px, 1fr));
        }
        @media screen and (max-width: 768px) {
          grid-template-columns: repeat(2, minmax(82px, 1fr));
        }
      }
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
      margin-top: var(--o-spacing-h4);
      margin-left: auto;
      margin-right: auto;
      @media screen and (max-width: 768px) {
        margin-top: var(--o-spacing-h5);
      }
      :deep(a) {
        cursor: default;
      }
    }
  }
}
</style>
