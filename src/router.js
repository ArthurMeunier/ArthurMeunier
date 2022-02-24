import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "/CV",
      component: () => import("./views/CV")
    },
    {
      path: "/Son/",
      name: "Son",
      component: () => import("./views/Son")
    },
    {
      path: "/Video/",
      name: "Video",
      component: () => import("./views/Video")
    },
    {
      path: "/Web/",
      name: "Web",
      component: () => import("./views/Web")
    },
    {
      path: "/CV/",
      name: "CV",
      component: () => import("./views/CV")
    },
  ]
});