<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="this.swiperList"></home-swiper>
    <HomeIcons :iconList="this.iconList"></HomeIcons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from '../components/Header.vue'
import HomeSwiper from '../components/Swiper.vue'
import HomeIcons from '../components/Icons.vue'
import HomeRecommend from '../components/Recommend.vue'
import HomeWeekend from '../components/Weekend.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/indexJ.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (response) {
      const res = response.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
        // console.log(this.recommendList)
      }
    }
  }
}
</script>
