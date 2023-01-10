<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import { useData } from 'vitepress';
import { useI18n } from '@/i18n';
import 'swiper/swiper.min.css';
import useWindowResize from '@/components/hooks/useWindowResize';
import { getVideo } from '@/api/';

import videoBtn from '@/assets/category/home/video-img.png';
import IconArrowRight from '~icons/app/icon-arrow-right.svg';

const modules = [Autoplay];
const perviewNum = ref(4);
const { lang } = useData();
const screenWidth = useWindowResize();
const i18n = useI18n();

const videoData = ref({
  data: [],
  list: [],
} as any);

interface VideoItem {
  title: string;
  path: string;
  cover: string;
  type: string;
}

// 获取数据
async function getVideoData() {
  try {
    const res = await getVideo(lang.value);
    if (res.status === 200) {
      res.obj.map((item: any) => {
        if (item.childList) {
          item.childList.map((sub: any, idx: number) => {
            // 给图片路径加前缀
            if (sub.image.indexOf('mindspore') !== -1) {
              sub.image = 'https://' + sub.image;
            } else {
              sub.image = 'http://' + sub.image;
            }
            // 截取前六条数据解析
            if (idx <= 5) {
              if (item.code === 'NUM2') {
                videoData.value.data.push({
                  title: sub.title,
                  path: sub.link,
                  cover: sub.image,
                  type: 'blibli',
                });
              } else {
                videoData.value.data.push({
                  title: sub.title,
                  path: sub.link,
                  cover: sub.image,
                  type: 'h5',
                });
              }
            }
          });
        }
        videoData.value.list.push({
          lable: item.title,
          path: item.link,
        });
      });
    } else {
      throw new Error(res.status + ' ' + res.message);
    }
  } catch (error) {
    console.error('授权获信息失败', error);
  }
}

onMounted(() => {
  getVideoData();
  perviewNum.value =
    screenWidth.value > 1920 ? 6 : screenWidth.value < 994 ? 1 : 4;
});

const showVideoPlayer = ref(false);
const currentVideoItem = ref<VideoItem>();

const handleVideoPlay = (item: VideoItem) => {
  showVideoPlayer.value = true;
  console.log('object :>> ', item);
  currentVideoItem.value = item;
};

const handleCloseIconClick = () => {
  showVideoPlayer.value = false;
  currentVideoItem.value = {};
};
</script>

<template>
  <div class="video-main">
    <div class="title-bar">
      <h2 class="caption">精彩视频</h2>
      <div class="video-album">
        <a :href="item.path" v-for="item in videoData.list" :key="item.path">
          {{ item.lable }}<IconArrowRight />
        </a>
      </div>
    </div>

    <swiper
      :slides-per-view="perviewNum"
      :space-between="24"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :loop="true"
    >
      <swiper-slide
        v-for="item in videoData.data"
        :key="item.path"
        class="home-video-item"
      >
        <div
          class="home-video-link"
          :style="`background:url(${item.cover}) no-repeat center/cover`"
          @click="handleVideoPlay(item)"
        >
          <img :src="videoBtn" class="video-btn" :alt="item.title" />
        </div>
      </swiper-slide>
    </swiper>
    <!-- 播放器 -->
    <div v-if="showVideoPlayer" class="video-player">
      <ODialog
        v-model="showVideoPlayer"
        :before-close="handleCloseIconClick"
        :title="currentVideoItem?.title"
        lock-scroll
        close-on-press-escape
        close-on-click-modal
        destroy-on-close
        width="1190px"
      >
        <div class="video-player-box">
          <template v-if="currentVideoItem?.type === 'blibli'">
            <iframe
              allow="autoplay"
              allowFullScreen
              as_wide="{1}"
              border="0"
              class="video-box"
              frameBorder="no"
              framespacing="0"
              height="650"
              scrolling="no"
              :src="currentVideoItem.path"
              width="800"
            ></iframe>
          </template>
          <template v-else>
            <video
              muted
              playsinline="true"
              autoplay
              loop
              :poster="currentVideoItem?.cover"
              preload=""
              controls
              class="video-box"
            >
              <source type="video/mp4" :src="currentVideoItem?.path" />
            </video>
          </template>
        </div>
      </ODialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-bar {
  width: 100%;
  text-align: center;
  margin-bottom: var(--o-spacing-h2);
  .caption {
    font-size: var(--o-font-size-h3);
    font-weight: 300;
    color: var(--o-color-text1);
    line-height: var(--o-line-height-h3);

    @media (max-width: 768px) {
      font-size: var(--o-font-size-h8);
      line-height: var(--o-line-height-h8);
    }
  }
  @media (max-width: 768px) {
    margin-bottom: var(--o-spacing-h5);
  }

  .video-album {
    text-align: center;
    display: flex;
    gap: 24px;
    justify-content: center;
    margin: 16px 0 0;
    a {
      font-size: var(--o-font-size-text);
      line-height: var(--o-line-height-text);
      color: var(--o-color-text4);
      display: flex;
      align-items: center;
      svg {
        color: var(--o-color-brand1);
        height: 16px;
        width: 16px;
        margin-left: 6px;
      }
    }
  }
}

.dark .home-video-link {
  filter: brightness(0.8) grayscale(0.2) contrast(1.2);
}
.home-video-item {
  position: relative;

  .home-video-link {
    height: 236px;
    cursor: pointer;
    position: relative;
    .video-btn {
      width: 72px;
      height: 72px;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.video-player {
  :deep(.el-dialog__title) {
    color: var(--o-color-text1);
  }
  :deep(.el-dialog__close) {
    font-size: 20px;
  }
  :deep(.el-dialog__body) {
    padding: 0;
  }
  &-box {
    height: 669px;
    .video-box {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>
