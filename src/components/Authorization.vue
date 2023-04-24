<template>
<div class="flex justify-content-center p-fluid">
    <div v-focustrap class="card">
        <div class="field">
            <div class="p-input-icon-right">
                <i class="pi pi-envelope" />
                <InputText id="email" v-model="email" type="email" placeholder="Email" />
            </div>
        </div>
        <div class="field">
            <div class="p-float-label">
                <Password v-model="password" toggleMask>
                    <template #header>
                        <h6>Pick a password</h6>
                    </template>
                    <template #footer>
                        <Divider />
                        <p class="mt-2">Предложения</p>
                        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                            <li>At least one lowercase</li>
                            <li>At least one uppercase</li>
                            <li>At least one numeric</li>
                            <li>Minimum 8 characters</li>
                        </ul>
                    </template>
                </Password >
                <label for="password" >Пароль</label>
            </div>
        </div>
        <Button type="submit" label="Войти" class="mt-2" />
    </div>
</div>
    
</template>

<script setup>

import { ref } from 'vue';

const email = ref();
const password = ref();
</script>

