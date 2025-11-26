<script setup>
import SlotsExample from "./components/SlotsExample.vue";
import LayoutExample from "./components/LayoutExample.vue";
import LifecycleExample from "./components/LifecycleExample.vue";
import ComposableExample from "./components/ComposableExample.vue";
import ModalSlots from "./excersises/ModalSlots.vue";
import LifeCycleTimer from "./excersises/LifeCycleTimer.vue";
import ComposableUseTodos from "./excersises/ComposableUseTodos.vue";
import { ref } from "vue";

const activeTab = ref("slots");
</script>

<template>
	<div class="demo-all">
		<h1>Vue Koncept Demo</h1>

		<!-- Tabs för att visa olika exempel -->
		<div class="tabs">
			<button
				@click="activeTab = 'slots'"
				:class="{ active: activeTab === 'slots' }"
			>
				Slots
			</button>
			<button
				@click="activeTab = 'layout'"
				:class="{ active: activeTab === 'layout' }"
			>
				Layout
			</button>
			<button
				@click="activeTab = 'lifecycle'"
				:class="{ active: activeTab === 'lifecycle' }"
			>
				Lifecycle
			</button>
			<button
				@click="activeTab = 'composable'"
				:class="{ active: activeTab === 'composable' }"
			>
				Composables
			</button>
			<button
				@click="activeTab = 'exercises'"
				:class="{ active: activeTab === 'exercises' }"
			>
				Övningar
			</button>
		</div>

		<!-- Visa valt exempel -->
		<div class="content">
			<!-- Slots Demo -->
			<div v-if="activeTab === 'slots'">
				<SlotsExample>
					<p><strong>Detta är custom innehåll i basic slot!</strong></p>
				</SlotsExample>

				<hr />

				<!-- Användning med named slots -->
				<h3>Användning med named slots:</h3>
				<SlotsExample>
					<template #header>
						<h2>Min Custom Header</h2>
					</template>

					<p>Custom main content här!</p>

					<template #footer>
						<p>Custom footer innehåll</p>
					</template>

					<!-- Scoped slot användning -->
					<template #item="{ item }">
						<strong>{{ item.name }}</strong> kostar {{ item.price }} kronor
					</template>
				</SlotsExample>
			</div>

			<!-- Layout Demo -->
			<div v-if="activeTab === 'layout'">
				<LayoutExample>
					<template #sidebar>
						<h3>Meny</h3>
						<ul>
							<li>Hem</li>
							<li>Om oss</li>
							<li>Kontakt</li>
						</ul>
					</template>

					<template #footer>
						<p>Custom footer © 2025</p>
					</template>
				</LayoutExample>
			</div>

			<!-- Lifecycle Demo -->
			<div v-if="activeTab === 'lifecycle'">
				<LifecycleExample />
			</div>

			<!-- Composable Demo -->
			<div v-if="activeTab === 'composable'">
				<ComposableExample />
			</div>

			<!-- Studentövningar -->
			<div v-if="activeTab === 'exercises'" class="exercise-stack">
				<section>
					<h2>1. Modal med slots</h2>
					<ModalSlots />
				</section>
				<hr />
				<section>
					<h2>2. Lifecycle-timer</h2>
					<LifeCycleTimer />
				</section>
				<hr />
				<section>
					<h2>3. useTodos composable</h2>
					<ComposableUseTodos />
				</section>
			</div>
		</div>
	</div>
</template>

<style scoped>
.demo-all {
	padding: 20px;
	max-width: 1200px;
	margin: 0 auto;
}

h1 {
	text-align: center;
	color: #42b983;
	margin-bottom: 30px;
}

.tabs {
	display: flex;
	gap: 10px;
	margin-bottom: 30px;
	justify-content: center;
}

.tabs button {
	padding: 12px 24px;
	border: 2px solid #ddd;
	border-radius: 8px;
	cursor: pointer;
	font-size: 16px;
	transition: all 0.3s;
}

.tabs button:hover {
	background: #e0e0e0;
}

.tabs button.active {
	background: #42b983;
	color: white;
	border-color: #42b983;
}

.content {
	background: white;
	border-radius: 12px;
	padding: 20px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

hr {
	margin: 40px 0;
	border: none;
	border-top: 2px dashed #ddd;
}

.exercise-stack section {
	margin-bottom: 2rem;
}
</style>
