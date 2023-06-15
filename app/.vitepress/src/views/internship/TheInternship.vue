<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

import { getUrlParams } from '@/shared/utils';

import InternshipBanner from './InternshipBanner.vue';
import InternshipStep from './InternshipStep.vue';
import InternshipTask from './InternshipTask.vue';
import InternshipRank from './InternshipRank.vue';
import OTitleNav from '@/components/OTitleNav.vue';

import StepTitle from '/img/internship/step-title.png';
import TaskTitle from '/img/internship/task-title.png';
import IntegralTitle from '/img/internship/integral-title.png';
import PartnerTitle from '/img/internship/partner-title.png';
import HelpTitle from '/img/internship/help-title.png';


const INTEGRAL_DATA = [
  {
    HEAD: '1、实习工资、',
    TEXT: [
      '实习有效期6个月内满20分以上，可获得不同级别的实习工资。具体见以上“申请步骤4”里的工资说明。',
    ],
    SUPPLEMENT: '',
  },
  {
    HEAD: '2、实习证明',
    TEXT: [
      '实习有效期6个月内积分满60分',
      '至少找一位导师写实习评语',
      '提交实习报告',
    ],
    SUPPLEMENT: '满足以上3条，实习评语与实习报告经评审合格后发放实习证明。',
  },
  {
    HEAD: '3、优秀实习生证书',
    TEXT: [
      '实习有效期6个月内积分满100分。（需包含有20及以上分值的任务）',
      '至少找一位导师写优秀推荐评语。',
      '完成优秀实习生线上公开答辩（直播形式）。',
    ],
    SUPPLEMENT:
      '满足以上3条，公开答辩获得评委打分80分以上后，发放优秀实习生证书。',
  },
  {
    HEAD: '4、昇思MindSpore资深开发者认证',
    TEXT: [
      '2022年内独在昇思MindSpore社区积分满50分，并在MindSpore公众号发布1篇以上实习项目相关文章，参与一次实习直播主讲。',
      '可获得昇思MindSpore资深开发者认证，在昇思MindSpore官网展示、专属礼品（价值1500元），以及官方大会门票、线下meetup等。',
    ],
  },
];
const RULE = {
  RULE_DATA: [
    {
      QUESTION: '1、哪些人可以报名？',
      ANSWER:
        'A：开源实习面向全国范围内年满18周岁的全日制/非全日制在校学生招募，无专业年级限制，欢迎感兴趣的同学踊跃报名。',
    },
    {
      QUESTION: '2、实习有效期6个月是如何计算的？',
      ANSWER:
        'A：在申请实习时需签署实习劳务合同，实习有效期即劳务合同上填写的实习有效期，为6个月期限，6个月期限内未满60积分则不能获得实习证明。线上实习时间管理相对自由，可根据自身情况安排时间，可提前结束实习。',
    },
    {
      QUESTION: '3、超过了6个月或者完成了100积分还能继续在社区做任务吗？',
      ANSWER:
        'A：可以，但积分不能再用于领取证明和奖金，一年内累计到150积分可获得昇思MindSpore资深开发者荣誉。 ',
    },
  ],
  MORE: ['更多问题，请移步', '本帖', '评论区提问。'],
};
const PARTNER_DATA = [
  {
    IMG: '/img/internship/iscas.png',
    LINK: '',
  },
  {
    IMG: '/img/internship/qilinsoft.png',
    LINK: '',
  },
  {
    IMG: '/img/internship/tongxin.png',
    LINK: '',
  },
  {
    IMG: '/img/internship/kylinsec.png',
    LINK: '',
  },
  {
    IMG: '/img/internship/gitee.png',
    LINK: '',
  },
  {
    IMG: '/img/internship/mindSpore.png',
    LINK: '',
  },
  {
    IMG: '/img/internship/openEuler.png',
    LINK: '',
  },
  {
    IMG: '/img/internship/openGauss.png',
    LINK: '',
  },
  {
    IMG: '/img/internship/openLooKeng.png',
    LINK: '',
  },
];

const HELP = {
  INFO: [
    '联系邮箱:',
    'intern@openeuler.sh',
    '扫码加入导师答疑群，更多关于昇思MindSpore实习任务答疑群内咨询。群号：771293469',
    '扫码加入“开源实习”学生QQ群，更多问题群内咨询。群号：526089131',
  ],
  ITEM: [
    {
      IMG: '/img/internship/qrCode.png',
      TEXT: '昇思MindSpore导师答疑群',
    },
    {
      IMG: '/img/internship/qrCode1.jpg',
      TEXT: '开源实习群',
    },
  ],
};

