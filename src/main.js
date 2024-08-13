// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(router)
app.use(ToastService)

app.mount('#app')
