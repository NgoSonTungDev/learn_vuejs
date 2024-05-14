<template>
  <h1>home 1876163871236</h1>
  <p>Count: {{ counter.count }}</p>
  <p>Double Count: {{ counter.doubleCount }}</p>
  <button @click="counter.increment()">Increment</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../stores/countStore";

const counter = useCounterStore();
</script>