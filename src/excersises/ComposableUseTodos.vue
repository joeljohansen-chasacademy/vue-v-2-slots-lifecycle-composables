<!--
Övning 4: useTodos Composable

Skapa en useTodos composable som hanterar all todo-logik och spara till localStorage.

Uppgifter:
- Skapa composables/useTodos.js med:
  - todos array (ref)
  - addTodo(text) funktion
  - removeTodo(id) funktion
  - toggleTodo(id) funktion
  - completedCount (computed)
- Spara todos till localStorage vid varje ändring (watch)
- Ladda todos från localStorage när composable initieras (onMounted)
- Todo-komponent som använder composable
- Visa antal klara todos

Vad ni kommer behöva använda:
Composable-struktur (export function useTodos())
ref(), computed(), watch()
onMounted() för att ladda från localStorage
localStorage.setItem() och localStorage.getItem()
JSON.stringify() / JSON.parse()
-->
<script setup>
import { ref } from 'vue'
import { useTodos } from '../composables/useTodos'

const { todos, addTodo, removeTodo, toggleTodo, completedCount } = useTodos()

const newTodoText = ref('')

const handleSubmit = () => {
	// Enkel guard så vi inte försöker lägga till tomma todos
	if (!newTodoText.value.trim()) return
	addTodo(newTodoText.value)
	newTodoText.value = ''
}
</script>

<template>
	<div>
		<h1>Todo-lista med Composable</h1>

		<form class="todo-form" @submit.prevent="handleSubmit">
			<input
				v-model="newTodoText"
				type="text"
				placeholder="Vad behöver göras?"
			/>
			<button type="submit">Lägg till</button>
		</form>

		<p class="todo-count">
			{{ completedCount }} av {{ todos.length }} todos klara
		</p>

		<ul class="todo-list">
			<li v-for="todo in todos" :key="todo.id" class="todo-item">
				<label>
					<input
						type="checkbox"
						:checked="todo.completed"
						@change="toggleTodo(todo.id)"
					/>
					<span :class="{ 'todo-completed': todo.completed }">
						{{ todo.text }}
					</span>
				</label>
				<button class="remove-btn" @click="removeTodo(todo.id)">Ta bort</button>
			</li>
		</ul>

		<p v-if="!todos.length" class="empty-state">
			Inga todos ännu. Lägg till något ovan!
		</p>
	</div>
</template>

<style scoped>
.todo-form {
	display: flex;
	gap: 0.5rem;
	margin-bottom: 1rem;
}

.todo-form input {
	flex: 1;
	padding: 0.5rem 0.75rem;
	border: 1px solid #ccc;
	border-radius: 0.4rem;
}

.todo-count {
	font-weight: bold;
	margin-bottom: 0.5rem;
}

.todo-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.todo-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	padding: 0.5rem;
	border-bottom: 1px solid #eee;
}

.todo-item label {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	flex: 1;
}

.todo-completed {
	text-decoration: line-through;
	opacity: 0.6;
}

.remove-btn {
	background: transparent;
	border: 1px solid #e74c3c;
	color: #e74c3c;
	padding: 0.3rem 0.75rem;
	border-radius: 0.4rem;
	cursor: pointer;
}

.empty-state {
	margin-top: 1rem;
	color: #777;
	font-style: italic;
}
</style>