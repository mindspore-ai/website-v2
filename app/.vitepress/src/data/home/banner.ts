import banner_ai from '@/assets/category/home/banner/banner_ai.jpg';
import banner_ai_mo from '@/assets/category/home/banner/banner_ai_mo.png';

import banner_xihe from '@/assets/category/home/banner/banner_xihe.png';
import banner_xihe_mo from '@/assets/category/home/banner/banner_xihe_mo.jpg';

// targetTap:1 新页签打开
// type:1(只有图片)、2(文字居左)，3(文字居中),4(仅用于实习banner),5 视频
export default {
  zh: [
    {
      pcBanner: banner_ai,
      moBanner: banner_ai_mo,
      link: '',
      targetTap: 1,
      title: '',
      desc: [''],
      btn: '',
      type: 1,
      className: 'summit',
      video: '',
    },
    {
      pcBanner: banner_xihe,
      moBanner: banner_xihe_mo,
      link: '',
      targetTap: 1,
      title: '',
      desc: [''],
      btn: '了解详情',
      type: 1,
      className: 'ques',
      video: '',
    },
  ],
  en: [
    {
      pcBanner: banner_ai,
      moBanner: banner_ai_mo,
      link: '',
      targetTap: 0,
      title: '',
      desc: [''],
      btn: '',
      type: 1,
      className: '',
      video: '',
    },
  ],
};
