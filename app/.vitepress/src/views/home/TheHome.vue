<script lang="ts" setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { useI18n } from '@/i18n';
import { useData } from 'vitepress';

import AppContent from '@/components/AppContent.vue';
import HomeBanner from './HomeBanner.vue';

import HomeConfig from '@/data/home/';

const { lang } = useData();
const i18n = useI18n();
</script>

<template>
  <HomeBanner />
  <AppContent> </AppContent>
</template>

<style lang="scss" scoped></style>
