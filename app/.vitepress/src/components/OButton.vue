<script setup lang="ts">
import { toRefs, computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'large',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String,
    default: '',
  },
  plain: {
    type: Boolean,
    default: false,
  },
});

const { size, type, disabled, placement, plain } = toRefs(props);

// 状态
const buttonType = ['primary', ' ', 'warning ', 'danger', 'info', 'text'];
const types = computed(() =>
  buttonType.includes(type.value) ? `o-button--${type.value}` : ''
);

// 大小
const buttonSize = ['large', 'small', 'normal'];
const sizes = computed(() =>
  buttonSize.includes(size.value) ? `o-button--${size.value}` : ''
);

// 禁用
const isDisabled = computed(() => (disabled.value ? `o-button--disabled` : ''));

// 是否为朴素按钮
const isPlain = computed(() => (plain.value ? `o-button--plain` : ''));

// 位置
const site = ['left', 'right'];
const placementSite = computed(() =>
  site.includes(placement.value) ? `o-button--${placement.value}` : ''
);
</script>

<template>
  <button
    class="o-button"
    :class="[sizes, placementSite, isDisabled, types, isPlain]"
  >
    <div class="o-button-wrap">
      <slot name="left" />
      <slot></slot>
      <slot name="right" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.o-button {
  padding: 12px 28px;
  line-height: 24px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid var(--theme-active);
  color: var(--theme-active);
  display: inline-flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  transition: color 0.2s, background-color 0.3s, border-color 0.3s;
  border-radius: 0;
  box-sizing: border-box;
  &--large {
    height: 48px;
  }
  &--normal {
    height: 32px;
    padding: 5px 16px;
    line-height: 22px;
  }
  &--left {
    padding: 12px 28px 12px 20px;
    :deep(.o-icon) {
      margin-right: 8px;
    }
  }
  &--right {
    padding: 12px 20px 12px 28px;
    :deep(.o-icon) {
      margin-left: 8px;
      transition: all 0.2s linear;
      color: var(--theme-active);
    }
    &:hover {
      :deep(.o-icon) {
        -webkit-transform: translateX(4px);
        transform: translateX(4px);
      }
    }
  }
  &-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &--text {
    border-color: transparent;
    min-width: auto;
    padding: 0 !important;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    &:hover {
      color: var(--theme-active) !important;
    }
  }
  &--primary {
    color: var(--theme-white);
    border-color: var(--theme-active);
    background-color: var(--theme-active);
    &:hover,
    &:active {
      border-color: rgba(var(--theme-primary-hover), 1);
      background-color: rgba(var(--theme-primary-hover), 1);
      color: var(--theme-white);
    }
    &.is-disabled,
    &.is-disabled:hover {
      color: var(--theme-text);
      background-color: var(--theme-disable);
      border-color: var(--theme-disable);
    }
    span {
      white-space: nowrap;
    }
    .o-icon {
    }
    :deep(.o-icon) {
      color: var(--theme-white);
    }
  }
  &--plain {
    color: var(--theme-active);
    border-color: var(--theme-active);
    &:hover,
    &:active {
      border-color: var(--theme-active);
      background-color: var(--theme-active);
      color: var(--theme-white);
    }
  }
  &.is-disabled,
  &.is-disabled:hover {
    color: var(--theme-text);
    background-color: var(--theme-disable);
    border-color: var(--theme-disable);
    cursor: not-allowed;
  }
  :deep(.o-icon) {
    font-size: 24px;
    display: inline-flex;
  }
}
@media (max-width: 1100px) {
  .o-button {
    &--large {
      height: 32px;
      min-width: auto;
      font-size: 12px;
      padding: 8px 12px;
    }

    :deep(.o-icon) {
      font-size: 16px !important;
    }
  }
}
</style>
