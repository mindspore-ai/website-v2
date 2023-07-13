import Layout from '@/App.vue';
import NotFound from '@/NotFound.vue';
import OIcon from '@/components/OIcon.vue';
import { createPinia } from 'pinia';

import OpenDesign from 'opendesign';
import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';
import '@/shared/styles/base.scss';

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    if (typeof global !== 'undefined') {
       global.window = {};
    }
    app.use(createPinia());
    app.use(ElementPlus);
    app.component('OIcon', OIcon);
    app.use(OpenDesign);
  },
};
