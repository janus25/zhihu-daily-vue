<template>
  <div>
    <detail-header></detail-header>
    <div class="images-wrapper">
      <img :src="this.data.images" alt="this.data.titile">
      <span class="title">{{data.title}}</span>
      <span class="images-source">图片：{{this.data.image_source}}</span>
      <div class="mask"></div>
    </div>
    <div class="body-wrapper" v-html="this.data.body"></div>
  </div>
</template>

<script>
import DetailHeader from './components/HeaderMenu'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader
  },
  data () {
    return {
      data: {}
    }
  },
  created () {
    this.fetchInfo()
  },
  methods: {
    // 通过路由id来获取banner新闻内容
    fetchInfo () {
      // banner标识id
      let id = this.$route.params.id
      axios.get('api/news/' + id).then(res => {
        this.data = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="sass">
@import "../../../static/css/news_qa.css";
</style>

<style lang="scss" scoped>
  .images-wrapper{
    width: 100%;
    height: 4.2rem;
    position: relative;
    overflow: hidden;
    img{
          border: 0;
    vertical-align: middle;
    color: transparent;
    font-size: 0;
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    .title{
      font-size: .48rem;
      position: absolute;
      color: #fff;
      left: 0;
      padding: 0 .2rem;
      bottom: .5rem;
      z-index: 999
    }
    .images-source{
    position: absolute;
    right: 0.53333333rem;
    bottom: 0.2rem;
    font-size: 0.12rem;
    opacity: 0.7;
    color: #fff;
    z-index: 999
    }
    .mask{
      width: 100%;
    height: 5.6rem;
    position: absolute;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.5)));
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    }
  }
  .body-wrapper{
    margin-top: -4rem;
  }
</style>