// 右侧导航
const isShowNav = ref(false);
const activeIndex = ref(0);
const NAV_LIST = [
  {
    key: '#introduce',
    name: '活动介绍',
  },
  {
    key: '#step',
    name: '申请步骤',
  },
  {
    key: '#task',
    name: '实习任务',
  },
  {
    key: '#integral ',
    name: '激励规则',
  },
  {
    key: '#rule',
    name: '实习规则',
  },
  {
    key: '#partner',
    name: '合作伙伴',
  },
  {
    key: '#help',
    name: '帮助咨询',
  },
];

const scroTop = () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollTop < 270 || scrollTop > 7200) {
    isShowNav.value = false;
  } else {
    isShowNav.value = true;
  }

  if (scrollTop > 200 && scrollTop < 520) {
    activeIndex.value = 0;
  } else if (scrollTop > 550 && scrollTop < 1300) {
    activeIndex.value = 1;
  } else if (scrollTop > 1350 && scrollTop < 2800) {
    activeIndex.value = 2;
  } else if (scrollTop > 2800 && scrollTop < 3500) {
    activeIndex.value = 3;
  } else if (scrollTop > 3500 && scrollTop < 4500) {
    activeIndex.value = 4;
  } else if (scrollTop > 4500 && scrollTop < 4900) {
    //4170
    activeIndex.value = 5;
  } else if (scrollTop > 4600) {
    activeIndex.value = 6;
  } else {
    return false;
  }
  // console.log('object :>> ', activeIndex.value);
};

onMounted(() => {
  window.addEventListener('scroll', scroTop);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scroTop);
});
// 埋点统计
function setAdvertisedData() {
  const sensors = (window as any)['sensorsDataAnalytic201505'];
  const { href } = window.location;
  if (href.includes('?utm_source')) {
    const paramsArr = getUrlParams(href);
    sensors?.setProfile({
      ...(window as any)['sensorsCustomBuriedData'],
      profileType: 'fromAdvertised',
      page:'Internship',
      origin: href,
      ...paramsArr,
    });
  }
}
onMounted(() => {
  setTimeout(() => {
    setAdvertisedData();
  }, 300);
});
</script>

