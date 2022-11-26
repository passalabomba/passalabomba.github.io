<template>
  <v-dialog v-model="propModel" max-width="800px" persistent  >
    <v-card class="mt-2 mb-2 mr-2 ml-2"  outlined  >
      <v-img
      class="text--primary mt-2 mb-2 mr-2 ml-2"
      contain
        src="@/assets/GIF/ah_non_posso_GIF.png"
      />
      <v-card-text class="text--primary mt-2 mb-2 mr-2 ml-2">
      <h1 text-center align-center justify-center>{{this.playerName}} sei un Salvini.<br/> Per caso non hai capito le regole? </h1>

    </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeDialog()"> Chiudi </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "../store";

export default {
  props: { playerName:String },
  computed: {
    propModel() {
      return store.getters.timerErrorVisible
    },
  },
  name: "GIFPanel",
  components: {
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    closeDialog: function (){
      store.commit('closeTimerErrorGIF');
    }
  }
};
</script>
