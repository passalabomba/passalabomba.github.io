<template>
  <v-dialog v-model="show" persistent width="600px">

    <v-card class="mx-auto" max-width="600" outlined >
    <v-img
      class="text--primary mt-2 mb-2 mr-2 ml-2"
      contain
      src="@/assets/winner.png"
      />
      <v-card-text>
          Complimenti {{this.winner}}! Sei il vincitore
      </v-card-text>
     
        <v-btn block text align-center justify-center text-center @click="goHome()" class="mt-2 mb-2"> Torna alla Home </v-btn>
    
        <v-btn block text align-center justify-center text-center @click="startWithSamePlayers()" class="mb-2"> Ricomincia con gli <br/> stessi giocatori </v-btn>
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
