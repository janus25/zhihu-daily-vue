<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide>
      <img src="" alt class="swiper-img">
      123123
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: 'true'
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('api/news/latest')
        .then(res => {
          console.log(res)
          this.topStories = res.data.top_stories
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    showSwiper () {
      // return this.list.length
      return true
    }
  }
}
</script>

<style scoped>
</style>
