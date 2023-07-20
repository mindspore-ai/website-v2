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
import ceremony from './ceremony';
import { XIHE_URL } from '@/shared/config';

export default {
  banner: {
    img_pc: bannerSummitPc,
    img_mo: bannerSummitMo,
    slogan: '一起昇思  无尽创新',
    title: '人工智能框架生态峰会2023',
    subtitle:
      '6月16日 上海闵行大零号湾科创大厦（主论坛）闵行星河湾酒店（专题论坛）',
    btn: '查看回放',
    btnLink: '#live-box',
  },
  detail: [
    '人工智能框架生态峰会将于2023年6月16日在上海召开，峰会由上海临港经济发展（集团）有限公司、上海人工智能研究院、昇思MindSpore开源社区联合举办，大会汇聚国内外AI领域领军院士、开源社区领袖、商业精英以及技术大咖等各方，共同探讨AI技术发展趋势与产业机遇。',
    ,
    '诚邀您莅临现场，共襄盛会！',
  ],
  statistics: [
    { img: awardsImg, number: '6大', name: '奖项颁发' },
    { img: topicImg, number: '40+', name: '主题分享' },
    { img: parterImg, number: '300+', name: '参会单位' },
    { img: guestImg, number: '500+', name: '与会嘉宾' },
  ],
  live,
  agenda,
  guest,
  ceremony,
  interaction: {
    title: '互动亮点',
    more: '了解更多',
    interactionList: [
      {
        title: '大模型体验',
        img: interactiveImg_1,
        detail:
          '基于昇思MindSpore的紫东.太初，CodeGeeX等多款大模型现场交互式体验，一起感受大模型的发展。',
        moreLink: XIHE_URL,
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
