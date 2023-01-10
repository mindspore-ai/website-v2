<script lang="ts" setup>
import { useI18n } from '@/i18n';
import AppContent from '@/components/AppContent.vue';

import wechart from '@/assets/common/wechart.png';
import wechart_code from '@/assets/common/weixin-code.png';
import wechart_hover from '@/assets/common/wechart-hover.png';
import bilibili from '@/assets/common/bilibili.png';
import bilibili_code from '@/assets/common/bilibili-code.png';
import bilibili_hover from '@/assets/common/bilibili-hover.png';
import douyin from '@/assets/common/douyin.png';
import douyin_code from '@/assets/common/douyin-code.png';
import douyin_hover from '@/assets/common/douyin-hover.png';
import qq from '@/assets/common/qq.png';
import qq_code from '@/assets/common/qq-code.png';
import qq_hover from '@/assets/common/qq-hover.png';

const i18n = useI18n();

const footerCodeImg = [
  {
    cover: wechart_code,
    icon: wechart,
    iconHover: wechart_hover,
    lable: '打开微信扫一扫',
  },
  {
    cover: bilibili_code,
    icon: bilibili,
    iconHover: bilibili_hover,
    lable: '打开B站扫一扫',
  },
  {
    cover: douyin_code,
    icon: douyin,
    iconHover: douyin_hover,
    lable: '打开抖音扫一扫',
  },
  {
    cover: qq_code,
    icon: qq,
    iconHover: qq_hover,
    lable: '打开QQ扫一扫',
  },
];
</script>

<template>
  <footer>
    <div class="footer-main">
      <AppContent>
        <div class="footer-content">
          <div class="logo">
            <img :src="i18n.common.footer.logo" alt="" />
          </div>
          <div class="footer-menu">
            <div
              class="item"
              v-for="(item, index) in i18n.common.footer.menu"
              :key="index"
            >
              <p class="title">{{ item.title }}</p>
              <div
                class="footer_link"
                v-for="(clild, indx) in item.children"
                :key="indx"
              >
                <a :href="clild.link" target="_blank">{{ clild.lable }}</a>
              </div>
            </div>
          </div>
          <div class="aboutus">
            <p class="text">{{ i18n.common.footer.about_text }}</p>
            <div class="aboutus-tile">
              <div
                class="code-box"
                v-for="(item, index) in footerCodeImg"
                :key="index"
              >
                <a href="javasript:;" target="_blank">
                  <img :src="item.icon" class="img" alt="" />
                  <img :src="item.iconHover" class="img-hover" alt="" />
                  <div class="code-box-hover">
                    <span class="hover-item">
                      <img :src="item.cover" alt="" />
                      <p class="code-box-txt">{{ item.lable }}</p>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </AppContent>
    </div>
    <AppContent>
      <div class="site-info">
        <div class="site-info-left">
          <div class="copyright">
            <span>{{ i18n.common.footer.copyright.lable }}</span>
            <a
              class="copynum"
              :href="i18n.common.footer.copyright.beianPath"
              target="_blank"
              >{{ i18n.common.footer.copyright.beian }}</a
            >
          </div>
          <a
            class="record"
            :href="i18n.common.footer.record.path"
            target="_blank"
          >
            <img :src="i18n.common.footer.record.img" />
            <span class="keepRecord">{{
              i18n.common.footer.record.keepRecord
            }}</span>
            <span class="recordNum">{{
              i18n.common.footer.record.recordNum
            }}</span>
          </a>
        </div>
        <div class="site-info-right">
          <a
            :href="item.path"
            v-for="item in i18n.common.footer.statement"
            :key="item.path"
            >{{ item.lable }}</a
          >
        </div>
      </div>
    </AppContent>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--o-color-bg1);
  .app-content {
    padding-top: 0;
    padding-bottom: 0;
  }
}
.site-info {
  display: flex;
  padding-top: 30px;
  padding-bottom: 28px;
  justify-content: space-between;
  .copyright {
    font-size: 14px;
    color: var(--o-color-text4);
    line-height: 18px;
    margin-bottom: 6px;
  }
  .record {
    font-size: 12px;
    color: var(--o-color-text4);
    line-height: 18px;
  }
  .site-info-right {
    a {
      margin-bottom: 6px;
      padding-right: 12px;
      padding-left: 12px;
      border-right: 1px solid #fff;
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    }
  }
  a {
    font-size: 14px;
    color: var(--o-color-text4);
    line-height: 18px;
    &:hover {
      color: var(--o-color-brand1);
    }
  }
}
.footer-main {
  background: var(--o-color-greyblack1) url('@/assets/common/foot-bg.png')
    no-repeat top center;
  padding-top: 50px;
  padding-bottom: 40px;
  min-height: 270px;

  .aboutus {
    .text {
      font-size: 16px;
      color: #fff;
      line-height: 18px;
      margin-bottom: 16px;
    }
    &-tile {
      display: flex;
    }
  }
  .footer-content {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    width: 144px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .footer-menu {
    display: flex;
    .item {
      width: 216px;
      margin-right: 24px;
      .title {
        font-size: var(--o-font-size-h8);
        line-height: var(--o-line-height-h8);
        color: #fff;
        margin-bottom: 18px;
      }
      .footer_link {
        a {
          font-size: var(--o-font-size-text);
          line-height: var(--o-line-height-text);
          color: #fff;
          margin-bottom: 8px;
          &:hover {
            color: var(--o-color-brand1);
          }
        }
      }
    }
  }
  .code-box {
    width: 40px;
    height: 40px;
    margin-right: 50px;
    display: inline-block;
    position: relative;
    &:last-child {
      margin-right: 0;
    }
    .img,
    .img-hover {
      width: 100%;
    }
    .img-hover {
      display: none;
    }
    &:hover {
      .img {
        display: none;
      }
      .img-hover {
        display: block;
      }
      .code-box-hover {
        opacity: 1;
        visibility: visible;
      }
    }
    &-hover {
      background: #fff;
      position: absolute;
      top: -142px;
      left: 50%;
      padding: 6px;
      transform: translateX(-50%);
      opacity: 0;
      width: 120px;
      transition: all 0.3s ease-in;
      visibility: hidden;
      &:after {
        content: '';
        border: 8px solid transparent;
        border-top-color: #fff;
        transform: translateX(-50%);
        display: block;
        position: absolute;
        bottom: -16px;
        left: 50%;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
      .code-box-txt {
        font-size: 12px;
        color: var(--theme-black);
        text-align: center;
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1440px) {
  .footer-main {
    .footer-menu {
      .item {
        width: 145px;
      }
    }
    .code-box {
      margin-right: 24px;
    }
  }
}
@media (max-width: 1100px) {
  .footer-main {
    min-height: auto;
    padding: 16px 0 24px;
    .logo,
    .footer-menu {
      display: none;
    }
    .footer-content {
      justify-content: center;
      .aboutus {
        text-align: center;
        .text {
          font-size: 12px;
        }
      }
    }
    .code-box {
      margin-right: 24px;
      width: 24px;
      height: 24px;
    }
  }
  .site-info {
    padding: 16px 0;
    justify-content: center;
    display: grid;
    text-align: center;
    .site-info-right {
      order: -1;
      a {
        &:first-child {
          display: none;
        }
      }
    }
    a {
      font-size: 12px;
    }
    .copyright {
      font-size: 12px;
      margin: 8px 0 16px;
    }
  }
}
</style>
