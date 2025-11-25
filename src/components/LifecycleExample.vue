<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

const count = ref(0)
const message = ref('Komponenten är laddad!')
let interval = null

// onMounted - Körs när komponenten är monterad i DOM
onMounted(() => {
  console.log('onMounted: Komponenten är nu i DOM')
  
  // Starta en timer
  interval = setInterval(() => {
    count.value++
  }, 1000)
})

// onUnmounted - Körs när komponenten tas bort från DOM
onUnmounted(() => {
  console.log('onUnmounted: Städar upp innan komponenten försvinner')
  
  // Städa upp timern
  if (interval) {
    clearInterval(interval)
  }
})

// onUpdated - Körs efter varje uppdatering av DOM
onUpdated(() => {
  console.log('onUpdated: DOM har uppdaterats')
})

function updateMessage() {
  message.value = `Uppdaterad ${new Date().toLocaleTimeString()}`
}
</script>

<template>
  <div class="lifecycle-example">
    <h2>Lifecycle Hooks Exempel</h2>
    
    <div class="info">
      <p><strong>Kolla konsolen för lifecycle-meddelanden!</strong></p>
    </div>

    <div class="counter">
      <h3>Auto-räknare (startar i onMounted):</h3>
      <p class="count">{{ count }}</p>
      <p class="hint">Räknaren startas i onMounted och stoppas i onUnmounted</p>
    </div>

    <div class="updater">
      <h3>Testa onUpdated:</h3>
      <p>{{ message }}</p>
      <button @click="updateMessage">
        Uppdatera meddelande
      </button>
      <p class="hint">Tryck på knappen och kolla konsolen för onUpdated</p>
    </div>

    <div class="hooks-info">
      <h4>Lifecycle hooks förklaring:</h4>
      <ul>
        <li><strong>onMounted:</strong> Körs när komponenten laddats i DOM (bra för API-anrop, timers)</li>
        <li><strong>onUpdated:</strong> Körs efter varje DOM-uppdatering</li>
        <li><strong>onUnmounted:</strong> Körs innan komponenten tas bort (bra för cleanup)</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.lifecycle-example {
  padding: 20px;
  max-width: 600px;
}

.info {
  background: #fffacd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 2px solid #ffd700;
}

.counter, .updater {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  border: 1px solid #ddd;
}

.count {
  font-size: 48px;
  font-weight: bold;
  color: #42b983;
  margin: 10px 0;
}

button {
  padding: 10px 20px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #35a372;
}

.hint {
  font-size: 14px;
  color: #666;
  font-style: italic;
  margin-top: 10px;
}

.hooks-info {
  background: #e8f5e9;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

ul {
  margin: 10px 0;
  padding-left: 20px;
}

li {
  margin: 8px 0;
  line-height: 1.5;
}
</style>

