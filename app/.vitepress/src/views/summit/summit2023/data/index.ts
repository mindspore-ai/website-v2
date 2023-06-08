import bannerSummitMo from '../img/banner-summit_mo.png';
import bannerSummitPc from '../img/banner-summit_pc.jpg';

import awardsImg from '../img/awards.png';
import topicImg from '../img/topic.png';
import parterImg from '../img/parter.png';
import guestImg from '../img/guest.png';
import interactiveImg_1 from '../img/interactive_1.png';
import interactiveImg_2 from '../img/interactive_2.png';
import interactiveImg_3 from '../img/interactive_3.png';

import live from './live';
import agenda from './agenda';
import guest from './guest';
import partner from './partner';

export default {
  banner: {
    img_pc: bannerSummitPc,
    img_mo: bannerSummitMo,
    slogan: '一起昇思  无尽创新',
    title: '人工智能框架生态峰会2023',
    subtitle: '6月16日 中国·上海大零号湾会议中心',
    btn: '立即报名',
    btnLink: 'https://e-campaign.huawei.com/m/yMrEzu',
  },
  detail: [
    '为加快构建人工智能开源生态建设，发展AI根技术，树立国产AI框架可用好用的信心，昇思MindSpore开源社区拟于6月16日在上海举办“人工智能框架生态峰会2023”。大会围绕“新方向、新版本、新应用、新模式”主题展开，并将汇聚国内外AI领域领军学者、开源社区领袖、商业精英以及技术大咖等各方，共同分享AI技术发展趋势与产业机遇。',
  ],
  statistics: [
    { img: awardsImg, number: '4大', name: '奖项颁发' },
    { img: topicImg, number: '40+', name: '主题分享' },
    { img: parterImg, number: '300+', name: '参会单位' },
    { img: guestImg, number: '500+', name: '与会嘉宾' },
  ],
  live,
  agenda,
  guest,
  interaction: {
    title: '互动亮点',
    more: '了解更多',
    interactionList: [
      {
        title: '大模型体验',
        img: interactiveImg_1,
        detail:
          '基于昇思MindSpore的悟空画画，紫东.太初，CodeGeeX等多款大模型现场交互式体验，一起感受大模型的发展。',
        moreLink: 'https://xihe.mindspore.cn/',
      },
      {
        title: '大模型产业落地',
        img: interactiveImg_2,
        detail:
          '随着大模型的爆发式发展，大模型的产业落地也在快速落地，珈和科技和百智诚远已经在遥感领域，政务服务等场景支持产业革新。',
        moreLink: '',
      },
      {
        title: '科学智能(AI4S)',
        img: interactiveImg_3,
        detail:
          '基于昇思MindSpore的东方.御风大模型，是业界首个工业级流体仿真大模型，也是将流体力学与AI相融合的新尝试，目前已成功应用于中国大飞机设计中。',
        moreLink: '',
      },
    ],
  },
  partner,
};
