<script setup lang="ts">
import { useStore } from "@/stores/default";

const store = useStore();
const image = ref({});
getRandomImage();

function getRandomImage() {
  image.value = store.getRandomImage();
}
</script>

<template>
  <section>
    <h2>Random Image</h2>
    <p>Click the button below the image to roll the next image</p>
    <NuxtImg :src="image.path" width="512" height="512" />
    <button @click="getRandomImage()">Next Image</button>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 512px;
  & > * {
    margin: 0;
  }
}
img {
  border-radius: 10px;
}
button {
  height: 50px;
  border: 0;
  border-radius: 10px;
  background-color: #114677;
  color: #fff;
  font-size: 16pt;
}
</style>
