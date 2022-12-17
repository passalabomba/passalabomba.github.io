<template>
  <v-app dark>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'PassaLaBomba',

  components: {
    //Home,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
/** Hide scrollbar */
html {
  overflow: hidden
}
</style>
