<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
         v-for="(item,index) of imgs"
         :key="index">
          <img class="gallary-img" :src="item" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
      // 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg', 'http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg'
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow:inherit
    .container
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 99;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #000;
        .wrapper
            width: 100%
            height: 0
            padding-bottom: 100%
            .gallary-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>
