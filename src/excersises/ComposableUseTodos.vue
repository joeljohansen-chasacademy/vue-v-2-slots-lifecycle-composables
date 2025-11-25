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
// TODO: Importera useTodos från composables/useTodos.js

// TODO: Använd composable. 
// Tips descructurera funktionerna från composable useTodos()

import { ref } from 'vue'

const newTodoText = ref('')

// TODO: Skapa funktion för att hantera submit
// Tips: Anropa addTodo(newTodoText.value) och rensa sedan input

</script>

<template>
  <div>
    <h1>Todo-lista med Composable</h1>
    
    <!-- TODO: Form för att lägga till ny todo -->
    <form>
      <input 
        type="text" 
        placeholder="Vad behöver göras?"
      >
      <button type="submit">Lägg till</button>
    </form>
    
    <!-- TODO: Visa antal klara todos -->
    <p>
      <!-- Visa: "X av Y todos klara" -->
    </p>
    
    <!-- TODO: Lista med todos -->
    <!-- Tips: Använd v-for för att loopa todos -->
    <ul>
      <!-- 
      För varje todo visa:
      - Checkbox för att markera som klar (toggleTodo)
      - Text (med genomstrykning om klar)
      - Radera-knapp (removeTodo)
      -->
    </ul>
    
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
}

.todo-completed {
  text-decoration: line-through;
  opacity: 0.6;
}

/* TODO: Lägg till fler styles om du vill */
</style>