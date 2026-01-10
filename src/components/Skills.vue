<template>
  <section class="section" id="skills">
    <h2 class="section-title">Skills</h2>
    <div class="grid">
      <div class="skill-card" v-for="s in skills" :key="s.name" @click="handleSkillClick(s)">
        <img :src="s.icon"/>
        <span>{{ s.name }}</span>
      </div>
    </div>

    <!-- ETL Workflow Modal -->
    <div v-if="showETLModal" class="modal-overlay" @click="showETLModal = false">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="showETLModal = false">✕</button>
        <h3>ETL Workflow Diagram</h3>
        
        <div class="etl-diagram">
          <!-- Extract Phase -->
          <div class="etl-box extract-box">
            <div class="box-icon">📥</div>
            <h4>EXTRACT</h4>
            <p>Data Sources</p>
            <div class="sources">
              <span>Database</span>
              <span>APIs</span>
              <span>Files</span>
            </div>
          </div>
          
          <div class="flow-arrow">→</div>

          <!-- Transform Phase -->
          <div class="etl-box transform-box">
            <div class="box-icon">⚙️</div>
            <h4>TRANSFORM</h4>
            <p>Data Processing</p>
            <div class="sources">
              <span>Clean</span>
              <span>Validate</span>
              <span>Aggregate</span>
            </div>
          </div>

          <div class="flow-arrow">→</div>

          <!-- Load Phase -->
          <div class="etl-box load-box">
            <div class="box-icon">📤</div>
            <h4>LOAD</h4>
            <p>Target Systems</p>
            <div class="sources">
              <span>Data Lake</span>
              <span>Warehouse</span>
              <span>Dashboard</span>
            </div>
          </div>
        </div>

        
      </div>
    </div>

    <!-- Databricks Medallion Architecture Modal -->
    <div v-if="showMedallionModal" class="modal-overlay" @click="showMedallionModal = false">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="showMedallionModal = false">✕</button>
        <h3>Databricks Medallion Architecture</h3>
        
        <div class="medallion-diagram">
          <!-- Bronze Layer -->
          <div class="medal-layer bronze-layer">
            <div class="layer-header">
              <div class="medal-icon">🥉</div>
              <h4>BRONZE</h4>
            </div>
            <p class="layer-title">Raw Data Layer</p>
            <div class="layer-content">
              <span class="flowing-text">Raw data</span>
              <span class="flowing-text">Minimal cleaning</span>
              <span class="flowing-text">Schema inference</span>
            </div>
            <!-- Animated data particles -->
            <div class="data-particles">
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
            </div>
          </div>

          <div class="layer-arrow">↓</div>

          <!-- Silver Layer -->
          <div class="medal-layer silver-layer">
            <div class="layer-header">
              <div class="medal-icon">⚪</div>
              <h4>SILVER</h4>
            </div>
            <p class="layer-title">Refined Data Layer</p>
            <div class="layer-content">
              <span class="flowing-text">Data cleaning</span>
              <span class="flowing-text">Validation rules</span>
              <span class="flowing-text">De-duplication</span>
            </div>
            <!-- Animated data particles -->
            <div class="data-particles">
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
            </div>
          </div>

          <div class="layer-arrow">↓</div>

          <!-- Gold Layer -->
          <div class="medal-layer gold-layer">
            <div class="layer-header">
              <div class="medal-icon">🥇</div>
              <h4>GOLD</h4>
            </div>
            <p class="layer-title">Analytics Layer</p>
            <div class="layer-content">
              <span class="flowing-text">Business logic</span>
              <span class="flowing-text">Aggregations</span>
              <span class="flowing-text">Ready for BI</span>
            </div>
            <!-- Animated data particles -->
            <div class="data-particles">
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
            </div>
          </div>
        </div>

        <!-- Benefits Section -->
        <div class="benefits-section">
          <h4>Key Benefits:</h4>
          <div class="benefits-grid">
            <div class="benefit-item">
              <div class="benefit-icon">📊</div>
              <p>Data Governance</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">🔍</div>
              <p>Data Quality</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">⚡</div>
              <p>Performance</p>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">🔐</div>
              <p>Security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showETLModal = ref(false)
const showMedallionModal = ref(false)

