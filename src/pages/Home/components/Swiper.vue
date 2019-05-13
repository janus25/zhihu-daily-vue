<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item in banner" :key="item.id" @click.native="bannerHandleClick(item.id)">
      <img :src="item.image" alt="item.title" class="swiper-img">
      <span>{{item.title}}</span>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import axios from 'axios'
import router from '../../../router'
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: 'true',
        speed: 300,
        autoplay: {
          delay: 3000
        }
      },
      banner: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    // 获取swiper列表数据
    getData () {
      axios.get('api/news/latest')
        .then(res => {
          // console.log(res.data.top_stories)
          this.banner = res.data.top_stories
        })
        .catch(error => {
          console.log(error)
        })
    },
    bannerHandleClick (id) {
      router.push({name: 'Detail', params: {id: id}})
    },
    // 修改图片链接
    attachImageUrl: function (srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    }
    // bannerHandleClick (id) {
    //   router.push({name: 'Detail', params: {id: id}})
    // }
  },
  computed: {
    showSwiper () {
      return this.banner.length
      // return true
    }
  }
}
</script>
<style>
.wrapper .swiper-pagination-bullet{
 background: #fff
}
.wrapper .swiper-pagination-bullet-active{
 background: #fff
}
</style>
<style scoped lang="scss">
    .wrapper{
    overflow: hidden;
    height: 6.5rem;
    img{
    width: 100%;
    position: relative;
    // top: -1.5rem;
    }
    span{
      position: absolute;
      left: .4rem;
      bottom:.6rem;
      padding-right: .4rem;
      color: #fff;
      font-size: .44rem;
      line-height: .54rem;
      width: 90%;
    }
  }
  .swiper-container{
    height: 6.5rem;
  }
</style>
