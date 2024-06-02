<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHome() {
  router.push('/Home')
}

function goBackToP4() {
  router.push('/P4')
}

</script>

<template>
<div class="div_wrapper">
  <div class="div_hoppa">
    <h1>Niet het einde maar het begin</h1>
    <h3>
        Je hebt net een begin gemaakt met het voeren van gesprekken om de academische 
        motivatie bij leerlingen met mogelijke kenmerken van begaafdheid en 
        onderpresteren wellicht te verbeteren, super!! Zelfeffectiviteit, 
        doelwaardering en een positieve omgevingsperceptie zijn alle drie nodig om tot 
        academische motivatie en daarmee mogelijk tot academische prestaties te komen. 
        Dit is één manier om met onderpresteren aan de slag te kunnen gaan, er zijn 
        nog veel meer mogelijkheden. Denk daarbij ook eens aan het compacten, 
        verrijken of versnellen van één of meerdere vakken en om deze leerling te 
        bespreken met de ondersteuning en/of Orthopedagoog en/of de 
        hoogbegaafdheidsspecialist op school.
    </h3>
    <br>
    <h3>
      Bedankt voor je tijd en succes met je verdere zoektocht!
    </h3>
  </div>
  <div class="div_button_group">
    <button class="button" @click="goBackToP4">vorige</button>
    <button class="button" @click="goToHome">opnieuw</button>
  </div>  
</div>  
</template>
