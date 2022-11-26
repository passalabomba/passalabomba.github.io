<template>
  <v-list two-line style="max-height: 300px" class="overflow-y-auto">
    <v-list-item-group v-model="selected" active-class="pink--text" >
      <template v-for="(item, index) in this.players">
        <v-list-item :key="item.name" :disabled="item.life <= 0">
          <template>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action class="d-flex justify-center align-center">
              <v-col>
                <v-icon v-for="l in item.life" color="grey lighten-1" :key="l">
                  mdi-heart-outline
                </v-icon>
              </v-col>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider v-if="index < players.length - 1" :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
import "@/router.js";
import store from "../store";

export default {
  name: "PlayerList",
  data: () => ({
    selected: [-1],
  }),
  props: { prefferableHeight:String },
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
