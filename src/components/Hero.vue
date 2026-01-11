<template>
  <section class="hero-wrapper" id="profile">
    <div class="hero-container">
      <!-- Left: Photo -->
      <div class="hero-photo">
        <img src="../assets/profile.jpg" alt="Vivek Khanke"/>
        <div class="achievement" v-if="trophyLink">
          <a
            href="#"
            @click.prevent="showTrophyModal = true"
            class="trophy-badge"
          >
            🏆 Rank 1 Holder - MCA 👁️‍🗨️
          </a>
        </div>
      </div>

      <!-- Right: Content -->
      <div class="hero-content">
        <div class="hero-box">
          <h1>Hi, I'm Vivek Khanke</h1>
          <h2>Data Engineer</h2>
          <p class="hero-description">
            Experienced in designing scalable, high-performance ETL data pipelines on Azure Cloud leveraging Databricks and Oracle SQL. Strong expertise in ETL development, Delta Lake, IBM DataStage, Unix shell scripting, and Python programming.
          </p>
        </div>
      </div>
    </div>

    <!-- Trophy Modal -->
    <div v-if="showTrophyModal" class="trophy-modal-overlay" @click="showTrophyModal = false">
      <div class="trophy-modal-content" @click.stop>
        <button class="trophy-modal-close" @click="showTrophyModal = false">✕</button>
        <iframe
          :src="`${trophyLink.replace('/view', '/preview')}`"
          class="trophy-iframe"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const trophyLink = '/Rank.pdf'
const showTrophyModal = ref(false)
</script>

<style scoped>
.hero-wrapper {
  padding-top: 40px;
}

.hero-container {
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-photo {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-photo img {
  width: 280px;
  height: 280px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
  border: 2px solid rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
}

.hero-photo img:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 80px rgba(99, 102, 241, 0.3);
}

.hero-content {
  flex: 1;
  text-align: left;
}

/* ===== GLASS TROPHY BADGE (UPDATED) ===== */
.achievement {
  margin-top: 12px;
  display: flex;
  justify-content: center;
}

.trophy-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 14px;

  /* Glass effect */
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;

  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;

  box-shadow:
    inset 0 0 0 rgba(255,255,255,0),
    0 10px 28px rgba(99, 102, 241, 0.18);

  transition: all 0.35s ease;
}

.trophy-badge:hover {
  transform: translateY(-4px) scale(1.05);
  background: rgba(255, 255, 255, 0.26);
  box-shadow:
    0 18px 45px rgba(99, 102, 241, 0.28),
    0 0 0 1px rgba(255,255,255,0.35);
}

/* ===== HERO BOX ===== */
.hero-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  padding: 28px;
  backdrop-filter: blur(8px);
  animation: slideUpFade 640ms cubic-bezier(.2,.9,.2,1) both;
  max-width: 860px;
  width: 100%;
}

.hero-box h1 {
  font-size: 42px;
  margin: 0 0 10px 0;
  font-weight: 700;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-content h2 {
  font-size: 24px;
  margin: 0 0 20px 0;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.hero-content p {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}

.hero-description {
  margin-top: 12px;
}

/* Entrance animation */
@keyframes slideUpFade {
  from { transform: translateY(12px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.hero-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 60px rgba(99,102,241,0.16);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    gap: 30px;
    padding: 0 15px;
  }

  .hero-photo img {
    width: 200px;
    height: 200px;
  }

  .hero-content {
    text-align: center;
  }

  .hero-content h1 {
    font-size: 32px;
  }

  .hero-content h2 {
    font-size: 20px;
  }

  .hero-content p {
    font-size: 14px;
  }
}

/* ===== TROPHY MODAL ===== */
.trophy-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.trophy-modal-content {
  background: rgba(10, 20, 40, 0.95);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  width: 90%;
  max-width: 700px;
  height: 80vh;
  max-height: 800px;
  position: relative;
  overflow: hidden;
  animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.trophy-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 28px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10000;
}

.trophy-modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.trophy-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>
