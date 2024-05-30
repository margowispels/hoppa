<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackToHome() {
  router.push('/')
}

function goToP1nee() {
  router.push('/P1_nee')
}

function goFromP1ToP2() {
  router.push('/P2')
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">Kennmerken begaafdheid</h1>
    <h3>
        Herken je één of meerdere van de volgende kenmerken bij de betreffende leerling?
    </h3>
    <table class="tg">
        <tbody>
            <tr>
                <td class="tg-0lax">goed probleemoplossend vermogen</td>
                <td class="tg-0lax">snel leervermogen en lange aandachtsspanne</td>
                <td class="tg-0lax">hoge IQ score (+/- 130)</td>
            </tr>
            <tr>
                <td class="tg-0lax">uitgebreide woordenschat</td>
                <td class="tg-0lax">goed werkend geheugen</td>
                <td class="tg-0lax">perfectionisme</td>
            </tr>
            <tr>
                <td class="tg-0lax">brede interesse</td>
                <td class="tg-0lax">nieuwsgierigheid</td>
                <td class="tg-0lax">doorzettingsvermogen</td>
            </tr>
            <tr>
                <td class="tg-0lax">sterk rechtvaardigheidsgevoel</td>
                <td class="tg-0lax">emotionele intensitiet</td>
                <td class="tg-0lax">verhoogde gevoeligheid voor omgevingsstimuli</td>
            </tr>
        </tbody>
    </table>    
  </div>
  <div class="button-group">
    <button class="button" @click="goToP1nee">nee</button>
    <button class="button" @click="goBackToHome">vorige</button>
    <button class="button" @click="goFromP1ToP2">ja</button>
  </div>
</template>
