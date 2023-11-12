// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      { families: { Montserrat: [400, 800] }, download: true },
    ],
  ],
  image: {
    dir: "assets/images",
  },
});
