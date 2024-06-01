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
  <div class="div_hoppa">
    <h1>Zelfeffectiviteit (uitleg en enkele voorbeeld vragen)</h1>
    <h3>
        Je zou de leerlingen kunnen helpen hun vertrouwen in 
        academische vaardigheden te vergroten en hun waardering om ergens moeite 
        voor te doen te verbeteren door het volgende:
    </h3>
    <ol class="list-decimal text-left text-base p-2 m-4">
        <li>Met de leerlingen praten over hun begaafdheid en onderpresteren, door onder andere 
            het delen van informatie en testresultaten. Het is nodig leerlingen te helpen met 
            het erkennen van hun begaafdheid en dat ze hun potentieel kunnen ontwikkelen door 
            ergens moeite voor te doen en te blijven doen.
            <ul class="list-disc text-left text-base p-2 m-4">
                <li>Wat weet je over begaafdheid en onderpresteren?</li>
                <li>Hoe voel je je over je eigen begaafdheid?</li>
                <li>Op welke manieren denk je dat je je potentieel kunt ontwikkelen door ergens moeite voor te doen?</li>
            </ul>
        </li>
        <li> Het vastleggen van de groei van leerlingen door middel van portfolio's en eventueel video's zodat ze hun groei kunnen monitoren.
            <ul class="list-disc text-left text-base p-2 m-4">
                <li>Hoe voel je je als je terugkijkt op je vorige werk?</li>
                <li>Kun je een specifiek voorbeeld geven van hoe je gegroeid bent in een bepaald vak of persoonlijk?</li>
                <li>Op welke manieren denk je dat je portfolio/video's je hebben geholpen om je groei te monitoren?</li>
            </ul>
        </li>
        <li> Begaafde leerlingen helpen begrijpen dat moeilijke situaties mogelijkheden tot groei zijn en dat als iets moeilijk is 
            het niet betekent dat ze niet slim zijn.
            <ul class="list-disc text-left text-base p-2 m-4">
                <li>Hoe ga je om met uitdagende situaties op school?</li>
                <li>Kun je een voorbeeld geven van een keer dat je iets nieuws hebt geprobeerd en geleerd hebt van de ervaring?</li>
                <li>Hoe denk je dat je houding ten opzichte van moeilijke situaties invloed heeft op je succes op school?</li>
            </ul>
        </li>
        <li> De leerlingen duidelijk te maken dat ergens moeite voor doen een grote rol speelde in hun groei door complimenten te 
            geven op specifieke voorbeelden. Deze complimenten zouden moeten gaan over een specifieke vaardigheid die de leerling 
            ontwikkeld heeft en die vaardigheid moet wijzen op de actieve betrokkenheid van de leerling.
            <ul class="list-disc text-left text-base p-2 m-4">
                <li>Kun je me vertellen over een project waar je echt hard aan hebt gewerkt?</li>
                <li>Hoe voelde het toen je merkte dat je vooruitgang boekte?</li>
                <li>Wat denk je dat je kunt doen om deze vaardigheid verder te ontwikkelen?</li>
            </ul>
        </li>                        
    </ol>    
  </div>
  <div class="button-group">
    <button class="button" @click="goBackToP4">vorige</button>
    <button class="button" @click="goToEnd">volgende</button>    
  </div>
</template>