<template>
  <OTitleNav
    v-show="isShowNav"
    class="titlenav"
    :current-index="activeIndex"
    :data-list="NAV_LIST"
    :internship="true"
  ></OTitleNav>
  <InternshipBanner />
  <main class="wrapper">
    <section id="introduce" class="panel introduce-card">
      <p class="text">
        昇思MindSpore开源实习是MindSpore社区携手openEuler社区等多个社区共同发起的线上实习项目，旨在鼓励在校学生积极参与开源社区，在实际的开源环境中提升实践能力。由昇思MindSpore社区提供实习任务，并提供导师辅导，学生通过实习申请后，可在社区领取任务，每完成一个任务可获得相应积分，积分累计达规定量后，可获得实习证明和实习工资。
      </p>
    </section>
    <section id="step" class="panel">
      <div class="step-title title">
        <img :src="StepTitle" alt="" />
      </div>
      <InternshipStep />
    </section>
    <section id="task" class="panel">
      <div class="task-title title">
        <img :src="TaskTitle" alt="" />
        <p class="text">点击你感兴趣的SIG/特性组，查看相关实习任务</p>
      </div>
      <InternshipTask />
    </section>
    <section id="integral" class="panel">
      <div class="integral-title title">
        <img :src="IntegralTitle" alt="" />
      </div>
      <div class="integral-border">
        <div class="integral-content">
          <div
            v-for="(item, index) in INTEGRAL_DATA"
            :key="item.HEAD"
            class="integral-item"
            :class="{ circular: index !== 3 }"
          >
            <h3>{{ item.HEAD }}</h3>
            <div v-for="(item1, index1) in item.TEXT" :key="item1" class="star">
              <img v-if="index === 3" src="/img/internship/star.png" alt="" />
              <p>
                <slot v-if="index === 1 && index1 === 2">
                  <a href="/doc/实习报告模板.docx" title="下载报告模板">{{
                    item1
                  }}</a>
                </slot>
                <span v-else>{{ item1 }}</span>
              </p>
            </div>
            <div class="supplement">{{ item.SUPPLEMENT }}</div>
          </div>
        </div>
      </div>
    </section>
    <section id="rank" class="panel">
      <div class="rank-title">
        <img class="web" src="/img/internship/rank-title.png" alt="" />
        <img class="mobile" src="/img/internship/rank-title-mo.png" alt="" />
      </div>
      <InternshipRank />
    </section>
  </main>
  <section id="rule" class="panel">
    <div class="rule-title title">
      <img src="/img/internship/rule-title.png" alt="" />
    </div>
    <div class="rule-border">
      <div class="rule-content">
        <div class="wrapper">
          <div
            v-for="(item, index) in RULE.RULE_DATA"
            :key="index"
            class="rule-item"
          >
            <div class="question">{{ item.QUESTION }}</div>
            <div class="answer">{{ item.ANSWER }}</div>
          </div>
          <div class="more-question orange">
            {{ RULE.MORE[0] }}
            <a
              class="this-post"
              href="https://gitee.com/openeuler-competition/opensource-internship/issues/I4AJIR?from=project-issue"
              target="_blank"
              >{{ RULE.MORE[1] }}</a
            >
            {{ RULE.MORE[2] }}
          </div>
        </div>
      </div>
    </div>
  </section>
  <main class="wrapper">
    <section id="partner" class="panel">
      <div class="warper">
        <div class="partner-title title">
          <img :src="PartnerTitle" alt="" />
        </div>
        <div class="img-list">
          <div
            v-for="(item, index) in PARTNER_DATA"
            :key="index"
            class="img-cover"
          >
            <img alt="" :src="item.IMG" />
          </div>
        </div>
      </div>
    </section>
  </main>
  <div id="help" class="help-title title">
    <img :src="HelpTitle" alt="" />
  </div>
  <div class="help-wrap">
    <section class="panel">
      <div class="wrapper help-content">
        <div class="help-left">
          <p>
            {{ HELP.INFO[0] }}
            <a href="mailto:intern@openeuler.sh">{{ HELP.INFO[1] }}</a>
          </p>
          <p>{{ HELP.INFO[2] }}</p>
          <p>{{ HELP.INFO[3] }}</p>
        </div>
        <div class="help-right">
          <p v-for="(item, index) in HELP.ITEM" :key="index">
            <img :src="item.IMG" alt="" />
            <span>{{ item.TEXT }}</span>
          </p>
        </div>
      </div>
    </section>
  </div>
  <div class=""></div>
</template>

<style lang="scss" scoped>
.panel {
  margin-top: 64px;
  .text {
    font-size: 20px;
    font-weight: 400;
    color: var(--theme-title);
    line-height: 40px;
  }
  .title {
    text-align: center;
    margin-bottom: 60px;
    img {
      width: 180px;
    }
  }
  @media (max-width: 1000px) {
    margin-top: 40px;
    .text {
      font-size: 14px;
      line-height: 22px;
      margin-top: 16px;
    }
    .title {
      margin-bottom: 16px;
      img {
        width: auto !important;
        height: 24px;
      }
    }
  }
}
.introduce-card {
  background: var(--theme-card-bg);
  padding: 40px;
  box-shadow: 0px 13px 30px 0px var(--theme-shadow);
  @media (max-width: 1000px) {
    padding: 16px 12px;
    .text {
      font-size: 14px;
      line-height: 22px;
    }
  }
}

#integral {
  .integral-title {
    img {
      width: 270px;
      @media (max-width: 1000px) {
        width: 155px;
        height: 34px;
      }
    }
  }
  .integral-border {
    border: 5px solid #5877ff;
    border-top: 16px solid #5877ff;
    background-color: #5877ff;
    .integral-content {
      padding: 5px 15px 10px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      background: #eef1ff url(/img/internship/integral-bg.png) no-repeat right
        bottom;
      line-height: 24px;
      h3,
      h4 {
        margin: 10px 0;
        font-size: 18px;
        color: #000000;
      }
      h4 {
        margin-top: 10px;
        font-size: 14px;
      }
      p {
        position: relative;
        padding-left: 12px;
      }
      .circular {
        p::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #2e9afe;
        }
      }
      .star {
        position: relative;
        img {
          position: absolute;
          left: 0;
          top: 8px;
          height: 8px;
        }
      }
      .download-color {
        cursor: pointer;
        color: #002fa7;
      }
    }
  }
  @media (max-width: 1000px) {
    .integral-border {
      border: 5px solid #5877ff;
      border-top: 16px solid #5877ff;
      border-radius: 8px;
      background-color: #5877ff;
    }
    .integral-content {
      padding-bottom: 41px;
      height: 100%;
      background: none;
      border-radius: 8px;
      background-color: #eef1ff;
      h3,
      h4 {
        margin-bottom: 6px;
        font-size: 16px;
        color: #000000;
      }
      h4 {
        margin-top: 8px;
        margin-bottom: 0;
        font-size: 12px;
      }
    }
  }
}

