<template>
    <v-card>
    <v-card-title>
      Combinazioni uscite
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
import "@/router.js";
import store from "../store";

export default {
  name: "LtterCombinationTable",
  data: () => ({
    headers: [
        {
          text: 'Combinazione di lettere',
          value: 'combination',
        },
        { text: 'Livello', value: 'level' }
      ],
    
  }),
  computed: {
    selectedItem: {
      get: function () {
        return this.selected;
      },
    },

    players() {
      return store.getters.players;
    },
  },
  watch: {
    selected(newValue, oldValue) {
      console.log("changed selected item from " + oldValue + " in" + newValue);
      store.commit("setSelectedPlayer", newValue);
    },
  },
};
</script>

<style>
.v_list_fixed {
  height: 400px; /* or any height you want */
  overflow-y: auto;
}
</style>
