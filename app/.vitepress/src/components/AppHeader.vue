<script setup lang="ts">
const goHome = () => {
  window.open('https://www.mindspore.cn/');
};
</script>
<template>
  <div class="app-header">
    <div class="app-header-body">
      <div class="header-logo">
        <img
          class="header-logo-img"
          alt="mindspore logo"
          src="/img/logo.png"
          @click="goHome"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.overflow {
  overflow: hidden;
}

.app-header {
  height: 80px;
  position: fixed;
  z-index: 102;
  top: 0;
  width: 100%;
  background: var(--theme-card-bg);
  box-shadow: 0 3px 8px 0 rgba(var(--theme-black-rgb), 0.05);
  &-body {
    display: flex;
    align-items: center;
    width: 1416px;
    margin: 0 auto;
    height: 100%;
  }

  .header-logo {
    overflow: hidden;
    margin-right: 40px;
    cursor: pointer;
    &-img {
      height: 40px;
    }
  }
  .mobile-menu-icon {
    display: none;
    .menu-mo {
      font-size: 20px;
      color: var(--theme-title);
    }
  }
  .mobile-search {
    width: 100%;
  }
  .mobile-search-icon {
    display: none;
  }
  .header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    .header-nav {
      height: 100%;
      display: flex;
      flex: 1;
    }
    .header-search {
      width: 240px;
    }
    .header-tool {
      display: grid;
      gap: 20px;
      grid-template-columns: auto auto auto;
      align-items: center;
      .lang {
        color: var(--theme-title);
        letter-spacing: 0.08em;
        font-size: 16px;
      }
      &-search {
        cursor: pointer;
      }
      &-theme {
        cursor: pointer;
      }
    }
    .icon {
      font-size: 22px;
      color: var(--theme-title);
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1440px) {
  .app-header {
    &-body {
      width: 1080px;
      padding: 0 16px;
      justify-content: space-between;
    }
  }
}
@media screen and (max-width: 1100px) {
  .app-header {
    height: 48px;
    &-body {
      width: 100%;
      padding: 0 16px;
      justify-content: space-between;
    }
    .header-logo-img {
      height: 32px;
      margin: 0;
    }
  }
}
</style>
