import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: true,
    },
  },
  {
    path: "/live/:id",
    name: "Live",
    component: () => import("@/components/Live.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (sessionStorage.getItem("username")) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
