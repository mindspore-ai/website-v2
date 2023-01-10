<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <AppHeader />
  <main>
    <Content class="content" />
  </main>
  <AppFooter />
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  position: relative;
  min-height: calc(100vh - 452px);
  background-color: var(--o-color-bg1);
  padding-top: 80px;
  overflow: hidden;

  @media (max-width: 1100px) {
    padding-top: 48px;
  }
}
</style>
