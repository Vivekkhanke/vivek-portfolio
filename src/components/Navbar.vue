<template>
  <header class="nav-wrap" :class="{ scrolled }">
    <nav class="navbar">
      <a class="logo" href="#top" aria-label="Vivek Khanke — back to top" @click.prevent="scrollTo('top')">
        <span class="wordmark">
          <span class="name">Vivek Khanke</span>
          <span class="tagline">Data Engineer</span>
        </span>
      </a>

      <div class="links" :class="{ open }">
        <a
          v-for="l in links"
          :key="l.id"
          :class="{ active: active === l.id }"
          :href="`#${l.id}`"
          @click.prevent="scrollTo(l.id)"
        >{{ l.label }}</a>
        <a class="cv mobile-only" href="/Vivek_Khanke_CV.pdf" download>Download CV</a>
      </div>

      <div class="right">
        <a class="icon" href="https://www.linkedin.com/in/vivek-khanke/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
        </a>
        <a class="icon" href="https://github.com/Vivekkhanke" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"/></svg>
        </a>
        <a class="icon" href="mailto:vivekkhanke123@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
        </a>
        <a class="cv desktop-only" href="/Vivek_Khanke_CV.pdf" download>
          Download CV
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" /></svg>
        </a>
        <button class="burger" :class="{ open }" aria-label="Toggle menu" @click="open = !open">
          <span /><span />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
]

const scrolled = ref(false)
const open = ref(false)
const active = ref('')
let sectionObserver

function scrollTo(id) {
  open.value = false
  if (id === 'top') return window.scrollTo({ top: 0, behavior: 'smooth' })
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onScroll() {
  scrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  // Highlight the nav link for the section currently in the middle of the viewport
  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => { if (e.isIntersecting) active.value = e.target.id })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  links.forEach((l) => {
    const el = document.getElementById(l.id)
    if (el) sectionObserver.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  sectionObserver?.disconnect()
})
</script>

<style scoped>
.nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 18px 16px;
  transition: padding 0.4s var(--ease-out);
  animation: drop 1s var(--ease-out) both;
}
@keyframes drop { from { transform: translateY(-100%); opacity: 0; } }

.navbar {
  width: 100%;
  max-width: 1160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 14px 12px 24px;
  border-radius: 999px;
  border: 1px solid transparent;
  transition: all 0.4s var(--ease-out);
}
.scrolled { padding-top: 12px; }
.scrolled .navbar {
  max-width: 980px;
  background: var(--glass);
  backdrop-filter: blur(18px) saturate(1.4);
  border-color: var(--border);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.6);
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 20px;
}
.wordmark { display: flex; flex-direction: column; line-height: 1.15; }
.name { font-size: 17px; font-weight: 600; letter-spacing: -0.01em; white-space: nowrap; }
.tagline {
  white-space: nowrap;
  font-family: 'Inter', sans-serif;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}
@media (max-width: 480px) { .right .icon { display: none; } }
.links { display: flex; gap: 4px; }
.links a {
  position: relative;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--muted);
  transition: color 0.3s, background 0.3s;
}
.links a:hover { color: var(--text); }
.links a.active { color: var(--text); background: rgba(255, 255, 255, 0.08); }

.right { display: flex; align-items: center; gap: 8px; }
.icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--muted);
  transition: color 0.3s, background 0.3s;
}
.icon:hover { color: var(--text); background: rgba(255, 255, 255, 0.08); }

.cv {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #0b1220;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
  transition: transform 0.3s var(--ease-out), box-shadow 0.3s;
}
.cv:hover { transform: translateY(-2px); box-shadow: 0 8px 24px -6px rgba(255, 255, 255, 0.4); }

.mobile-only, .burger { display: none; }

@media (max-width: 860px) {
  .desktop-only { display: none; }
  .mobile-only { display: inline-flex; justify-content: center; margin-top: 8px; }
  .navbar { background: var(--glass); backdrop-filter: blur(18px); border-color: var(--border); }
  .burger {
    display: grid;
    gap: 6px;
    place-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    cursor: pointer;
  }
  .burger span { width: 18px; height: 2px; background: var(--text); border-radius: 2px; transition: transform 0.3s; }
  .burger.open span:first-child { transform: translateY(4px) rotate(45deg); }
  .burger.open span:last-child { transform: translateY(-4px) rotate(-45deg); }

  .links {
    position: absolute;
    top: calc(100% + 4px);
    left: 16px;
    right: 16px;
    flex-direction: column;
    padding: 12px;
    border-radius: 24px;
    background: rgba(11, 18, 32, 0.95);
    backdrop-filter: blur(18px);
    border: 1px solid var(--border);
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
    pointer-events: none;
    transition: all 0.3s var(--ease-out);
  }
  .links.open { opacity: 1; transform: none; pointer-events: auto; }
  .links a { padding: 12px 16px; font-size: 16px; }
  .links a.cv { color: #0b1220; }
}
</style>
