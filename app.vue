<template>
  <main>
    <h1>SD Image Tagger</h1>
    <div class="row">
      <ImageGallery />
      <RandomImage />
    </div>
  </main>
</template>

<style lang="scss">
@import "@/scss";
@include reset;

main {
  display: flex;
  flex-direction: column;
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
