<script lang="ts" setup>
import OButton from '@/components/OButton.vue';
import { OPENEULER_URL } from '@/shared/config';
import IconArrowRight from '~icons/appbak/icon-arrow.svg';
</script>

<template>
  <div class="banner">
    <div class="wrapper">
      <h2 class="title">昇思MindSpore开源实习</h2>
      <div class="action">
        <a href="#task">
          <OButton size="large" type="primary" placement="right">
            领取任务
            <template #right
              ><OIcon><IconArrowRight /></OIcon></template
          ></OButton>
        </a>
        <a :href="`${OPENEULER_URL}/zh/internship/`" target="_blank">
          <OButton size="large" placement="right">
            openEuler
            <template #right
              ><OIcon><IconArrowRight /></OIcon></template
          ></OButton>
        </a>
      </div>
    </div>
    <img src="/img/internship/banner_mo.png" class="mo" />
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background: url(/img/internship/banner.jpg) no-repeat top center/cover;
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
