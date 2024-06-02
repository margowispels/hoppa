<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHome() {
  router.push('/Home')
}
</script>

<template>
<div class="div_wrapper">
  <div class="div_hoppa">
    <h1>Herkennen en helpen van onderpresterende leerlingen</h1>
  </div>
  <div class="div_button_group">
    <button class="button" @click="goToHome">start</button>
  </div>
</div>  
</template>
