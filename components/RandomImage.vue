<script setup lang="ts">
import { useStore } from "@/stores/default";
const store = useStore();
</script>

<template>
  <section>
    <h2>Random Image</h2>
    <p>Click the button below the image to roll the next image</p>
    <img
      v-if="store.images[store.selected]"
      :src="store.images[store.selected].src"
      width="512"
      height="512"
    />
    <button @click="store.selectRandomImage()">Next Image</button>
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
  border: 1px solid rgb(216, 223, 226);
}
button {
  height: 60px;
  border: 0;
  border-radius: 10px;
  background-color: #195fa0;
  color: #fff;
  font-size: 16pt;
  &:hover {
    background-color: #144a7c;
  }
}
</style>