const skills = [
  { name: 'Azure', icon: 'https://logo.svgcdn.com/logos/azure.svg' },
  { name: 'ADF', icon: 'https://logo.svgcdn.com/devicon/azuredatafactory-original.svg' },
  { name: 'Databricks', icon: 'https://cdn.simpleicons.org/databricks/ff3621' },
  { name: 'Oracle', icon: 'https://logo.svgcdn.com/logos/oracle.svg' },
  { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/4479a1' },
  { name: 'ETL', icon: 'https://cdn.simpleicons.org/apacheairflow/38bdf8' },
  { name: 'Unix', icon: 'https://cdn.simpleicons.org/linux/facc15' },
  { name: 'DataStage', icon: 'https://2.bp.blogspot.com/-Wliu6vxnEHU/VqSQ0mp6b5I/AAAAAAAAAGE/e-TVLu6ezRYkk6miM8FiEOe4tfrmPSxuA/s1600/1_2.-DataStage-1.jpg' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776ab' },
  // add java
  { name: 'Java', icon: 'https://img.icons8.com/?size=100&id=FRRACRKRsw2s&format=png&color=000000' },  
  { name: 'Perl Scripting', icon: 'https://cdn.simpleicons.org/perl/39457e' },
  { name: 'Power BI', icon: 'https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000' }



];

function handleSkillClick(skill) {
  if (skill.name === 'ETL') {
    showETLModal.value = true
  } else if (skill.name === 'Databricks') {
    showMedallionModal.value = true
  } else {
    scrollToSkill(skill.id)
  }
}

function scrollToSkill(id) {
  const el = document.getElementById(id)
  if (el) {
    const nav = document.querySelector('.navbar')
    const navHeight = nav ? nav.offsetHeight : 0
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 12
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>
<style scoped>
.section {
  padding: 60px 40px;
}

.section-title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: 700;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.skill-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(99, 102, 241, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
}

.skill-card img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  object-fit: contain;
}

.skill-card span {
  font-weight: 600;
  font-size: 14px;
  text-align: center;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: rgba(6, 16, 41, 0.95);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  padding: 40px;
  max-width: 900px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 24px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.modal-content h3 {
  font-size: 28px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ETL Diagram */
.etl-diagram {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
  flex-wrap: wrap;
  padding: 30px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.etl-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 25px;
  border-radius: 12px;
  min-width: 180px;
  border: 2px solid;
  position: relative;
  transition: all 0.3s ease;
  animation: slideInBox 0.6s ease forwards;
}

.etl-box:nth-child(1) {
  animation-delay: 0.1s;
}

.etl-box:nth-child(3) {
  animation-delay: 0.2s;
}

.etl-box:nth-child(5) {
  animation-delay: 0.3s;
}

.extract-box {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
}

.extract-box:hover {
  background: rgba(34, 197, 94, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(34, 197, 94, 0.2);
}

.transform-box {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
}

.transform-box:hover {
  background: rgba(59, 130, 246, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

.load-box {
  background: rgba(168, 85, 247, 0.1);
  border-color: #a855f7;
}

.load-box:hover {
  background: rgba(168, 85, 247, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(168, 85, 247, 0.2);
}

.box-icon {
  font-size: 40px;
  animation: bounce 2s infinite;
}

.etl-box:nth-child(3) .box-icon {
  animation-delay: 0.3s;
}

.etl-box:nth-child(5) .box-icon {
  animation-delay: 0.6s;
}

.etl-box h4 {
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
}

.etl-box p {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.sources {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
  width: 100%;
}

.sources span {
  font-size: 11px;
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  text-align: center;
}

.flow-arrow {
  font-size: 28px;
  color: rgba(99, 102, 241, 0.6);
  animation: slideArrow 1.5s ease infinite;
}

.tools-section {
  margin-top: 30px;
  padding: 20px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
}

.tools-section h4 {
  font-size: 16px;
  margin: 0 0 15px 0;
  color: #3b82f6;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

.tool-badge {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2));
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 13px;
  text-align: center;
  transition: all 0.2s ease;
}

.tool-badge:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3));
  border-color: rgba(99, 102, 241, 0.6);
}

/* ========== MEDALLION ARCHITECTURE STYLES ========== */
.medallion-diagram {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 30px 0;
  padding: 20px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  flex-wrap: wrap;
}

.medal-layer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  border-radius: 10px;
  min-width: 140px;
  border: 2px solid;
  position: relative;
  transition: all 0.3s ease;
  animation: slideInMedal 0.6s ease forwards;
  width: auto;
  overflow: hidden;
}

.medal-layer:nth-child(1) {
  animation-delay: 0.1s;
}

.medal-layer:nth-child(3) {
  animation-delay: 0.2s;
}

.medal-layer:nth-child(5) {
  animation-delay: 0.3s;
}

.bronze-layer {
  background: linear-gradient(135deg, rgba(205, 127, 50, 0.15), rgba(184, 134, 11, 0.1));
  border-color: #cd7f32;
}

.bronze-layer:hover {
  background: linear-gradient(135deg, rgba(205, 127, 50, 0.25), rgba(184, 134, 11, 0.15));
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(205, 127, 50, 0.2);
}

.silver-layer {
  background: linear-gradient(135deg, rgba(192, 192, 192, 0.15), rgba(169, 169, 169, 0.1));
  border-color: #c0c0c0;
}

.silver-layer:hover {
  background: linear-gradient(135deg, rgba(192, 192, 192, 0.25), rgba(169, 169, 169, 0.15));
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(192, 192, 192, 0.2);
}

.gold-layer {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(218, 165, 32, 0.1));
  border-color: #ffd700;
}

.gold-layer:hover {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(218, 165, 32, 0.15));
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);
}

.layer-header {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100%;
}

.medal-icon {
  font-size: 20px;
  animation: bounce 2s infinite;
}

.medal-layer:nth-child(3) .medal-icon {
  animation-delay: 0.3s;
}

.medal-layer:nth-child(5) .medal-icon {
  animation-delay: 0.6s;
}

.medal-layer h4 {
  font-size: 13px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
}

.layer-title {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-style: italic;
}

.layer-content {
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
}

.flowing-text {
  font-size: 9px;
  background: rgba(255, 255, 255, 0.08);
  padding: 3px 6px;
  border-radius: 3px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: flowingText 2s ease-in-out infinite;
}

.layer-content span:nth-child(1) {
  animation-delay: 0s;
}

.layer-content span:nth-child(2) {
  animation-delay: 0.3s;
}

.layer-content span:nth-child(3) {
  animation-delay: 0.6s;
}

/* Animated data particles */
.data-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: float-down 2s ease-in infinite;
}

.bronze-layer .particle {
  background: rgba(205, 127, 50, 0.6);
  box-shadow: 0 0 10px rgba(205, 127, 50, 0.8);
}

.silver-layer .particle {
  background: rgba(192, 192, 192, 0.6);
  box-shadow: 0 0 10px rgba(192, 192, 192, 0.8);
}

.gold-layer .particle {
  background: rgba(255, 215, 0, 0.6);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}

.particle:nth-child(1) {
  left: 20%;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  left: 50%;
  animation-delay: 0.5s;
}

.particle:nth-child(3) {
  left: 80%;
  animation-delay: 1s;
}

.layer-arrow {
  font-size: 20px;
  color: rgba(99, 102, 241, 0.6);
  animation: slideArrow 1.5s ease infinite;
}

.benefits-section {
  margin-top: 30px;
  padding: 20px;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
}

.benefits-section h4 {
  font-size: 16px;
  margin: 0 0 15px 0;
  color: #3b82f6;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.benefit-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15));
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.benefit-item:hover {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(99, 102, 241, 0.25));
  border-color: rgba(99, 102, 241, 0.6);
  transform: translateY(-3px);
}

.benefit-icon {
  font-size: 28px;
}

.benefit-item p {
  margin: 0;
  font-size: 12px;
  text-align: center;
  font-weight: 600;
}

/* ========== MEDAL ANIMATIONS ========== */
@keyframes slideInMedal {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes float-down {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100px);
    opacity: 0;
  }
}

@keyframes flowingText {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .medallion-diagram {
    padding: 20px;
  }

  .medal-layer {
    min-width: 200px;
  }
}

/* Animations */
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
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInBox {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes slideArrow {
  0% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(-5px);
  }
}

/* Responsive */
@media (max-width: 767px) {
  .section {
    padding: 40px 20px;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
  }

  .modal-content {
    padding: 25px;
    width: 95%;
  }

  .modal-content h3 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .etl-diagram {
    flex-direction: column;
    padding: 15px;
    gap: 10px;
  }

  .etl-box {
    min-width: 150px;
    padding: 15px;
  }

  .flow-arrow {
    transform: rotate(90deg);
    margin: -5px 0;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }

  /* Medallion Architecture Responsive */
  .medallion-diagram {
    flex-direction: column;
    gap: 15px;
  }

  .medal-layer {
    min-width: 120px !important;
  }

  .layer-arrow {
    transform: rotate(90deg);
    margin: -5px 0;
  }

  .benefits-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>