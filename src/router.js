import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/contacts",
      name: "contacts-list",
      component: () => import("./components/ContactList"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddContact"),
    },
  ],
});
