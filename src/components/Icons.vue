<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png">
            </div>
            <p class="icon-desc">酒店</p>

        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons'

}
</script>
<style lang="stylus" scoped>
    /* @import url('../assets/style/varibles.styl'); */
    @import "../assets/style/varibles.styl"
    .icons{
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        /* 宽高比50% */
        background: rgb(221, 33, 33);
    }
    .icon{
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        background: #989898;
    }
    .icon-img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;
        background: blue;
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
    }
</style>
