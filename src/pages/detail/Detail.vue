<template>
    <div>
        <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
          <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup () {
    const sightName = ref('')
    const bannerImg = ref('')
    const gallaryImgs = ref([])
    const list = ref([])


    const route = useRoute()
    async function getDetailInfo () {
      let res = await axios.get(`/api/detail.json?id=${route.params.id}`)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        sightName.value = data.sightName
        bannerImg.value = data.bannerImg
        gallaryImgs.value = data.gallaryImgs
        list.value = data.categoryList
      }
    }

    onMounted(()=>{
      getDetailInfo()
    })

    return {
      sightName,
      bannerImg,
      gallaryImgs,
      list
    }
  },
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
