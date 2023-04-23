import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/mdc-light-deeppurple/theme.css'
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';


const app = createApp(App)
app.use(PrimeVue)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Toast', Toast)
app.component('ToastService', ToastService)
app.mount('#app')
