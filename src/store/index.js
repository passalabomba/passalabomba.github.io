import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    minSecondsVal: 20,
    maxSecondsVal: 300
 },
 getters: {
   minSecondsVal: state => {
      return state.minSecondsVal
   },
   maxSecondsVal: state => {
      return state.maxSecondsVal
   },
 },
 mutations: {
   changeMinSeconds (state, min) {
      state.minSecondsVal = min
    },
    changeMaxSeconds (state, max) {
      state.maxSecondsVal = max
    }
 },
 actions: {}
});