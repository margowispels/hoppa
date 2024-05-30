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
  <div class="greetings">
    <h1 class="green">Kun je één of meerdere van de volgende vragen met ja beantwoorden?</h1>
  </div>
  <div>
    <h3 style="margin-top:3cm;">
        <ul>
            <li>Zijn er aanwijzingen voor dyslexie of een ander leerprobleem?</li>
            <li>Zijn er aanwijzingen voor ADHD, ASS of een ander ontwikkelingsprobleem?</li>
        </ul>
    </h3>
  </div>
  <div class="button-group">
    <button class="button" @click="goFromP2ToP3">nee</button>
    <button class="button" @click="goBackToP1">vorige</button>
    <button class="button" @click="goToP2ja">ja</button>
  </div>  
</template>
