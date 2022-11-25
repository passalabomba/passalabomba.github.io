<template>
  <v-dialog v-model="dialog" persistent width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn x-large icon v-bind="attrs" v-on="on" color="white">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>

    <v-card class="mx-auto" max-width="600" outlined shaped>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-alert type="error" v-model="errorAlertVisible">
                Il tempo minimo non può essere maggiore del tempo massimo
              </v-alert>
            </v-col>
            <v-col cols="12">
              <v-slider
                v-model="min"
                :max="600"
                label="Min"
                class="align-center"
              >
                <template v-slot:append>
                  <v-text-field
                    v-model="min"
                    class="mt-0 pt-0"
                    type="number"
                    style="width: 60px"
                  ></v-text-field>
                </template>
              </v-slider>
            </v-col>

            <v-col cols="12">
              <v-slider
                v-model="max"
                :max="600"
                label="Max"
                class="align-center"
              >
                <template v-slot:append>
                  <v-text-field
                    v-model="max"
                    class="mt-0 pt-0"
                    type="number"
                    style="width: 60px"
                  ></v-text-field>
                </template>
              </v-slider>
            </v-col>

            <v-col cols="12" class="text-center">
              <v-menu
                offset-y
                rounded='lg'
              >
                <template v-slot:activator="{ attrs, on }">
                  <v-btn
                    class="white--text ma-5"
                    v-bind="attrs"
                    v-on="on"
                    color="primary"

                  >
                    Scegl il livello
                  </v-btn>
                </template>

                <v-list shaped >
                  <v-list-item-group v-model="level" active-class="pink--text">
                  <v-list-item
                    v-for="(av_level, i) in this.availableLevels"
                    :key="i"
                  >
                    <v-list-item-title v-text="av_level.label"></v-list-item-title>
                  </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </v-col>

            <v-col cols="12">
              <v-slider
                v-model="life"
                :max="10"
                label="Vite per giocatore"
                class="align-center"
              >
                <template v-slot:append>
                  <v-text-field
                    v-model="life"
                    class="mt-0 pt-0"
                    type="number"
                    style="width: 60px"
                  ></v-text-field>
                </template>
              </v-slider>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false"> Chiudi </v-btn>
        <v-btn text @click="save"> Salva </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "../store";

export default {
  created() {
    this.min = store.getters.minSecondsVal;
    this.max = store.getters.maxSecondsVal;
    this.life = store.getters.life;
    this.level = store.getters.level;
    this.players = store.getters.players
  },

  data: () => ({
    dialog: false,
    errorAlertVisible: false,
    min: null,
    max: null,
    life: null,
    level: null,
    availableLevels: [
      { label: "Facile", num_lev: 0, color: "#81C784" },
      { label: "Medio", num_lev: 1, color: "#FFE57F" },
      { label: "Difficile", num_lev: 2, color: "#FB8C00" },
      { label: "Molto difficile", num_lev: 3, color: "#E53935" },
      { label: "Bilanciato", num_lev: -1, color: "#E53935" }
    ],
    players: store.getters.players
  }),
  computed: {
    stateMin() {
      return store.getters.minSecondsVal;
    },
    stateMax() {
      return store.getters.maxSecondsVal;
    },
    stateLife() {
      return store.getters.life;
    },
    stateLevel() {
      return store.getters.level;
    },
  },
  watch: {
    stateMin(newVal) {
      this.min = newVal;
    },
    stateMax(newVal) {
      this.max = newVal;
    },
    stateLife(newVal) {
      this.life = newVal;
    },
    stateLevel(newVal) {
      this.level = newVal;
    },
  },
  methods: {
    save: function () {
      if (this.checkValidity() == true) {
        this.dialog = false;
        this.errorAlertVisible = false;
        store.commit("changeMinSeconds", this.min);
        store.commit("changeMaxSeconds", this.max);
        store.commit("setLevel", this.level);
        store.commit("setLife", this.life);
      }
    },
    checkValidity: function () {
      if (this.min > this.max) {
        this.errorAlertVisible = true;
        return false;
      }
      return true;
    },
  },
};
</script>
