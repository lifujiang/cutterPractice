<template>
  <div class="productCatePage">
    <header>
      <header-default />
    </header>
    <main>
      <aside class="cate">
        <header class="cateHeader">
          {{ cateData.header }}
        </header>
        <section class="cateInfo" v-for="(item, index) in cateData.cateList" :key="index">
          <header class="subCateHeader">{{ item.title }}</header>
          <article class="cateContent">
            <ul>
              <li v-for="(data, i) in item.data" :key="i">{{ data }}</li>
            </ul>
          </article>
        </section>
      </aside>
      <article class="content">
        <section class="img">
          <img src="../images/product.png" alt="product">
        </section>
      </article>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import headerDefault from '../components/header.vue'

var cateData = {
  header: '手机、相机、数码',
  cateList: [
    {
      title: '手机通讯',
      data: ['全部手机', '1080P高清', '双卡手机', '拍照神器', '老年手机', '对讲机', '联通专区']
    },
    {
      title: '数码相机',
      data: ['卡片机', '中长焦', '专业便', '携自拍利器', '防水防摔', '一次成像']
    },
    {
      title: '单反',
      data: ['全部', '佳能', '尼康', '宾得', '哈苏']
    },
    {
      title: '镜头',
      data: ['单反镜头', '微单镜头']
    },
    {
      title: '摄像机',
      data: ['全部', '索尼', '松下', '佳能', '三星']
    },
    {
      title: '摄像配件',
      data: ['相机包', '相机电池', '贴膜', '滤镜', '三脚架', '闪光灯', '遮光罩', '遥控器', '专业配件', '清洁用品', '望远镜']
    },
    {
      title: '数码储存',
      data: ['刻录盘片', '盘片附件']
    },
    {
      title: '电子教育',
      data: ['电子书', '电子词典', '幼儿教育', '智能学习', '录音笔']
    }
  ]
}
  
export default {
  data () {
    return {
      cateData: cateData
    }
  },
  components: {
    headerDefault
  },
  created () {
  }
}
</script>

<style lang="scss">
  .productCatePage {
    width: 1000px;
    margin: 0 auto; 
    main {
      display: flex;
      margin-top: 17px;
      .cate {
        width: 185px;
        border: 1px solid #d7d7d7;
        .cateHeader {
          font-size: 14px;
          height: 34px;
          line-height: 34px;
          text-align: center;
          border-bottom: 1px solid #cdcdcd;
          font-weight: bold;
        }
        .cateInfo {
          font-size: 12px;
          padding-top: 8px;
          &:last-of-type {
            .cateContent {
              border-bottom: none;
            }
          }
          .subCateHeader {
            padding-left: 20px;
            font-weight: bold;
            margin-bottom: 7px;
          }
          .cateContent {
            padding-left: 20px;
            display: flex;
            border-bottom: 1px dotted #d7d7d7;
            ul {
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              li {
                width: 50%;
                margin-bottom: 7px;
              }
            }
          }
        }
      }
      .content {
        width: 810px;
        margin-left: 5px;
        .img {
          height: 325px;
          width: 810px;
          background-image: url('../images/swipe.png');
          background-position: -15px -13px;
          position: relative;
          img {
            position: absolute;
            top: 12px;
            left: 55px;
          }
        }
      }
    }
  }
</style>

