<!--
Övning 1: Modal-komponent med Slots

Skapa en återanvändbar Modal-komponent som kan visa olika innehåll.

Uppgifter:
- Skapa en Modal-komponent med named slots för header, body och footer
- Button för att öppna/stänga modal (använd v-if för att visa/dölja)
- Använd modal på minst två olika sätt (t.ex. "Radera användare?" och "Visa detaljer")
- Fallback content för header om inget skickas in
- Stäng-knapp (X) i modalen som emittar close-event

Vad ni kommer behöva använda:
<slot name="header">, <slot>, <slot name="footer">
ref() för att hålla modal-state (öppen/stängd)
defineEmits() för att skicka close-event
v-if för att visa/dölja modal
@click för att hantera öppna/stänga
-->
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

// TODO: Lägg till funktioner här
// Tips: Du behöver funktioner för att:
// - Öppna modal
// - Stänga modal

</script>

<template>
  <div>
    <h1>Modal-komponent övning</h1>
    
    <!-- TODO: Button för att öppna modal -->
    
    <!-- TODO: Modal-komponent -->
    <!-- Tips: Skapa en modal med:
         - En backdrop (mörk overlay)
         - En modal-box i mitten
         - Named slots för header, body och footer
         - Stäng-knapp (X)
    -->
    
    <!-- TODO: Använd modal på två olika sätt -->
    <!-- Exempel 1: "Radera användare?" med Ja/Nej knappar -->
    <!-- Exempel 2: "Visa detaljer" med info och OK-knapp -->
    
  </div>
</template>

<style scoped>
/* TODO: Lägg till styling för modal */
/* Tips: Du behöver style för:
   - .modal-backdrop (täcker hela skärmen, mörk bakgrund)
   - .modal-box (vit box i mitten)
   - .modal-header, .modal-body, .modal-footer
   - .close-button (X-knapp i hörnet)
*/
</style>