<template>
  <div class="goodsCPNT">
    <header class="goodsHeader">
      <article class="left">
        <img src="../images/icon1.png" alt="leibie">
        <span class="word">家用电脑</span>
      </article>
      <span class="right">更多>></span>
    </header>
    <main class="goodsMain">
      <aside class="AD">
        <img src="../images/ad1.png" alt="">
      </aside>
      <article class="content">
        <ul class="mainGoods">
          <li>
            <img src="../images/HTC.png" alt="htc">
            <p>HTC新渴望8系列</p>
            <p class="price">1899元</p>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul class="subGoods">
          <li>
            <div class="box">
              <img src="../images/NFC.png" alt="NFC">
              <article class="info">
                <p>NFC技术一碰轻松配对!接触屏幕</p>
                <p>&yen;<span class="price">149.00</span></p>
              </article>
            </div>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  
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
