<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import AOS from 'aos';

import AppContext from '@/components/AppContent.vue';
import SummitBanner from './components/SummitBanner.vue';
import SummitSchedule from './components/SummitSchedule.vue';
import SummitGuests from './components/SummitGuests.vue';
import { getUrlParams } from '@/shared/utils';
// import SummitPartner from './components/SummitPartner.vue';
import SummitLive from './components/SummitLive.vue';

import summitData from './data';

const isliveShow = ref(0);
onMounted(() => {
  AOS.init({
    offset: 50,
    duration: 800,
    delay: 100,
    once: true,
  });
});
const showIndex = ref(0);
const tabType = ref(0);
const agendaData2 = ref();
watch(
  tabType,
  () => {
    const data = summitData.agenda;
    if (tabType.value === 1 && data) {
      agendaData2.value = data.content.slice(1);
    } else if (data) {
      agendaData2.value = data.content.slice(0, 1);
    }
  },
  {
    immediate: true,
  }
);
// 埋点统计
function setAdvertisedData() {
  const sensors = (window as any)['sensorsDataAnalytic201505'];
  const { href } = window.location;
  if (href.includes('?utm_source')) {
    const paramsArr = getUrlParams(href);
    sensors?.setProfile({
      ...(window as any)['sensorsCustomBuriedData'],
      profileType: 'fromAdvertised',
      origin: href,
      ...paramsArr,
    });
  }
}
onMounted(() => {
  setTimeout(() => {
    setAdvertisedData();
  }, 300);
});
</script>
<template>
  <SummitBanner :banner-data="summitData.banner" />
  <AppContext>
    <div class="detail">
      <p v-for="item in summitData.detail" :key="item">{{ item }}</p>
    </div>
    <div class="statistics">
      <div
        v-for="item in summitData.statistics"
        :key="item.name"
        class="statistics-item"
      >
        <img :src="item.img" alt="" />
        <p class="number">{{ item.number }}</p>
        <p class="name">{{ item.name }}</p>
      </div>
    </div>
    <div class="live" id="live-box">
      <h3 class="titleBar">{{ summitData.live.title }}</h3>
      <div>
        <OContainer :level-index="1">
          <ClientOnly>
            <SummitLive
              v-if="isliveShow === 0"
              :live-data="summitData.live.liveData"
              class-name="odd-box"
              class="summit-kv-box"
            />
          </ClientOnly>
        </OContainer>
      </div>
    </div>
    <div
      class="agenda"
      data-aos="fade-up"
      :class="{ 'min-height': showIndex === 1 }"
    >
      <h3>会议日程</h3>
      <div class="date">
        <div
          v-for="(item, index) in summitData.agenda.meetingTime"
          :key="item.name"
          class="date-item"
          :class="{ active: showIndex === index }"
        >
          <p class="date-day">{{ item.day }}</p>
          <p class="date-month">{{ item.label }}</p>
        </div>
      </div>
      <div>
        <el-tabs v-model.number="tabType" class="schedule-tabs">
          <el-tab-pane :name="0">
            <template #label>
              <div class="time-tabs">上午</div>
            </template>
          </el-tab-pane>
          <el-tab-pane :name="1">
            <template #label>
              <div class="time-tabs">下午</div>
            </template>
          </el-tab-pane>
        </el-tabs>
        <template v-for="item in agendaData2" :key="item.lable">
          <SummitSchedule :agenda-data="item" />
        </template>
      </div>
    </div>
    <!-- <SummitGuests shape="circle" :web-columns-num="4" :mobile-columns-num="2" /> -->
    <div class="guests" data-aos="fade-up">
      <h3 class="title-bar">演讲嘉宾</h3>
      <SummitGuests
        :lecturer-list="summitData.guest"
        shape="circle"
        :web-columns-num="4"
        :mobile-columns-num="2"
      />
    </div>
    <div class="councils" data-aos="fade-up">
      <h3 class="title-bar">仪式嘉宾</h3>
      <SummitGuests
        :lecturer-list="summitData.ceremony"
        shape="circle"
        :web-columns-num="4"
        :mobile-columns-num="2"
      />
    </div>
    <div class="interaction" data-aos="fade-up">
      <h3>{{ summitData.interaction.title }}</h3>
      <div class="interaction-list">
        <OCard
          v-for="item in summitData.interaction.interactionList"
          :key="item"
          shadow="hover"
          class="interaction-item"
        >
          <div class="item-head">
            <img :src="item.img" alt="" />
          </div>
          <div class="item-body">
            <h5 class="title">{{ item.title }}</h5>
            <p class="detail">{{ item.detail }}</p>
          </div>
        </OCard>
      </div>
    </div>
    <!-- <div class="partner"  data-aos="fade-up">
      <SummitPartner :partner-data="summitData.partner" :row="3"/>
    </div> -->
  </AppContext>
