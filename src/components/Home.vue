<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToP1() {
  router.push('/P1')
}
</script>

<template>
  <div class="div_hoppa">
    <h1>Herkennen en helpen van onderpresterende leerlingen</h1>
    <h3>
      Met dit keuzemenu kun je een idee krijgen of je te maken hebt 
      met leerlingen met kenmerken van begaafdheid, dubbel bijzondere 
      en/of onderpresterende leerling. Dit dient als hulpmiddel om een 
      eerste stap te zetten bij het herkennen en kunnen helpen van 
      onderpresterende begaafde leerlingen. Het is goed om in je achterhoofd 
      te houden dat begaafdheid en onderpresteren bij o.a. meisjes, leerlingen 
      van ouders met een lage SES en NT2 leerlingen minder kan opvallen. Het is 
      aan te raden om bij vermoeden van onderpresteren of dubbel bijzonderheid 
      bij leerlingen, naast de tips die je hier krijgt ook advies in te winnen 
      bij het LOG, de orthopedagoog of de hoogbegaafdheidsspecialist op school.
    </h3>
  </div>
  <div class="button-group">
    <button class="button" @click="goToP1">volgende</button>
  </div>  
</template>
