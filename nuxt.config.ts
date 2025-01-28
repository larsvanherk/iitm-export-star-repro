// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@sentry/nuxt/module'],

  sentry: {
    autoInjectServerSentry: 'top-level-import',
    sourceMapsUploadOptions: {
      enabled: false
    }
  }
});
