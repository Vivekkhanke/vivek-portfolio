import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// v-reveal: fades/slides an element in the first time it scrolls into view.
// Usage: v-reveal, v-reveal="'left'", v-reveal="{ dir: 'zoom', delay: 120 }"
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
)

const reveal = {
  mounted(el, binding) {
    const opts = typeof binding.value === 'string' ? { dir: binding.value } : binding.value || {}
    el.classList.add('reveal', `reveal-${opts.dir || 'up'}`)
    if (opts.delay) el.style.setProperty('--reveal-delay', `${opts.delay}ms`)
    if (prefersReducedMotion) el.classList.add('is-visible')
    else observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  }
}

createApp(App).directive('reveal', reveal).mount('#app')
