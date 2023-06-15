<script setup lang="ts">
import IconRight from '~icons/app/icon-arrow-right.svg';
import useWindowResize from '@/components/hooks/useWindowResize';

defineProps({
  bannerData: {
    type: Object,
    required: true,
    default: () => null,
  },
});
const screenWidth = useWindowResize();
</script>
<template>
  <div class="banner">
    <div
      class="summit-banner-pc summit-banner"
      :style="{ backgroundImage: `url(${bannerData.img_pc})` }"
    ></div>
    <div
      class="summit-banner-mo summit-banner"
      :style="{ backgroundImage: `url(${bannerData.img_mo})` }"
    ></div>
    <div class="banner-text">
      <div class="mo-top">
        <h2>{{ bannerData.slogan }}</h2>
        <h3>{{ bannerData.title }}</h3>
        <div v-if="bannerData.btn" class="apply apply-mo">
          <a :href="bannerData.btnLink">
            <OButton :size="'mini'" type="outline" animation
              >{{ bannerData.btn }}
              <template #suffixIcon
                ><OIcon><IconRight /></OIcon></template
            ></OButton>
          </a>
        </div>
      </div>
      <div class="mo-botton">
        <h4>{{ bannerData.subtitle }}</h4>
        <div v-if="bannerData.btn" class="apply apply-pc">
          <a :href="bannerData.btnLink">
            <OButton
              :size="screenWidth > 767 ? 'nomral' : 'mini'"
              type="outline"
              animation
              >{{ bannerData.btn }}
              <template #suffixIcon
                ><OIcon><IconRight /></OIcon></template
            ></OButton>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.dark .banner {
  filter: brightness(80%) grayscale(20%) contrast(1.2);
}
.banner {
  width: 100%;
  height: 380px;
  position: relative;
  @media (max-width: 767px) {
    height: auto;
  }
  .summit-banner {
    height: 100%;
    margin: 0 auto;
    background: no-repeat center/cover;
  }
  .summit-banner-pc {
    .img-box {
      max-width: 1504px;
      height: 100%;
      margin: 0 auto;
      padding-top: 50px;
      img {
        max-width: 548px;
        display: block;
      }
      a {
        display: inline-block;
        margin-left: 40px;
        .banner-btn {
          color: #fff;
          border: 1px solid #fff;
          @media (max-width: 768px) {
            padding: 6px 16px;
            margin-top: 21px;
            font-size: var(--o-font-size-text);
            line-height: var(--o-line-height-text);
            .o-icon {
              font-size: var(--o-font-size-tip);
              line-height: var(--o-line-height-tip);
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
  .summit-banner-mo {
    display: none;
    height: 300px;
    @media (max-width: 768px) {
      width: 100%;
      display: block;
    }
    .img-box {
      margin: 0 auto;
      max-width: 250px;
      height: 360px;
      display: flex;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        position: absolute;
        bottom: 16px;
      }
      a {
        display: inline-block;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        .banner-btn {
          color: #fff;
          border: 1px solid #fff;
          @media (max-width: 768px) {
            padding: 6px 16px;
            margin-top: 21px;
            font-size: var(--o-font-size-text);
            line-height: var(--o-line-height-text);
            .o-icon {
              font-size: var(--o-font-size-tip);
              line-height: var(--o-line-height-tip);
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }

  .banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 0 44px;
    max-width: 1504px;
    @media (max-width: 767px) {
      height: 100%;
      padding: 24px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    h2 {
      font-size: var(--o-font-size-h2);
      font-weight: 600;
      line-height: 84px;
      color: #fff;
      @media (max-width: 767px) {
        font-size: 24px;
        line-height: 24px;
      }
    }
    h3 {
      margin-top: var(--o-spacing-h8);
      font-size: 38px;
      line-height: 40px;
      font-weight: 400;
      color: #fff;
      @media (max-width: 767px) {
        margin-top: 8px;
        font-size: var(--o-font-size-text);
        line-height: var(--o-line-height-text);
      }
    }
    h4 {
      margin-top: var(--o-spacing-h5);
      font-size: var(--o-font-size-h7);
      line-height: 40px;
      font-weight: normal;
      color: #fff;
      @media (max-width: 767px) {
        margin-top: 6px;
        font-size: var(--o-font-size-tip);
        line-height: var(--o-line-height-tip);
        padding: 0 36px;
      }
    }
    .apply {
      margin-top: var(--o-spacing-h5);
      @media (max-width: 767px) {
        margin-top: var(--o-spacing-h4);
      }
      &.apply-pc {
        @media (max-width: 767px) {
          display: none;
        }
      }
      &.apply-mo {
        display: none;
        @media (max-width: 767px) {
          display: block;
        }
      }
      a {
        display: inline-block;
        .o-button {
          color: #fff;
          border: 1px solid #fff;
          @media (max-width: 767px) {
            border-color: #fff;
            :deep(.suffix-icon) {
              svg {
                font-size: var(--o-font-size-tip);
              }
            }
          }
        }
      }
    }
  }
}
</style>
