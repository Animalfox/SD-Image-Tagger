<script setup lang="ts">
import { useStore } from "@/stores/default";
const store = useStore();
</script>

<template>
  <section>
    <h2>List Of All Tags</h2>
    <p>Look at the all tags used inside your project</p>
    <input type="text" placeholder='Type a new tag and press "Enter" …' />
    <ul>
      <li v-for="tag in store.tags" :key="tag">
        <span>{{ tag }}</span>
        <button></button>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
input {
  border-radius: 10px;
  height: 60px;
  padding: 0 20px;
}
ul {
  flex-direction: column;
  overflow: auto;
}
li {
  background: rgb(238, 244, 247);
  border-radius: 10px;
  padding: 20px;
  justify-content: space-between;
  &:hover {
    button {
      display: flex;
    }
  }
}
button {
  $size: 20px;
  align-items: baseline;
  aspect-ratio: 1;
  background: rgb(255, 43, 89);
  border-radius: 50%;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: $size;
  justify-content: center;
  width: $size;
  display: none;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  &:before {
    content: "×";
    font-size: 22px;
    left: 0.5px;
    line-height: 19.5px;
    position: relative;
    top: 1.5px;
  }
}
</style>
