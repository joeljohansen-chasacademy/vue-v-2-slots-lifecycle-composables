<script setup>
import { useCounter } from "../composables/useCounter";

// Använd composable - hämta alla funktioner och state
const { count, increment, decrement, reset } = useCounter(0);

// Vi kan även skapa flera instanser med olika startvärden
const {
	count: count2,
	increment: increment2,
	decrement: decrement2,
	reset: reset2,
} = useCounter(100);
</script>

<template>
	<div class="composable-example">
		<h2>Composable Exempel</h2>

		<p class="info">
			Composables låter oss återanvända logik mellan komponenter!
		</p>

		<!-- Första räknaren -->
		<div class="counter-card">
			<h3>Räknare 1</h3>
			<p class="count">{{ count }}</p>
			<div class="buttons">
				<button @click="decrement">-</button>
				<button @click="increment">+</button>
				<button @click="reset">Reset</button>
			</div>
		</div>

		<!-- Andra räknaren (visar att vi kan återanvända composable) -->
		<div class="counter-card">
			<h3>Räknare 2 (startar på 100)</h3>
			<p class="count">{{ count2 }}</p>
			<div class="buttons">
				<button @click="increment2">+</button>
				<button @click="decrement2">-</button>
				<button @click="reset2">Reset</button>
			</div>
		</div>

		<div class="explanation">
			<h4>Varför composables?</h4>
			<ul>
				<li>Återanvändbar logik</li>
				<li>Enklare att testa</li>
				<li>Håller komponenter rena</li>
				<li>Kan användas i flera komponenter</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.composable-example {
	padding: 20px;
	max-width: 600px;
}

.info {
	background: #e3f2fd;
	padding: 15px;
	border-radius: 8px;
	margin-bottom: 20px;
	border-left: 4px solid #2196f3;
}

.counter-card {
	background: #f9f9f9;
	padding: 20px;
	border-radius: 8px;
	margin: 15px 0;
	border: 2px solid #ddd;
}

.count {
	font-size: 48px;
	font-weight: bold;
	color: #42b983;
	margin: 15px 0;
	text-align: center;
}

.buttons {
	display: flex;
	gap: 10px;
	justify-content: center;
}

button {
	padding: 10px 20px;
	font-size: 18px;
	background: #42b983;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	min-width: 60px;
}

button:hover {
	background: #35a372;
}

button:active {
	transform: scale(0.95);
}

.explanation {
	background: #f1f8f4;
	padding: 15px;
	border-radius: 8px;
	margin-top: 20px;
}

ul {
	margin: 10px 0;
	padding-left: 20px;
}

li {
	margin: 5px 0;
	line-height: 1.6;
}
</style>
