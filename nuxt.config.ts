// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Montserrat: {
        wght: [300, 400, 800],
        ital: [300],
      },
    },
    display: "auto",
    subsets: ["latin", "cyrillic"],
    prefetch: true,
    preconnect: true,
    preload: true,
  },
  imports: {
    dirs: ["stores", "utils"],
  },
});
