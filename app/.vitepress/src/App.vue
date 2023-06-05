<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { ElConfigProvider } from 'element-plus';

const locale = ref(zhCn);
</script>

<template>
  <el-config-provider :locale="locale">
    <header>
      <AppHeader />
    </header>
    <Content class="content" />
    <footer>
      <AppFooter />
    </footer>
  </el-config-provider>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  min-height: calc(100vh - 80px);
  padding-top: 80px;
  @media (max-width: 1100px) {
    padding-top: 48px;
  }
}
</style>
