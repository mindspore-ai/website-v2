<script lang="ts" setup>
import { ref } from 'vue';

defineProps({
  currentIndex: {
    type: Number,
    default: NaN,
  },
  dataList: {
    type: Array,
    default() {
      return [];
    },
  },
  internship: {
    type: Boolean,
    default: false,
  },
});

const show = ref(true);
const close = () => {
  show.value = false;
};

const gotop = () => {
  const { body } = document;
  body.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
</script>

<template>
  <div class="title-nav" :class="{ internship: internship }">
    <div class="box-line" :class="{ 'internship-line': internship }">
      <img class="gotop" src="/img/internship/top.png" @click="gotop" />
    </div>
    <div class="nav-text" :class="{ 'internship-nav': internship }">
      <ul>
        <li
          v-for="(item, index) in dataList"
          :key="index"
          :class="+index === currentIndex ? 'active' : ''"
        >
          <a :href="item.key">
            <div class="name">{{ item.name }}</div>
            <div class="dot"><div class="inside"></div></div>
          </a>
        </li>
      </ul>
    </div>
    <div class="qq-code">
      <div v-show="show && internship" class="item">
        <img
          class="close"
          src="/img/internship/x.png"
          alt=""
          @click="close()"
        />
        <img class="code" src="/img/internship/qrCode2.png" alt="" />
      </div>
      <div v-show="show && internship" class="item">
        <img class="code" src="/img/internship/qrCode3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scpoed>
.title-nav {
  position: fixed;
  cursor: pointer;
  top: 200px;
  right: 70px;
  z-index: 1000;
  display: block;

  .box-line {
    .gif {
      width: 70px;
      height: 70px;
      margin: 0 auto -30px auto;
      position: relative;
      z-index: 20;
    }
    .line {
      display: block;
      width: 2px;
      height: 441px;
      margin: 0 auto;
    }
    &.internship-line {
      height: 300px;
      position: relative;
      &::after {
        width: 2px;
        height: 100%;
        content: '';
        z-index: 1;
        background: #d7e2ff;
        display: block;
        position: absolute;
        right: 19px;
        top: -8px;
      }
      &::before {
        width: 32px;
        height: 32px;
        content: '';
        z-index: 1;
        background: url(/img/internship/home-icon.png) no-repeat center/cover;
        display: block;
        position: absolute;
        right: 5px;
        top: -40px;
        cursor: default;
        z-index: 6;
      }
      .gotop {
        width: 32px;
        height: 32px;
        position: absolute;
        right: 5px;
        bottom: -20px;
        z-index: 6;
      }
    }
  }
  .nav-text {
    width: 100%;
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    ul li a > div {
      display: inline-block;
      &.dot {
        margin-left: 10px;
        border-radius: 50%;
        width: 12px;
        position: relative;
        background: #ffffff;
        height: 12px;
        border: 2px solid #d7e2ff;
        div {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -4px;
          margin-top: -4px;
        }
      }
      &.name {
        font-size: 16px;
        color: #000000;
        line-height: 24px;
      }
    }
    ul li {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
    }
    ul .active {
      & a > div {
        color: #379be6 !important;
        &.dot {
          border-color: #379be6;
        }
      }
    }
    ul li > a {
      text-decoration: none;
    }
  }
  .qq-code {
    position: absolute;
    width: 170px;
    right: 18px;
    margin: 40px 0 0;
    .item {
      position: relative;
      margin-bottom: 24px;
    }
    .close {
      position: absolute;
      top: 2px;
      right: -6px;
      width: 20px;
    }
    .code {
      width: 90%;
    }
  }

  @media screen and (max-width: 1540px) {
    display: none;
  }
}
.internship {
  top: 140px;
  right: 70px;
  width: 100px;
}
</style>
