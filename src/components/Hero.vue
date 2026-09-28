<template>
  <section id="top" class="hero">
    <div class="hero-inner">
      <div class="copy">
        <span class="badge">
          <span class="dot" /> Open to new opportunities
        </span>

        <h1 class="title">
          <span class="line"><span>Hi, I'm</span></span>
          <span class="line"><span class="gradient-text">Vivek Khanke</span></span>
        </h1>

        <p class="role">
          Sr. Data Engineer &mdash;
          <span class="typed">{{ typed }}</span><span class="caret">|</span>
        </p>

        <p class="lead">
          I design scalable, high-performance ETL pipelines on Azure Cloud with Databricks and Oracle SQL,
          backed by deep expertise in IBM DataStage, Unix shell scripting and Python.
        </p>

        <div class="ctas">
          <a class="btn btn-primary" href="#experience" @click.prevent="go('experience')">
            View my work
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
          <a class="btn btn-ghost" href="/Vivek_Khanke_CV.pdf" download>Download CV</a>
        </div>

        <div class="stats">
          <div v-for="s in stats" :key="s.label" class="stat">
            <strong>{{ s.display }}{{ s.suffix }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>

      <div class="visual" :style="{ transform: `translate3d(0, ${parallax}px, 0)` }">
        <div class="ring" />
        <div class="photo">
          <img src="../assets/profile.jpg" alt="Vivek Khanke" />
        </div>
        <div class="chip c1">⚡ Databricks</div>
        <div class="chip c2">☁️ Azure</div>
        <div class="chip c3">🧩 PySpark</div>
      </div>
    </div>

    <a class="scroll-hint" href="#about" aria-label="Scroll to About" @click.prevent="go('about')">
      <span class="mouse"><span class="wheel" /></span>
      <span>Scroll</span>
    </a>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'

const roles = ['Pipeline Builder', 'Azure Specialist', 'ETL Architect', 'Databricks Developer']
const typed = ref('')
const parallax = ref(0)

const stats = reactive([
  { value: 4.6, decimals: 1, suffix: '', label: 'Years experience', display: 0 },
  { value: 7, suffix: '', label: 'Certifications', display: 0 },
  { value: 2, suffix: '', label: 'Companies', display: 0 }
])

let typeTimer
let rafId

function typeLoop(i = 0, char = 0, deleting = false) {
  const word = roles[i % roles.length]
  typed.value = word.slice(0, char)
  let delay = deleting ? 45 : 90
  if (!deleting && char === word.length) { deleting = true; delay = 1600 }
  else if (deleting && char === 0) { deleting = false; i++; delay = 350 }
  typeTimer = setTimeout(() => typeLoop(i, deleting ? char - 1 : char + 1, deleting), delay)
}

function countUp() {
  const start = performance.now()
  const duration = 1600
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    stats.forEach((s) => { s.display = (s.value * eased).toFixed(s.decimals || 0) })
    if (t < 1) rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
}

function onScroll() {
  parallax.value = Math.min(window.scrollY, 800) * 0.25
}

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  typeLoop()
  setTimeout(countUp, 700)
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  clearTimeout(typeTimer)
  cancelAnimationFrame(rafId)
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 24px 80px;
}
.hero-inner {
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  align-items: center;
  gap: 60px;
}

/* Staggered entrance */
.copy > * { animation: rise 1s var(--ease-out) both; }
.copy > :nth-child(1) { animation-delay: 0.2s; }
.copy > :nth-child(3) { animation-delay: 0.7s; }
.copy > :nth-child(4) { animation-delay: 0.85s; }
.copy > :nth-child(5) { animation-delay: 1s; }
.copy > :nth-child(6) { animation-delay: 1.15s; }
@keyframes rise { from { opacity: 0; transform: translateY(30px); } }

.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 13px;
  color: var(--muted);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7);
  animation: pulse 2s infinite;
}
@keyframes pulse { 70% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); } 100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); } }

.title {
  font-size: clamp(44px, 7.5vw, 88px);
  line-height: 1.02;
  margin: 24px 0 20px;
  animation: none !important;
}
.line { display: block; overflow: hidden; padding-bottom: 0.08em; }
.line > span { display: inline-block; animation: slideUp 1.1s var(--ease-out) both; }
.line:nth-child(1) > span { animation-delay: 0.3s; }
.line:nth-child(2) > span { animation-delay: 0.45s; }
@keyframes slideUp { from { transform: translateY(110%); } }

.role {
  font-family: var(--font-display);
  font-size: clamp(18px, 2.4vw, 24px);
  color: var(--muted);
  margin: 0 0 20px;
}
.typed { color: var(--text); }
.caret { color: var(--accent-2); animation: blink 1s steps(1) infinite; margin-left: 2px; }
@keyframes blink { 50% { opacity: 0; } }

.lead {
  max-width: 560px;
  font-size: 17px;
  line-height: 1.75;
  color: var(--muted);
  margin: 0 0 34px;
}

.ctas { display: flex; flex-wrap: wrap; gap: 14px; }

.stats { display: flex; gap: 40px; margin-top: 48px; }
.stat strong {
  display: block;
  font-family: var(--font-display);
  font-size: 38px;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stat span { font-size: 13px; color: var(--muted); }

/* Visual */
.visual {
  position: relative;
  aspect-ratio: 1;
  max-width: 420px;
  width: 100%;
  justify-self: center;
  animation: pop 1.2s var(--ease-out) 0.4s both;
}
@keyframes pop { from { opacity: 0; transform: scale(0.8); } }

.ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #1d4ed8, #38bdf8, #1e3a8a, #1d4ed8);
  animation: spin 8s linear infinite;
  filter: blur(2px);
}
.ring::after {
  content: '';
  position: absolute;
  inset: -30px;
  border-radius: 50%;
  background: inherit;
  filter: blur(50px);
  opacity: 0.45;
}
@keyframes spin { to { transform: rotate(360deg); } }

.photo {
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--bg);
  border: 6px solid var(--bg);
}
.photo img { width: 100%; height: 100%; object-fit: cover; display: block; }

.chip {
  position: absolute;
  padding: 10px 16px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  background: var(--glass);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
  animation: float 5s ease-in-out infinite;
  white-space: nowrap;
}
.c1 { top: 8%; left: -12%; }
.c2 { top: 45%; right: -14%; animation-delay: -1.6s; }
.c3 { bottom: 4%; left: 2%; animation-delay: -3.2s; }
@keyframes float { 50% { transform: translateY(-14px); } }

.scroll-hint {
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  animation: rise 1s var(--ease-out) 1.6s both;
}
.mouse {
  width: 24px;
  height: 38px;
  border: 2px solid var(--muted);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}
.wheel { width: 3px; height: 8px; border-radius: 2px; background: var(--text); animation: wheel 1.8s ease-in-out infinite; }
@keyframes wheel { 0% { opacity: 0; transform: translateY(-3px); } 40% { opacity: 1; } 100% { opacity: 0; transform: translateY(10px); } }

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; text-align: center; gap: 56px; }
  .visual { order: -1; max-width: 260px; }
  .lead { margin-left: auto; margin-right: auto; }
  .ctas, .stats { justify-content: center; }
  .chip { font-size: 12px; padding: 8px 12px; }
  .c1 { left: -18%; }
  .c2 { right: -20%; }
  .scroll-hint { display: none; }
}
@media (max-width: 480px) {
  .stats { gap: 24px; }
  .stat strong { font-size: 30px; }
}
</style>
