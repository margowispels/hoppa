<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackToP3() {
  router.push('/P3')
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Je herkent in dit rijtje geen kenmerken van onderpresteren</h1>
    <h3>
        Dit sluit niet uit dat er mogelijk wel sprake van 
        onderpresteren kan zijn, maar er kan ook een andere reden 
        zijn voor je zoektocht. Is er bijvoorbeeld sprake van een 
        andere leermoeilijkheid of zijn er storende 
        omgevingsfactoren? Wat geven de leerling en ouders/verzorgers aan?
    </h3>
    <br>
    <h3>
        Bedankt voor je tijd, succes met je zoektocht en schroom niet om hulp te vragen.
    </h3>
  </div>
  <div class="button-group">
    <button class="button" @click="goBackToP3">vorige</button>
  </div>
</template>
