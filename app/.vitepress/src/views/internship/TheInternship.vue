<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AppContent from '@/components/AppContent.vue';
import InternshipConfig from '@/data/internship';

import InternshipBanner from './InternshipBanner.vue';
import InternshipStep from './InternshipStep.vue';
import InternshipTask from './InternshipTask.vue';
import InternshipRank from './InternshipRank.vue';
import OTitleNav from '@/components/OTitleNav.vue';

import StepTitle from '/category/internship/step-title.png';
import TaskTitle from '/category/internship/task-title.png';
import IntegralTitle from '/category/internship/integral-title.png';
import PartnerTitle from '/category/internship/partner-title.png';
import HelpTitle from '/category/internship/help-title.png';

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
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

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
</script>

<template>
  <OTitleNav
    class="titlenav"
    v-show="isShowNav"
    :currentIndex="activeIndex"
    :dataList="NAV_LIST"
    :internship="true"
  ></OTitleNav>
  <InternshipBanner />
  <AppContent :mobile-top="16">
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
            class="integral-item"
            v-for="(item, index) in InternshipConfig.INTEGRAL_DATA"
            :class="{ circular: index !== 3 }"
            :key="item.HEAD"
          >
            <h3>{{ item.HEAD }}</h3>
            <div v-for="(item1, index1) in item.TEXT" :key="item1" class="star">
              <img
                v-if="index === 3"
                src="/category/internship/star.png"
                alt=""
              />
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
        <img class="web" src="/category/internship/rank-title.png" alt="" />
        <img
          class="mobile"
          src="/category/internship/rank-title-mo.png"
          alt=""
        />
      </div>
      <InternshipRank />
    </section>

    <section id="rule" class="panel">
      <div class="rule-title title">
        <img src="/category/internship/rule-title.png" alt="" />
      </div>
      <div class="rule-border">
        <div class="rule-content">
          <div class="wrapper">
            <div
              class="rule-item"
              v-for="(item, index) in InternshipConfig.RULE_DATA"
              :key="index"
            >
              <div class="question">{{ item.QUESTION }}</div>
              <div class="answer">{{ item.ANSWER }}</div>
            </div>
            <div class="more-question orange">
              {{ InternshipConfig.RULE_MORE[0] }}
              <a
                class="this-post"
                href="https://gitee.com/openeuler-competition/opensource-internship/issues/I4AJIR?from=project-issue"
                target="_blank"
                >{{ InternshipConfig.RULE_MORE[1] }}</a
              >
              {{ InternshipConfig.RULE_MORE[2] }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="partner" class="panel">
      <div class="warper">
        <div class="partner-title title">
          <img :src="PartnerTitle" alt="" />
        </div>
        <div class="img-list">
          <div
            class="img-cover"
            v-for="(item, index) in InternshipConfig.PARTNER_DATA"
            :key="index"
          >
            <img alt="" :src="item.IMG" />
          </div>
        </div>
      </div>
    </section>
  </AppContent>
  <div class="help-title title" id="help">
    <img :src="HelpTitle" alt="" />
  </div>
  <div class="help-wrap">
    <section class="panel">
      <div class="wrapper help-content">
        <div class="help-left">
          <p>
            {{ InternshipConfig.HELP.INFO[0] }}
            <a href="mailto:intern@openeuler.sh">{{
              InternshipConfig.HELP.INFO[1]
            }}</a>
          </p>
          <p>{{ InternshipConfig.HELP.INFO[2] }}</p>
          <p>{{ InternshipConfig.HELP.INFO[3] }}</p>
        </div>
        <div class="help-right">
          <p v-for="(item, index) in InternshipConfig.HELP.ITEM" :key="index">
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
  background: var(--o-color-bg2);
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
      background: #eef1ff url(/category/internship/integral-bg.png) no-repeat
        right bottom;
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
      color: var(--o-color-text4);
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
