import type { App } from 'vue';
import { createPinia } from 'pinia';

import '@/shared/styles/index.scss';
import '@/shared/styles/element-plus/index.scss';

import ElementPlus from 'element-plus';
import OpenDesign from 'opendesign';

import Layout from '@/App.vue';
import NotFound from '@/NotFound.vue';

export default {
  Layout,
  NotFound,
  enhanceApp({ app }: { app: App }) {
    if (typeof global !== 'undefined') {
      // @ts-ignore
      global.window = {};
    }
    app.use(createPinia());
    app.use(ElementPlus);
    app.use(OpenDesign);
  },
};