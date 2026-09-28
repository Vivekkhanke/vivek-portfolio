<template>
  <section id="about" class="section about">
    <span v-reveal class="eyebrow">About me</span>

    <!-- Words light up one by one as the paragraph scrolls through the viewport -->
    <p ref="textEl" class="scrub">
      <span class="sr-only">{{ summary }}</span>
      <!-- {{ ' ' }} keeps a real space between words; Vue strips whitespace-only text between elements -->
      <template v-for="(w, i) in words" :key="i">
        <span
          :class="{ lit: i < litCount, hl: highlights.has(w.replace(/[,.]/g, '')) }"
          aria-hidden="true"
        >{{ w }}</span>{{ ' ' }}
      </template>
    </p>

    <div class="pillars">
      <div v-for="(p, i) in pillars" :key="p.title" v-reveal="{ delay: i * 120 }" class="pillar card">
        <div class="p-icon">{{ p.icon }}</div>
        <h3>{{ p.title }}</h3>
        <p>{{ p.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const summary =
  'Data Engineer with 4.6 years of experience designing, developing and optimizing scalable data pipelines on Microsoft Azure. ' +
  'Strong expertise in ETL development, Databricks, Delta Lake, Oracle SQL, PL/SQL and Unix scripting. ' +
  'Passionate about building secure, high-performance data solutions.'

const words = summary.split(' ')
const highlights = new Set(['Azure', 'Databricks', 'Delta', 'Lake', 'ETL', 'secure', 'high-performance', 'scalable'])

const pillars = [
  { icon: '🏗️', title: 'Pipeline Architecture', text: 'Medallion (Bronze–Silver–Gold) lakehouses with full & incremental load patterns.' },
  { icon: '⚙️', title: 'Automation & IaC', text: 'Terraform-provisioned Azure infra and reusable PySpark ETL frameworks.' },
  { icon: '🔐', title: 'Secure by Default', text: 'Key Vault-backed secrets, auditing and robust exception handling.' }
]

const textEl = ref(null)
const litCount = ref(0)
let ticking = false

function update() {
  ticking = false
  const el = textEl.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  // 0 when the paragraph top hits 85% of the viewport, 1 when its bottom reaches 45%
  const start = vh * 0.85
  const end = vh * 0.45
  const progress = (start - rect.top) / (start - end + rect.height)
  litCount.value = Math.round(Math.min(Math.max(progress, 0), 1) * words.length)
}

function onScroll() {
  if (!ticking) { ticking = true; requestAnimationFrame(update) }
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    litCount.value = words.length
    return
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  update()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.scrub {
  font-family: var(--font-display);
  font-size: clamp(24px, 3.6vw, 42px);
  line-height: 1.35;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin: 0 0 72px;
  max-width: 1000px;
}
.scrub span {
  color: rgba(255, 255, 255, 0.22);
  transition: color 0.35s ease;
}
.scrub span.lit { color: var(--text); }
.scrub span.lit.hl {
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.pillar { padding: 28px; }
.pillar:hover { transform: translateY(-6px); border-color: rgba(59, 130, 246, 0.4); }
.p-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  font-size: 22px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(56, 189, 248, 0.15));
  margin-bottom: 18px;
}
.pillar h3 { margin: 0 0 8px; font-size: 19px; }
.pillar p { margin: 0; color: var(--muted); line-height: 1.6; font-size: 15px; }

@media (max-width: 860px) {
  .pillars { grid-template-columns: 1fr; }
}
</style>
