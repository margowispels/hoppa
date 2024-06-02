<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackToP3() {
  router.push('/P3')
}
</script>

<template>
<div class="flex flex-col items-center">
  <div class="div_hoppa">
    <h1 >Er zou sprake kunnen zijn van onderpresteren, wat nu?</h1>
    <h3>
        Waar zou de leerling zich nog in kunnen ontwikkelen?
        <br>
        Klik op één van de volgende opties
        <ul class="list-disc text-left text-lg p-2 m-4">
            <li>
                <router-link :to="{ name: 'P4_1' }">
                    <u class="text-mygreen">Zelfeffectiviteit</u> betekent dat je gelooft dat je de vaardigheden en middelen hebt om met deze uitdagingen om te gaan en succesvol te zijn.
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'P4_2' }">
                    <u class="text-mygreen">Doelwaardering</u> gaat over het belang dat je hecht aan het stellen en nastreven van doelen.
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'P4_3' }">
                    <u class="text-mygreen">Omgevingsperceptie</u> betekent dat je je bewust bent van factoren in je omgeving die van invloed kunnen zijn op je prestaties, zoals de 
                    verwachtingen van leraren, de druk van ouders, of de mate van ondersteuning die je krijgt van je school of peers.
                </router-link>
            </li>
        </ul>
    </h3>
  </div>
  <div class="div_button_group">
    <button class="button" @click="goBackToP3">vorige</button>
  </div>
</div>  
</template>

