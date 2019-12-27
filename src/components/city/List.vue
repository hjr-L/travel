<template>
    <div class="list" ref="wrapper">
        <div>
          <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrap">
                    <div class="button">
                    {{this.currentCity}}
                    </div>
                </div>
            </div>
          </div>
          <div class="area">
            <div class="title border-topbottom">热门城市</div>
             <div class="button-list">
                <div class="button-wrap" @click="handleChangeCity(item.name)" v-for="item of hotCities" :key="item.id">
                    <div class="button">
                    {{item.name}}
                    </div>
                </div>
            </div>
          </div>
          <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list" @click="handleChangeCity(innerItem.name)" v-for="innerItem of item" :key="innerItem.id">
                <div class="item border-bottom">
                    {{innerItem.name}}
                </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleChangeCity (name) {
      // this.$store.commit('changeCity', name)
      this.changeCity(name)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>
<style lang="stylus" scoped>
    @import '../../assets/style/varibles.styl'
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            background #eee
            line-height .54rem
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrap
                float left
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #ccc
                    border-radius .1rem
        .item-list
            .item
              line-height .76rem
              padding-left .2rem
</style>
