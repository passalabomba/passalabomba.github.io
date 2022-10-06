<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" md="6">
        <v-img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/c7/22/be/c722be0b-a763-0ec8-7cdc-5690d1091f31/source/512x512bb.jpg"
          class="my-3 text-center"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4" cols="12" md="6">
        <h1 class="display-2 font-weight-bold mb-3 mr-3 ml-3">{{this.letterSet}}</h1>
        <h1 class="display-2 font-weight-bold mb-3 mr-3 ml-3">{{this.seconds}}</h1>
        <v-btn color="primary" class=" font-weight-bold ma-3" @click="startSession()"> GO! </v-btn>
        <v-btn color="error" class=" font-weight-bold ma-3" @click="stopSession()"> STOP </v-btn>
      </v-col>

      <v-col
      cols="12"
      md="6"
      justify="center"
      align="center"
    >
      <settngs-panel :minSecondsVal="this.minSeconds" :maxSecondsVal="this.maxSeconds" @changeMinAndMax="changeMinAndMax($event)"/> 
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import words_from_file from '@/assets/words.json'
import audio_file from '@/assets/alarm.mp3'
import SettingsPanel from './SettingsPanel.vue'
import store from '../store';

export default {
  name: "HelloWorld",
  components: {
      'settngs-panel':SettingsPanel,
  },
  data: () => ({
    words: words_from_file,
    seconds: null,
    letterSet: null,
    timer: null,
    audio: null,
    dialog: false,
    minSeconds: 20,
    maxSeconds: 300
  }),
  methods: {
    setTimer: function (min = 20, max = 300) {
      var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
      console.log("Wait for " + rand + " seconds");
      //this.seconds = rand;
      this.timer = setTimeout(this.timerEvent, rand * 1000);
    },
    timerEvent: function () {
      console.log("è scaduto il timer");
      this.playSound();
    },
    getRandomWord: function () {
      return this.words[Math.floor(Math.random() * this.words.length)];
    },
    startSession: function () {
      this.letterSet = this.getRandomWord();
      this.setTimer(store.getters.minSecondsVal,store.getters.minSecondsVal);
      this.audio = new Audio(audio_file);
    },
    stopSession: function () {
      this.audio.pause()
      clearTimeout(this.timer);
      this.letterSet = ""
    },
    playSound: function () {
      this.audio.play();
    },
  },
};
</script>
