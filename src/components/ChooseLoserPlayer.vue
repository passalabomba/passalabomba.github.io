<template>
  <v-dialog v-model="propModel" width="600px">
    <v-card class="mx-auto pa-6" max-width="600" ma outlined>
      <players-list ref="child_pla_list"></players-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="isDisabled" text @click="chooseLooser()">
          Dichiara perdente
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import PlayersList from "./PlayersList.vue";
import store from "../store";

export default {
  props: {},
  computed: {
    selectedPlayerItem() {
        return store.getters.selectedPlayer
    },
    isDisabled() {
      return this.selectedPlayerItem <= -1;
    },
    propModel() {
      return store.getters.openChooseLoser
    },
  },
  name: "HelloWorld",
  components: {
    "players-list": PlayersList,
  },
  data: () => ({
    playerName: "",
    dialog: false,
    selected: -1,
  }),
  methods: {
    chooseLooser: function () {
      store.commit("removeLife", this.selectedPlayerItem);
      store.commit("setOpenChooseLoser", false);
    },
  }
  
};
</script>
