<script setup>
import { ref } from 'vue';

const text = ref();
</script>




<template>

  <div class="cont">
    <span class="p-float-label">
    <InputText id="txt" type="text" v-model="text" />
    <label for="txt">Text</label>    
  </span>

        <Button label="Check" icon="pi pi-user" ></Button>
    </div>
    
</template>

<style>
.cont {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
