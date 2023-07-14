<script setup lang="ts">
import AppCalendar from '@/components/AppCalendar.vue';
import AppBanner from '@/components/AppBanner.vue';

import banner from '@/assets/category/calendar/banner-event-cover.png';
import processImg1 from '@/assets/category/calendar/img1.png';
import processImg2 from '@/assets/category/calendar/img2.png';
import processImg3 from '@/assets/category/calendar/img3.png';
import processImg4 from '@/assets/category/calendar/img4.png';

const bannerInfo = {
  title: 'MindSpore社区活动',
  cover: banner,
};

const appProcess = {
  title: '小程序预约流程',
  list: [
    {
      name: '01 扫描小程序码',
      img: processImg1,
    },
    {
      name: '02 点击会议/活动',
      img: processImg2,
    },
    {
      name: '03 预定会议/活动',
      img: processImg3,
    },
    {
      name: '04 成功预定',
      img: processImg4,
    },
  ],
};
</script>
<template>
  <div class="calendar">
    <AppBanner :option="bannerInfo" />
    <h1 class="calendar-title">MindSpore社区活动日历</h1>
    <ClientOnly>
      <AppCalendar />
    </ClientOnly>
    <div class="app-process">
      <h2 class="calendar-title">{{ appProcess.title }}</h2>
      <ul class="process">
        <li v-for="(item, index) in appProcess.list" :key="index">
          <img :src="item.img" class="img" :alt="item.name" />
          <p class="txt">{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.calendar {
  background-color: #fff;
  .calendar-title {
    padding: 64px 0 40px;
    text-align: center;
    font-size: 36px;
    font-weight: normal;
    color: #000000;
    line-height: 48px;
  }
  .app-process {
    max-width: 1416px;
    margin: 0 auto;
    padding-bottom: 64px;
    .process {
      display: flex;
      justify-content: space-between;

      li {
        text-align: center;
        position: relative;
        &::after {
          content: '';
          border: 5px solid #d2d2d3;
          border-width: 6px 6px 0 0;
          width: 24px;
          height: 24px;
          display: block;
          position: absolute;
          top: 50%;
          right: -70px;
          transform: translateY(-50%) rotate(45deg);
        }
        &:last-child::after {
          display: none;
        }
        .img {
          width: 200px;
          object-fit: cover;
        }
        .txt {
          font-size: 18px;
          color: #000000;
          line-height: 24px;
          margin-top: 12px;
        }
      }
    }
    @media screen and (max-width: 1439px) {
      max-width: 1080px;
    }
  }
}
</style>