</template>
<style scoped lang="scss">
@mixin floor-title {
  text-align: center;
  font-size: var(--o-font-size-h3);
  line-height: var(--o-line-height-h3);
  color: var(--o-color-text1);
  font-weight: 500;
  margin: 0 0 40px;
  &::after {
    display: block;
    content: '';
    margin: 0 auto;
    width: 72px;
    height: 11px;
    border-radius: 6px;
    background-color: rgba(13, 141, 255, 0.3);
    position: relative;
    top: -12px;
    @media (max-width: 767px) {
      width: 32px;
      height: 6px;
      border-radius: 3px;
      top: -6px;
    }
  }
  @media (max-width: 767px) {
    font-size: var(--o-font-size-h8);
    line-height: var(--o-line-height-h8);
    margin: 40px 0 24px;
  }
}
@mixin floor-box {
  margin-top: var(--o-spacing-h1);
  @media screen and (max-width: 768px) {
    margin-top: var(--o-spacing-h2);
  }
}
.detail {
  p {
    font-size: var(--o-font-size-h6);
    line-height: var(--o-line-height-h6);
    color: var(--o-color-text1);
    font-weight: 400;
    @media screen and (max-width: 768px) {
      font-size: var(--o-font-size-text);
      line-height: var(--o-line-height-text);
    }
  }
}
.statistics {
  width: 100%;
  @include floor-box;
  padding: 50px 160px;
  display: flex;
  justify-content: space-between;
  // gap: 200px;
  background-color: var(--o-color-bg2);
  box-shadow: var(--o-shadow-l2);
  // grid-template-columns: repeat(4, 1fr);
  @media (max-width: 900px) {
    display: grid;
    gap: 200px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    padding: 16px;
    gap: 20px;
  }
  .statistics-item {
    text-align: center;
    img {
      width: 48px;
    }
    .number {
      margin-top: 14px;
      font-size: var(--o-font-size-h5);
      line-height: var(--o-line-height-h5);
      color: var(--o-color-brand1);
      @media (max-width: 767px) {
        font-size: var(--o-font-size-text);
        line-height: var(--o-line-height-text);
      }
    }
    .name {
      margin-top: 8px;
      font-size: var(--o-font-size-h7);
      line-height: var(--o-line-height-h7);
      color: var(--o-color-text1);
      @media (max-width: 767px) {
        font-size: var(--o-font-size-tip);
        line-height: var(--o-line-height-tip);
      }
    }
  }
}
.live {
  @include floor-box;
  h3 {
    @include floor-title;
  }
  :deep(.o-container-level1) {
    background-color: transparent;
    box-shadow: none;
  }
}
.agenda,
.councils {
  @include floor-box;
  h3 {
    @include floor-title;
  }
  .date {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    .date-item {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #cbcbcb;
      border-radius: 8px;
      border: 1px solid #cbcbcb;
      transition: all 0.3s ease-out;

      & ~ div {
        margin-left: 40px;
      }
      &.active {
        color: #fff;
        background-color: var(--o-color-brand1);
        border: 1px solid #fff;
      }
      .date-day {
        padding: 13px 17px 3px 15px;
        line-height: 48px;
        font-size: 48px;
        font-weight: 700;
        border-bottom: 1px solid #cbcbcb;
        @media screen and (max-width: 1120px) {
          padding: 6px 16px;
          font-size: 32px;
          line-height: 32px;
        }
      }
      .date-month {
        padding: 6px 0;
        font-size: 24px;
        font-weight: 100;
        line-height: 24px;
        @media screen and (max-width: 1120px) {
          padding: 4px 0;
          font-size: 16px;
        }
      }
    }
  }
  .schedule-tabs {
    position: relative;
    text-align: center;
    margin-top: 24px;
    :deep(.el-tabs__content) {
      overflow: visible;
      .el-button {
        position: absolute;
        left: 0;
        top: -75px;
        z-index: 1;
      }
    }
    :deep(.el-tabs__nav) {
      float: none;
      display: inline-block;
      .el-tabs__active-bar {
        display: none;
      }
      .el-tabs__item {
        padding: 0;
      }
    }
    :deep(.el-tabs__nav-wrap) {
      &::after {
        display: none;
      }
    }
    .time-tabs {
      display: inline-block;
      margin: 0 0 24px;
      cursor: pointer;
      border: 1px solid var(--o-color-border2);
      color: var(--o-color-text1);
      text-align: center;
      background: var(--o-color-bg2);
      font-size: 14px;
      line-height: 38px;
      padding: 0 16px;
      min-width: 160px;
      @media (max-width: 1100px) {
        line-height: 28px;
        font-size: 12px;
        padding: 0 12px;
        min-width: 100px;
      }
    }

    .is-active .time-tabs {
      color: #fff;
      background: var(--o-color-brand1);
      border-color: var(--o-color-brand1);
    }
  }
}
.guests {
  @include floor-box;
  h3 {
    @include floor-title;
  }
}
.interaction {
  @include floor-box;
  h3 {
    @include floor-title;
  }
  .interaction-list {
    display: grid;
    gap: var(--o-spacing-h4);
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 660px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .interaction-item {
      width: 100%;
      :deep(.el-card__body) {
        height: 354px;
        padding: 0;
        @media (max-width: 767px) {
          height: auto;
        }
      }
      .item-head {
        width: 100%;
        height: 188px;
        background: url(./img/interaction-bg.png) no-repeat;
        background-size: cover;
        text-align: center;
        padding: 30px 0;
        img {
          width: 171px;
        }
      }
      .item-body {
        padding: 24px;
        .title {
          font-size: var(--o-font-size-h7);
          line-height: var(--o-line-height-h7);
          color: var(--o-color-text1);
          @media (max-width: 767px) {
            font-size: var(--o-font-size-text);
            line-height: var(--o-line-height-text);
          }
        }
        .detail {
          margin-top: 4px;
          font-size: var(--o-font-size-text);
          line-height: var(--o-line-height-text);
          color: var(--o-color-text4);
          @media (max-width: 767px) {
            font-size: var(--o-font-size-tip);
            line-height: var(--o-line-height-tip);
          }
        }
        .more-btn {
          font-size: var(--o-font-size-text);
          line-height: var(--o-line-height-text);
          display: flex;
          align-items: center;
          padding: 0;
          margin-top: 24px;
          :deep(.o-icon) {
            font-size: var(--o-font-size-text);
            line-height: var(--o-line-height-text);
            color: var(--o-color-brand1);
          }
        }
      }
    }
  }
}
.partner {
  background-image: url('./img/partner-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px;
  overflow: visible;
  box-shadow: var(--o-shadow-l2);
  @include floor-box;
  :deep(h2) {
    @include floor-title;
  }
}
</style>
