<script setup lang="ts">
import { useStore } from "@/stores/default";
const store = useStore();
</script>

<template>
  <section>
    <h2>Store Debug</h2>
    <p>Use this for check actual state:</p>
    <pre>{{ store }}</pre>
  </section>
</template>

<style scoped lang="scss">
section {
  opacity: 0.25;
  width: 300px;
  margin-left: -300px;
}
pre {
  max-height: 614px;
  overflow: auto;
}
</style>
