import { ref, computed, watch, onMounted } from 'vue'

const STORAGE_KEY = 'exercise-todos'

export function useTodos() {
	const todos = ref([])

	const addTodo = (text) => {
		const cleanText = text?.trim()
		if (!cleanText) return

		todos.value.push({
			id: Date.now(),
			text: cleanText,
			completed: false,
		})
	}

	const removeTodo = (id) => {
		todos.value = todos.value.filter((todo) => todo.id !== id)
	}

	const toggleTodo = (id) => {
		todos.value = todos.value.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo
		)
	}

	const completedCount = computed(() =>
		todos.value.filter((todo) => todo.completed).length
	)

	// Ladda upp sparade todos när composablen används första gången
	onMounted(() => {
		const saved = localStorage.getItem(STORAGE_KEY)
		if (saved) {
			try {
				todos.value = JSON.parse(saved)
			} catch (error) {
				console.warn('Kunde inte läsa sparade todos', error)
			}
		}
	})

	// Spara varje gång listan ändras
	watch(
		todos,
		(newTodos) => {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))
		},
		{ deep: true }
	)

	return {
		todos,
		addTodo,
		removeTodo,
		toggleTodo,
		completedCount,
	}
}

