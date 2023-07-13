<script setup lang="ts">
import { ref, nextTick, onMounted, reactive } from 'vue';

import OIcon from '@/components/OIcon.vue';

import { isValidKey } from '@/shared/utils';

import IconLeft from '~icons/appbak/icon-left.svg';
import IconRight from '~icons/appbak/icon-right.svg';
import IconArrowRight from '~icons/appbak/arrow-right.svg';
import IconDown from '~icons/appbak/down.svg';

import { TableData, TimeData } from '@/shared/@types/clendar';

import { useRouter } from 'vitepress';
import { getMeetingData, getActivityData } from '@/api/api-calendar';
import { handleError } from '@/shared/utils';

const router = useRouter();

const currentDay = ref('');
let tableData = reactive<TableData[]>([]);
let currentMeet = reactive<TableData>({
  start_date: '',
  date: '',
  timeData: [],
});
const renderData = ref<TableData>({
  date: '',
  start_date: '',
  timeData: [],
});
const activeName = ref('');
const monthDate = ref('');
const activeIndex = ref(0);
const isCollapse = ref(false);

const detailItem = [
  { text: '会议详情', key: 'detail', isLink: false },
  { text: '发起人', key: 'creator', isLink: false },
  { text: '会议日期', key: 'date', isLink: false },
  { text: '会议时间', key: 'duration_time', isLink: false },
  { text: '腾讯会议ID', key: 'meeting_id', isLink: false },
  { text: '腾讯会议链接', key: 'join_url', isLink: true },
  { text: 'Etherpad链接', key: 'etherpad', isLink: true },
  { text: '活动介绍', key: 'synopsis', isLink: false },
  { text: '起始日期', key: 'start_date', isLink: false },
  { text: '结束日期', key: 'end_date', isLink: false },
  { text: '活动形式', key: 'activity_type', isLink: false },
  { text: '线上链接', key: 'online_url', isLink: true },
  { text: '报名链接', key: 'register_url', isLink: true },
  { text: '回放链接', key: 'replay_url', isLink: true },
];
const activityType = ['线下', '线上', '线上 + 线下'];
const titleList = ['全部', '会议', '课程', 'MSG', '赛事', '其他'];

const activeBoxs = ref(null);
const calendarHeight = ref<number | string>(335);

// 活动会议筛选
function changeTab(index: number) {
  activeIndex.value = index;
  try {
    // 0、全部 1、会议 其他活动
    if (index === 0) {
      renderData.value.timeData = currentMeet.timeData;
    } else if (index === 1) {
      renderData.value.timeData = currentMeet.timeData.filter(
        (item: TimeData) => {
          return item.etherpad;
        }
      );
    } else {
      renderData.value.timeData = currentMeet.timeData.filter(
        (item: TimeData) => {
          return item.activity_category === index - 1;
        }
      );
    }
  } catch {
    handleError('Error!');
  }
}

function meetClick(day: string) {
  currentDay.value = day;
  activeIndex.value = 0;
  try {
    for (let i = 0; i < tableData.length; i++) {
      isCollapse.value = false;
      if (tableData[i].date === day || tableData[i].start_date === day) {
        // 深拷贝
        currentMeet = JSON.parse(JSON.stringify(tableData[i]));
        renderData.value = JSON.parse(JSON.stringify(tableData[i]));
        // 只有一个会议默认展开
        if (tableData[i].timeData.length === 1) {
          activeName.value = '0';
          nextTick(() => {
            if (document.querySelector('.meet-item')) {
              (document.querySelector('.meet-item') as HTMLElement).click();
            }
          });
        } else {
          // 会议时间排序
          activeName.value = '';
          tableData[i].timeData.sort((a: TimeData, b: TimeData) => {
            return (
              parseInt(a.startTime.replace(':', '')) -
              parseInt(b.startTime.replace(':', ''))
            );
          });
        }
        return;
      } else {
        currentMeet.timeData = [];
        renderData.value.timeData = [];
      }
    }
  } catch {
    handleError('Error!');
  }
}

