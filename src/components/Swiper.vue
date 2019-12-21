<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1812/48/5713e2a2ba72f902.jpg_750x200_2b382dac.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/ad982a22b89bed4ede871993526928e7.jpg_750x200_b42c604f.jpg'
      }]

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
        padding-bottom: 31.25%;
        overflow: hidden;
    }
    .wrapper >>> .swiper-pagination-bullet-active{
        background: #fff;
    }
</style>
