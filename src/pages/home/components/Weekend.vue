<template>
  <div>
      <div class="title">周末去哪儿</div>
      <ul>
          <li class="item border-bottom"
           v-for="item of recommendList"
           :key="item.id"
           >
           <div class="item-img-wrapper">
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
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/280673be5655fc91ce24ba605c62fe07.jpeg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      },
      {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/280673be5655fc91ce24ba605c62fe07.jpeg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      },
      {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/280673be5655fc91ce24ba605c62fe07.jpeg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~style/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom:30.4%
        .item-img
           width: 100%
    .item-info
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            font-size: .28rem
            color: #ccc
            ellipsis()
</style>
