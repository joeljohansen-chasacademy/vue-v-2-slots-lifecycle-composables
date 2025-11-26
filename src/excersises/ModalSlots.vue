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
import BaseModal from '../components/BaseModal.vue'

const showDeleteModal = ref(false)
const showDetailsModal = ref(false)

const openDeleteModal = () => {
	showDeleteModal.value = true
}

const openDetailsModal = () => {
	showDetailsModal.value = true
}

const closeDeleteModal = () => {
	showDeleteModal.value = false
}

const closeDetailsModal = () => {
	showDetailsModal.value = false
}
</script>

<template>
	<div>
		<h1>Modal-komponent övning</h1>

		<div class="button-group">
			<button @click="openDeleteModal" class="primary-btn">Öppna radera-modal</button>
			<button @click="openDetailsModal" class="secondary-btn">Öppna detalj-modal</button>
		</div>

		<!-- Exempel 1: Radera användare -->
		<BaseModal v-if="showDeleteModal" @close="closeDeleteModal">
			<template #header>
				<h3>Radera användare?</h3>
			</template>

			<p>Är du säker på att du vill radera den här användaren? Detta går ej att ångra.</p>

			<template #footer>
				<button class="modal-btn danger" @click="closeDeleteModal">Radera</button>
				<button class="modal-btn ghost" @click="closeDeleteModal">Avbryt</button>
			</template>
		</BaseModal>

		<!-- Exempel 2: Visa detaljer -->
		<BaseModal v-if="showDetailsModal" @close="closeDetailsModal">
			<template #header>
				<h3>Detaljer om beställning</h3>
			</template>

			<ul>
				<li>Ordernummer: #12345</li>
				<li>Kund: Anna Svensson</li>
				<li>Summa: 1 299 kr</li>
			</ul>

			<template #footer>
				<button class="modal-btn primary" @click="closeDetailsModal">OK</button>
			</template>
		</BaseModal>
	</div>
</template>

<style scoped>
.button-group {
	display: flex;
	gap: 1rem;
	margin: 1.5rem 0;
	flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
	padding: 0.75rem 1.5rem;
	border-radius: 0.5rem;
	border: none;
	cursor: pointer;
	font-size: 1rem;
}

.primary-btn {
	background: #42b983;
	color: white;
}

.secondary-btn {
	background: #f0f0f0;
	color: #333;
}

.modal-btn {
	padding: 0.5rem 1rem;
	border-radius: 0.4rem;
	border: none;
	cursor: pointer;
}

.modal-btn.danger {
	background: #e74c3c;
	color: white;
}

.modal-btn.ghost {
	background: transparent;
	color: #333;
	border: 1px solid #ddd;
}

.modal-btn.primary {
	background: #42b983;
	color: white;
}
</style>