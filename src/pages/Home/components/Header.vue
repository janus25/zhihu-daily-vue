<template>
  <div class="header">
    <div class="left">
      <img src="../../../assets/img/menu.png" alt="" class="menu">
      <p>首页</p>
    </div>
    <div class="right">
      <img src="../../../assets/img/bell.png" alt="" class="bell">
      <img src="../../../assets/img/more.png" alt="" class="more">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
  .header{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 1.24rem;
    background: #00a2ed;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    .left{
      height: 100%;
      display: flex;
      align-items: center;
      .menu{
        width: .44rem;
        height: .44rem;
        margin: 0 .62rem 0 .44rem;
      }
      p{
        color: #fff;
        font-size: .44rem;
      }
    }
    .right{
      height: 100%;
      display: flex;
      align-items: center;
      .bell{
        width: .44rem;
        height: .44rem;
      }
      .more{
        width: .44rem;
        height: .44rem;
        margin: 0 .35rem 0 .5rem;
      }
    }
  }
</style>
