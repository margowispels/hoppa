<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackToP2() {
  router.push('/P2')
}

function goToP3nee() {
  router.push('/P3_nee')
}

function goFromP3ToP4() {
  router.push('/P4')
}
</script>

<template>
<div class="flex flex-col items-center">
  <div class="div_hoppa">
    <h1>Kennmerken onderpresteren</h1>
    <h3>
        Herken je één of meerdere van de volgende kenmerken bij de betreffende leerling?
    </h3>
    <div class="flex items-center justify-center ml-4 sm:ml-0">
      <table class="tg">
        <tbody>
            <tr class="tr">
                <td class="td">lage academische zelfperceptie</td>
                <td class="td">negatieve houding jegens school en docenten</td>
                <td class="td">weinig moeite doen voor schoolse taken</td>
            </tr>
            <tr class="tr">
                <td class="td">lage motivatie</td>
                <td class="td">heel creatief</td>
                <td class="td">lage zelfeffectiviteit</td>
            </tr>
            <tr class="tr">
                <td class="td">externe attributies</td>
                <td class="td">lage doelwaardering</td>
                <td class="td">uitstelgedrag</td>
            </tr>
            <tr class="tr">
                <td class="td">lage metacognitieve vaardigheden</td>
                <td class="td">grote verschillen in resultaten binnen een vak</td>
                <td class="td">verschil in verwachte score en daadwerkelijk resultaat</td>
            </tr>
        </tbody>
    </table>
    </div>
  </div>
  <div class="div_button_group">
    <button class="button" @click="goToP3nee">nee</button>
    <button class="button" @click="goBackToP2">vorige</button>
    <button class="button" @click="goFromP3ToP4">ja</button>    
  </div>
</div>  
</template>
