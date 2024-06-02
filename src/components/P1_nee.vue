<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackToP1() {
  router.push('/P1')
}
</script>

<template>
<div class="flex flex-col justify-center items-center h-screen">
  <div class="div_hoppa">
    <h1>Je herkent in dit rijtje geen kenmerken van begaafdheid</h1>
    <h3>
      Dit sluit niet uit dat er mogelijk wel sprake van kenmerken 
      van begaafdheid kunnen zijn, maar er kan ook een andere 
      reden zijn voor je zoektocht naar geschikte hulp voor je leerling. 
      Zijn er bijvoorbeeld aanwijzingen van een leerstoornis of zijn er storende 
      omgevingsfactoren? Wat geven de leerling en 
      ouders/verzorgers aan?
    </h3>
    <br>
    <h3>
      Succes met je zoektocht en schroom niet om hulp te vragen.
    </h3>
  </div>
  <div class="div_button_group">
    <button class="button" @click="goBackToP1">vorige</button>
  </div>
</div>  
</template>
