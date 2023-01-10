import { computed } from 'vue';
import { useData } from 'vitepress';

import common from './common';
import home from './home';

const i18n: { [key: string]: any } = {
  zh: {
    common: common.zh,
    home: home.zh,
  },
  en: {
    common: common.en,
    home: home.en,
  },
};

export function useI18n() {
  const { lang } = useData();
  return computed(() => i18n[lang.value]);
}

export default i18n;
