// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['assets/css/main.css', 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    typescript: {
        strict: true,
        shim: false,
    },
    modules: [
        '@nuxt/content',
        '@nuxtjs/supabase'
    ],
    ssr: true,
})
