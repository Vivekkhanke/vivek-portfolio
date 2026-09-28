<template>
  <section id="experience" class="section">
    <span v-reveal class="eyebrow">Career</span>
    <h2 v-reveal="{ delay: 100 }" class="section-title">Professional <span class="gradient-text">experience</span></h2>

    <div ref="timeline" class="timeline">
      <!-- Line fills in as the timeline scrolls past -->
      <div class="rail"><div class="rail-fill" :style="{ transform: `scaleY(${fill})` }" /></div>

      <article v-for="(job, i) in jobs" :key="job.company" class="item">
        <div class="node" :class="{ on: fill > i / jobs.length }" />
        <div v-reveal="'right'" class="card spotlight job" @pointermove="spot">
          <header>
            <div>
              <div class="company">
                <a class="logo-chip" :href="job.site" target="_blank" rel="noopener" :aria-label="`${job.company} website`">
                  <img :src="job.logo" :alt="`${job.company} logo`" :style="{ height: job.logoHeight }" />
                </a>
                <h3>{{ job.company }}</h3>
              </div>
              <p class="role">{{ job.role }}</p>
            </div>
            <span class="period" :class="{ current: job.current }">{{ job.period }}</span>
          </header>
          <ul>
            <li v-for="(b, j) in job.points" :key="j" v-html="b" />
          </ul>
          <div class="tags">
            <span v-for="t in job.stack" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import atyetiLogo from '../assets/atyeti-logo.png'
import hexawareLogo from '../assets/hexaware-logo.svg'

const jobs = [
  {
    company: 'Atyeti Inc',
    logo: atyetiLogo,
    site: 'https://atyeti.com',
    role: 'Data Engineer',
    period: 'May 2025 — Present',
    current: true,
    points: [
      'Provisioned Azure resources (Databricks workspace, Linux VMs, ADLS Gen2) with <strong>Terraform</strong> for automated, consistent and scalable deployments.',
      'Implemented the <strong>Bronze–Silver–Gold (Medallion) architecture</strong> for scalable, structured data processing.',
      'Built Azure Databricks <strong>PySpark</strong> notebooks to read raw files from ADLS Gen2 and perform cleansing, validation and transformation.',
      'Developed and managed <strong>ADF pipelines</strong> supporting <strong>Full Load</strong> and <strong>Delta/Incremental Load</strong> ingestion patterns.',
      'Used <strong>Azure Key Vault</strong> for secrets and secure connections across ADF, Databricks and on-prem sources.',
      'Performed data cleansing and preprocessing with <strong>Pandas</strong> (merge, groupby, filtering, reshaping, missing values).',
      'Designed reusable <strong>PySpark ETL frameworks</strong> for validation, exception handling, logging and auditing.'
    ],
    stack: ['Azure Databricks', 'PySpark', 'ADF', 'ADLS Gen2', 'Terraform', 'Key Vault', 'Pandas']
  },
  {
    company: 'Hexaware Technologies',
    logo: hexawareLogo,
    logoHeight: '14px',
    site: 'https://hexaware.com',
    role: 'Software Engineer',
    period: 'Mar 2022 — May 2025',
    points: [
      'Migrated legacy <strong>IBM DataStage ETL jobs</strong> to <strong>Azure Data Factory</strong>, redesigning end-to-end pipelines, dataflows, dependencies and scheduling.',
      'Developed and managed <strong>ADF pipelines</strong> supporting <strong>Full Load</strong> and <strong>Delta/Incremental Load</strong> ingestion patterns.',
      'Built a <strong>DataStage sequence job</strong> for <strong>automated invoice generation</strong>, ensuring accurate and efficient processing.',
      'Implemented data cleansing, incremental loads, <strong>SCD Type 1/2</strong>, performance optimization and production monitoring across bronze, silver and gold layers.',
      'Developed and optimized <strong>PL/SQL</strong> triggers, stored procedures and functions for automation and data integrity.',
      'Automated ETL job parameters and file handling with <strong>Unix shell scripting</strong>.',
      'Worked closely with clients to translate business needs into scalable ETL architectures using IBM DataStage and Oracle SQL.'
    ],
    stack: ['IBM DataStage 11.7', 'Oracle SQL', 'PL/SQL', 'ADF', 'Unix Shell', 'Python']
  }
]

const timeline = ref(null)
const fill = ref(0)
let ticking = false

function update() {
  ticking = false
  const el = timeline.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const anchor = window.innerHeight * 0.6
  fill.value = Math.min(Math.max((anchor - r.top) / r.height, 0), 1)
}
function onScroll() {
  if (!ticking) { ticking = true; requestAnimationFrame(update) }
}

function spot(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  update()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.timeline { position: relative; padding-left: 56px; }

.rail {
  position: absolute;
  left: 15px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
}
.rail-fill {
  width: 100%;
  height: 100%;
  transform-origin: top;
  background: linear-gradient(#2563eb, #38bdf8);
  box-shadow: 0 0 14px rgba(59, 130, 246, 0.8);
  transition: transform 0.1s linear;
}

.item { position: relative; margin-bottom: 40px; }
.item:last-child { margin-bottom: 0; }

.node {
  position: absolute;
  left: -50px;
  top: 30px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.5s var(--ease-out);
}
.node.on {
  border-color: var(--accent-2);
  box-shadow: 0 0 0 6px rgba(56, 189, 248, 0.15), 0 0 20px rgba(56, 189, 248, 0.7);
  background: var(--accent-2);
  transform: scale(1.1);
}

.job { padding: 32px; overflow: hidden; }
.job:hover { border-color: rgba(59, 130, 246, 0.4); }

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
}
.company {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 14px;
}
.logo-chip {
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 24px -10px rgba(0, 0, 0, 0.6);
  position: relative;
  transition: transform 0.3s var(--ease-out);
}
.logo-chip:hover { transform: translateY(-2px); }
.logo-chip img { display: block; height: 18px; width: auto; }
h3 { margin: 0; font-size: 26px; }
.role { margin: 4px 0 0; color: var(--accent-2); font-weight: 500; }

.period {
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid var(--border);
  color: var(--muted);
  white-space: nowrap;
}
.period.current {
  color: #34d399;
  border-color: rgba(52, 211, 153, 0.35);
  background: rgba(52, 211, 153, 0.08);
}

ul { margin: 0 0 24px; padding: 0; list-style: none; position: relative; }
li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  line-height: 1.65;
  color: var(--muted);
}
li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  transform: rotate(45deg);
  background: var(--gradient);
}
li :deep(strong) { color: var(--text); font-weight: 600; }

.tags { display: flex; flex-wrap: wrap; gap: 8px; position: relative; }
.tag {
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #93c5fd;
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
}

@media (max-width: 640px) {
  .timeline { padding-left: 36px; }
  .rail { left: 7px; }
  .node { left: -38px; width: 16px; height: 16px; }
  .job { padding: 22px; }
  h3 { font-size: 22px; }
}
</style>
