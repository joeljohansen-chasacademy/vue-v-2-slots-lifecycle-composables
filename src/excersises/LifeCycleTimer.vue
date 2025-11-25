<!--
Övning 3: Timer med Lifecycle Hooks

Skapa en countdown-timer som tickar varje sekund och rensar upp ordentligt.

Uppgifter:
- Input för att sätta starttid (sekunder)
- Start/Pause/Reset knappar
- Visa återstående tid
- Använd onMounted() för att starta timer automatiskt
- Använd onUnmounted() för att rensa interval (viktigt!)
- Visa meddelande när timer når 0
- Button för att visa/dölja timer-komponenten (testa cleanup)

Vad ni kommer behöva använda:
onMounted(), onUnmounted()
setInterval() och clearInterval()
ref() för tid, isRunning, isPaused
Methods för start, pause, reset
Conditional rendering (v-if)
-->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const initialTime = ref(10)
const timeLeft = ref(10)
const isRunning = ref(false)
const isPaused = ref(false)
const showTimer = ref(true)

let intervalId = null

// TODO: Lägg till funktioner här
// Tips: Du behöver funktioner för att:
// - Starta timern (setInterval som minskar timeLeft varje sekund)
// - Pausa timern
// - Resetta timern
// - Stoppa timern helt (clearInterval)

// TODO: Använd onMounted här
// Tips: Du kan till exempel logga att komponenten är monterad
// eller starta timern automatiskt

// TODO: Använd onUnmounted här
// Tips: VIKTIGT! Rensa interval här för att undvika memory leaks
// Använd clearInterval(intervalId)

</script>

<template>
  <div>
    <h1>Countdown Timer</h1>
    
    <button @click="showTimer = !showTimer">
      Visa/Dölj Timer (Testa cleanup!)
    </button>
    
    <!-- TODO: Timer-komponent som kan döljas -->
    <!-- Tips: Använd v-if="showTimer" -->
    <div v-if="showTimer">
      
      <!-- TODO: Input för att sätta initial tid -->
      <div>
        <label>Starttid (sekunder):</label>
        <input type="number" placeholder="10">
      </div>
      
      <!-- TODO: Visa återstående tid -->
      <div>
        <h2><!-- Visa timeLeft här --></h2>
      </div>
      
      <!-- TODO: Start/Pause/Reset knappar -->
      
      <!-- TODO: Visa meddelande när timer når 0 -->
      <!-- Tips: Använd v-if="timeLeft === 0" -->
      
    </div>
  </div>
</template>

<style scoped>
.timer-display {
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0;
  color: #2c3e50;
}

.timer-finished {
  color: #e74c3c;
  font-size: 1.5rem;
  font-weight: bold;
}

/* TODO: Lägg till fler styles om du vill */
</style>