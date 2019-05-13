import axios from 'axios'

export default {
  getNewsList () {
    return axios.get('/api/4/news/latest').then(res => {
      if (res.status === 200) {
      }
    })
  }
}
