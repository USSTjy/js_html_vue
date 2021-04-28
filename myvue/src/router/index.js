import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/slot",
    name: "Slot",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "slottest" */ "../views/Slottest.vue"),
  },
  {
    path: "/mixins",
    name: "Mixins",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mixins" */ "../views/Mixins.vue"),
  },
  {
    path: "/mydirectives",
    name: "Mydirectives",
    component: () =>
      import(
        /* webpackChunkName: "mydirectives" */ "../views/Mydirectives.vue"
      ),
  },
  {
    path: "/others",
    name: "others",
    redirect: "/others-js",
    component: () =>
      import(/* webpackChunkName: "other" */ "../views/other/index.vue"),
    children: [
      {
        path: "/others-js",
        name: "otherjs",
        component: () =>
          import(
            /* webpackChunkName: "other" */ "../views/other/other-js/index.vue"
          ),
      },
      {
        path: "/others-html",
        name: "otherhtml",
        component: () =>
          import(
            /* webpackChunkName: "other" */ "../views/other/other-html/index.vue"
          ),
      },
      {
        path: "/others-webpack",
        name: "otherwebpack",
        component: () =>
          import(
            /* webpackChunkName: "other" */ "../views/other/other-webpack/index.vue"
          ),
      },
    ],
  },

  {
    path: "/*",
    name: "404",
    component: () =>
      import(
        /* webpackChunkName: "notFound" */ "../views/common/not-found.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
