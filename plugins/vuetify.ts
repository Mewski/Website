import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#202023',
        surface: '#2a2a2d',
    },
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'darkTheme',
            themes: {
                darkTheme,
            },
        },
        ssr: true,
    })
    nuxtApp.vueApp.use(vuetify)
})