// 为日历单元格绑定会议次数
function getMeetTimes(day: string): number {
  let times = 0;
  tableData.forEach((item: any) => {
    if (item.date === day || item.start_date === day) {
      times = item.timeData.length;
      return;
    }
  });
  return times;
}

function changeMonth(index: number) {
  (
    document.querySelectorAll('.el-button-group button')[index] as HTMLElement
  ).click();
}

function watchChange(element: HTMLElement) {
  const observe = new MutationObserver(function () {
    monthDate.value = element.innerHTML;
  });
  observe.observe(element, { childList: true });
}

function goDetail(index: number) {
  router.go(`/zh/calendar/detail/?id=${renderData.value.timeData[index].id}`);
}

function changeCollapse() {
  isCollapse.value = !isCollapse.value;
}

function bodyChange(element: HTMLElement) {
  const observe = new MutationObserver(function () {
    calendarHeight.value = `${element.offsetHeight - 1}px`;
  });
  observe.observe(element, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

onMounted(() => {
  // 获取日历数据
  try {
    Promise.all([getActivityData(), getMeetingData()]).then((res) => {
      tableData = [...res[0].tableData, ...res[1].tableData];
      tableData.reduce((prev: TableData[], current: TableData) => {
        const item: any = prev.find(
          (sameDate: any) => sameDate.start_date === current.date
        );
        item
          ? (item.timeData = item.timeData.concat(current.timeData))
          : prev.push(current);
        return prev;
      }, []);
      (document.querySelector('.is-today .day-box') as HTMLElement).click();
      nextTick(() => {
        const activeBoxs = document.querySelectorAll('.be-active')[
          document.querySelectorAll('.be-active').length - 1
        ] as HTMLElement;
        if (activeBoxs) {
          activeBoxs.click();
        }
      });
    });
  } catch {
    handleError('Error!');
  }
  // dom加载完成展开最近的活动
  const element = document.querySelector('.el-calendar__title') as HTMLElement;
  monthDate.value = element.innerHTML;
  watchChange(element);
  const tbody = document.querySelector('.main-body tbody') as HTMLElement;
  if (tbody) {
    bodyChange(tbody);
    calendarHeight.value = `${tbody.offsetHeight - 1}px`;
  }
});
</script>
<template>
  <div class="wrapper">
    <div class="head-title">
      <div class="left-title">
        <o-icon @click="changeMonth(0)"> <icon-left></icon-left> </o-icon>
        <span class="month-date">{{ monthDate }}</span>

        <o-icon @click="changeMonth(2)"> <icon-right></icon-right> </o-icon>
      </div>
      <div class="right-title">
        <div class="title-list">
          <div
            v-for="(item, index) in titleList"
            :key="item"
            :class="{ active: index === activeIndex }"
            class="title-item"
            @click="changeTab(index)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div ref="activeBoxs" class="main-body">
      <el-calendar class="calender">
        <template #date-cell="{ data }">
          <div
            class="out-box"
            :class="{ 'be-active': getMeetTimes(data.day) }"
            @click="meetClick(data.day)"
          >
            <div class="day-box">
              <p
                :class="data.isSelected ? 'is-selected' : ''"
                class="date-calender"
              >
                {{ data.day.split('-').slice(2)[0] }}
              </p>
            </div>
          </div>
        </template>
      </el-calendar>
      <div class="detail-list">
        <div class="detailHead">
          最新日程：
          <span>{{ currentDay }}</span>
        </div>
        <div class="meet-list">
          <div v-if="renderData?.timeData?.length" class="demo-collapse">
            <el-collapse
              v-model="activeName"
              accordion
              @change="changeCollapse()"
            >
              <div
                v-for="(item, index) in renderData.timeData"
                :key="item.id"
                class="collapse-box"
              >
                <el-collapse-item :name="index">
                  <template #title>
                    <div class="meet-item">
                      <div class="meet-left">
                        <div class="left-top">
                          <p class="meet-name">{{ item.name || item.title }}</p>
                          <p v-if="item.schedules" class="introduce">
                            {{ titleList[item.activity_category + 1] }}
                          </p>
                          <p v-else class="introduce">会议</p>
                        </div>
                        <div
                          v-if="item.schedules"
                          class="more-detail"
                          @click.stop="goDetail(index)"
                        >
                          了解更多
                          <o-icon @click="changeMonth(2)">
                            <icon-arrow-right></icon-arrow-right>
                          </o-icon>
                        </div>
                        <div
                          v-if="item.group_name"
                          class="group-name more-detail"
                        >
                          SIG组: {{ item.group_name }}
                        </div>
                      </div>
                      <div class="item-right">
                        <div class="detail-time">
                          <span class="start-time">{{
                            item.startTime || item.start_date
                          }}</span>
                          <span class="end-time">{{
                            item.endTime || item.end_date
                          }}</span>
                        </div>
                        <div class="extend">
                          <o-icon
                            :class="{
                              reversal:
                                isCollapse && activeName == index.toString(),
                            }"
                          >
                            <icon-down></icon-down>
                          </o-icon>
                        </div>
                      </div>
                    </div>
                  </template>
                  <div class="meet-detail">
                    <template v-for="keys in detailItem" :key="keys.key">
                      <div
                        v-if="isValidKey(keys.key, item) && item[keys.key]"
                        class="meeting-item"
                      >
                        <div class="item-title">{{ keys.text }}:</div>
                        <p
                          v-if="
                            !keys.isLink &&
                            keys.key !== 'activity_type' &&
                            keys.key !== 'date'
                          "
                        >
                          {{ item[keys.key] }}
                        </p>
                        <p
                          v-else-if="
                            keys.isLink &&
                            item[keys.key] &&
                            !(item[keys.key] as string).startsWith('http')
                          "
                        >
                          {{ item[keys.key] }}
                        </p>
                        <a
                          v-else-if="keys.isLink"
                          :href="item[keys.key]"
                          target="_blank"
                          rel="noopener noreferrer"
                          >{{ item[keys.key] }}</a
                        >
                        <p v-else-if="keys.key === 'activity_type'">
                          {{ activityType[item.activity_type - 1] }}
                        </p>
                        <p v-else>{{ currentDay }}</p>
                      </div>
                    </template>
                  </div>
                </el-collapse-item>
              </div>
            </el-collapse>
          </div>
          <div v-else class="empty">今日暂无日程安排</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$themeColor: #0d8dff;
$backgroundColor: #e5e8f0;
$orange: #ff844d;
h4 {
  margin: 5px 0;
}
a {
  text-decoration: none;
  color: $themeColor;
}
.wrapper {
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1448px;
  .calendar-title {
    text-align: center;
    font-size: 36px;
    font-weight: 400;
  }
  .head-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 0;
    .left-title {
      display: flex;
      align-items: center;
      font-size: 16px;
      .o-icon {
        font-size: 24px;
        color: #555;
      }
    }
    .month-date {
      padding: 0 8px;
    }
    .title-list {
      display: flex;
      .title-item {
        cursor: pointer;
        padding: 12px;
        &:hover {
          color: $themeColor;
        }
      }
      .active {
        background-color: $themeColor;
        color: #fff !important;
      }
    }
    .o-icon {
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      color: #000;
      transition: color 0.2s;
      &:hover {
        color: $themeColor;
      }
    }
  }
  .main-body {
    display: flex;
    :deep(.calender) {
      max-width: 500px;
      text-align: center;
      .el-calendar__header {
        display: none;
        .el-button-group {
          display: none;
        }
      }
      thead {
        background-color: $backgroundColor;
      }
      .is-today {
        .el-calendar-day {
          .day-box {
            color: #555555;
            background-color: $backgroundColor;
          }
        }
      }
      .is-selected {
        color: white;
        .el-calendar-day {
          .day-box {
            background-color: $themeColor;
          }
        }
      }
      .el-calendar__body {
        padding: 0;
        .el-calendar-table__row {
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
          font-size: 12px;
          .el-calendar-day {
            display: flex;
            justify-content: center;
            padding: 0;
            height: 66px;
            .out-box {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
            }
            .be-active {
              position: relative;
              overflow: hidden;
            }
            .be-active::after {
              position: absolute;
              top: -6px;
              right: -6px;
              content: '';
              width: 20px;
              height: 20px;
              border-radius: 0 0 0 20px;
              background-color: $orange;
            }
            .day-box {
              display: flex;
              box-sizing: border-box;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              align-items: center;
              .date-calender {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
    :deep(.detail-list) {
      width: 100%;
      .detailHead {
        padding: 12px 0 13px;
        text-align: center;
        color: #555555;
        background-color: $backgroundColor;
      }
      .el-collapse {
        border: none;
        --el-collapse-header-height: 96px;
        .collapse-box:last-child {
          .el-collapse-item {
            margin-bottom: 0;
          }
        }
        .el-collapse-item {
          margin-bottom: 8px;
          .el-collapse-item__header {
            display: block;
            border: none;
          }
        }
        .el-collapse-item__wrap {
          border: none;
          padding: 0 24px;
          background-color: #eef0f4;
        }
      }
      .meet-list {
        padding: 8px 0 0 8px;
        height: v-bind('calendarHeight');
        background-color: #fff;
        border-right: 1px solid #e5e8f0;
        border-bottom: 1px solid #e5e8f0;
        overflow-y: scroll;
        &::-webkit-scrollbar-track {
          border-radius: 4px;
          background-color: #fff;
        }

        &::-webkit-scrollbar {
          width: 6px;
          background-color: #fff;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 4px;
          background: #ccc;
        }
        .el-collapse-item__arrow {
          display: none;
        }
        .el-collapse-item__content {
          padding-bottom: 0;
        }
        .meet-item {
          display: flex;
          justify-content: space-between;
          padding: 16px 24px;
          width: 100%;
          height: 100%;
          background-color: #fff;
          border: 1px solid #e5e8f0;

          .meet-left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;
            .left-top {
              display: flex;
              align-items: center;
              .meet-name {
                margin-right: 16px;
                max-width: 400px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 18px;
                color: #000;
                line-height: 24px;
              }
              .el-collapse-item__content {
                padding: 0 20px;
              }
              p {
                margin: 0;
                height: fit-content;
                justify-content: center;
                align-items: center;
                line-height: normal;
              }
              .introduce {
                padding: 3px 8px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                background-color: #efefef;
              }
            }
            .more-detail {
              display: flex;
              flex-shrink: 0;
              align-items: center;
              width: fit-content;
              height: 24px;
              font-size: 16px;
              font-family: FZLTHJW--GB1-0, FZLTHJW--GB1;
              line-height: 24px;
              .o-icon {
                margin: 0 5px;
                color: $themeColor;
                font-size: 24px;
                transition: all 0.3s;
                svg {
                  color: #0d8dff;
                }
              }
              &:hover {
                .o-icon {
                  transform: translateX(5px);
                }
              }
            }
          }
          .item-right {
            display: flex;
            font-size: 14px;

            .detail-time {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              padding: 0 24px;
              font-family: FZLTHJW--GB1-0, FZLTHJW--GB1;
              font-weight: normal;
              text-align: center;
              font-size: 16px;
              span {
                line-height: 15px;
              }
              .start-time {
                color: #6189ff;
              }
            }
            .extend {
              display: flex;
              align-items: center;
              .o-icon {
                font-size: 28px;
                color: #555;
                transition: all 0.3s;
              }
              .reversal {
                transform: rotate(180deg);
              }
            }
          }
        }
        .meet-detail {
          color: #555555;
          padding-top: 10px;
          .meeting-item {
            display: flex;
            padding-bottom: 8px;
            line-height: 18px;
            word-break: break-all;
            .item-title {
              flex-shrink: 0;
              width: 90px;
            }
            // .meet-title {
            //   width: 90px;
            // }
            .creator {
              display: flex;
              align-items: center;
              .head-logo {
                width: 60px;
                border-radius: 50%;
                overflow: hidden;
              }
              .creator-name {
                padding-left: 15px;
                font-size: 14px;
              }
            }
          }
        }
      }
      .empty {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 1416px) {
    .head-title {
      flex-direction: column;
    }
    .main-body {
      align-items: center;
      flex-direction: column-reverse;
    }
  }
}
</style>
