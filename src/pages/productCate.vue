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
        <section>
          <propagate />
        </section>
        <section class="product" v-for="(item, index) in productData" :key="index">
          <header class="productHeader">
            <span class="productTitle">{{ item.title }}</span>
          </header>
          <ul class="productContent">
            <li v-for="(data, i) in item.data" :key="i">
              <product :data="data" />
            </li>
          </ul>
        </section>
      </article>
    </main>
    <footer>
      <footer-default />
    </footer>
  </div>
</template>

<script>
import headerDefault from '../components/header.vue'
import propagate from '../components/propagate.vue'
import product from '../components/products.vue'
import footerDefault from '../components/footer.vue'
 
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

var productData = [
  {
    title: '数码影像',
    data:[
      {
        img: 'product_1',
        title: 'Canon 佳能 IXUS 132 数码相机 粉色( 1600像素 2.7" LCD',
        price: '669.00',
        number: '79条'
      },
      {
        img: 'product_2',
        title: 'Canon 佳能 PowerShot N 数码相机 白色 礼盒装',
        price: '2199.00',
        number: '0条'
      },
      {
        img: 'product_3',
        title: '全网底价 Fujifilm 富士 FinePix JX710 数码相机 粉色',
        price: '349.00',
        number: '157条'
      },
      {
        img: 'product_4',
        title: 'Canon 佳能 EOS 60D 单反套机 ( EF-S 18-135IS )',
        price: '6099.00',
        number: '1322条'
      },
      {
        img: 'product_5',
        title: 'SONY 索尼 DSC-TX66 数码相机 粉色 ( 1820万像素/3.3英寸',
        price: '969.00',
        number: '190条'
      },
      {
        img: 'product_6',
        title: 'Canon 佳能 LEGRIA HFR506 摄像机 白色',
        price: '2799.00',
        number: '0条'
      },
      {
        img: 'product_7',
        title: 'Samsung 三星 GALAXY Tab3 3G版 T111 7英寸平板电脑',
        price: '1698.00',
        number: '0条'
      },
      {
        img: 'product_8',
        title: '全网底价 Sony 索尼 NEX-3NL 16-50mm 单变焦镜头套装 粉',
        price: '2430.00',
        number: '203条'
      }
    ]
  },
  {
    title: '娱乐影音',
    data:[
      {
        img: 'product_9',
        title: 'KSD 凯仕达 USB 电脑 跳舞毯 (即接即用, 性价比强纯中文',
        price: '39.90',
        number: '7865条'
      },
      {
        img: 'product_10',
        title: 'Apple 苹果 iPod touch4 32G MD058CH/A 白色 多媒体播放',
        price: '1359.00',
        number: '16条'
      },
      {
        img: 'product_11',
        title: 'lepow乐泡 磐石6000 通用型移动电源 大黄鸭定制版本',
        price: '139.00',
        number: '87条'
      },
      {
        img: 'product_12',
        title: 'Youwin 有多闻 UDN708 天乙 四核手机平板 7英寸 IPS全贴',
        price: '799.00',
        number: '87条'
      },
      {
        img: 'product_13',
        title: '天韵 2CJTBD 2寸吉他背带(黑色 花色)',
        price: '3.00',
        number: '19条'
      },
      {
        img: 'product_14',
        title: 'Philips 飞利浦 SPF1127/93 7英寸 数码相框 白色',
        price: '259.00',
        number: '255条'
      },
      {
        img: 'product_15',
        title: 'ibody Rainbow 蓝牙健康追踪器 蓝色',
        price: '239.00',
        number: '19条'
      },
      {
        img: 'product_16',
        title: 'SmartQ 智器 Z Watch 智能手表 开启可穿戴式达人酷比生活',
        price: '699.00',
        number: '16'
      }
    ]
  }
]
  
export default {
  data () {
    return {
      cateData: cateData,
      productData: productData
    }
  },
  components: {
    headerDefault,
    propagate,
    product,
    footerDefault
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
      margin-bottom: 40px;
      .cate {
        width: 185px;
        height: 850px;
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
          
        }
        .product {
          width: 100%;
          margin-top: 8px;
          .productHeader {
            width: 100%;
            height: 35px;
            display: flex;
            line-height: 35px;
            border-bottom: 1px solid #ccc;
            position: relative;
            margin-bottom: 15px;
            // 利用伪元素遮盖底边框实现前半部边框颜色的改变
            &::before {
              content: '';
              position: absolute;
              width: 180px;
              height: 1px;
              background-color: #096dba;
              bottom: -1px;
            }
            .productTitle {
              padding-left: 10px;
              font-size: 15px;
              font-weight: bold;
              height: 100%;
            }
          }
          .productContent {
              width: 100%;
              padding: 0 15px;
              display: flex;
              flex-wrap: wrap;
              li {
                width: 25%;
                margin-bottom: 20px;
              }
            }
        }
      }
    }
  }
</style>

