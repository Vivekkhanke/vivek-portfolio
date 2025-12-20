<template>
  <nav class="navbar">
    <!-- <div class="logo">&lt;VK /&gt;</div> -->

    <div class="links">
      <a @click.prevent="scrollTo('profile')">About</a>
      <a @click.prevent="scrollTo('skills')">Skills</a>
      <a @click.prevent="scrollTo('certifications')">Certifications</a>
      <a @click.prevent="scrollTo('experience')">Experience</a>
      <a href="https://www.linkedin.com/in/vivek-khanke/" target="_blank">LinkedIn</a>
      <a href="https://github.com/Vivekkhanke" target="_blank">GitHub</a>
    </div>

    <a class="cv" href="/Vivek_Khanke_CV.pdf" download>Download CV</a>
  </nav>
</template>

<script setup>
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
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
  transition: all 0.2s ease;
}

.navbar .links a:hover {
  color: #3b82f6;
  transform: scale(1.05);
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
</style>
