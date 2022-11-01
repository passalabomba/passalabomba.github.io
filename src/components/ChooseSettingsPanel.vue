<template>
  <v-dialog v-model="dialog" persistent width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn  x-large icon v-bind="attrs" v-on="on" color="grey">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>

    <v-card
      class="mx-auto"
      max-width="600"
      outlined
      shaped
    >
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
import store from '../store';

export default {
 mounted() {
    this.min = store.getters.minSecondsVal
    this.max = store.getters.maxSecondsVal
  },
  data: () => ({
    dialog: false,
    errorAlertVisible: false,
    min: null,
    max: null
  }),
  
  methods: {
    save: function () {
      if (this.checkValidity() == true) {
        this.dialog = false;
        this.errorAlertVisible = false;
        store.commit("changeMinSeconds", this.min, this.max);

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
