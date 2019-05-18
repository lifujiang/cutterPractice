<template>
  <div class="indexPage">
    <header>
      <header-default />
    </header>
    <main>
      <section class="cate">
        <aside class="cateSummary">
          <cate-card v-for="(item, index) in data.cateCardList" :key="index" :data="item" :active="index === 1 ? true : false" />
        </aside>
        <section>
          <propagate />
        </section>
        <article class="cateDetail">
          <cate-detail v-for="(item, index) in data.cateDetailList" :key="index" :data="item" />
          <section class="channal">
            <p class="btn">
              <span class="word">电脑整机频道</span>
              <img src="../images/arrow_right.png" alt="arrow_right">
            </p>
            <p class="btn">
              <span class="word">硬件/外设频道</span>
              <img src="../images/arrow_right.png" alt="arrow_right">
            </p>
          </section>
        </article>
      </section>
      <section class="goods">
        <goods v-for="(item, index) in data.goodsList" :key="index" :data="item" />
      </section>
    </main>
    <footer>
      <footer-default />
    </footer>
  </div>
</template>

<script>
import headerDefault from '../components/header.vue'
import propagate from '../components/propagate.vue'
import cateCard from '../components/cateCard.vue'
import cateDetail from '../components/cateDetail.vue'
import goods from '../components/goods.vue'
import footerDefault from '../components/footer.vue'

var cateCardList = [
  {
  title: '手机 数码',
  tag: '合约机',
  info: ['荣耀3X', '单反', '智能设备']
  },
  {
  title: '电脑 硬件外设',
  tag: '装机宝',
  info: ['笔记本', '台式机', '超极本', '平板']
  },
  {
  title: '大家电',
  tag: '',
  info: ['电视', '空调', '冰箱', '洗衣机']
  },
  {
  title: '厨房电器 生活电器',
  tag: '',
  info: ['空气净化器', '微波炉', '取暖设备']
  },
  {
  title: '食品/饮料/生鲜',
  tag: '粮油',
  info: ['进口', '方便面', '零食', '保健']
  }
]
var cateDetailList = [
  {
    title: '电脑整机',
    info: ['笔记本', '超极本', '上网本', '平板电脑', '台式机']
  },
  {
    title: '装机配件',
    info: ['CPU', '硬盘', 'SSD固态硬盘', '内存', '显示', '智能显示器', '主板', '显卡', '机箱', '电源', '散热器', '刻录机/光驱', '声卡', '拓展卡', '服务器配件', 'DIY小附件', '装机/配件安装']
  },
  {
    title: '整机附件',
    info: ['电脑版', '电脑桌', '电池', '电源适配器', '贴膜', '清洁用品', '笔记本散热器', 'USB拓展', '平板配件', '特色附件', '插座网线/电话线', '影音线材', '电脑线材']
  },
  {
    title: '电脑外设',
    info: ['鼠标', '键盘', '游戏外设', '移动硬盘', '摄像头', '高清播放器', '外置盒', '移动硬盘包', '手写板/绘图板']
  },
  {
    title: '网络设备',
    info: ['路由器', '网卡', '3G无线上网', '交换机', '网络存储', '布线工具', '网络配件', '正版软件']
  },
  {
    title: '音频设备',
    info: ['音箱', '耳机/耳麦', '麦克风', '声卡', '音频附件', '录音笔']
  }
]
var goodsList = [
  {
    ad: 'ad1',
    title: '家用电脑',
    title_icon: 'icon1',
    maingoods: [
      {
        img: 'HTC',
        title: 'HTC新渴望8系列',
        price: '1899元'
      },
      {
        img: 'HTC',
        title: 'HTC新渴望9系列',
        price: '1999元'
      },
      {
        img: 'HTC',
        title: 'HTC新渴望10系列',
        price: '2099元'
      },
      {
        img: 'HTC',
        title: 'HTC新渴望11系列',
        price: '2199元'
      }
    ],
    subgoods: [
      {
        img: 'NFC',
        title: 'NFC技术一碰轻松配对!接触屏幕',
        price: '149.00'
      },
      {
        img:'samsung',
        title: 'Samsung三星GALAXY Grand2',
        price: '2000.00'
      },
      {
        img: 'ipad',
        title: '全网低价 Apple苹果iPad mini1',
        price: '1888.00'
      },
      {
        img: 'Apple',
        title: 'Apple苹果 全新Retina屏MacBook',
        price: '20020.00'
      }
    ]
  },
  {
    ad: 'ad2',
    title: '食品酒水',
    title_icon: 'icon1',
    maingoods: [
      {
        img: 'foods',
        title: '三月美食狂享购',
        price: '50元'
      },
      {
        img: 'foods',
        title: '四月美食狂享购',
        price: '60元'
      },
      {
        img: 'foods',
        title: '五月美食狂享购',
        price: '60元'
      },
      {
        img: 'foods',
        title: '六月美食狂享购',
        price: '70元'
      }
    ],
    subgoods: [
      {
        img: 'kbt',
        title: '康比特 维他保咀嚼片 80片',
        price: '800.00'
      },
      {
        img: 'kbt',
        title: '康比特 维他保咀嚼片 40片',
        price: '400.00'
      },
      {
        img: 'kbt',
        title: '康比特 维他保咀嚼片 20片',
        price: '200.00'
      },
      {
        img: 'kbt',
        title: '康比特 维他保咀嚼片 10片',
        price: '100.00'
      }
    ]
  }
]
export default {
  data () {
    return {
      data: {
        cateCardList: cateCardList,
        cateDetailList: cateDetailList,
        goodsList: goodsList
      }
    }
  },
  components: {
    headerDefault,
    propagate,
    cateCard,
    cateDetail,
    goods,
    footerDefault
  }
}
</script>

<style lang="scss">
  .indexPage {
    width: 1000px;
    margin: 0 auto;
    main {
      margin-bottom: 40px;
      .cate {
        width: 100%; 
        height: 325px;
        display: flex;
        position: relative;
        .cateSummary {
          width: 190px;
          height: 100%;
        }
        .cateDetail {
          width: 570px;
          height: 380px;
          border: 1px solid #dddddd;
          background-color: #fff;
          position: absolute;
          top: 0;
          left: 190px;
          .channal {
            display: flex;
            margin-left: 19px;
            margin-top: 15px;
            .btn {
              background-image: url('../images/blue_square.png');
              width: 105px;
              height: 26px;
              font-size: 12px;
              display: flex;
              align-items: center;
              margin-right: 10px;
              padding-left: 8px;
              padding-right: 14px;
              color: #fff;
              .word {
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
  }
</style>
