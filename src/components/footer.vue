<template>
  <div class="footerCPNT">
    <div class="box">
      <div class="word">
        <p>慕课简介|慕课公告| 招纳贤士| 联系我们|客服热线：400-675-1234</p>
        <p>Copyright © 2006 - 2014 慕课版权所有&nbsp;&nbsp;&nbsp;京ICP备09037834号&nbsp;&nbsp;&nbsp;京ICP证B1034-8373号&nbsp;&nbsp;&nbsp;某市公安局XX分局备案编号：123456789123</p>
      </div>
      <ul class="credit clearFix">
        <li>
          <img src="../images//credit.png" alt="credit">
        </li>
        <li>
          <img src="../images//credit.png" alt="credit">
        </li>
        <li>
          <img src="../images//credit.png" alt="credit">
        </li>
        <li>
          <img src="../images//credit.png" alt="credit">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
 .footerCPNT {
  width: 100%;
  height: 223px;
  background-color: #d4d4d4;
  display: flex;
  align-items: center;
  .box {
    width: 100%;
    text-align: center;
    .word {
      margin: 0 auto;
      margin-bottom: 35px;
      font-size: 13px;
      p {
        margin-bottom: 10px;
      }
    }
    .credit {
      display: inline-block;
      li {
        float: left;
        margin-left: 23px;
      }
    }
  }
 }
</style>

