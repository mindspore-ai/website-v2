<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue';
import { useRouter } from 'vitepress';

import AMapLoader from '@amap/amap-jsapi-loader';

import OIcon from '@/components/OIcon.vue';
import IconRight from '~icons/appbak/arrow-right.svg';
import IconTime from '~icons/appbak/time.svg';
import IconLink from '~icons/appbak/link.svg';
import MapMarker from '/img/calendar/position.svg';


import { getBetweenDateStr } from '@/shared/utils';

import { activityDetail } from '@/api/api-calendar';

const map: any = shallowRef(null);
const router = useRouter();

interface detailDate {
  title: string;
  register_url: string;
  longitude: number;
  latitude: number;
  start_date: string;
  end_date: string;
  poster: number;
  date: string;
  activity_type: number;
  synopsis: string;
  address: string;
  posterImg: string;
  schedules: string | undefined;
  wx_code: string;
  online_url: string;
  detail_address: string;
}

interface flowPathList {
  THEME: string;
  TIME: string;
  SPEAKER: any;
}

const detailObj = ref<detailDate>();
const flowPathList = ref<any[]>([]);
const tabTitle = ref(['活动介绍', '活动议程', '参会信息']);
const dayTabIndex = ref(0);
const tabShow = ref(0);
const dayTabShow = ref(0);
const tabIndex = ref(0);
const betweenDate = ref<any>([]);

function getActivitiesData() {
  const id: string = getQueryVariable('id') as string;
  activityDetail(id).then((res: detailDate) => {
    //  线上活动不加载地图，不显示tab
    res.activity_type === 2
      ? (tabTitle.value = tabTitle.value.splice(0, 2))
      : initMap(res.longitude, res.latitude);
    res[
      'posterImg'
    ] = `https://community-meeting-minutes.obs.cn-north-4.myhuaweicloud.com:443/imgs/event-detail/${res.poster}.png`;
    detailObj.value = res;
    const arr: any = [];
    betweenDate.value = getBetweenDateStr(res.start_date, res.end_date);
    JSON.parse(res.schedules as string).forEach(
      (dayTime: any, index: number) => {
        arr.push([]);
        dayTime.forEach((item: any) => {
          arr[index].push({
            duration: `${item.start}-${item.end}`,
            title: item.topic,
            speakerList: item.speakerList,
          });
        });
      }
    );
    flowPathList.value = arr;
  });
}

function initMap(lng: number, lat: number) {
  AMapLoader.load({
    key: 'c042a36d28964bd1e1e1785849fb335f', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
  })
    .then((AMap) => {
      let marker = new AMap.Marker({
        position: new AMap.LngLat(lng, lat),
        icon: MapMarker,
        size: new AMap.Size(30, 35),
        anchor: 'bottom-center',
      });
      map.value = new AMap.Map('container', {
        zoom: 16, //  初始化地图级别
        center: [lng, lat], //  初始化地图中心点位置
      });
      map.value.add(marker);
    })
    .catch((e) => {
      console.log(e);
    });
}

function dayTabClick(e: any) {
  dayTabIndex.value = e.index;
}

