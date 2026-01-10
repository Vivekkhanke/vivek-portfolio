<template>
    <section>
    
    <h2 class="section-title">Certifications</h2>

    <div id="certifications" class="exp-card">
      <div class="cards">
        <div @click="openCertModal('https://drive.google.com/file/d/1U4dWp9MWBauo26lgQDDGx0QXkhrBIqgZ/view?usp=sharing')" class="cert-card"><span class="cert-icon">☁️</span>Microsoft Azure Fundamentals (AZ-900)</div>
        <div @click="openCertModal('https://drive.google.com/file/d/1WZDYVeE5Eu0AFDaU_kyWQeEazokgDgZ9/view?usp=sharing')" class="cert-card"><span class="cert-icon">☁️</span>Azure Data Engineer (DP-203)</div>
        <div @click="openCertModal('https://credentials.databricks.com/dfee4bf3-85cf-406d-9942-2d725d63128f')" class="cert-card"><span class="cert-icon"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect fill='%23FF6B35' width='24' height='24' rx='4'/%3E%3Cpath fill='%23fff' d='M6 8h3v8H6zm5 0h3v8h-3zm5 0h3v8h-3z'/%3E%3C/svg%3E" alt="Databricks" class="logo-img" /></span>Databricks Certified: Databricks Data Engineer Associate</div>
        <div @click="openCertModal('https://www.credly.com/badges/da1cea75-f6a7-4915-823e-e06ec0e8aa2b/')" class="cert-card"><span class="cert-icon">🚀</span>AWS Certified: Cloud Practitioner</div>
        <div @click="openCertModal('https://drive.google.com/file/d/1uirTjjz67Ih31LNeoKzkyMEQDvwzqvV4/view?usp=sharing')" class="cert-card"><span class="cert-icon">📊</span>Power BI Data Analyst Associate (PL-300)</div>
        <div @click="openCertModal('https://drive.google.com/file/d/1GQzEl0P4p6LMLkF---4QIi3XhlCjQoWK/view?usp=drivesdk')" class="cert-card"><span class="cert-icon"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cdefs%3E%3ClinearGradient id='py1' x1='0%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='0%25' style='stop-color:%233776ab;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ffe052;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='12' cy='12' r='11' fill='url(%23py1)'/%3E%3Ctext x='12' y='14' font-size='10' font-weight='bold' text-anchor='middle' fill='white' font-family='Arial'>Py</text%3E%3C/svg%3E" alt="Python" class="logo-img" /></span>Python - Data Science</div>
      </div>
    </div>

    <!-- Certification Modal -->
    <div v-if="showCertModal" class="cert-modal-overlay" @click="closeCertModal">
      <div class="cert-modal-content" @click.stop>
        <button class="cert-modal-close" @click="closeCertModal">✕</button>
        <iframe :src="getPreviewUrl(selectedCertLink)" class="cert-iframe"></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 16px;
  padding: 30px;
  max-width: 900px;
  margin: auto;
}

.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px}
.cert-card{
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 18px;
  border-radius: 12px;
  font-weight:600;
  transition:transform .18s ease,box-shadow .18s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
}
.cert-icon {
  font-size: 24px;
  flex-shrink: 0;
}
.logo-img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}
.cert-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(99,102,241,0.08)}

/* Certification Modal Styles */
.cert-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.cert-modal-content {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 20px;
  width: 90%;
  max-width: 700px;
  height: 80vh;
  max-height: 800px;
  position: relative;
  backdrop-filter: blur(10px);
  animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.cert-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 1001;
}

.cert-modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.cert-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width:767px){
  .exp-card{padding:18px}
  .cert-card{padding:14px;font-size:15px}
  .cert-modal-content {
    width: 95%;
    height: 70vh;
    max-height: 600px;
  }
}
</style>

<script setup>
import { ref } from 'vue';

const showCertModal = ref(false);
const selectedCertLink = ref('');

const openCertModal = (link) => {
  selectedCertLink.value = link;
  showCertModal.value = true;
};

const closeCertModal = () => {
  showCertModal.value = false;
  selectedCertLink.value = '';
};


const getPreviewUrl = (url) => {
  // Convert Google Drive links to preview mode
  if (url.includes('drive.google.com')) {
    return url.replace('/view', '/preview');
  }
  // Return other URLs as-is (Credly, Databricks)
  return url;
};


</script>


