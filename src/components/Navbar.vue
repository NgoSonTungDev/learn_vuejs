<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { PATH } from "../constants/path";

const router = useRouter();
const route = useRoute();

console.log("router", router);
console.log("route", route);

const handleNavigate = (path: string) => {
  router.replace(path);
};
</script>

<template>
  <div class="navbar">
    <ul>
      <li @click="handleNavigate(PATH.home)">Home</li>
      <li @click="handleNavigate(PATH.login)">Login</li>
      <li @click="handleNavigate(`${PATH.detail}/8h12f7s9sf67ss6s9ss`)">
        Detail
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navbar ul {
  display: flex;
  gap: 20px;
}
.navbar ul li {
  list-style: none;
  cursor: pointer;
}
.navbar ul li:hover {
  color: aqua;
}
</style>
