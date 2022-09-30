<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/c7/22/be/c722be0b-a763-0ec8-7cdc-5690d1091f31/source/512x512bb.jpg"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">{{this.letterSet}}</h1>
        <h1 class="display-2 font-weight-bold mb-3">{{this.seconds}}</h1>
        <v-btn color="primary" @click="startSession()"> GO! </v-btn><BR>
        <v-btn color="error" @click="stopSession()"> STOP </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import words_from_file from "@/assets/words.json";
export default {
  name: "HelloWorld",
  data: () => ({
    words: words_from_file,
    seconds: null,
    letterSet: null,
    timer: null,
    alarm: "src/assets/alarm.mp3",
  }),
  methods: {
    setTimer: function (min = 0.3, max = 4) {
      var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
      console.log("Wait for " + rand + " seconds");
      this.seconds = rand;
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
      this.setTimer(20,300);
    },
    stopSession: function () {
      clearTimeout(this.timer);
      this.letterSet = ""
    },
    playSound: function () {
      var audio = new Audio('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3');
      audio.play();
    },
  },
};
</script>
