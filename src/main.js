import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import BuyAdModal from './views/Shared/BuyAdModal.vue'

loadFonts()

createApp(App)
  .use(router)
  .use(store)      // ← подключили Vuex
  .use(vuetify)
  .component('buy-ad-modal', BuyAdModal)
  .mount('#app')