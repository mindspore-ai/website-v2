module.exports = {
  base: '/',
  title: 'MindSpore',
  description:
    '华为开源自研AI框架MindSpore。自动微分、并行加持，一次训练，可多场景部署。支持端边云全场景的深度学习训练推理框架，主要应用于计算机视觉、自然语言处理等AI领域，面向数据科学家、算法工程师等人群。主要具备基于源码转换的通用自动微分、自动实现分布式并行训练、数据处理、以及图执行引擎等功能特性。借助自动微分，轻松训练神经网络。框架开源，华为培育AI开发生态。',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh',
      label: '中文',
      title: 'MindSpore',
      keywords: 'MindSpore,MindSpore官网,深度学习框架,ai框架,人工智能框架',
      description:
        '华为开源自研AI框架MindSpore。自动微分、并行加持，一次训练，可多场景部署。支持端边云全场景的深度学习训练推理框架，主要应用于计算机视觉、自然语言处理等AI领域，面向数据科学家、算法工程师等人群。主要具备基于源码转换的通用自动微分、自动实现分布式并行训练、数据处理、以及图执行引擎等功能特性。借助自动微分，轻松训练神经网络。框架开源，华为培育AI开发生态。',
    },
    '/zh/': {
      lang: 'zh',
      label: '中文',
      title: 'MindSpore',
      keywords: 'MindSpore,MindSpore官网,深度学习框架,ai框架,人工智能框架',
      description:
        '华为开源自研AI框架MindSpore。自动微分、并行加持，一次训练，可多场景部署。支持端边云全场景的深度学习训练推理框架，主要应用于计算机视觉、自然语言处理等AI领域，面向数据科学家、算法工程师等人群。主要具备基于源码转换的通用自动微分、自动实现分布式并行训练、数据处理、以及图执行引擎等功能特性。借助自动微分，轻松训练神经网络。框架开源，华为培育AI开发生态。',
    },
    '/en/': {
      lang: 'en',
      label: 'English',
      title: 'MindSpore',
      keywords: 'AI,MindSpore,AI computing,deep learning',
      description:
        'The all-scenario deep learning framework that best manifests the computing power of the Ascend AI processor, provides development experience with friendly design and efficient execution for the data scientists and algorithmic engineers, and further advance the development and enrichment of the AI software/hardware application ecosystem.',
    },
  },
  themeConfig: {
    theme: '',
    website: 'https://www.mindspore.cn',
  },
  dest: './dist',
};
