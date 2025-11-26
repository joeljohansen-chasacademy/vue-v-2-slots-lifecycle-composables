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
import { ref, onMounted, onUnmounted, watch } from 'vue'

const initialTime = ref(10)
const timeLeft = ref(10)
const isRunning = ref(false)
const isPaused = ref(false)
const showTimer = ref(true)

let intervalId = null

const clearTimer = () => {
	if (intervalId) {
		clearInterval(intervalId)
		intervalId = null
	}
}

const tick = () => {
	if (timeLeft.value > 0) {
		timeLeft.value -= 1
	} else {
		stopTimer()
	}
}

const startTimer = () => {
	if (isRunning.value && !isPaused.value) return
	if (timeLeft.value <= 0) {
		timeLeft.value = initialTime.value
	}
	isRunning.value = true
	isPaused.value = false
	clearTimer()
	intervalId = setInterval(tick, 1000)
}

const pauseTimer = () => {
	if (!isRunning.value) return
	isPaused.value = true
	clearTimer()
}

const stopTimer = () => {
	isRunning.value = false
	isPaused.value = false
	clearTimer()
}

const resetTimer = () => {
	stopTimer()
	timeLeft.value = Number(initialTime.value) || 0
}

watch(
	initialTime,
	(newValue) => {
		// Om användaren ändrar starttid och timern är stoppad vill vi spegla värdet direkt
		if (!isRunning.value) {
			timeLeft.value = Number(newValue) || 0
		}
	},
	{ immediate: true }
)

onMounted(() => {
	// Starta timern direkt för att visa lifecycle-hook i action
	startTimer()
})

onUnmounted(() => {
	// Viktigt att städa upp när komponenten tas bort
	clearTimer()
})
</script>

<template>
	<div>
		<h1>Countdown Timer</h1>

		<button @click="showTimer = !showTimer">
			Visa/Dölj Timer (Testa cleanup!)
		</button>

		<div v-if="showTimer" class="timer-card">
			<div class="input-row">
				<label for="start-time">Starttid (sekunder):</label>
				<input
					id="start-time"
					type="number"
					min="0"
					v-model.number="initialTime"
					placeholder="10"
				/>
				<button @click="resetTimer">Uppdatera</button>
			</div>

			<div class="timer-display">
				<h2>{{ timeLeft }}s</h2>
				<p v-if="timeLeft === 0" class="timer-finished">Tiden är slut!</p>
			</div>

			<div class="actions">
				<button @click="startTimer" :disabled="isRunning && !isPaused">Starta</button>
				<button @click="pauseTimer" :disabled="!isRunning">Pausa</button>
				<button @click="resetTimer">Reset</button>
				<button @click="stopTimer" :disabled="!isRunning">Stoppa</button>
			</div>

			<p class="status-text">
				Status:
				<span v-if="isRunning && !isPaused">Kör…</span>
				<span v-else-if="isPaused">Pausad</span>
				<span v-else>Stoppad</span>
			</p>
		</div>
	</div>
</template>

<style scoped>
.timer-card {
	margin-top: 1.5rem;
	padding: 1.5rem;
	border: 1px solid #e0e0e0;
	border-radius: 0.75rem;
	background: #fafafa;
	max-width: 480px;
}

.input-row {
	display: flex;
	gap: 0.5rem;
	align-items: center;
	flex-wrap: wrap;
}

.timer-display {
	font-size: 3rem;
	font-weight: bold;
	margin: 2rem 0;
	color: #2c3e50;
	text-align: center;
}

.timer-finished {
	color: #e74c3c;
	font-size: 1.5rem;
	font-weight: bold;
}

.actions {
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
}

.actions button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.status-text {
	margin-top: 1rem;
	font-style: italic;
}
</style>