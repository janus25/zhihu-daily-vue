<template>
  <div class="feed">
    <p class="title">今日要闻</p>
    <div class="feed-item">
      <p class="left">我靠大家发来开发金坷垃的房价拉萨就发啦</p>
      <img src="../../../assets/img/menu.png" alt="" class="right">
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeNewsList',
  methods: {}
}
</script>

<style lang="scss" scoped>
  .feed{
    display: flex;
    flex-direction: column;
    padding: 0 .2rem;
    background: #fff;
    .title{
      font-size: .18rem;
      color: #4d4d4d;
      text-align: left;
      line-height: 1.02rem
    }
    &-item{
      width: 100%;
      height: 2.22rem;
      box-shadow: 0 0.05333333rem 0.23333333rem .1rem #ddd;
      box-sizing: border-box;
      padding: .206rem .306rem .3rem .306rem;
      margin: .1rem 0 0 0;
      display: flex;
      justify-content: space-between;
      .left{
        font-size: .302rem;
        line-height: .4rem;
      }
      .right{
        width: 1.88rem;
        height: 1.64rem;
      }
    }
  }
</style>
