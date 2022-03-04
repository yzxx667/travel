<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        name=""
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { ref } from 'vue'
import { useStore } from "vuex";
import { computed, onMounted, onUpdated, watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  setup(props) {
    const keyword = ref("");
    const list = ref([]);
    let timer = null;

    const hasNoData = computed(() => {
      return !list.value.length;
    });

    watch(keyword, (keyword, prevKeyword) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (!keyword) {
        list.value = [];
        return;
      }
      timer = setTimeout(() => {
        const result = [];
        for (let i in props.cities) {
          props.cities[i].forEach((value) => {
            if (
              value.name.indexOf(keyword) > -1 ||
              value.spell.indexOf(keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        list.value = result;
      }, 100);
    });

    const store = useStore();
    const router = useRouter();
    function handleCityClick(city) {
      // this.$store.commit('changeCity', city)
      store.commit("changeCity", city);
      router.push("/");
    }

    const search = ref(null);
    onMounted(() => {
      scroll = new Bscroll(search.value, {
        click: true,
      });
    });

    onUpdated(()=>{
      scroll.refresh();
    })

    return {
      keyword,
      list,
      hasNoData,
      handleCityClick,
      search,
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>
