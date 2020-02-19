<template>
<div>
    <router-link tag="div" to="/" class="header-abs" v-show="showabs">
        <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showabs" :style="showOpacity">
        <router-link to="/">
            <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
        景点详情
    </div>
</div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showabs: true,
      showOpacity: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.showOpacity = { opacity }
        this.showabs = false
      } else {
        this.showabs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.showOpacity)
  }
}
</script>
<style lang="stylus" scoped>
@import "../../assets/style/varibles.styl";
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  line-height .8rem
  text-align center
  border-radius .4rem
  background rgba(0, 0, 0, .8)
  .header-abs-back
    color #ffffff
    font-size .4rem
.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background $bgColor
  font-size .32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>
