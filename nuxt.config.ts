// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      title: "Bidgear nuxt test | olympus",
      script: [
        {
          type: "text/javascript",
          src: "https://platform.bidgear.com/pubbidgear-ad.js",
          async: "true",
          "data-cfasync": "false",
        },
      ],
    },
  },
});
