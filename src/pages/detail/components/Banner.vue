<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xeac4;</span>39</div>
            </div>
        </div>
        <common-gallary
         :imgs="imgs"
          v-show="showGallary"
         @close="handleGallaryClose"
          ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg', 'http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,.8))
            .banner-title
                flex: 1
                font-size: .32rem
                padding:0 .2rem
            .banner-number
                margin-top: .14rem
                padding:0 .4rem
                height: .32rem
                line-height: .32rem
                border-radius: .2rem
                background: rgba(0, 0, 0,.8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>
