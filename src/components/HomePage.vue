<template>
  <v-container 
      fill-height
      fluid 
      class="#26c6da">
      <v-row class="text-center fill-height"
      v-if="!showGame"
      justify="center"
      align="center">
     <v-col cols="12" md="6" 
      justify="center"
      align="center">
        <v-img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/c7/22/be/c722be0b-a763-0ec8-7cdc-5690d1091f31/source/512x512bb.jpg"
          class="my-3 text-center"
          contain
          height="400"
        />
      <v-btn x-large color="primary" class=" font-weight-bold ma-3" @click="startGame()"> GIOCA! </v-btn>
      <v-spacer></v-spacer>
      <settngs-panel :minSecondsVal="this.minSeconds" :maxSecondsVal="this.maxSeconds" @changeMinAndMax="changeMinAndMax($event)"/> 
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SettingsPanel from './ChooseSettingsPanel.vue'
import '@/router.js'

export default {
  name: "HelloWorld",
  components: {
      'settngs-panel':SettingsPanel,
  },
  data: () => ({
    showGame: false
  }),
  methods: {
    startGame: function () {
      //this.showGame = true
      this.$router.replace('/game')
    },
    playSound: function () {
    },
  },
};
</script>

<style>
.v-container {
  background-color: green;
}
</style>
