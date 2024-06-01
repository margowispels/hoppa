<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHome() {
  router.push('/Home')
}
</script>

<template>
  <div class="div_hoppa">
    <h1>Disclaimer</h1>
    <h3>
    </h3>
  </div>
  <div class="button-group">
    <button class="button" @click="goToHome">start</button>
  </div>  
</template>
