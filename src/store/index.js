import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'

export default Vuex.createStore({
  state,
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
  // 类似于计算属性
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
});
