<template>
  <div class="cateDetailCPNT">
    <section class="catePart">
      <aside class="cateTitle">
        {{ cateDetailData.title }}
      </aside>
      <ul class="cateInfo">
        <li v-for="(item, index) in cateDetailData.info" :key="index" :class="{ orange: item === '超极本' }">{{ item }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      cateDetailData: this.data
    }
  }
}
</script>

<style lang="scss">
  .cateDetailCPNT {
    .catePart {
      display: flex;
      flex-wrap: wrap;
      border-bottom: 1px solid #e5e5e5;
      padding-top: 12px;
      margin: 0 19px;
      font-size: 11px;
      .cateTitle {
        width: 48px;
        color: #4b88da;
        font-weight: bold;
        margin-right: 15px;
      }
      .cateInfo {
        width: 467px;
        color: #666666;
        li {
          margin-right: 14px;
          margin-bottom: 11px;
          float: left;              
        }
        .orange {
          color: #ff7300;
        }
      }
    }
  }
</style>
