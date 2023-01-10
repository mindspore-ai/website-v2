import logo from '@/assets/common/logo_dark.png';
import copyright from '@/assets/common/copyright.png';

export default {
  NAV_ROUTER_CONFIG: [
    {
      NAME: 'Install',
      ID: 'install',
      PATH: '/install/en/',
      CLASS: ['install'],
    },
    {
      NAME: 'Tutorials',
      ID: 'tutorials',
      PATH: '',
      CLASS: ['tutorials'],
    },
    {
      NAME: 'Docs',
      ID: 'docs',
      PATH: '',
      CLASS: ['docs'],
    },
    {
      NAME: 'Ecosystem',
      ID: 'ecosystem',
      CHILDREN: [
        {
          NAME: 'Libraries',
          PATH: 'ecosystem/libraries/en/',
          ID: 'libraries',
        },
        {
          NAME: 'Tutorials',
          ID: 'tutorials',
          PATH: '/ecosystem/tutorials/en/',
        },
        {
          NAME: 'Models',
          ID: 'advanced',
          PATH: '/ecosystem/models/en/',
        },
      ],
      CLASS: ['ecosystem'],
    },
    {
      NAME: 'Community',
      ID: 'community',
      CHILDREN: [
        {
          NAME: 'Contribution Guide',
          ID: 'community',
          PATH: '/community/en/',
        },
        {
          NAME: 'Governance',
          ID: 'governance',
          PATH: '/community/governance/en/',
        },
        {
          NAME: 'Forum',
          ID: 'forum',
          PATH: 'https://forum.huawei.com/enterprise/en/forum-100504.html',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
        {
          NAME: 'Developer',
          ID: 'developer',
          PATH: '/community/developer/en/',
        },
        {
          NAME: 'SIG',
          ID: 'SIG',
          PATH: '/community/SIG/en/',
        },
        {
          NAME: 'Community Activities',
          ID: 'activitys',
          PATH: '/community/activitys/en/',
        },
        {
          NAME: 'Statistics',
          ID: 'statistics',
          PATH: 'https://datastat.mindspore.org/en/overview',
          IS_OPEN_MINISITE_WINDOW: 1,
        },
      ],
      CLASS: [
        'community',
        'governance',
        'developer',
        'SIG',
        'community/activitys',
      ],
    },
    {
      NAME: 'Resources',
      ID: 'resources',
      CHILDREN: [
        {
          NAME: 'Overview',
          ID: 'resources',
          PATH: '/resources/en/',
        },
        {
          NAME: 'Courses & Certification',
          ID: 'courses',
          PATH: '/resources/courses/en/',
        },
        {
          NAME: 'Application Cases',
          ID: 'cases',
          PATH: '/resources/cases/en/',
        },
        {
          NAME: 'Hub',
          ID: 'hub',
          PATH: '/resources/hub/en/',
        },
        {
          NAME: 'Knowledge Map',
          ID: 'knowledgeMap',
          PATH: '/resources/knowledgeMap/en/',
        },
      ],
      CLASS: ['resources', 'courses', 'cases', 'hub', 'knowledgeMap'],
    },

    {
      NAME: 'News',
      ID: 'news',
      CHILDREN: [
        {
          NAME: 'Version Releases',
          ID: 'versionRelease',
          PATH: '/news/versionRelease/en/',
        },
        {
          NAME: 'Blogs',
          ID: 'technologyBlog',
          PATH: '/news/technologyBlog/en/',
        },
        {
          NAME: 'News',
          ID: 'news',
          PATH: '/news/news/en/',
        },
        {
          NAME: 'Activities',
          ID: 'news',
          PATH: '/news/activities/en/',
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
      NAME: 'Security',
      ID: 'Security',
      PATH: '/security/',
      CLASS: ['security'],
    },
    {
      NAME: 'Code',
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
  LANG: 'English',
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
