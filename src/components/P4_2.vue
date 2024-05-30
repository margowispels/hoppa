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
  <div class="greetings">
    <h1 class="green">Doelwaardering (uitleg en enkele voorbeeld vragen)</h1>
  </div>
  <div>
    <h3>
      Er zijn verschillende manieren waarop je de leerlingen zou kunnen helpen hun waardering 
      voor school te herkennen en toe te voegen, dit zijn enkele voorbeelden:
    </h3>
    <br>
    <ol>
        <li>De leerlingen helpen om hun korte, middenlange en lange termijndoelen te stellen, 
          dit betreft academische doelen. Het is essentieel dat de doelen betekenisvol zijn 
          voor de leerling.
            <ul>
                <li>Wat zijn enkele doelen die je graag zou willen bereiken op korte termijn 
                  (bijvoorbeeld deze week), middellange termijn (bijvoorbeeld deze periode) 
                  en lange termijn (bijvoorbeeld dit jaar of na deze school)?</li>
                <li>Waarom zijn deze doelen belangrijk voor jou?</li>
                <li>Hoe denk je dat het bereiken van deze doelen je zal helpen in je succes op school?</li>
            </ul>
        </li>
        <li>De leerlingen aanmoedigen om serieus na te denken over hoe hun gedrag in de huidige 
          lessen invloed kan hebben op hun toekomstige doelen en het expliciet laten vertellen 
          door de leerling waarom ze kiezen om wel of niet hun best te doen tijdens een les.
            <ul>
                <li>Kun je een voorbeeld geven van een moment waarop je ervoor hebt gekozen om 
                  je best te doen tijdens een les? Wat motiveerde je om dit te doen?</li>
                <li>Op welke manieren denk je dat je gedrag in de huidige lessen invloed kan hebben op je toekomstige doelen?</li>
                <li>Hoe voel je je als je weet dat je je best doet om je doelen te bereiken?</li>
            </ul>
        </li>
        <li>Uitdrukkelijk bespreken waarom lesstof belangrijk is, wanneer leerlingen deze kennis 
          nodig hebben in de toekomst. Het duidelijk maken van het toekomstige nut van een 
          schoolopdracht zou de motivatie en zelfregulatie van een leerling kunnen vergroten. Wel 
          is het belangrijk voor coaches om te onthouden dat doelen die ver in de toekomst 
          liggen niet voor elke leerling motiverend werken.
            <ul>
                <li>Kun je bedenken hoe de dingen die we vandaag leren, je in de toekomst kunnen helpen?</li>
                <li>Waar zie je jezelf deze kennis in de toekomst toepassen?</li>
                <li>Op welke manieren denk je dat het begrijpen van deze lesstof je kan helpen in je persoonlijke groei?</li>
            </ul>
        </li>
        <li>
            <ul>Proberen om de interesses van de leerling in te bouwen in het curriculum en in de lesinstructie.
                <li>Wat zijn enkele onderwerpen waarin je echt geïnteresseerd bent buiten school?</li>
                <li>Hoe denk je dat we deze interesses kunnen integreren in ons curriculum of onze lesinstructie?</li>
                <li>Op welke manieren zou het betrekken van je interesses je meer betrokken maken bij de lesstof?</li>
            </ul>
        </li>
    </ol>    
  </div>
  <div class="button-group">
    <button class="button" @click="goBackToP4">vorige</button>
    <button class="button" @click="goToEnd">volgende</button>
  </div>
</template>