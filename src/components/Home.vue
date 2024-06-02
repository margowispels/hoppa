<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackToDisclaimer() {
  router.push('/')
}

function goToP1() {
  router.push('/P1')
}
</script>

<template>
<div class="div_wrapper">
  <div class="div_hoppa">
    <h1>Welkom</h1>
    <h3>
      Met dit keuzemenu kun je als onderwijsprofessional een idee krijgen 
      of je te maken hebt met leerlingen met kenmerken van begaafdheid, dubbel bijzondere 
      en/of onderpresterende leerlingen. Dit dient als hulpmiddel om een 
      eerste stap te zetten bij het herkennen en kunnen helpen van 
      onderpresterende leerlingen met kenmerken van begaafdheid. Het is goed om in je achterhoofd 
      te houden dat begaafdheid en onderpresteren bij o.a. meisjes, leerlingen 
      van ouders met een lage SES (Sociale Economische Status) en NT2 (Nederlands 
      als tweede taal) leerlingen minder kan opvallen. Het is aan te raden om 
      bij vermoeden van onderpresteren of dubbel bijzonderheid bij leerlingen, 
      naast de tips die je hier krijgt ook advies in te winnen bij de ondersteuning, 
      de orthopedagoog of de hoogbegaafdheidsspecialist op school.
    </h3>
  </div>
  <div class="div_button_group">
    <button class="button" @click="goBackToDisclaimer">vorige</button>
    <button class="button" @click="goToP1">volgende</button>
  </div>
</div>  
</template>
