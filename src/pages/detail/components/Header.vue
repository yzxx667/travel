<template>
    <div>
        <router-link tag="div" to="/" class="header-abs"
        v-show="showAbs">
            <span class="iconfont header-abs-back">&#xe624;</span>
        </router-link>
        <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle"
         >
            景点详情
             <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 兼容性问题
      let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 对事件解除绑定
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
    .header-abs
        position: absolute
        left: .2rem
        top:.2rem
        height: .8rem
        width: .8rem
        border-radius: 50%
        line-height: .8rem
        text-align: center
        background: rgba(0,0,0,.8)
        .header-abs-back
            color: #fff
            font-size: .4rem
    .header-fixed
        z-index: 2
        position: fixed
        left: 0
        top: 0
        right: 0
        height: $headerHeight
        line-height: $headerHeight
        color: #fff
        text-align: center
        background: $bgColor
        font-size: .32rem
        .header-fixed-back
            position: absolute
            top:0
            left: 0
            width: .64rem
            text-align: center
            font-size: .4rem
            color: #fff

</style>
