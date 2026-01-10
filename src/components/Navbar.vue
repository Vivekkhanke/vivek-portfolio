<template>
  <nav class="navbar">
    <div class="logo">Vivek Khanke</div>

    <!-- Burger -->
    <button
      class="burger"
      :class="{ open: showMenu }"
      @click="toggleMenu"
      aria-label="Toggle navigation"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <!-- Overlay -->
    <div v-if="showMenu" class="mobile-overlay" @click="toggleMenu"></div>

    <!-- Links -->
    <div class="links" :class="{ open: showMenu }">

      <!-- INTERNAL LINKS -->
      <a
        v-for="(item, i) in internalLinks"
        :key="item.id"
        :class="{ active: currentSection === item.id }"
        :style="{ transitionDelay: showMenu ? `${i * 80}ms` : '0ms' }"
        @click.prevent="navAndClose(item.id)"
      >
        {{ item.label }}
      </a>

      <!-- EXTERNAL LINKS -->
      <a
        v-for="(item, i) in externalLinks"
        :key="item.label"
        :href="item.href"
        target="_blank"
        rel="noopener"
        :style="{ transitionDelay: showMenu ? `${(i + internalLinks.length) * 80}ms` : '0ms' }"
        @click="showMenu = false"
      >
        {{ item.label }}
      </a>

      <!-- CV -->
      <a
        class="cv"
        :style="{ transitionDelay: showMenu ? `${(internalLinks.length + externalLinks.length) * 80}ms` : '0ms' }"
        href="/Vivek_Khanke_CV.pdf"
        download
      >
        Download CV
      </a>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showMenu = ref(false)
const currentSection = ref('profile')

const internalLinks = [
  { id: 'profile', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Experience' }
]

const externalLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vivek-khanke/'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Vivekkhanke'
  }
]

function toggleMenu() {
  showMenu.value = !showMenu.value
}

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const navHeight = document.querySelector('.navbar')?.offsetHeight || 0
  const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 10
  window.scrollTo({ top: y, behavior: 'smooth' })
}

function navAndClose(id) {
  scrollToSection(id)
  currentSection.value = id
  showMenu.value = false
}

function updateActiveOnScroll() {
  const navHeight = document.querySelector('.navbar')?.offsetHeight || 0
  const threshold = navHeight + 20

  for (const item of internalLinks) {
    const el = document.getElementById(item.id)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.top <= threshold && rect.bottom > threshold) {
      currentSection.value = item.id
      break
    }
  }
}

onMounted(() => {
  updateActiveOnScroll()
  window.addEventListener('scroll', updateActiveOnScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveOnScroll)
})
</script>

<style scoped>
/* NAVBAR */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(2, 6, 23, 0.9);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 32px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

/* LOGO */
.logo {
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
}

/* LINKS */
.links {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* GLASS BUTTONS */
.links a {
  color: #ffffff;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 999px;
  cursor: pointer;
  text-decoration: none;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.18);
  transition: background .25s ease, box-shadow .25s ease;
}

/* HOVER */
.links a:hover {
  background: rgba(255,255,255,0.16);
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
}

/* ACTIVE */
.links a.active {
  background: rgba(255,255,255,0.22);
  box-shadow: 0 0 0 2px rgba(255,255,255,0.35);
}

/* CV */
.cv {
  background: rgba(255,255,255,0.9) !important;
  color: #020617 !important;
  font-weight: 700;
}

/* BURGER */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

.bar {
  width: 24px;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
  transition: 0.3s;
}

/* Burger animation */
.burger.open .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.burger.open .bar:nth-child(2) {
  opacity: 0;
}
.burger.open .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* OVERLAY */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(2,6,23,0.6);
  backdrop-filter: blur(8px);
  z-index: 900;
}

/* MOBILE ONLY ANIMATIONS */
@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .links {
    position: fixed;
    top: 64px;
    left: 12px;
    right: 12px;
    background: rgba(2,6,23,0.85);
    backdrop-filter: blur(18px);
    border-radius: 18px;
    flex-direction: column;
    padding: 22px;
    opacity: 0;
    transform: translateY(-10px) scale(0.98);
    pointer-events: none;
    transition: opacity .35s ease, transform .35s ease;
  }

  .links.open {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  .links a {
    width: 100%;
    justify-content: center;
    font-size: 16px;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity .4s ease, transform .4s ease;
  }

  .links.open a {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
