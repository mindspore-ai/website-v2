<script lang="ts" setup>
import HomeBanner from '@/assets/home/banner.jpg';
import IconArrowRight from '~icons/app/icon-arrow-right.svg';
</script>

<template>
  <div class="banner">
    <div class="wrapper">
      <h2 class="title">昇思MindSpore开源实习</h2>
      <div class="action">
        <a href="#task">
          <OButton animation type="primary">
            领取任务
            <template #suffixIcon>
              <IconArrowRight />
            </template>
          </OButton>
        </a>
        <a href="https://www.openeuler.org/zh/internship/" target="_blank">
          <OButton animation>
            openEuler
            <template #suffixIcon>
              <IconArrowRight />
            </template>
          </OButton>
        </a>
      </div>
    </div>
    <img src="/category/internship/banner_mo.png" class="mo" />
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background: url(/category/internship/banner.jpg) no-repeat top center/cover;
  height: 380px;
  .wrapper {
    position: relative;
    height: 100%;
  }
  .mo {
    display: none;
  }
  .title {
    font-size: 54px;
    font-weight: 400;
    color: #000000;
    line-height: 76px;
    padding: 70px 0 24px;
  }
  .action {
    display: flex;
    gap: 22px;
  }
  @media (max-width: 760px) {
    height: 100%;
    background: none;
    .mo {
      display: block;
      width: 100%;
    }
    .wrapper {
      display: none;
    }
  }
}
</style>
