import { createRouter, createWebHistory } from "vue-router";
import Detail from "../pages/Detail.vue";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";

const routers: { path: string; component: any }[] = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/detail/:id", component: Detail },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
