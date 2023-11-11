<script setup lang="ts">
import { useStore } from '~/stores/default'

const store = useStore()
const previewSizes = 64;
</script>

<template>
  <template v-if="store.images.length > 0">
    <p>Your <b>./assets/images</b> folder contains:</p>
    <div>
      <NuxtImg v-for="image in store.images" :src="image" :width="previewSizes" :height="previewSizes" />
    </div>
  </template>
  <template v-else>
    <p>Your <b>./assets/images</b> folder is empty. Please add your images into this folder.</p>
  </template>
</template>

<style>
div {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
