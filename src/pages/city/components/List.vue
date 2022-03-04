<template>
  <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div
                    class="button-wrapper">
                        <div class="button" @click="handleCityClick(currentCity)">{{currentCity}}</div>
                    </div>
                </div>
            </div>
             <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                    class="button-wrapper"
                    v-for="item of hot"
                    :key="item.id"
                    @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div
            class="area"
            v-for="(item,key) of cities"
            :key="key"
            :ref="elem => elems[key] = elem"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div
                    class="item border-bottom"
                    v-for="innerItem of item"
                    :key="innerItem.id"
                     @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { onActivated, onMounted, onUpdated, ref, watch } from '@vue/runtime-core'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  setup (props) {
    const store = useStore()
    const currentCity = store.state.city

    const elems = ref({})
    const wrapper = ref(null)


    const router = useRouter()
    function handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      store.commit('changeCity', city)
      router.push('/')
    }

    watch(() => props.letter,(letter,prevletter) => {
       if (letter) {
        const element =elems.value[letter]
        scroll.scrollToElement(element)
      }
    }) 

    onMounted (()=>{
      scroll = new Bscroll(wrapper.value, {
      click: true
    })
    })
    
    onUpdated (()=>{
      scroll.refresh()
    })

    onActivated (()=>{
       scroll.refresh()
    })
    return {
      currentCity,
      handleCityClick,
      elems,
      wrapper
    }
  }
  // mounted () {
    // this.scroll = new Bscroll(this.$refs.wrapper, {
    //   click: true
    // })
  // },
  // 解决bug
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    .border-topbottom
        &:before
            border-color:#ccc
        &:after
            border-color:#ccc
    .border-bottom
        &:before
            border-color:#ccc
    .list
        overflow: hidden
        position: absolute
        top:1.58rem
        left:0
        right:0
        bottom :0
        .title
            overflow: hidden
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .26rem
        .button-list
            overflow hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    text-align: center
                    padding: .1rem 0
                    margin: .1rem
                    border: .02rem solid #ccc
                    border-radius: .06rem
        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
</style>
