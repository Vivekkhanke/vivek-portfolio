<template>
  <nav class="navbar">
    <div class="brand">
      <div class="logo">Vivek Khanke</div>
    </div>

    <button class="burger" :class="{ open: showMenu }" @click="toggleMenu" :aria-expanded="showMenu" aria-label="Toggle navigation">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <!-- overlay that blurs the page when mobile menu is open -->
    <div v-if="showMenu" class="mobile-overlay" @click="toggleMenu"></div>

    <div class="links" :class="{ open: showMenu }">
      <a :class="{ active: currentSection === 'profile' }" @click.prevent="navAndClose('profile')">About</a>
      <a :class="{ active: currentSection === 'skills' }" @click.prevent="navAndClose('skills')">Skills</a>
      <a :class="{ active: currentSection === 'certifications' }" @click.prevent="navAndClose('certifications')">Certifications</a>
      <a :class="{ active: currentSection === 'experience' }" @click.prevent="navAndClose('experience')">Experience</a>
      <a :class="{ active: currentSection === 'linkedin' }" href="https://www.linkedin.com/in/vivek-khanke/" target="_blank" @click="setActive('linkedin')">LinkedIn</a>
      <a :class="{ active: currentSection === 'github' }" href="https://github.com/Vivekkhanke" target="_blank" @click="setActive('github')">GitHub</a>
      <a class="cv" href="/Vivek_Khanke_CV.pdf" download @click="setActive('cv')">Download CV</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showMenu = ref(false)
const currentSection = ref('profile')

function toggleMenu() {
  showMenu.value = !showMenu.value
}

function setActive(id) {
  currentSection.value = id
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const nav = document.querySelector('.navbar')
    const navHeight = nav ? nav.offsetHeight : 0
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 12
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

function navAndClose(id) {
  scrollTo(id)
  currentSection.value = id
  showMenu.value = false
}

// update active link based on scroll position
function updateActiveOnScroll() {
  const sections = ['profile', 'skills', 'certifications', 'experience']
  const nav = document.querySelector('.navbar')
  const navHeight = nav ? nav.offsetHeight : 0
  const threshold = navHeight + 12
  let found = false
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= threshold && rect.bottom > threshold && !found) {
        currentSection.value = id
        found = true
      }
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
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(2,6,23,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.navbar .logo {
  font-weight: 700;
  font-size: 22px;
}

.navbar .links a {
  margin: 0 14px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  transition: transform .25s ease, box-shadow .25s ease, background .2s ease, color .2s ease;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 8px 12px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
}

.navbar .links a:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(99,102,241,0.12);
  color: #ffffff;
}

.cv {
  background: white;
  color: black;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s;
}

.cv:hover {
  transform: scale(1.05);
}

/* Burger (hidden on desktop) */
.burger{
  display:none;
  background:none;
  border:0;
  padding:8px;
  cursor:pointer;
}
.burger .bar{display:block;width:22px;height:2px;background:#fff;margin:4px 0;border-radius:2px}

/* Responsive: mobile behaviour */
@media (max-width:767px){
  .navbar{padding:12px 16px; background:#020617}
  .navbar .links{display:none;position:fixed;inset:64px 12px 12px 12px;background:#061029;border-radius:12px;flex-direction:column;padding:16px;z-index:200}
  .navbar .links.open{display:flex}
  .navbar .links a{margin:10px 0;font-size:16px}
  .cv{align-self:flex-start}
  .burger{display:block}
}

@media (min-width:768px) and (max-width:1024px){
  .navbar{padding:14px 24px}
  .navbar .links{display:flex;gap:12px}
  .burger{display:none}
}

/* Active link styles */
.links a.active{
  background: linear-gradient(90deg, rgba(11,95,255,0.12), rgba(59,130,246,0.08));
  color: #3b82f6;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(59,130,246,0.08);
  transform: translateY(-2px);
}
.links a.active::after{
  content: '';
  display: block;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg,#0b5fff,#3b82f6);
  border-radius: 3px;
  margin-top:6px;
}

/* Burger -> X animation */
.burger.open .bar:nth-child(1){
  transform: translateY(6px) rotate(45deg);
}
.burger.open .bar:nth-child(2){
  opacity: 0;
}
.burger.open .bar:nth-child(3){
  transform: translateY(-6px) rotate(-45deg);
}
.bar{transition:transform .25s ease, opacity .2s ease}

/* full-screen overlay behind mobile menu that blurs the page */
.mobile-overlay{
  position:fixed;
  inset:0;
  background: rgba(2,6,23,0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index:90; /* under navbar (100) but above page content */
}
</style>
