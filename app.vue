<script setup lang="ts">
import { useStore } from '~/stores/default'

const store = useStore()
</script>

<template>
  <p>Folder <b>./images</b> contain:</p>
  <pre>{{ store.images }}</pre>
</template>
