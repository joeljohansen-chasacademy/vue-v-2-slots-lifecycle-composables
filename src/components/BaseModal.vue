<script setup>
const emit = defineEmits(['close'])
</script>

<template>
	<div class="modal-backdrop" @click.self="emit('close')">
		<div class="modal-box">
			<button class="close-button" @click="emit('close')" aria-label="Stäng modal">
				×
			</button>
			<header class="modal-header">
				<slot name="header">
					<h3>Standardrubrik</h3>
				</slot>
			</header>
			<section class="modal-body">
				<slot />
			</section>
			<footer class="modal-footer">
				<slot name="footer">
					<button class="modal-btn" @click="emit('close')">Stäng</button>
				</slot>
			</footer>
		</div>
	</div>
</template>

<style scoped>
.modal-backdrop {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	padding: 1rem;
}

.modal-box {
	background: white;
	border-radius: 1rem;
	min-width: 320px;
	max-width: 480px;
	padding: 1.5rem;
	position: relative;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.modal-header {
	margin-bottom: 1rem;
}

.modal-body {
	margin-bottom: 1.5rem;
	line-height: 1.4;
}

.modal-footer {
	display: flex;
	gap: 0.75rem;
	justify-content: flex-end;
	flex-wrap: wrap;
}

.close-button {
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	background: transparent;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
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

