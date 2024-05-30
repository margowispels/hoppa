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
  <div class="greetings">
    <h1 class="green">Kennmerken onderpresteren</h1>
    <h3>
        Herken je één of meerdere van de volgende kenmerken bij de betreffende leerling?
    </h3>
    <table class="tg">
        <tbody>
            <tr>
                <td class="tg-0lax">lage academische zelfperceptie</td>
                <td class="tg-0lax">negatieve houding jegens school en docenten</td>
                <td class="tg-0lax">weinig moeite doen voor schoolse taken</td>
            </tr>
            <tr>
                <td class="tg-0lax">lage motivatie</td>
                <td class="tg-0lax">heel creatief</td>
                <td class="tg-0lax">lage zelfeffectiviteit</td>
            </tr>
            <tr>
                <td class="tg-0lax">externe attributies</td>
                <td class="tg-0lax">lage doelwaardering</td>
                <td class="tg-0lax">uitstelgedrag</td>
            </tr>
            <tr>
                <td class="tg-0lax">lage metacognitieve vaardigheden</td>
                <td class="tg-0lax">grote verschillen in resultaten binnen een vak</td>
                <td class="tg-0lax">verschil in verwachte score en daadwerkelijk resultaat</td>
            </tr>
        </tbody>
    </table>
  </div>
  <div class="button-group">
    <button class="button" @click="goToP3nee">nee</button>
    <button class="button" @click="goBackToP2">vorige</button>
    <button class="button" @click="goFromP3ToP4">ja</button>    
  </div>
</template>
