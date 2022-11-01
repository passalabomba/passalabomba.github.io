import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/HomePage.vue";
import ActiveGame from "./components/ActiveGame.vue";
//import About from "./components/About.vue";
Vue.use(VueRouter);


export default new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: 'Passa la Bomba',
        metaTags: [
        ]
      },
    },
    {
      path: "/game",
      name: "game",
      component: ActiveGame
    }/*,
    {
      path: "/rules",
      name: "projects",
      component: Projects
    }*/
    
  ]
});
