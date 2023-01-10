<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter, useData } from 'vitepress';
import InternshipConfig from '@/data/internship';

import IconArrowRight from '~icons/app/icon-arrow-right.svg';

const router = useRouter();

const go = (path: string) => {
  if (path && !path.includes('http')) {
    router.go(path);
  } else if (path.includes('http')) {
    window.open(path);
  } else {
    return false;
  }
};
</script>

<template>
  <div class="item-box">
    <div
      class="item"
      v-for="(item, index) in InternshipConfig.TASK_ITEM"
      :key="index"
    >
      <p class="item-name">
        {{ item.NAME }}
      </p>
      <div class="item-intriduce">{{ item.INTRODUCE }}</div>
      <div class="button-box">
        <OButton animation size="mini" type="primary" @click="go(item.TASK)">
          {{ InternshipConfig.INTERNSHIP_TASK }}
          <template #suffixIcon>
            <IconArrowRight />
          </template>
        </OButton>

        <OButton animation type="text" size="mini" @click="go(item.GITEE)">
          {{ InternshipConfig.SIG_DETAIL }}
          <template #suffixIcon>
            <IconArrowRight />
          </template>
        </OButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 30px;
  .item {
    padding: 40px;
    background-color: var(--o-color-bg2);
    box-shadow: var(--o-shadow-l1);
    transition: box-shadow 0.1s;
    .item-name {
      color: var(--theme-title);
      font-size: 20px;
      @media (max-width: 1000px) {
        font-size: 16px;
      }
    }
    .item-intriduce {
      padding-top: 8px;
      margin-bottom: 20px;
      height: 70px;
      font-size: 14px;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      color: var(--o-color-text4);
    }
    .button-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .o-button--text {
        color: var(--theme-title);
        .o-icon {
          color: #ff7f0d;
        }
      }
    }
  }

  .item:hover {
    box-shadow: var(--o-shadow-l3);
    transform: translateY(-2px);
  }
}
@media screen and (min-width: 768px) and (max-width: 1440px) {
  .item-box {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}
@media (max-width: 760px) {
  .item-box {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
}
@media (max-width: 1000px) {
  .task-introduce {
    text-align: left;
    font-size: 16px;
  }
  .item-box {
    .item:nth-child(n) {
      width: 100%;
      padding: 16px 12px;
      .item-intriduce {
        width: 100%;
      }
      .button-box {
        justify-content: inherit;
        gap: 16px;
      }
    }
  }
}
</style>
