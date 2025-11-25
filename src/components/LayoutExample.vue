<script setup>
import { ref } from 'vue'

const showSidebar = ref(true)
</script>

<template>
  <div class="layout-example">
    <h2>Layout Component Exempel</h2>
    
    <button @click="showSidebar = !showSidebar">
      Toggle Sidebar
    </button>

    <!-- Layout med slots -->
    <div class="layout">
      <!-- Sidebar (named slot) -->
      <aside v-if="showSidebar" class="sidebar">
        <slot name="sidebar">
          <p>Standard sidebar innehåll</p>
        </slot>
      </aside>

      <!-- Main content (default slot) -->
      <main class="main-content">
        <slot>
          <p>Standard main innehåll</p>
        </slot>
      </main>

      <!-- Footer (named slot) -->
      <footer class="footer">
        <slot name="footer">
          <p>&copy; 2025 Min App</p>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.layout-example {
  padding: 20px;
}

button {
  margin: 10px 0;
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.layout {
  display: grid;
  grid-template-areas:
    'sidebar main'
    'footer footer';
  grid-template-columns: 200px 1fr;
  gap: 15px;
  margin-top: 15px;
  min-height: 300px;
}

.sidebar {
  grid-area: sidebar;
  background: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
}

.main-content {
  grid-area: main;
  background: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.footer {
  grid-area: footer;
  background: #333;
  color: white;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
}
</style>

