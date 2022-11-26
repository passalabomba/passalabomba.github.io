<template>
  <v-dialog v-model="dialog" width="600px" >
    <template v-slot:activator="{ on, attrs }">
      <v-btn x-large icon v-bind="attrs" v-on="on" color="white">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-card class="mx-auto pa-6" max-width="600px" max-height="600px" ma outlined>
      <v-text-field
        justify="center"
        align="center"
        label="Nome Giocatore"
        outlined
        v-model="playerName"
      ></v-text-field>
      <v-btn
        justify="center"
        align="center"
        class="mb-4"
        outlined
        rounded
        text
        :disabled="!isDisabled"
        @click="addPlayer()"
      >
        Aggiungi giocatore
      </v-btn>
      <v-btn
        justify="center"
        align="center"
                class="mb-4"
        outlined
        rounded
        :disabled="selectedPlayer == undefined"
        text
        @click="removePlayer()"
      >
        Rimuovi giocatore
      </v-btn>
      <players-list :prefferable-height="this.prefferableHeight"></players-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false"> Chiudi </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import PlayersList from "./PlayersList.vue";
import store from "../store";

export default {
  created() {
    this.selectedPlayer = store.getters.selectedPlayer;
  },
  computed: {
    isDisabled() {
      return this.playerName.length > 0 && !(store.getters.players.some(value => value.name === this.playerName));
    },
    stateSelectedPlayer() {
      return store.getters.selectedPlayer;
    },
  },
  
  watch: {
    stateSelectedPlayer(newVal) {
      this.selectedPlayer = newVal;
    }
  },
  name: "HelloWorld",
  components: {
    "players-list": PlayersList,
  },
  data: () => ({
    playerName: "",
    dialog: false,
    selectedPlayer : store.getters.selectedPlayer,
    prefferableHeight: "200px"
  }),
  methods: {
    addPlayer: function () {
      store.commit("addPlayer", this.playerName);
      this.playerName= ''
    },
    removePlayer: function () {
      store.commit("removePlayer", this.selectedPlayer);
      console.log(this.selectedPlayer)
    }
  },
};
</script>
