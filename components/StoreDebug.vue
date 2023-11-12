<script setup lang="ts">
import { useStore } from "@/stores/default";
const store = useStore();
</script>

<template>
  <section>
    <h2>Store Debug</h2>
    <p>You can see current state of the store at below:</p>
    <pre>{{ store }}</pre>
  </section>
</template>

<style scoped lang="scss">
pre {
  max-height: 565px;
  overflow: auto;
}
</style>
