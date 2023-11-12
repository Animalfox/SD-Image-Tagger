<script setup lang="ts">
const { data } = await useFetch("/api/v1/file/list");
</script>
<template>
  <main>
    <h1>SD Image Tagger</h1>
    <pre>{{ data.splice(0,3) }}</pre>
    <div class="row">
      <RandomImage />
    </div>
  </main>
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
