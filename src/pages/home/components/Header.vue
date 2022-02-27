<template>
  <div class="header">
   <div class="header-left">
     <div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input">
     <span class="iconfont">&#xe632;</span>
     输入城市/景点/游玩主题</div>
       <router-link to="/city">
        <div class="header-right">
          {{this.city}}
            <span class="iconfont">&#xeb6d;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
    // ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    .header
        display: flex;
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        font-size: .32rem
        .header-left
            width: .64rem
            float: left
            .back-icon
              text-align: center
              font-size 0.4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-left: .2rem
            margin-top: .12rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            min-width 1.04rem
            padding:0 .1rem
            float: right
            text-align: center
            color: #fff
</style>
