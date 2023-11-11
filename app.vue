<script setup lang="ts">
import { useStore } from '~/stores/default'
const store = useStore()
</script>

<template>
  <pre>{{ store.data }}</pre>
</template>
