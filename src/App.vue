<template>
  <div class="progress" :style="{ transform: `scaleX(${progress})` }" />

  <div class="bg" aria-hidden="true">
    <div class="blob b1" :style="{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }" />
    <div class="blob b2" :style="{ transform: `translate3d(0, ${scrollY * -0.1}px, 0)` }" />
    <div class="blob b3" :style="{ transform: `translate3d(0, ${scrollY * 0.05}px, 0)` }" />
    <div class="grid-overlay" />
  </div>

  <div class="cursor-glow" :style="{ transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)` }" aria-hidden="true" />

  <Navbar />

  <main>
    <Hero />
    <ProfileSummary />
    <Skills />
    <Experience />
    <Certifications />
  </main>
  <Footer />

  <button class="to-top" :class="{ show: scrollY > 600 }" aria-label="Back to top" @click="toTop">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
  </button>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import ProfileSummary from './components/ProfileSummary.vue'
import Skills from './components/Skills.vue'
import Certifications from './components/Certifications.vue'
import Experience from './components/Experience.vue'
import Footer from './components/Footer.vue'

const progress = ref(0)
const scrollY = ref(0)
const mouse = reactive({ x: -500, y: -500 })
let ticking = false

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    scrollY.value = window.scrollY
    progress.value = max > 0 ? window.scrollY / max : 0
    ticking = false
  })
}

function onMouse(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('pointermove', onMouse, { passive: true })
  onScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('pointermove', onMouse)
})
</script>

<style scoped>
.progress {
  position: fixed;
  inset: 0 0 auto 0;
  height: 3px;
  z-index: 200;
  transform-origin: 0 50%;
  background: var(--gradient);
  box-shadow: 0 0 12px var(--accent);
}

.bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.45;
  will-change: transform;
}
.b1 { width: 520px; height: 520px; background: #1d4ed8; top: -160px; left: -120px; opacity: 0.3; }
.b2 { width: 460px; height: 460px; background: #0369a1; top: 30%; right: -160px; opacity: 0.22; }
.b3 { width: 400px; height: 400px; background: #1e3a8a; bottom: -180px; left: 30%; opacity: 0.25; }

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at center, #000 20%, transparent 75%);
}

.cursor-glow {
  position: fixed;
  top: -200px;
  left: -200px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.14), transparent 65%);
  pointer-events: none;
  z-index: 0;
  transition: transform 0.12s ease-out;
}
@media (hover: none) {
  .cursor-glow { display: none; }
}

main { position: relative; z-index: 1; }

.to-top {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 90;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--glass);
  backdrop-filter: blur(12px);
  color: var(--text);
  display: grid;
  place-items: center;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.3s, border-color 0.3s;
}
.to-top.show { opacity: 1; transform: none; pointer-events: auto; }
.to-top:hover { border-color: var(--accent); box-shadow: 0 0 24px rgba(59, 130, 246, 0.4); }
</style>
