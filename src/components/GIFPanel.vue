<template>
  <v-dialog v-model="propModel" max-width="800px" persistent  >
    <v-card class="" outlined color="white">
      <v-img
      class="text--primary mt-2 mb-2 mr-2 ml-2"
      contain
      :src="this.gifImage"
      />
      <v-card-text class="text--primary">
      <h2 text-center align-center justify-center>{{this.gifText}}  </h2>

    </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeDialog()" color="error"> Chiudi </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "../store";

export default {
  props: { gifText:String, gifImage:String, state:String },
  computed: {
    propModel() {
      return (this.state === "D") ? store.getters.repeatedErrorVisible : store.getters.timerErrorVisible 
    },
  },
  name: "GIFPanel",
  components: {
  },
  data: () => ({
    //dialog: false,
  }),
  methods: {
    closeDialog: function (){
      store.commit('closeGIFPanel', this.state);
    }
  }
};
</script>
