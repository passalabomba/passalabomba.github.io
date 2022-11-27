<template>
  <v-dialog v-model="show" persistent width="600px">

    <v-card class="mx-auto" max-width="600" outlined shaped>
    <v-img
      class="text--primary mt-2 mb-2 mr-2 ml-2"
      contain
      src="@/assets/winner.png"
      />
      <v-card-text>
          Complimenti {{this.winner}}! Sei il vincitore
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="goHome()"> Torna alla Home </v-btn>
        <v-spacer/>
        <v-btn text @click="startWithSamePlayers()"> Ricomincia con gli stessi giocatori </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "../store";

export default {
  created() {
    
  },
  data: () => ({
    dialog: false
  }),
  props: {
     value: Boolean,
     winner: String
  },
  computed: {
    players() {
        return store.getters.players
    },
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  },
  watch: {
    
  },
  methods: {
    startWithSamePlayers: function () {
        store.commit("restartWithSamePlayer");
        this.$router.replace("/");
        this.$confetti.stop();


    },
    goHome: function () {
        this.$router.replace("/");
        this.$confetti.stop();

    },
  },
};
</script>
