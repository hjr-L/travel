<template>
    <div class="icons">
        <swiper class="swiper-contaier" >
                <swiper-slide v-for="(page, index) of pages" :key="index" >
                  <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                      <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                  </div>
                </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      }, {
        id: '0002',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      }, {
        id: '0003',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      }, {
        id: '0004',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      }, {
        id: '0005',
        imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '景点门票'
      }, {
        id: '0006',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '自然风光'
      }, {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
        desc: '生活休闲'
      }, {
        id: '0008',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
        desc: '本地玩乐'
      }, {
        id: '0009',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        desc: '全部玩乐'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
    /* @import url('../assets/style/varibles.styl'); */
    @import "../assets/style/varibles.styl";
    @import "../assets/style/mixins.styl";
    .icons >>> .swiper-contaier{
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        /* 宽高比50% */
    }
    .icon{
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
    }
    .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;
    }
    .icon-img-content{
        height: 100%;
        display: block;
        margin: 0 auto;
    }
    .icon-desc{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        line-height: .44rem;
        color: $darkTextColor;
        text-align: center;
        ellipsis();
    }
</style>
