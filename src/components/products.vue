<template>
  <div class="productsCPNT">
    <img :src="handlerImg(productList.img)" alt="product">
    <div class="title">{{ productList.title }}</div>
    <div class="price">&yen;{{ productList.price }}</div>
    <div class="comment">
      <span>评价:</span>
      <span class="star">★★★★★</span>
      <span class="number">({{ productList.number }})</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      productList: this.data
    }
  },
  methods: {
    handlerImg (img) {
      var imgList = {
        'product_1': require('../images/product_1.png'),
        'product_2': require('../images/product_2.png'),
        'product_3': require('../images/product_3.png'),
        'product_4': require('../images/product_4.png'),
        'product_5': require('../images/product_5.png'),
        'product_6': require('../images/product_6.png'),
        'product_7': require('../images/product_7.png'),
        'product_8': require('../images/product_8.png'),
        'product_9': require('../images/product_9.png'),
        'product_10': require('../images/product_10.png'),
        'product_11': require('../images/product_11.png'),
        'product_12': require('../images/product_12.png'),
        'product_13': require('../images/product_13.png'),
        'product_14': require('../images/product_14.png'),
        'product_15': require('../images/product_15.png'),
        'product_16': require('../images/product_16.png')
      }
      return imgList[img]
    }
  }
}
</script>

<style lang="scss">
  .productsCPNT {
    width: 170px;
    font-size: 12px;
    img {
      display: block;
      margin-bottom: 7px;
    }
    .title {
      display: block;
      white-space: normal;
      margin-bottom: 28px;
    }
    .price {
      font-weight: bold;
      color: #d4105a;
    }
    .comment {
      .star {
        font-size: 15px;
        color: #f6a135;
      }
      .number {
        color: #085c9b;
      }
    }
  }
</style>

