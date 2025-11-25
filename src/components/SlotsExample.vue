<script setup>
import { ref } from 'vue'

// Data för scoped slot exempel
const items = ref([
  { id: 1, name: 'Äpple', price: 10 },
  { id: 2, name: 'Banan', price: 15 },
  { id: 3, name: 'Apelsin', price: 20 }
])
</script>

<template>
  <div class="slots-example">
    <h2>Slots Exempel</h2>

    <!-- 1. Basic Slot (default) -->
    <section>
      <h3>1. Basic Slot</h3>
      <div class="card">
        <slot>
          <!-- Fallback content om inget skickas -->
          <p>Inget innehåll tillagt (fallback)</p>
        </slot>
      </div>
    </section>

    <!-- 2. Named Slots -->
    <section>
      <h3>2. Named Slots</h3>
      <div class="card">
        <header>
          <slot name="header">Default header</slot>
        </header>
        <main>
          <slot>Default content</slot>
        </main>
        <footer>
          <slot name="footer">Default footer</slot>
        </footer>
      </div>
    </section>

    <!-- 3. Scoped Slots -->
    <section>
      <h3>3. Scoped Slot</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <!-- Skicka data till parent via slot props -->
          <slot name="item" :item="item">
            {{ item.name }} - {{ item.price }} kr
          </slot>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.slots-example {
  padding: 20px;
}

section {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.card {
  padding: 15px;
  border: 2px dashed #42b983;
  border-radius: 8px;
}

header, footer {
  padding: 10px;
  background: #f0f0f0;
  border-radius: 4px;
  margin: 5px 0;
}

main {
  padding: 15px;
  min-height: 50px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px;
  margin: 5px 0;
  background: #f9f9f9;
  border-radius: 4px;
}
</style>