#rank {
  padding-top: 30px;
  .rank-title {
    position: relative;
    height: 80px;
    text-align: center;
    img {
      border-radius: 8px 8px 0 0;
      width: 374px;
    }
    .mobile {
      display: none;
    }
  }
  .rank-title::before {
    position: absolute;
    content: '积分排行';
    width: 374px;
    color: #fff;
    text-align: center;
    font-size: 28px;
    line-height: 80px;
  }
  @media (max-width: 1000px) {
    .rank-title {
      height: 48px;
      img {
        width: 109px;
      }
      .web {
        display: none;
      }
      .mobile {
        display: inline-block;
      }
    }
    .rank-title::before {
      content: '';
    }
  }
}

#rule {
  .rule-title {
    img {
      width: 250px;
    }
  }
  .rule-border {
    border-radius: 8px;
    border: 5px solid #5dc8ff;
    border-top: 16px solid #5dc8ff;
    background-color: #5dc8ff;
  }
  .rule-content {
    padding: 32px 0 20px 0;
    background: rgba(255, 255, 255, 0.9);
    .question {
      margin-bottom: 10px;
      font-size: 18px;
      color: #000000;
      line-height: 24px;
    }
    .answer {
      margin-bottom: 10px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
      line-height: 24px;
    }
    .more-question {
      padding-top: 25px;
      font-size: 14px;
      color: #ff7c56;
      .this-post {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 1000px) {
    .rule-title {
      img {
        width: 155px;
      }
    }

    .rule-content {
      border-radius: 8px;
      padding: 16px 0;
      height: 100%;
      background: none;
      background-color: #eff9ff;
      .warper {
        padding: 0;
      }
      .question {
        margin-bottom: 6px;
        font-size: 16px;
        line-height: 22px;
      }
      .answer {
        margin-bottom: 6px;
        font-size: 12px;
        line-height: 22px;
      }
      .more-question {
        padding-top: 6px;
        font-size: 12px;
        .this-post {
          font-size: 14px;
        }
      }
    }
  }
}

#partner {
  .img-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    .img-cover {
      width: 353px;
      height: 100px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    @media (min-width: 768px) and (max-width: 1440px) {
      .img-cover {
        width: 261px;
        height: auto;
      }
    }
  }

  @media (max-width: 1000px) {
    .img-list {
      margin-bottom: 0;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
      .img-cover {
        width: auto;
        flex: 1;
        height: auto;
      }
    }
  }
}
.help-wrap {
  background: #fff;
  padding: 40px 0;
  .panel {
    margin-top: 0;
  }
}
.help-title {
  text-align: center;
  margin: 60px 0;
  img {
    width: 180px;
  }
  @media (max-width: 1000px) {
    margin: 40px 0 16px;
    img {
      width: auto;
      height: 24px;
    }
  }
}
.help-content {
  display: flex;
  justify-content: center;
  .help-left {
    padding-right: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 20px;
      color: #000000;
      line-height: 40px;
      margin-bottom: 10px;
      a {
        font-size: 20px;
      }
    }
  }
  .help-right {
    display: flex;
    justify-content: center;
    gap: 38px;
    p {
      width: 172px;
      text-align: center;
    }
    img {
      width: 100%;
      display: block;
    }
    span {
      font-size: 14px;
      line-height: 22px;
      display: inline-block;
      color: var(--theme-text);
      margin-top: 8px;
    }
  }
}
@media (max-width: 1000px) {
  .help-content {
    padding: 0 16px;
    flex-direction: column;
    .help-left {
      padding-right: 0;
      p {
        line-height: 30px;
        margin-bottom: 10px;
        a {
          font-size: 20px;
        }
      }
    }
    .help-right {
      display: block;
      p {
        margin: 24px auto 0;
      }
    }
  }
}
</style>
