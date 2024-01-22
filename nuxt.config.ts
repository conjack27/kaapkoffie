// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.scss'],
  googleFonts: {
    families: {
      Arial: true,
      'Josefin+Sans': true,
      Roboto: [300, 500, 700],
      Inconsolata: true,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
});
