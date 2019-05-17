<template>
  <div class="indexPage">
    <header class="header">
      <p class="left">
        <img src="../images/yellow_star.png" alt="" class="star">
        <span class="word">收藏慕课</span>
      </p>
      <p class="right">
        <span>欢迎来到慕课网![登录][免费注册]</span>
      </p>
    </header>
    <section class="searchBox">
      <img src="../images/logo.png" alt="logo" class="logo">
      <section class="search">
        <input type="text" class="input">
        <button class="btn">搜索</button>
      </section> 
      <section class="cart">
        <p class="left">
          <img src="../images/cart_inco.png" alt="cart_icon" class="cartIcon">
          <span>购物车</span>
        </p>
        <p class="arrowDown">
          <span class="word">0</span>
          <img src="../images/arrow_down.png" alt="arrow_down" class="arrow">
        </p>
      </section>
    </section>
    <nav class="nav">
      <section class="allCate">
        <span>全部商品分类&nbsp;</span>
        <img src="../images/cate_arrow.png" alt="arrow">
      </section>
      <section class="cateTitle">
        <ul class="clearFix">
          <li class="active">数码城</li>
          <li>天黑黑</li>
          <li>团购</li>
          <li>发现</li>
          <li>二手特卖</li>
          <li>名品会</li>
        </ul>
      </section>
    </nav>
    <section class="cate">
      <aside class="cateSummary">
        <cate-card v-for="(item, index) in data.cateCardList" :key="index" :data="item" :active="index === 1 ? true : false" />
      </aside>
      <section class="swipe">
        <img src="../images/swipe.png" alt="swipe">
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
  </div>
</template>

<script>
import cateCard from '../components/cateCard.vue'
import cateDetail from '../components/cateDetail.vue'

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
export default {
  data () {
    return {
      data: {
        cateCardList: cateCardList,
        cateDetailList: cateDetailList
      }
    }
  },
  components: {
    cateCard,
    cateDetail
  }
}
</script>

<style lang="scss">
  .indexPage {
    width: 1000px;
    margin: 0 auto;
    .header {
      background-image: url('../images/header_bcg.png');
      background-repeat: repeat-x;
      display: flex;
      justify-content: space-between;
      background-color: red;
      font-size: 12px;
      padding-right: 20px;
      .left {
        height: 30px;
        line-height: 30px;
        display: flex;
        align-items: center;
        .star {
          margin-right: 5px;
        }
        .word {
          color: rgb(102,102,102);
          font-weight: bold;
        }
      }
      .right {
        height: 30px;
        line-height: 30px;
      }
    }
    .searchBox {
      height: 85px;
      width: 100%;
      background-color: #1d7ad9;
      padding-left: 40px;
      padding-right: 60px;
      display: flex;
      align-items: center;
      .logo {
        margin-right: 184px;
      }
      .search {
        line-height: 35px;
        height: 35px;
        width: 430px;
        margin-right: 30px;
        // 大坑, 这里需要这是flex布局方式, 否则按钮与输入框不能对齐
        display: flex;
        .input {
          width: 360px;
          height: 34px;
        }
        .btn {
          width: 70px;
          height: 35px;
          border: none;
          position: relative;
          background-color: #ff8c00;
          color: #fff;
        }
      }
    }
    .cart {
      background-image: url('../images/cart_icon_bgc.png');
      width: 145px;
      height: 35px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-size: 14px;
      .cartIcon {
        margin-right: 2px;
        vertical-align: bottom;
      }
      .arrowDown {
        .arrow {
          vertical-align: middle;
        }
        .word {
          vertical-align: middle;
        }
      }
    }
    .nav {
      width: 100%;
      height: 35px;
      background-color: #1369c0;
      display: flex;
      align-items: center;
      color: white; 
      font-size: 15px;
      .allCate {
        width: 190px;
        padding-left: 40px;
        padding-right: 30px;
      }
      .cateTitle {
        li {
          float: left;
          width: 94px;
          height: 35px;
          line-height: 35px;
          text-align: center;
        }
        .active {
          background-color: #4593fd;
          width: 100px;
        }
      }
    }
    .cate {
      width: 100%; 
      height: 325px;
      display: flex;
      position: relative;
      .cateSummary {
        width: 190px;
        height: 100%;
      }
      .swipe {
        img {
          width: 810px;
          height: 325px;
        }
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
</style>
