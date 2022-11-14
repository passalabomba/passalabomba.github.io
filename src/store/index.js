import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
   minSecondsVal: 20,
   maxSecondsVal: 100,
   players: [],
   openChooseLoser: false,
   tickSound : true,
   selectedPlayer: -1,
   life: 3,
   level: 2
 },
 getters: {
   minSecondsVal: state => {
      return state.minSecondsVal
   },
   maxSecondsVal: state => {
      return state.maxSecondsVal
   },
   players: state => {
      return state.players
   },
   openChooseLoser: state => {
      return state.openChooseLoser
   },
   tickSound: state => {
      return state.tickSound
   },
   selectedPlayer: state => {
      return state.selectedPlayer
   },
   life: state => {
      return state.life
   },
   level: state => {
      return state.level
   }
 },
 mutations: {
   changeMinSeconds (state, min) {
      state.minSecondsVal = min
    },
    changeMaxSeconds (state, max) {
      state.maxSecondsVal = max
    },
    addPlayer (state, playerName) {
      state.players.push({life:state.life, name:playerName})
    },
    removePlayer (state, index) {
      if (index > -1) { // only splice array when item is found
         state.players.splice(index, 1); // 2nd parameter means remove one item only
       }
    },
    removeLife (state, playerPosition) {
      if(state.players[playerPosition]["life"] > 0){
         state.players[playerPosition]["life"]-=1
      }
    },
    resetSettings (state) {
      state.players = []
      state.minSecondsVal = 20
      state.maxSecondsVal = 100
      console.log('aa')
      console.log(state)
    },
    setOpenChooseLoser (state, open) {
      state.openChooseLoser = open
    },
    setTickSound (state, tickSoundOn) {
      state.tickSound = tickSoundOn
    },
    setSelectedPlayer( state, selectedPlayer) {
      state.selectedPlayer = selectedPlayer
    },
    setLife( state, life) {
      state.life = life
    },
    setLevel( state, level) {
      state.level = level
    }
 },
 actions: {}
});