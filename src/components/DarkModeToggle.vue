<template>
  <button class="toggle" @click="toggle">
    {{ theme === 'dark' ? '☀️' : '🌙' }}
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('light')

onMounted(() => {
  theme.value = localStorage.getItem('theme') || 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
})

function toggle() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
  
}
</script>

<style scoped>
.toggle {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
