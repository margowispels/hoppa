<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBackToP4() {
  router.push('/P4')
}

function goToEnd() {
  router.push('/End')
}

</script>

<template>
<div class="div_wrapper">
  <div class="div_hoppa">
    <h1>Omgevingsperceptie (uitleg en enkele voorbeeld vragen)</h1>
    <h3>
      Om omgevingspeceptie te adresseren zou je de volgende strategieën gebruiken:
    </h3>
    <ol class="list-decimal text-left text-lg p-2 m-4">
        <li>Bespreken met de leerling wat zij zien als obstakels en het bespreken van de 
          mogelijke opties voor de leerling. Dit bestaat ook uit het bespreken van wat de 
          leerling wel en niet zelf kan controleren. Het leren waarderen van verschillende 
          standpunten en het analyseren van geschikte aanpakken, zouden onderdeel van het 
          gesprek moeten zijn.
            <ul class="list-disc text-left text-lg p-2 m-4">
                <li>Kun je een obstakel noemen dat je tegenkomt in je schoolwerk of andere activiteiten?</li>
                <li>Hoe denk je dat dit obstakel invloed heeft op je prestaties?</li>
                <li>Kunnen we samen mogelijke opties bespreken om met dit obstakel om te gaan?</li>
                <li>Wat zijn enkele dingen die je zelf kunt controleren in deze situatie en wat zijn dingen die buiten jouw controle liggen?</li>
            </ul>
        </li>
        <li>Opletten dat leerlingen hun omgeving niet als excuus gebruiken. Wanneer dit wel gebeurt 
          kan het helpen om een techniek zoals actief luisteren te gebruiken om de zorgen van de 
          leerling weg te nemen.
            <ul class="list-disc text-left text-lg p-2 m-4">
                <li>Heb je ooit gemerkt dat je je omgeving als excuus gebruikt voor je prestaties?</li>
                <li>Op welke manieren denk je dat je de controle kunt behouden over je prestaties, zelfs als er obstakels zijn?</li>
                <li>Hoe kunnen we ervoor zorgen dat je je verantwoordelijk voelt voor je eigen succes, ongeacht de omstandigheden?</li>
            </ul>
        </li>
        <li>Leerlingen helpen om hun automatische gedachten te herkennen en te analyseren zodat 
          ze de negatieve of vervormde gedachten kunnen vervangen door meer realistische en positieve 
          gedachten waarbij de focus wordt gelegd op persoonlijke verantwoordelijkheid en keuze.
            <ul class="list-disc text-left text-lg p-2 m-4">
                <li>Kun je een voorbeeld geven van een situatie waarin je negatieve of vervormde gedachten had over je capaciteiten?</li>
                <li>Hoe denk je dat deze gedachten je gedrag beïnvloeden?</li>
                <li>Kunnen we samen werken aan het identificeren en vervangen van deze gedachten door meer realistische en positieve gedachten?</li>
                <li>Op welke manieren kun je persoonlijke verantwoordelijkheid nemen voor je gedachten en keuzes?</li>
            </ul>
        </li>        
    </ol>  
  </div>
  <div class="div_button_group">
    <button class="button" @click="goBackToP4">vorige</button>
    <button class="button" @click="goToEnd">volgende</button>
  </div>
</div>  
</template>