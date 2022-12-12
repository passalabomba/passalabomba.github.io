<template>
  <v-container 
      fill-height
      fluid
       >
       <v-card flat class="text-center fill-height" width="100%" color="primary">
      <v-row class="text-center fill-height"
      color="black"
      v-if="!showGame"
      justify="center"
      align="center">
     <v-col cols="12" md="6" 
      justify="center"
      align="center">
        <v-img
          :src="require('@/assets/logo.png')"
          class="my-3 text-center"
          contain
          height="400"
        />
      <v-btn dark x-large color="secondary" class=" font-weight-bold ma-3" @click="startGame()"> GIOCA! </v-btn>
      <v-spacer></v-spacer>
      <settngs-panel /> 
      <add-players /> 
      <v-btn x-large icon color="textcolor" @click="resetSettings()">
        <v-icon>mdi-restore</v-icon>
      </v-btn>
    </v-col>
    </v-row>
    </v-card>
  </v-container>
</template>

<script>
import SettingsPanel from './ChooseSettingsPanel.vue'
import AddPlayersDialog from './AddPlayersDialog.vue'
import store from "../store";

import '@/router.js'

export default {
  name: "HelloWorld",
  components: {
      'settngs-panel':SettingsPanel,
      'add-players': AddPlayersDialog
  },
  data: () => ({
    showGame: false
  }),
  methods: {
    startGame: function () {
      this.$router.replace('/game')
    },
    playSound: function () {
    },
    resetSettings: function() {
      store.commit("resetSettings");
    }
  },
};
</script>

<style>
.v-container {
  background-color: green;
}
</style>
