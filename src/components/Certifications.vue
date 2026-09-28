<template>
  <section id="certifications" class="section">
    <span v-reveal class="eyebrow">Credentials</span>
    <h2 v-reveal="{ delay: 100 }" class="section-title"><span class="gradient-text">Certifications</span></h2>

    <div class="certs">
      <div
        v-for="(c, i) in certs"
        :key="c.name"
        v-reveal="{ dir: 'up', delay: i * 90 }"
        class="cert-wrap"
      >
        <div
          class="card spotlight cert"
          :class="{ clickable: c.link }"
          :style="{ '--brand': c.color }"
          :role="c.link ? 'button' : undefined"
          :tabindex="c.link ? 0 : undefined"
          :aria-label="c.link ? `View ${c.issuer} ${c.name} certificate` : undefined"
          @pointermove="tilt"
          @pointerleave="reset"
          @click="open(c)"
          @keydown.enter.prevent="open(c)"
          @keydown.space.prevent="open(c)"
        >
          <div class="top">
            <span class="issuer">{{ c.issuer }}</span>
            <span v-if="c.code" class="code">{{ c.code }}</span>
          </div>
          <h3>{{ c.name }}</h3>
          <div class="bottom">
            <span class="check">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              Certified
            </span>
            <span v-if="c.link" class="view">
              View
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Certificate viewer; teleported so reveal transforms on ancestors can't break position: fixed -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selected" class="overlay" @click="close">
          <div class="dialog" role="dialog" aria-modal="true" :aria-label="`${selected.name} certificate`" :style="{ '--brand': selected.color }" @click.stop>
            <header>
              <div>
                <span class="issuer">{{ selected.issuer }}<template v-if="selected.code"> · {{ selected.code }}</template></span>
                <h3>{{ selected.name }}</h3>
              </div>
              <div class="actions">
                <a class="icon-btn" :href="selected.link" target="_blank" rel="noopener" aria-label="Open in new tab">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
                </a>
                <button ref="closeBtn" class="icon-btn" aria-label="Close" @click="close">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
                </button>
              </div>
            </header>
            <iframe :src="selected.link" :title="`${selected.name} certificate`" class="viewer" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, watch, nextTick, onBeforeUnmount } from 'vue'

const certs = [
  { issuer: 'Microsoft', code: 'AZ-900', name: 'Azure Fundamentals', color: '#0ea5e9', link: '/AZ900.pdf' },
  { issuer: 'Microsoft', code: 'DP-203', name: 'Azure Data Engineer Associate', color: '#3b82f6', link: '/DP203.pdf' },
  { issuer: 'Microsoft', code: 'DP-700', name: 'Fabric Data Engineer Associate', color: '#14b8a6', link: '/DP700.pdf' },
  { issuer: 'Databricks', code: '', name: 'Data Engineer Associate', color: '#ff3621', link: 'https://credentials.databricks.com/dfee4bf3-85cf-406d-9942-2d725d63128f' },
  { issuer: 'AWS', code: 'CLF', name: 'Cloud Practitioner', color: '#f59e0b', link: '/AWS.pdf' },
  { issuer: 'Microsoft', code: 'PL-300', name: 'Power BI Data Analyst Associate', color: '#eab308', link: '/PL300.pdf' },
  { issuer: 'GitLab', code: '', name: 'Certified CI/CD Associate', color: '#fc6d26', link: '/GitLab.pdf' }
]

const selected = ref(null)
const closeBtn = ref(null)
let lastFocus = null

function open(c) {
  if (!c.link) return
  lastFocus = document.activeElement
  selected.value = c
}
function close() {
  selected.value = null
}
function onKey(e) {
  if (e.key === 'Escape') close()
}

watch(selected, async (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
  if (val) {
    window.addEventListener('keydown', onKey)
    await nextTick()
    closeBtn.value?.focus()
  } else {
    window.removeEventListener('keydown', onKey)
    lastFocus?.focus?.()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

// 3D tilt toward the pointer, plus spotlight position
function tilt(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = e.clientX - r.left
  const y = e.clientY - r.top
  el.style.setProperty('--mx', `${x}px`)
  el.style.setProperty('--my', `${y}px`)
  el.style.transform = `perspective(900px) rotateX(${(0.5 - y / r.height) * 10}deg) rotateY(${(x / r.width - 0.5) * 10}deg) translateY(-4px)`
}
function reset(e) {
  e.currentTarget.style.transform = ''
}
</script>

<style scoped>
.certs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.cert {
  height: 100%;
  padding: 26px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-out, border-color 0.4s;
}
.cert.clickable { cursor: pointer; }
.cert:focus-visible { outline: 2px solid var(--brand); outline-offset: 3px; }
.cert::after {
  content: '';
  position: absolute;
  top: -60px;
  right: -60px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: var(--brand);
  filter: blur(50px);
  opacity: 0.25;
  transition: opacity 0.4s;
}
.cert:hover { border-color: color-mix(in srgb, var(--brand) 55%, transparent); }
.cert:hover::after { opacity: 0.5; }

.top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
.issuer {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brand);
}
.code {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
}
h3 { margin: 0 0 22px; font-size: 20px; line-height: 1.3; flex: 1; }
.bottom { display: flex; justify-content: space-between; align-items: center; }
.check {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #34d399;
}
.view {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);
  transition: color 0.3s, gap 0.3s;
}
.cert:hover .view { color: var(--text); gap: 7px; }

/* Modal */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(5, 10, 20, 0.7);
  backdrop-filter: blur(8px);
}
.dialog {
  width: min(900px, 100%);
  height: min(86vh, 900px);
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  background: #0f172a;
  border: 1px solid var(--border);
  border-top: 2px solid var(--brand);
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.8);
  overflow: hidden;
}
.dialog header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 16px 16px 24px;
  border-bottom: 1px solid var(--border);
}
.dialog h3 { margin: 4px 0 0; font-size: 18px; flex: none; }
.actions { display: flex; gap: 8px; flex-shrink: 0; }
.icon-btn {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}
.icon-btn:hover { background: var(--surface-hover); border-color: var(--accent); }
.viewer { flex: 1; width: 100%; border: 0; background: #fff; }

.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-active .dialog, .modal-leave-active .dialog { transition: transform 0.4s var(--ease-out); }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .dialog, .modal-leave-to .dialog { transform: translateY(30px) scale(0.97); }

@media (max-width: 640px) {
  .overlay { padding: 12px; }
  .dialog { height: 82vh; }
  .dialog header { padding: 12px 12px 12px 16px; }
  .dialog h3 { font-size: 16px; }
}
</style>
