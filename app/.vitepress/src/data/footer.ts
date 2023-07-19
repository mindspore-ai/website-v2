import {
  BEIAN_URL,
  MS_STATUS_URL,
  GITEE_URL,
  XIHE_URL,
  HIASCEND_URL,
  WEBSITE,
  HWCLOUD_URL,
} from '@/shared/config';
export default {
  logo: '/img/foot-logo.png',
  menu: [
    {
      title: '教程',
      children: [
        {
          link: WEBSITE + '/tutorials/zh-CN/master/index.html',
          lable: '使用指导手册',
        },
        {
          link: WEBSITE + '/tutorials/zh-CN/master/index.html',
          lable: '查看教程',
        },
      ],
    },
    {
      title: '支持',
      children: [
        { link: GITEE_URL + '/mindspore', lable: '社区' },
        { link: WEBSITE + '/news', lable: '资讯' },
        { link: WEBSITE + '/security', lable: '安全' },
        {
          link: HIASCEND_URL + '/forum/forum-0106101385921175002-1.html',
          lable: '论坛',
        },
      ],
    },
    {
      title: '友情链接',
      children: [
        { link: HIASCEND_URL + '/zh/', lable: '昇腾社区' },
        {
          link: HWCLOUD_URL + '/product/modelarts.html',
          lable: 'ModelArts',
        },
        {
          link: XIHE_URL,
          lable: '昇思大模型平台',
        },
      ],
    },
  ],
  about: {
    text: '关注我们',
    codeImg: [
      {
        cover: '/img/weixin-code.png',
        icon: '/img/wechart.png',
        iconHover: '/img/wechart-hover.png',
        lable: '打开微信扫一扫',
      },
      {
        cover: '/img/bilibili-code.png',
        icon: '/img/bilibili.png',
        iconHover: '/img/bilibili-hover.png',
        lable: '打开B站扫一扫',
      },
      {
        cover: '/img/douyin-code.png',
        icon: '/img/douyin.png',
        iconHover: '/img/douyin-hover.png',
        lable: '打开抖音扫一扫',
      },
      {
        cover: '/img/qq-code.png',
        icon: '/img/qq.png',
        iconHover: '/img/qq-hover.png',
        lable: '打开QQ扫一扫',
      },
    ],
  },
  copyright: {
    lable: '版权所有©MindSpore 2023',
    beian: '粤A2-20044005号',
    beianPath: BEIAN_URL,
  },
  record: {
    path: BEIAN_URL,
    img: '/img/copyright.png',
    keepRecord: '粤公网安备',
    recordNum: '44030702002890号',
  },
  statement: [
    { path: MS_STATUS_URL, lable: '服务状态' },
    { path: WEBSITE + '/legal', lable: '法律声明' },
    {
      path: WEBSITE + '/privacy',
      lable: '个人信息保护政策',
    },
  ],
};
