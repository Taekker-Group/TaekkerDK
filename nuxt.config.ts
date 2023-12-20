// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icons', '@nuxt/image', 'nuxt-vuefire'],
  image: {
    quality: 80,
    format: ['webp'],
  },
  screens: {
    'xs': 320,
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    'xxl': 1536,
    '2xl': 1536
  },
  vuefire: {
    config: {
      apiKey: "AIzaSyAL-eaNQjkstcmzBwrATY6HtPYQ2iK-D6g",
      authDomain: "taekkerdk-daed7.firebaseapp.com",
      projectId: "taekkerdk-daed7",
      storageBucket: "taekkerdk-daed7.appspot.com",
      messagingSenderId: "544690724329",
      appId: "1:544690724329:web:5d5637ec238d7028c1bf78",
      measurementId: "G-MLT76REQPL"
    },
  },
})
