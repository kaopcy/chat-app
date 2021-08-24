import { createStore } from 'vuex'

const store =  createStore({
  state: {
    isMobile: false
  },
  mutations: {
    setMobile(state , payload){
      state.isMobile = payload
    }
  },
  getters: {
    mobile: state => state.isMobile
  },
  actions: {
  },
  modules: {
  }
})

export default store