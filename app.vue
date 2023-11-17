<script setup lang="ts">
import { useStore } from "@/stores/default";
const store = useStore();
</script>

<template>
  <div class="row">
    <StoreDebug />
    <main>
      <h1>SD Image Tagger</h1>
      <div class="row">
        <template v-if="!store.isLoading">
          <RandomImage />
          <ListOfImageTags />
          <ListOfAllTags />
        </template>
        <template v-else>
          <p>Image Loading...</p>
        </template>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import "@/scss";
@include reset;

body {
  align-items: center;
}
main {
  display: flex;
  flex-direction: column;
  max-width: 1520px;
  gap: 10px;
}
* {
  font-family: Montserrat;
}
.row {
  display: flex;
  gap: 10px;
}
</style>
