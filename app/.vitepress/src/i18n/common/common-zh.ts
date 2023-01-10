import logo from '@/assets/common/logo_dark.png';
import copyright from '@/assets/common/copyright.png';
export default {
  NAV_ROUTER_CONFIG: [
    {
      NAME: '安装',
      ID: 'install',
      PATH: '/install/',
      CLASS: ['install'],
    },
    {
      NAME: '教程',
      ID: 'tutorials',
      PATH: '',
      CLASS: ['tutorials'],
    },
    {
      NAME: '文档',
      ID: 'docs',
      PATH: '',
      CLASS: ['docs'],
    },
    {
      NAME: '生态',
      ID: 'ecosystem',
      CHILDREN: [
        {
          NAME: '开发库',
          PATH: 'ecosystem/libraries/',
          ID: 'libraries',
        },
        {
          NAME: '教程',
          ID: 'tutorials',
          PATH: '/ecosystem/tutorials/',
        },
        {
          NAME: '模型',
          ID: 'advanced',
          PATH: '/ecosystem/models/',
        },
      ],
      CLASS: ['ecosystem'],
    },
    {
      NAME: '社区',
      ID: 'community',
      CHILDREN: [
        {
          NAME: '实习',
          ID: 'internship',
          PATH: '/community/internship/',
        },
        {
          NAME: '贡献指南',
          ID: 'community',
          PATH: '/community/',
        },
        {
          NAME: '治理',
          ID: 'governance',
          PATH: '/community/governance/',
        },
        {
          NAME: '布道',
          ID: 'evangelist',
          PATH: '/community/evangelist/',
        },
        {
          NAME: '论坛',
          ID: 'forum',
          PATH: 'https://www.hiascend.com/forum/forum-0106101385921175002-1.html',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: '开发者',
          ID: 'developer',
          PATH: '/community/developer/',
        },
        {
          NAME: 'MSG',
          ID: 'MSG',
          PATH: '/community/MSG/',
        },
        {
          NAME: 'SIG',
          ID: 'SIG',
          PATH: '/community/SIG/',
        },
        {
          NAME: '社区活动',
          ID: 'community_activitys',
          PATH: '/community/activitys/',
        },
        {
          NAME: '贡献看板',
          ID: 'statistics',
          PATH: 'https://datastat.mindspore.org/zh/overview',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: [
        'internship',
        'community',
        'governance',
        'evangelist',
        'developer',
        'MSG',
        'SIG',
        'community/activitys',
      ],
    },
    {
      NAME: '资源',
      ID: 'resources',
      CHILDREN: [
        {
          NAME: '概述',
          ID: 'resources',
          PATH: '/resources/',
        },
        {
          NAME: '课程认证',
          ID: 'courses',
          PATH: '/resources/courses/',
        },
        {
          NAME: '应用案例',
          ID: 'cases',
          PATH: '/resources/cases/',
        },
        {
          NAME: 'Hub',
          ID: 'hub',
          PATH: '/resources/hub/',
        },
        {
          NAME: '学术论文',
          ID: 'papers',
          PATH: '/resources/papers/',
        },
        {
          NAME: '竞赛活动',
          ID: 'competitions',
          PATH: '/resources/competitions/',
        },
        {
          NAME: '知识地图',
          ID: 'knowledgeMap',
          PATH: '/resources/knowledgeMap/',
        },
      ],
      CLASS: [
        'resources',
        'courses',
        'cases',
        'hub',
        'papers',
        'competitions',
        'knowledgeMap',
      ],
    },
    {
      NAME: '基础模型',
      ID: 'largeModel',
      CHILDREN: [
        {
          NAME: '大模型',
          ID: 'largeModel',
          PATH: '/largeModel/',
        },
        {
          NAME: '大模型平台',
          ID: 'xihe',
          PATH: 'https://xihe.mindspore.cn/',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: '线上展厅',
          ID: 'showroom',
          PATH: '/resources/tech/nlp/showroom/',
        },
      ],
      CLASS: ['largeModel'],
    },
    {
      NAME: '资讯',
      ID: 'news',
      CHILDREN: [
        {
          NAME: '版本发布',
          ID: 'versionRelease',
          PATH: '/news/versionRelease/',
        },
        {
          NAME: '技术博客',
          ID: 'technologyBlog',
          PATH: '/news/technologyBlog/',
        },
        {
          NAME: '每日新闻',
          ID: 'news',
          PATH: '/news/news/',
        },
        {
          NAME: '活动公告',
          ID: 'news',
          PATH: '/news/activities/',
        },
      ],
      CLASS: [
        'technologyBlog',
        'news',
        'versionRelease',
        'technologyBlog',
        'activities',
      ],
    },
    {
      NAME: '安全',
      ID: 'Security',
      PATH: '/security/',
      CLASS: ['security'],
    },
    {
      NAME: '代码',
      ID: 'code',
      CHILDREN: [
        {
          NAME: 'Gitee',
          PATH: 'https://gitee.com/mindspore/mindspore',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'Github',
          PATH: 'https://github.com/mindspore-ai/mindspore',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: ['code'],
    },
  ],
  LANG: '中文',
  footer: {
    logo: logo,
    menu: [
      {
        title: '教程',
        children: [
          {
            link: 'https://www.mindspore.cn/tutorials/zh-CN/master/index.html',
            lable: '使用指导手册',
          },
          {
            link: 'https://www.mindspore.cn/tutorials/zh-CN/master/index.html',
            lable: '查看教程',
          },
        ],
      },
      {
        title: '支持',
        children: [
          { link: 'https://gitee.com/mindspore', lable: '社区' },
          { link: 'https://www.mindspore.cn/news', lable: '资讯' },
          { link: 'https://www.mindspore.cn/security', lable: '安全' },
          {
            link: 'https://bbs.huaweicloud.com/forum/forum-1076-1.html',
            lable: '论坛',
          },
        ],
      },
      {
        title: '友情链接',
        children: [
          { link: 'https://ascend.huawei.com/', lable: '昇腾社区' },
          {
            link: 'https://www.huaweicloud.com/product/modelarts.html',
            lable: 'ModelArts',
          },
        ],
      },
    ],
    about_text: '关注我们',
    copyright: {
      lable: '版权所有©MindSpore 2022',
      beian: '粤A2-20044005号',
      beianPath: 'https://beian.miit.gov.cn',
    },
    record: {
      path: 'https://beian.miit.gov.cn',
      img: copyright,
      keepRecord: '粤公网安备',
      recordNum: '44030702002890号',
    },
    statement: [
      { path: 'https://status.mindspore.cn/', lable: '服务状态' },
      { path: 'https://www.mindspore.cn/legal', lable: '法律声明' },
      { path: 'https://www.mindspore.cn/privacy', lable: '个人信息保护政策' },
    ],
  },
};
