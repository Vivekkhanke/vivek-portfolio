<template>
  <section>
    <h2 class="section-title">Professional Certifications</h2>

    <div id="certifications" class="exp-card">
      <div class="cards">

        <div
          class="cert-card"
          tabindex="0"
          :class="{ clicked: activeCert === 0 }"
          @click="openCertModal('/AZ900.pdf', 0)"
        >
          <span class="cert-icon">☁️</span>
          Microsoft Azure Fundamentals (AZ-900) 👁️‍🗨️
        </div>

        <div
          class="cert-card"
          tabindex="0"
          :class="{ clicked: activeCert === 1 }"
          @click="openCertModal('/DP203.pdf', 1)"
        >
          <span class="cert-icon">☁️</span>
          Azure Data Engineer (DP-203) 👁️‍🗨️
        </div>

        <div
          class="cert-card"
          tabindex="0"
          :class="{ clicked: activeCert === 2 }"
          @click="openCertModal('https://credentials.databricks.com/dfee4bf3-85cf-406d-9942-2d725d63128f', 2)"
        >
          <span class="cert-icon">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect fill='%23FF6B35' width='24' height='24' rx='4'/%3E%3Cpath fill='%23fff' d='M6 8h3v8H6zm5 0h3v8h-3zm5 0h3v8h-3z'/%3E%3C/svg%3E"
              class="logo-img"
            />
          </span>
          Databricks Certified: Databricks Data Engineer Associate 👁️‍🗨️
        </div>

        <div
          class="cert-card"
          tabindex="0"
          :class="{ clicked: activeCert === 3 }"
          @click="openCertModal('/AWS.pdf', 3)"
        >
          <span class="cert-icon">🚀</span>
          AWS Certified: Cloud Practitioner 👁️‍🗨️
        </div>

        <div
          class="cert-card"
          tabindex="0"
          :class="{ clicked: activeCert === 4 }"
          @click="openCertModal('/PL300.pdf', 4)"
        >
          <span class="cert-icon">📊</span>
          Power BI Data Analyst Associate (PL-300) 👁️‍🗨️
        </div>

        <div
          class="cert-card"
          tabindex="0"
          :class="{ clicked: activeCert === 5 }"
          @click="openCertModal('/Python.pdf', 5)"
        >
          <span class="cert-icon">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cdefs%3E%3ClinearGradient id='py1' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%25' style='stop-color:%233776ab'/%3E%3Cstop offset='100%25' style='stop-color:%23ffe052'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='12' cy='12' r='11' fill='url(%23py1)'/%3E%3Ctext x='12' y='14' font-size='10' font-weight='bold' text-anchor='middle' fill='white'%3EPy%3C/text%3E%3C/svg%3E"
              class="logo-img"
            />
          </span>
          Python – Data Science 👁️‍🗨️
        </div>

      </div>
    </div>

    <!-- Modal -->
    <div v-if="showCertModal" class="cert-modal-overlay" @click="closeCertModal">
      <div class="cert-modal-content" @click.stop>
        <button class="cert-modal-close" @click="closeCertModal">✕</button>
        <iframe :src="getPreviewUrl(selectedCertLink)" class="cert-iframe"></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const showCertModal = ref(false);
const selectedCertLink = ref('');
const activeCert = ref(null);

const openCertModal = (link, index) => {
  activeCert.value = index;
  selectedCertLink.value = link;
  showCertModal.value = true;

  setTimeout(() => {
    activeCert.value = null;
  }, 280);
};

const closeCertModal = () => {
  showCertModal.value = false;
  selectedCertLink.value = '';
};

const getPreviewUrl = (url) => {
  if (url.includes('drive.google.com')) {
    return url.replace('/view', '/preview');
  }
  return url;
};
</script>

<style scoped>
.exp-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 16px;
  padding: 30px;
  max-width: 900px;
  margin: auto;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 20px;
}

/* Card */
.cert-card {
  position: relative;
  overflow: hidden;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 18px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform .2s ease, box-shadow .2s ease;
}

/* Hover lift + glow */
.cert-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 25px 45px rgba(99,102,241,0.15);
}

/* Shimmer effect */
.cert-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.15),
    transparent
  );
  transform: translateX(-100%);
}

.cert-card:hover::after {
  transform: translateX(100%);
  transition: transform 0.8s ease;
}

/* Click animation */
.cert-card.clicked {
  animation: clickPop 0.28s ease;
}

@keyframes clickPop {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

/* Icon micro motion */
.cert-card:hover .cert-icon,
.cert-card:hover .logo-img {
  transform: rotate(-5deg) scale(1.1);
}

.cert-icon {
  font-size: 24px;
  transition: transform .25s ease;
}

.logo-img {
  width: 24px;
  height: 24px;
  transition: transform .25s ease;
}

/* Keyboard focus */
.cert-card:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px rgba(99,102,241,0.6);
}

/* Modal */
.cert-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.cert-modal-content {
  background: rgba(255,255,255,.1);
  border-radius: 16px;
  width: 90%;
  max-width: 700px;
  height: 80vh;
  padding: 20px;
  position: relative;
  backdrop-filter: blur(10px);
  animation: modalZoom .35s ease;
}

@keyframes modalZoom {
  from { transform: scale(.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.cert-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,.15);
  color: white;
  cursor: pointer;
}

.cert-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}

@media (max-width:767px) {
  .exp-card { padding: 18px }
  .cert-card { padding: 14px; font-size: 15px }
}
</style>
