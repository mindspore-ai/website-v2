<script lang="ts" setup>
import footer from '@/data/footer';
</script>

<template>
  <div class="footer-main">
    <div class="wrapper">
      <div class="footer-content">
        <div class="logo">
          <img :src="footer.logo" alt="" />
        </div>
        <div class="footer-menu">
          <div v-for="(item, index) in footer.menu" :key="index" class="item">
            <p class="title">{{ item.title }}</p>
            <div
              v-for="(clild, indx) in item.children"
              :key="indx"
              class="footer_link"
            >
              <a :href="clild.link" target="_blank">{{ clild.lable }}</a>
            </div>
          </div>
        </div>
        <div class="aboutus">
          <p class="text">{{ footer.about.text }}</p>
          <div class="aboutus-tile">
            <div
              v-for="(item, index) in footer.about.codeImg"
              :key="index"
              class="code-box"
            >
              <a href="javasript:;">
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
    </div>
  </div>
  <div class="wrapper">
    <div class="site-info">
      <div class="site-info-left">
        <div class="copyright">
          <span>{{ footer.copyright.lable }}</span>
          <a
            class="copynum"
            :href="footer.copyright.beianPath"
            target="_blank"
            >{{ footer.copyright.beian }}</a
          >
        </div>
        <a class="record" :href="footer.record.path" target="_blank">
          <img :src="footer.record.img" />
          <span class="keepRecord">{{ footer.record.keepRecord }}</span>
          <span class="recordNum">{{ footer.record.recordNum }}</span>
        </a>
      </div>
      <div class="site-info-right">
        <a
          v-for="item in footer.statement"
          :key="item.path"
          :href="item.path"
          >{{ item.lable }}</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-info {
  display: flex;
  padding-top: 30px;
  padding-bottom: 28px;
  justify-content: space-between;
  .copyright {
    font-size: 14px;
    color: var(--theme-text);
    line-height: 18px;
    margin-bottom: 6px;
  }
  .record {
    font-size: 12px;
    color: var(--theme-text);
    line-height: 18px;
  }
  .site-info-right {
    a {
      margin-bottom: 6px;
      padding-right: 12px;
      padding-left: 12px;
      border-right: 1px solid var(--theme-text-ass);
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    }
  }
  a {
    font-size: 14px;
    color: var(--theme-text);
    line-height: 18px;
    &:hover {
      color: var(--theme-active);
    }
  }
}
.footer-main {
  background: var(--theme-card-black) url('/img/foot-bg.png') no-repeat top
    center;
  padding-top: 50px;
  padding-bottom: 40px;
  min-height: 270px;
  .aboutus {
    .text {
      font-size: 16px;
      color: var(--theme-white);
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
        font-size: 16px;
        color: var(--theme-white);
        line-height: 18px;
        margin-bottom: 18px;
      }
      .footer_link {
        a {
          font-size: 12px;
          color: var(--theme-text-ass);
          line-height: 22px;
          margin-bottom: 8px;
          &:hover {
            color: var(--theme-active);
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
      background: var(--theme-white);
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
        border-top-color: var(--theme-white);
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
