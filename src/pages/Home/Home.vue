<template>
  <div class="home-wrapper">
    <home-header></home-header>
    <home-refresh></home-refresh>
    <home-swiper></home-swiper>
    <home-NewsList></home-NewsList>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeRefresh from './components/refresh'
import HomeNewsList from './components/newsList'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeRefresh,
    HomeNewsList
  }
}
</script>

<style scoped lang="scss">
  .home-wrapper{
    background: #f3f3f3;
  }
</style>
