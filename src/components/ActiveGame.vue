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
              :disabled = "this.letterSet.length <= 0"
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
      <choose-loser-player :value="showChooseLoser"/>
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


export default {
  name: "HelloWorld",
  components: {
    'choose-loser-player':ChooseLoserPlayer,
  },
  mounted() {
      this.startSession();
      
  },
  data: () => ({
    showChooseLoser : false,
    words: words_from_file,
    letters_and_level : letters_and_level_from_file,
    uscite : [],
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
    },
    getRandomWord: function () {
      return this.words[Math.floor(Math.random() * this.words.length)];
    },
    startSession: function () {
      this.popLetter();
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
      if (store.getters.players.length > 0) store.commit("setOpenChooseLoser", true);
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
    getRandomWordFromArray: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    popLetter: function (){
      var filteredByLevel = this.letters_and_level.filter(letter => letter.quantile <= store.getters.level);
      var letters = this.getRandomWordFromArray(filteredByLevel);
      this.uscite.push(letters)
      this.letterSet = letters.letter_set.toUpperCase();
      this.letters_and_level = this.letters_and_level.filter( obj => obj.letter_set !== letters.letter_set);
    }
  },
};
</script>
