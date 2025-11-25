import { ref } from 'vue'

// En enkel composable för att hantera en räknare
export function useCounter(initialValue = 0) {
  // State
  const count = ref(initialValue)

  // Methods
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = initialValue
  }

  // Returnera allt som komponenten behöver
  return {
    count,
    increment,
    decrement,
    reset
  }
}