function TabClick(e: any) {
  tabIndex.value = e.index - 0;
}
function getQueryVariable(variable: string) {
  console.log(router.route);
  let query = window.location.search.substring(1);
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
onMounted(() => {
  getActivitiesData();
});
</script>
<template>
  <div class="calendar-detail">
    <div v-if="detailObj" class="warper">
      <div class="top-content">
        <div
          v-if="detailObj.posterImg"
          class="top-left"
          :style="{ backgroundImage: `url(${detailObj.posterImg})` }"
        >
          <h2 class="title" :class="{ 'poster-3': detailObj.poster === 3 }">
            {{ detailObj.title }}
          </h2>
        </div>
        <div class="top-right">
          <div class="top-right-head">
            <h2 class="title">{{ detailObj.title }}</h2>
            <p class="category">{{ detailObj.title }}</p>
            <p v-if="detailObj.start_date === detailObj.end_date" class="time">
              {{ detailObj.start_date }}
            </p>
            <p v-else class="time">
              {{ detailObj.start_date }}-{{ detailObj.end_date }}
            </p>
          </div>
          <a
            v-if="detailObj.online_url && detailObj.online_url.includes('http')"
            :href="detailObj.online_url"
            target="_blank"
            class="btn-detail"
          >
            <span>了解详情</span>
            <o-icon> <icon-right></icon-right> </o-icon>
          </a>
          <a
            v-else
            :href="detailObj.register_url"
            class="btn-detail"
            target="_blank"
            >了解详情<o-icon> <icon-right></icon-right> </o-icon>
          </a>
        </div>
      </div>
      <div class="detail-body">
        <div class="tab-box">
          <el-tabs v-model="tabShow" @tab-click="TabClick">
            <el-tab-pane
              v-for="(item, index) in tabTitle"
              :key="index"
              :label="item"
              :name="index"
            ></el-tab-pane>
          </el-tabs>
        </div>
        <div v-show="tabIndex === 0" class="synopsis">
          <h1 class="detail-title">{{ tabTitle[tabIndex] }}</h1>
          <p class="synopsis-body">{{ detailObj.synopsis }}</p>
        </div>
        <div v-show="tabIndex === 1" class="agenda">
          <h1 class="detail-title">{{ tabTitle[tabIndex] }}</h1>
          <div class="tab-box">
            <el-tabs v-model="dayTabShow" @tab-click="dayTabClick">
              <el-tab-pane
                v-for="(item, index) in betweenDate"
                :key="index"
                :label="item"
                :name="index"
              ></el-tab-pane>
            </el-tabs>
          </div>
          <div class="table">
            <el-table
              :data="flowPathList[dayTabShow]"
              :show-header="false"
              style="width: 100%"
            >
              <el-table-column prop="TIME" width="200">
                <template #default="scope">
                  <div class="time-box">
                    <o-icon> <icon-time></icon-time> </o-icon>
                    <span class="agenda-time">{{ scope.row.duration }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="title" width="540"> </el-table-column>
              <el-table-column width="500">
                <template #default="scope">
                  <div
                    v-for="item in scope.row.speakerList"
                    :key="item.name"
                    class="speark-item"
                  >
                    <div class="name">{{ item.name }}</div>
                    <div class="position">{{ item.title }}</div>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div
          v-show="tabIndex === 2 && detailObj.activity_type !== 2"
          class="meet-message"
        >
          <h1 class="detail-title">{{ tabTitle[tabIndex] }}</h1>
          <div :class="['meet-address']">
            <div class="address-message">
              <img src="/img/logo.png" />
            </div>
            <div class="address-text">
              <p>地址</p>
              <p v-if="detailObj.detail_address">
                {{ detailObj.detail_address }}
              </p>
              <p v-if="detailObj.address">
                {{ detailObj.address }}
              </p>
            </div>
            <div class="scan-qrcode">
              <div>
                <i class="qrcode"
                  ><o-icon> <icon-link></icon-link> </o-icon>
                </i>
                <span>扫码报名</span>
              </div>
              <img v-if="detailObj.wx_code" :src="detailObj.wx_code" />
            </div>
          </div>
          <div class="map">
            <div id="container"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
$themeColor: #40adff;
$backgroundColor: #e5e8f0;
$orange: #ff844d;
.calendar-detail {
  background-color: #f5f6f8;
  .warper {
    margin: 0 auto;
    padding: 50px 0 100px 0;
    max-width: 1416px;

    .top-content {
      display: flex;
      margin: 50px 0 24px;
      padding: 80px;
      background-color: #fff;
      .top-left {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        margin-right: 24px;
        text-align: center;
        padding: 0 20px;
        width: 415px;
        height: 210px;
        background-size: cover;
        background-repeat: no-repeat;
        h2 {
          color: #ffffff;
          font-size: 22px;
          line-height: 30px;
          font-weight: normal;
        }
        .poster-3 {
          color: #000000;
        }
      }
      .top-right {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .title {
          margin-bottom: 24px;
          font-weight: 400;
          font-size: 36px;
        }
        .category {
          margin-bottom: 10px;
        }
        .btn-detail {
          cursor: pointer;
          display: flex;
          padding: 0 25px;
          justify-content: center;
          align-items: center;
          color: #fff;
          width: fit-content;
          height: 48px;
          background-color: $themeColor;
          .o-icon {
            margin-left: 8px;
            font-size: 20px;
            transition: all 0.3s;
          }
          &:hover {
            .o-icon {
              transform: translateX(5px);
            }
          }
        }
      }
      .poster-3 {
        color: #000000;
      }
    }
    .detail-body {
      background-color: #fff;
      padding: 40px 80px;
      .detail-title {
        margin: 40px 0 24px;
        font-size: 24px;
        font-weight: 400;
      }
      .synopsis {
        padding-bottom: 160px;
        font-size: 14px;
        color: #555;
        line-height: 22px;
        .synopsis-body {
          word-break: break-all;
        }
      }
      .tab-box {
        .el-tabs__nav-wrap::after {
          display: none;
        }
        .el-tabs__header {
          margin: 0;
        }
        .el-tabs__item {
          font-size: 20px;
          font-family: FZLTCHJW--GB1-0, FZLTCHJW--GB1;
          color: #555;
          line-height: 24px;
          @media screen and (max-width: 1120px) {
            font-size: 16px;
            line-height: 40px;
          }
        }
        .is-active {
          color: $themeColor;
        }
        .el-tabs__active-bar {
          height: 3px;
          border-radius: 3px;
        }
        .el-tabs__nav-scroll {
          display: flex;
          justify-content: center;
        }
      }
      .agenda {
        // .cell {
        //   padding: 0;
        // }
        .tab-box {
          margin: 50px 0 30px;
          .el-tabs__nav-scroll {
            display: flex;
            justify-content: flex-start;
          }
        }
        .table {
          tr {
            height: 76px;
            font-size: 20px;
            .cell {
              padding: 5px 12px;
            }
            .el-table_2_column_5 {
              color: #000000;
            }
            .speark-item {
              display: flex;
              padding: 8px 12px;
              .name {
                color: #000000;
                min-width: 150px;
              }
              .position {
                font-size: 16px;
              }
            }
          }
          .o-icon {
            margin-right: 8px;
          }
          .time-box {
            display: flex;
            align-items: center;
          }
        }
      }
      .meet-message {
        margin-bottom: 128px;
        .meet-address {
          position: relative;
          width: 920px;
          height: 270px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 45px;
          background: #ffffff;
          box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          border-bottom: 3px solid $themeColor;
          z-index: 10;
          .address-message {
            display: flex;
            flex-direction: row;
            img {
              width: 192px;
              height: 60px;
            }
          }
          .address-text {
            margin-left: 40px;
            position: relative;
            p {
              font-size: 16px;
              max-width: 350px;
              color: #000000;
              line-height: 24px;
              margin-bottom: 12px;
              &:first-of-type {
                color: $themeColor;
                font-size: 20px;
              }
              &:last-of-type {
                margin-bottom: 0;
              }
            }
          }
          .scan-qrcode {
            position: relative;
            color: $themeColor;
            font-size: 20px;
            & > div {
              display: flex;
              flex-direction: row;
            }
            .qrcode {
              display: block;
              width: 20px;
              height: 18px;
              background-size: contain;
              background-repeat: no-repeat;
              margin-right: 10px;
            }
            span {
              line-height: 18px;
              margin-bottom: 10px;
            }
            img {
              display: block;
              width: 100px;
              height: 100px;
              margin-top: 20px;
            }
          }
        }
        .map {
          width: 1256px;
          margin: -50px auto 0 auto;
          height: 100%;
          #container {
            width: 100%;
            height: 500px;
            .amap-icon {
              img {
                width: 100%;
              }
            }
          }
        }
        .en-address {
          width: 978px;
        }
      }
    }
  }
  @media screen and (max-width: 1416px) {
    .warper {
      .top-content {
        align-items: center;
        flex-direction: column;
        .top-left {
          margin: 0 0 20px 0;
        }
        .top-right {
          text-align: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
