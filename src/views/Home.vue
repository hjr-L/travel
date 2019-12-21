<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>
import HomeHeader from '../components/Header.vue'
import HomeSwiper from '../components/Swiper.vue'
import HomeIcons from '../components/Icons.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
