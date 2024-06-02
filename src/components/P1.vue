<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackToHome() {
  router.push('/Home')
}

function goToP1nee() {
  router.push('/P1_nee')
}

function goFromP1ToP2() {
  router.push('/P2')
}
</script>

<template>
<div class="div_wrapper">
  <div class="div_hoppa">
    <h1>Kenmerken begaafdheid</h1>
    <h3>
        Herken je één of meerdere van de volgende kenmerken bij de betreffende leerling?
    </h3>
    <div class="flex items-center justify-center ml-4 sm:ml-0">
      <table class="tg">
        <tbody>
          <tr class="tr">
              <td class="td">goed probleemoplossend vermogen</td>
              <td class="td">snel leervermogen en lange aandachtsspanne</td>
              <td class="td">hoge IQ score (+/- 130)</td>
          </tr>
          <tr class="tr">
              <td class="td">uitgebreide woordenschat</td>
              <td class="td">goed werkend geheugen</td>
              <td class="td">perfectionisme</td>
          </tr>
          <tr class="tr">
              <td class="td">brede interesse</td>
              <td class="td">nieuwsgierigheid</td>
              <td class="td">doorzettingsvermogen</td>
          </tr>
          <tr class="tr">
              <td class="td">sterk rechtvaardigheidsgevoel</td>
              <td class="td">emotionele intensitiet</td>
              <td class="td">verhoogde gevoeligheid voor omgevingsstimuli</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="div_button_group">
    <button class="button" @click="goToP1nee">nee</button>
    <button class="button" @click="goBackToHome">vorige</button>
    <button class="button" @click="goFromP1ToP2">ja</button>
  </div>
</div>
</template>
