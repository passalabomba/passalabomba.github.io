import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
   minSecondsVal: 20,
   maxSecondsVal: 100,
   players: [],
   playersError: [],
   openChooseLoser: false,
   tickSound : true,
   selectedPlayer: -1,
   life: 3,
   level: 1,
   openTimerError: false,
   showedTimerError : false,
   openRepeatError : false,
   showedRepeatError : false
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
   },
   playersError: state => {
    return state.playersError
   },
   timerErrorVisible: state => {
    return !state.showedTimerError && state.openTimerError
   },
   repeatedErrorVisible: state => {
    return !state.showedRepeatError && state.openRepeatError
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
      state.players.push({life:state.life, name:playerName, avatar:undefined})
      state.playersError.push({errors:[], name:playerName})
    },
    removePlayer (state, index) {
      if (index > -1) { // only splice array when item is found
         state.players.splice(index, 1); // 2nd parameter means remove one item only
         state.playersError.splice(index, 1);
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
      state.playersError= [],
      state.openChooseLoser= false,
      state.tickSound = true,
      state.selectedPlayer= -1,
      state.life= 3,
      state.level= 1,
      state.openTimerError= false,
      state.showedTimerError = false,
      state.openRepeatError = false,
      state.showedRepeatError = false
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
    },
    addError (state, info) {
      // info must be an object composed by state (T or D) and playerPosition
      state.playersError[info.position]["errors"].push(info.state)
    },
    closeGIFPanel(state, stateError) {
      if(stateError === 'D'){
        state.openRepeatError = false
        state.showedRepeatError = true
      } else if(stateError === 'T'){
        state.openTimerError = false
        state.showedTimerError = false
      }
    },
    openGIFPanel(state, stateError) {
      if(stateError === 'D'){
        state.openRepeatError = true
      } else if(stateError === 'T'){
        state.openTimerError = true
      }
    },
    assignAvatar(state, info) {
      state.players[info.position]["avatar"] = info.avatar
    }


 },
 actions: {}
});