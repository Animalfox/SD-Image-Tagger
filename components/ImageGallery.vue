<script setup lang="ts">
import { useStore } from "@/stores/default";
const store = useStore();
const previewSizes = 34;
</script>

<template>
  <section>
    <h2>Image Gallery</h2>
    <template v-if="store.images.length > 0">
      <p>Your <b>./public/images</b> folder contains:</p>
      <div>
        <img
          v-for="image in store.images"
          :key="image.src"
          :src="image.src"
          :width="previewSizes"
          :height="previewSizes"
          :class="{ active: image.src == store.images[store.selected].src }"
        />
      </div>
    </template>
    <template v-else>
      <p>
        Your <b>./assets/images</b> folder is empty. Please add your images into
        this folder.
      </p>
    </template>
  </section>
</template>

<style scoped lang="scss">
section {
  flex-direction: column;
}
div {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
img {
  border-radius: 10px;
  border: 1px solid rgb(216, 223, 226);
  opacity: 0.5;
  &.active {
    opacity: 1;
    border: 1px solid rgb(89, 205, 255);
  }
}
</style>
