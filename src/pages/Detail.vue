<template>
  <h1>Detail</h1>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const route = useRoute();

console.log(route.params);
</script>





