<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrap">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '故宫',
        desc: '世界五大宫之首，穿越与您近在咫尺'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
        title: '八达岭长城',
        desc: '不到长城非好汉'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        title: '古北水镇',
        desc: '走进那个画中的小镇'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../assets/style/mixins.styl";

  .title {
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }

  .item-img-wrap{
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
  }

  .item-img {
    width: 100%;
  }

  .item-info {
    padding: .1rem;
  }

  .item-title {
    line-height: .54rem;
    font-size: .32rem;
    ellipsis();
  }

  .item-desc {
    line-height: .4rem;
    color: #ccc;
    ellipsis();
  }

</style>
