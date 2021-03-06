import Vue from 'vue'
import Vuex from 'vuex'
import gigStore from './modules/gig-store.js'
import userStore from './modules/user-store.js'
import orderStore from './modules/order-store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMsg: ''
  },
  getters: {
    loggedinUserGigs: state => {
      const loggedinUserId = state.userStore.loggedinUser?._id;
      return state.gigStore.gigs.filter(gig => gig.seller._id === loggedinUserId)
    },
    userAsSellerOrders: state => {
      const loggedinUserId = state.userStore.loggedinUser?._id;
      return state.orderStore.orders.filter(order => order.seller._id === loggedinUserId)
    },
    userAsBuyerOrders: state => {
      const loggedinUserId = state.userStore.loggedinUser?._id;
      let ordersAsBuyer = state.orderStore.orders.filter(order => order.buyer._id === loggedinUserId) 
      return ordersAsBuyer
      
    },
    userMsg(state) {
      return state.userMsg
    }
  },
  mutations: {
    setMsg(state, { msg }) {
      state.userMsg = msg
    }
  },
  actions: {
  },
  modules: {
    gigStore,
    userStore,
    orderStore
  }
})
