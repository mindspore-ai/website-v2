<script setup lang="ts">
import { useRouter } from 'vitepress';

const router = useRouter();

const goPath = (path: string) => {
  router.go(`${path}`);
};
</script>

<template>
  <main class="page404">
    <p class="text">404</p>
    <OButton size="nomral" type="primary" @click="goPath('/home/')">
      回到首页
    </OButton>
  </main>
</template>

<style lang="scss">
.page404 {
  width: 50%;
  margin: 0 auto;
  padding: 64px 0;
  text-align: center;
  min-height: calc(100vh - 80px - 240px);
  img {
    width: 50%;
  }
  .text {
    font-size: 14px;
    color: var(--o-color-text4);
    margin: 12px 0 24px;
  }
}
</style>
