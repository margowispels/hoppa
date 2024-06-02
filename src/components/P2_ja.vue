<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackFromP1jaToP2() {
  router.push('/P2')
}
</script>

<template>
<div class="flex flex-col justify-center items-center h-screen">
  <div class="div_hoppa">
    <h1>Je herkent een leer- en/of ontwikkelingsprobleem bij de leerling</h1>
    <h3>
      Er zou sprake kunnen zijn van dubbel bijzonderheid. Dit is 
      een combinatie van begaafdheid met een leer- en/of 
      ontwikkelingsprobleem. Heeft de leerling al hulp(middelen) 
      of is er nog meer nodig? Wat zijn de talenten van de 
      leerling en wordt hier al wat op ingezet? Wat geven de 
      leerling en ouders/verzorgers zelf aan? Het is aan te raden 
      om deze leerling te bespreken met de ondersteuning en/of 
      Orthopedagoog en/of de hoogbegaafdheidsspecialist op school.
    </h3>
    <br>
    <h3>
      Bedankt voor je tijd en succes met je zoektocht!
    </h3>
  </div>
  <div class="div_button_group">
    <button class="button" @click="goBackFromP1jaToP2">vorige</button>
  </div>
</div>  
</template>

