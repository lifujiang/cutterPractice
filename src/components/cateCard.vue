<template>
  <div class="cateCardCPNT">
    <div class="top">
      <article class="word">
        <span class="keyword">{{ cateData.title }}</span>
        <span class="tag" v-if="cateData.tag !== ''">{{ cateData.tag }}</span>
      </article>
      <img src="../images/arrow_right.png" alt="arrow_right">
    </div>
    <div class="bottom">
      <span v-for="(item, index) in cateData.msg" :key="index">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      cateData: this.data
    }
  }
}
</script>

<style lang="scss">
  .cateCardCPNT {
    width: 190px;
    height: 65px;
    background-color: #4593fd;
    color: #fff;
    border-top: 1px solid #5aa1fe;
    padding-left: 10px;
    border-bottom: 1px solid #3487f2;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 11px;
      padding-right: 13px;
      margin-bottom: 2px;
      .keyword {
        font-size: 13px;
      }
      .tag {
        display: inline-block;
        margin-left: 3px;
        font-size: 12px;
        width: 48px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: url('../images/blue_circle.png');
      }
    }
    .bottom {
      padding-bottom: 11px;
      font-size: 12px;
      color: #c2d9f8;
    }
  }
</style>
