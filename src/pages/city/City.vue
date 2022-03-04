<template>
  <div>
    <city-header></city-header>
    <city-search :cities="data.cities"></city-search>
    <city-list
      :cities="data.cities"
      :hot="data.hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="data.cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  setup() {
    const { letter, handleLetterChange } = useLetterLogic()
    const { data } = useCityLogic()

    return {
      data,
      handleLetterChange,
      letter,
    };
  },
};

// 城市 热门城市
function useCityLogic() {
  const data = reactive({
    cities: {},
    hotCities: [],
  });

  async function getCityInfo() {
    let res = await axios.get("/api/city.json");
    res = res.data;
    if (res.ret && res.data) {
      const result = res.data;
      data.cities = result.cities;
      data.hotCities = result.hotCities;
    }
  }

  onMounted(() => {
    getCityInfo();
  });

  return {
    data
  };
}


// 字母表
function useLetterLogic() {
  const letter = ref("");
  function handleLetterChange(selected) {
    letter.value = selected;
  }
  return { letter, handleLetterChange };
}
</script>

<style lang="stylus" scoped></style>
