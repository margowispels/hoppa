<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackToP1() {
  router.push('/P1')
}

function goFromP2ToP3() {
  router.push('/P3')
}

function goToP2ja() {
  router.push('/P2_ja')
}
</script>

<template>
<div class="flex flex-col justify-center items-center h-screen">
  <div class="div_hoppa">
    <h1>Kun je één of meerdere van de volgende vragen met ja beantwoorden?</h1>
    <h3>
      <ul class="list-disc text-left p-2 m-4">
          <li>Zijn er aanwijzingen voor dyslexie of een ander leerprobleem?</li>
          <li>Zijn er aanwijzingen voor ADHD, ASS of een ander ontwikkelingsprobleem?</li>
          <li>Zijn er aanwijzingen voor een ingrijpende levensgebeurtnis die het welzijn van de leerling zou kunnen beinvloeden?</li>
      </ul>
    </h3>
  </div>
  <div class="div_button_group">
    <button class="button" @click="goFromP2ToP3">nee</button>
    <button class="button" @click="goBackToP1">vorige</button>
    <button class="button" @click="goToP2ja">ja</button>
  </div>
</div>  
</template>
