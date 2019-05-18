<template>
  <div class="goodsCPNT">
    <header class="goodsHeader">
      <article class="left">
        <img :src="handleImg(goodsListData.title_icon)" alt="leibie">
        <span class="word">{{ goodsListData.title }}</span>
      </article>
      <span class="right">更多>></span>
    </header>
    <main class="goodsMain">
      <aside class="AD">
        <img :src="handleImg(goodsListData.ad)" alt="">
      </aside>
      <article class="content">
        <ul class="mainGoods">
          <li v-for="(item, index) in goodsListData.maingoods" :key="index">
            <img :src="handleImg(item.img)" alt="HTC">
            <p>{{ item.title }}</p>
            <p class="price">{{ item.price }}</p>
          </li>
        </ul>
        <ul class="subGoods">
          <li v-for="(item, index) in goodsListData.subgoods" :key="index">
            <div class="box">
              <img :src="handleImg(item.img)" alt="NFC">
              <article class="info">
                <p>{{ item.title }}</p>
                <p>&yen;<span class="price">{{ item.price }}</span></p>
              </article>
            </div>
          </li>
        </ul>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      goodsListData: this.data,
      good: ''
    }
  },
  methods: {
    handleImg (img) {
      var imgList = {
        ad1: require('../images/ad1.png'),
        ad2: require('../images/ad2.png'),
        Apple: require('../images/Apple.png'),
        samsung: require('../images/samsung.png'),
        NFC: require('../images/NFC.png'),
        ipad: require('../images/ipad.png'),
        kbt: require('../images/kbt.png'),
        HTC: require('../images/HTC.png'),
        foods: require('../images/foods.png'),
        icon1: require('../images/icon1.png')
      }
      console.log(imgList[img])
      return imgList[img]
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  .goodsCPNT {
    height: 475px;
    width: 1000px;
    .goodsHeader {
      width: 100%;
      height: 75px;
      padding-right: 23px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      .left {
        display: flex;
        align-items: center;
        .word {
          margin-left: 12px;
          font-size: 20px;
        }
      }
      .right {
        line-height: 105px;
      }
    }
    .goodsMain {
      display: flex;
      width: 100%;
      height: 400px;
      .AD {
        width: 190px;
        height: 100%;
      }
      .content {
        width: 810px;
        height: 100%;
        border-bottom: 2px solid #ff7201;
        border-top: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
        .mainGoods {
          width: 810px;
          height: 280px;
          li {
            width: 25%;
            height: 100%;
            float: left;
            border-bottom: 1px solid #e5e5e5;
            padding-top: 45px;
            &:not(:last-of-type) {
              border-right: 1px solid #e5e5e5;
            }
            img {
              display: block;
              margin: 0 auto;
              margin-bottom: 25px;
            }
            p {
              text-align: center;
            }
            .price {
              font-size: 12px;
              color: #ff7300;
            }
          }
        }
        .subGoods {
          width: 810px;
          height: 120px;
          li {
            width: 25%;
            height: 100%;
            float: left;
            font-size: 12px;
            &:not(:last-of-type) {
              border-right: 1px solid #e5e5e5;
            }
            display: flex;
            align-items: center;
            .box {
              margin: 0 auto;
              display: flex;
              img {
                margin-right: 10px;
              }
              .info {
                width: 90px;
                height: 50px; 
                p {
                  white-space: normal;
                  word-break: break-all;
                  margin-bottom: 4px;
                  .price {
                    font-size: 15px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
