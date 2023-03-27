<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter, useData } from 'vitepress';
import OButton from '@/components/OButton.vue';
import IconArrowRight from '~icons/appbak/icon-arrow.svg';

const router = useRouter();

//任务列表
const TASK = {
  TASK_ITEM: [
    {
      NAME: '易用性',
      INTRODUCE:
        '易用性 SIG致力于和开发者共同打造易学易用、灵活高效的AI框架，持续提升MindSpore易用性，助力开发者成功',
      TASK: 'https://gitee.com/mindspore/community/issues/I55JQY',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'SIG-Compiler	',
      INTRODUCE: 'Compiler SIG聚焦于AI编译器前端的图优化',
      TASK: 'https://gitee.com/mindspore/community/issues/I5591E',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'SIG-Data',
      INTRODUCE: 'Data SIG聚焦于MindSpore框架中的数据处理模块',
      TASK: 'https://gitee.com/mindspore/community/issues/I55ET9',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'FrontEnd',
      INTRODUCE:
        'FrontEnd SIG为用户提供不同层次的API以支撑用户进行网络构建、整图执行、子图执行以及单算子执行',
      TASK: 'https://gitee.com/mindspore/community/issues/I55ECN',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'MSLITE',
      INTRODUCE: 'MindSpore Lite是一个极速、极智、极简的AI推理引擎',
      TASK: 'https://gitee.com/mindspore/community/issues/I55WCW',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'MindSpore Insight',
      INTRODUCE:
        '作为AI可视化工具，为华为 MindSpore的可视化及易用性赋能，提供模型可视化，profiler性能调优，debugger精度调试等工具，提升网络开发效率',
      TASK: 'https://gitee.com/mindspore/community/issues/I5608E',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'MindSpore Quantum',
      INTRODUCE:
        'MindSpore Quantum是基于昇思MindSpore开源深度学习框架和HiQ量子计算云平台开发的通用量子计算框架，支持多种量子神经网络的训练和推理',
      TASK: 'https://gitee.com/mindspore/community/issues/I55XLC',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'MindSpore Graph Learning',
      INTRODUCE:
        'MindSpore Graph Learning是一个基于MindSpore的高效易用的图神经网络学习框架',
      TASK: 'https://gitee.com/mindspore/community/issues/I55TNF',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'ModelZoo',
      INTRODUCE:
        'ModelZoo SIG 聚焦于实现state-of-the-art的深度学习模型，给出基于MindSpore的深度学习算法的基础实现，给用户提供简便易用的深度学习算法库',
      TASK: 'https://gitee.com/mindspore/community/issues/I55YWL',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'Parallel',
      INTRODUCE: 'Parallel SIG聚焦于利用分布式并行技术加速AI大模型训练和推理',
      TASK: 'https://gitee.com/mindspore/community/issues/I55XXN',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: '电磁仿真',
      INTRODUCE: 'MindSpore Elec是基于MindSpore开发的AI电磁仿真套件',
      TASK: 'https://gitee.com/mindspore/community/issues/I55PRL',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'MindSpore Flow',
      INTRODUCE:
        'MindSpore Flow是基于MindSpore AI+科学计算开源工具包MindScience的关于流体仿真方向的子工具包',
      TASK: 'https://gitee.com/mindspore/community/issues/I55B5A',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: '强化学习',
      INTRODUCE:
        'MindSpore Reinforcement是一个开源的强化学习框架，支持使用强化学习算法对agent进行分布式训练',
      TASK: 'https://gitee.com/mindspore/community/issues/I55XGB',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: '生物计算',
      INTRODUCE:
        'MindSPONGE分子模拟是指利用计算机以原子水平的分子模型来模拟分子结构与行为，进而模拟分子体系的各种物理、化学性质的方法',
      TASK: 'https://gitee.com/mindspore/community/issues/I561LI',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: '算子组',
      INTRODUCE:
        '算子是MindSpore深度学习框架中的一个基本组件，MindSpore框架中的算子包括算子前端和算子后端',
      TASK: 'https://gitee.com/mindspore/community/issues/I55QQH',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: '安全',
      INTRODUCE:
        'AI Security SIG 聚焦于AI模型开发项目中从数据处理到模型训练再到部署推理过程中的安全问题',
      TASK: 'https://gitee.com/mindspore/community/issues/I557F6',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'DX-SIG',
      INTRODUCE:
        'DX-SIG组是一个为开发者服务的群体，致力于利用AI技术提升社区开发体验',
      TASK: 'https://gitee.com/mindspore/community/issues/I56B3I',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
    {
      NAME: 'MindSpore量化金融',
      INTRODUCE:
        'MindSpore量化金融工具包MindQuantFinance是基于MindSpore AI+科学计算开源工具包MindScience的关于量化金融方向的子工具包',
      TASK: 'https://gitee.com/mindspore/community/issues/I5BAQ9',
      GITEE: 'https://gitee.com/mindspore/community/issues/I55QGD',
    },
  ],
  INTERNSHIP_TASK: '实习任务',
  SIG_DETAIL: 'SIG详情',
};

const go = (path: string) => {
  if (path && !path.includes('http')) {
    router.go(path);
  } else if (path.includes('http')) {
    window.open(path);
  } else {
    return false;
  }
};
</script>

<template>
  <div class="item-box">
    <div class="item" v-for="(item, index) in TASK.TASK_ITEM" :key="index">
      <p class="item-name">
        {{ item.NAME }}
      </p>
      <div class="item-intriduce">{{ item.INTRODUCE }}</div>
      <div class="button-box">
        <OButton type="primary" @click="go(item.TASK)">{{
          TASK.INTERNSHIP_TASK
        }}</OButton>
        <OButton type="text" @click="go(item.GITEE)" placement="right">
          {{ TASK.SIG_DETAIL }}
          <template #right>
            <OIcon><IconArrowRight /></OIcon>
          </template>
        </OButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 30px;
  .item {
    padding: 40px;
    background-color: var(--theme-card-bg);
    box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.1s;
    .item-name {
      color: var(--theme-title);
      font-size: 20px;
      @media (max-width: 1000px) {
        font-size: 16px;
      }
    }
    .item-intriduce {
      padding-top: 8px;
      margin-bottom: 20px;
      height: 70px;
      font-size: 14px;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      color: var(--theme-text);
    }
    .button-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .o-button--text {
        color: var(--theme-title);
        .o-icon {
          color: #ff7f0d;
        }
      }
    }
  }

  .item:hover {
    box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
}
@media screen and (min-width: 768px) and (max-width: 1440px) {
  .item-box {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}
@media (max-width: 760px) {
  .item-box {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
}
@media (max-width: 1000px) {
  .task-introduce {
    text-align: left;
    font-size: 16px;
  }
  .item-box {
    .item:nth-child(n) {
      width: 100%;
      padding: 16px 12px;
      .item-intriduce {
        width: 100%;
      }
      .button-box {
        justify-content: inherit;
        gap: 16px;
      }
    }
  }
}
</style>
