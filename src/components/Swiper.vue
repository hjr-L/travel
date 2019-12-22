<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
                <!-- slides -->
                <swiper-slide v-for="item of swiperList" :key="item.id" >
                    <img class="swiper-img" :src="item.imgUrl" alt="" >
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="stylus" scoped>
    .swiper-img{
        width: 100%;
    }
    .wrapper{
        width: 100%;
        height: 0;
        padding-bottom: 32.27%;
        overflow: hidden;
    }
    .wrapper >>> .swiper-pagination-bullet-active{
        background: #fff;
    }
</style>
