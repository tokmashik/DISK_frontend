import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from "./router";

import 'primevue/resources/themes/saga-purple/theme.css'
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';   
import FocusTrap from 'primevue/focustrap';
import Checkbox from 'primevue/checkbox';
import Password from 'primevue/password';

const app = createApp(App)
app.use(PrimeVue)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Toast', Toast)
app.component('ToastService', ToastService)
app.component('Avatar', Avatar)
app.component('AvatarGroup', AvatarGroup)
app.component('Password', Password)
app.component('Checkbox', Checkbox)
app.directive('focustrap', FocusTrap);
app.mount('#app')
app.use(router)
