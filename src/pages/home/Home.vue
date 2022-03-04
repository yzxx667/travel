<template>
  <div>
    <home-header></home-header>
    <home-Swiper :list="data.swiperList"></home-Swiper>
    <home-icons :list="data.iconList"></home-icons>
    <home-recommend :list="data.recommendList"></home-recommend>
    <home-weekend :list="data.weekendList"></home-weekend>
  </div>
</template>

<script>
// Composition API
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
// import { mapState } from 'vuex'
import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import { onActivated, onMounted } from "@vue/runtime-core";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  setup() {
    const data = reactive({
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    });

    const store = useStore();
    const city = store.state.city;

    async function getHomeInfo() {
      let res = await axios.get(`/api/index.json?city=${city}`)
      res = res.data;
      if (res.ret && res.data) {
        const result = res.data;
        data.swiperList = result.swiperList;
        data.iconList = result.iconList;
        data.recommendList = result.recommendList;
        data.weekendList = result.weekendList;
      }
    }

    onMounted (()=>{
      data.lastCity = city
      getHomeInfo()
    })

    // keep-alive新增生命周期
    onActivated ( () => {
      if (data.lastCity !== city) {
        data.lastCity = city
        getHomeInfo()
      }
    })

    return {
      data,
    };
  },

};
</script>

<style>
</style>
