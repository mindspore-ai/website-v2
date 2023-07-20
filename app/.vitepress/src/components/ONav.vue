<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vitepress';

defineProps({
  navItems: {
    type: Object,
    default() {
      return {};
    },
  },
});

const router = useRouter();

const activeItem = ref(router.route.path.split('/')[2]);
watch(
  () => router.route.path,
  (val: string) => {
    const p = val.split('/')[2];
    activeItem.value = p;
  }
);

const emits = defineEmits(['nav-click']);
// 点击大导航事件
const handleClick = (item: any) => {
  emits('nav-click', item);
};
// 点击子导航事件
const handleChildClick = () => {
  isShow.value = false;
};

const isShow = ref(false);
const navActive = ref('');
//鼠标移入大导航事件
const showSub = (item: any) => {
  navActive.value = item.id;
  isShow.value = true;
};
// 鼠标移出大导航事件
const hideSub = () => {
  navActive.value = '';
  isShow.value = false;
};
</script>

<template>
  <nav class="o-nav">
    <ul class="o-nav-list">
      <li
        v-for="item in navItems"
        :key="item.id"
        :class="{
          active: activeItem === item.id,
          hover: navActive === item.id,
        }"
        @mouseenter="showSub(item)"
        @mouseleave="hideSub()"
      >
        <span @click="handleClick(item)">{{ item.label }} </span>
        <template v-if="isShow">
          <div class="sub-menu">
            <ul class="sub-menu-content">
              <li
                v-for="children in item.children"
                :key="children.id"
                class="sub-menu-item"
                @click="handleChildClick()"
              >
                {{ children.label }}
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.o-nav {
  height: 100%;
  .o-nav-list {
    height: 100%;
    padding: 0;
    margin: 0;
    li {
      position: relative;
      display: inline-flex;
      align-items: center;
      height: 100%;
      padding: 0 26px;
      font-size: 14px;
      line-height: 24px;
      color: var(--theme-title);
      cursor: pointer;

      &.active {
        color: var(--theme-active);
        &::after {
          background: var(--theme-active);
        }
      }
      &.hover {
        color: var(--theme-active);
        .sub-menu {
          transform: translate(-50%) scaleY(1);
        }
        &::after {
          background: var(--theme-active);
        }
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 2px;
        border-radius: 1px;
        transition: all 0.3s ease;
      }

      .sub-menu {
        position: absolute;
        top: 80px;
        left: 50%;
        right: 0;
        background-color: var(--theme-card-bg);
        transform: translate(-50%) scaleY(0);
        transform-origin: top;
        transition: all 0.3s;
        display: table;
        box-shadow: 0 3px 8px 0 rgba(var(--theme-black-rgb), 0.05);
        &-content {
          margin: 0;
          padding: 0;
        }
        &-item {
          line-height: 48px;
          text-align: center;
          font-size: 14px;
          color: var(--theme-title);
          display: block;
          white-space: nowrap;
          &.active {
            background-color: var(--theme-active);
            color: var(--theme-card-bg);
          }
          &:hover {
            background-color: var(--theme-active);
            color: var(--theme-white);
          }
        }
      }
    }
  }
}
</style>
