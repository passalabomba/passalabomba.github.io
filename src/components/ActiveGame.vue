<template>
  <v-container fill-height fluid>
    <v-row class="fill-height" align="center" justify="center">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        align="center"
        justify="center"
        class="fill-height"
      >
        <v-card class="fill-height" color="#26c6da" dark>
          <v-card-text
            cols="12"
            xs="12"
            sm="12"
            md="6"
            class="text-h1 font-weight-bold text-center"
          >
            {{ this.letterSet }}
          </v-card-text>

          <v-btn
            xs="12"
            sm="12"
            x-large
            color="primary"
            class="font-weight-bold ma-3"
            :disabled="!goEnabled"
            @click="startSession()"
          >
            PROSSIMA PAROLA!
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="this.letterSet.length <= 0"
            xs="12"
            sm="12"
            x-large
            color="error"
            class="font-weight-bold ma-3"
            @click="stopSession()"
          >
            STOP
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn xs="12" sm="12" x-large icon @click="goHome()" color="white">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <choose-loser-player @choosed ="choosedLoser" :expired-timer="this.expiredTimer" />
    </v-row>
    <v-row>
      <gif-panel :player-name="this.wrongingPlayer"/>
    </v-row>
  </v-container>
</template>

<script>
import words_from_file from "@/assets/letters.json";
import letters_and_level_from_file from "@/assets/combinations_and_levels.json";

import audio_file from "@/assets/alarm.mp3";
import tick_sound from "@/assets/clock_sound.mp3";

import store from "../store";
import "@/router.js";
import ChooseLoserPlayer from "./ChooseLoserPlayer.vue";
import GIFPanel from "./GIFPanel.vue";

export default {
  name: "HelloWorld",
  components: {
    "choose-loser-player": ChooseLoserPlayer,
    "gif-panel": GIFPanel,
  },
  mounted() {
    this.startSession();
  },
  computed: {
    playersError() {
      return store.getters.playersError.map(o => o.errors);
    }    
  },
  watch: {
    playersError(newPlayersError) {
       // newPlayersError format => [['T'],['T','T'],[]]
       console.log('newPlayersError',newPlayersError)
       console.log('bomb', this.expiredTimer)
       var wrongingPlayerIndexes = newPlayersError
        .map((obj) => this.containsConsecutiveStates(obj, "D"))
        .map((isInFault, index) => {return (isInFault) ? index : -1})
        .filter(indexes => indexes != -1);

      this.wrongingPlayer = (wrongingPlayerIndexes.length > 0) ? store.getters.players[wrongingPlayerIndexes[0]].name : ''
      console.log( this.wrongingPlayer)
      if (
        !store.getters.timerErrorVisible &&
        this.wrongingPlayer !== ''
      ) {
        store.commit("openTimerErrorGIF");
      }
    },
  },
  data: () => ({
    showChooseLoser: false,
    words: words_from_file,
    letters_and_level: letters_and_level_from_file,
    uscite: [],
    seconds: null,
    letterSet: null,
    timer: null,
    alarmAudio: null,
    tickAudio: null,
    dialog: false,
    minSeconds: 20,
    maxSeconds: 300,
    goEnabled: true,
    color: "#44B987",
    wrongingPlayer: undefined,
    expiredTimer : false,
    ratioLevels: [
      { level: 0, desiredRatio: 0.55, currentRatio: 0 },
      { level: 1, desiredRatio: 0.25, currentRatio: 0 },
      { level: 2, desiredRatio: 0.15, currentRatio: 0 },
      { level: 3, desiredRatio: 0.02, currentRatio: 0 },
    ],
  }),
  methods: {
    setTimer: function (min = 20, max = 300) {
      var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
      console.log("Wait for " + rand + " seconds");
      this.timer = setTimeout(this.timerEvent, rand * 1000);
    },
    timerEvent: function () {
      console.log("è scaduto il timer");
      this.tickAudio.pause();
      this.playAlarmSound();
      this.expiredTimer = true
    },
    startSession: function () {
      this.popLetter();
      this.getNextPoppableLevelsList();
      this.setTimer(store.getters.minSecondsVal, store.getters.maxSecondsVal);
      console.log(this.timer);
      this.alarmAudio = new Audio(audio_file);
      this.tickAudio = new Audio(tick_sound);
      this.goEnabled = false;
      this.startClockSound();
    },
    stopSession: function () {
      this.alarmAudio.pause();
      clearTimeout(this.timer);
      this.tickAudio.pause();
      if (store.getters.players.length > 0)
        store.commit("setOpenChooseLoser", true);
      this.letterSet = "";
      this.goEnabled = true;
    },
    playAlarmSound: function () {
      this.alarmAudio.play();
    },
    startClockSound: function () {
      this.tickAudio.play();
    },
    goHome: function () {
      if (!this.goEnabled) {
        this.stopSession();
      }
      this.$router.replace("/");
    },
    containsConsecutiveStates: function (ar, state) {
      for (let i = 0; i < ar.length; i++) {
        if (ar[i] === state && ar[i + 1] === ar[i]) return true;
      }
      return false;
    },
    getRandomWordFromArray: function (inArr) {
      return inArr[Math.floor(Math.random() * inArr.length)];
    },
    popLetter: function () {
      var filteredLetterSetByLevel = this.letters_and_level.filter((letter) => {
        if (store.getters.level != -1) {
          return (letter.quantile <= store.getters.level) ? true : false;
        } else {
          return (this.getNextPoppableLevelsList().contains(letter.quantile)) ? true : false;
        }
      });
      var letters = this.getRandomWordFromArray(filteredLetterSetByLevel);
      this.uscite.push(letters);
      //cambio in uppercase per motivi di visualizzazione
      this.letterSet = letters.letter_set.toUpperCase();
      // tolgo la sillaba uscita per fare in modo che non esca di nuovo
      this.letters_and_level = this.letters_and_level.filter(
        (obj) => obj.letter_set !== letters.letter_set
      );
    },
    getNextPoppableLevelsList: function () {
      var occurencesObj = this.uscite
        .map((letteraUscita) => letteraUscita.quantile)
        .reduce(function (obj, quantile) {
          if (!obj[quantile]) {
            obj[quantile] = 1;
          } else {
            obj[quantile]++;
          }
          return obj;
        }, {}); //calcolo per ogni livello quante occorrenze sono uscite
      var occurrencesMap = new Map(Object.entries(occurencesObj)); //converto il risultato da object a map
      occurrencesMap.forEach(
        (v, k) => (this.ratioLevels[k]["currentRatio"] = v / this.uscite.length)
      ); //modifico la lista dei livelli modificando il current ratio
      //restituisco in output la lista dei livelli che sono sotto la soglia desiderata in modo da aumentare la probabilità che casualmente vengano estratti
      return this.ratioLevels
        .filter((l) => l.desiredRatio > l.currentRatio)
        .map((l) => l.level);
    },
    choosedLoser(sele) {
      if (this.expiredTimer) {
        this.expiredTimer = false
      }
      console.log('loserUserPosition', sele)
    }
  },
};
</script>
