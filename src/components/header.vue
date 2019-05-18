<template>
  <div class="headerCPNT">
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
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .headerCPNT {
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
  }
</style>

