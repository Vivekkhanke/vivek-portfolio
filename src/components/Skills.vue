<template>
  <section id="skills" class="skills">
    <div class="section head">
      <span v-reveal class="eyebrow">Toolbox</span>
      <h2 v-reveal="{ delay: 100 }" class="section-title">Skills &amp; <span class="gradient-text">technologies</span></h2>
    </div>

    <!-- Infinite marquee: the list is rendered twice so the loop is seamless -->
    <div class="marquee" aria-hidden="true">
      <div class="track">
        <span v-for="(s, i) in [...skills, ...skills]" :key="i" class="m-item">
          <img v-if="s.icon" :src="s.icon" alt="" loading="lazy" @error="hide" />{{ s.name }}
        </span>
      </div>
    </div>
    <div class="marquee reverse" aria-hidden="true">
      <div class="track">
        <span v-for="(c, i) in [...concepts, ...concepts]" :key="i" class="m-item outline">{{ c }}</span>
      </div>
    </div>

    <div class="section grid-wrap">
      <div class="bento">
        <div
          v-for="(g, i) in groups"
          :key="g.title"
          v-reveal="{ dir: 'zoom', delay: i * 100 }"
          class="card spotlight group"
          :class="g.size"
          @pointermove="spot"
        >
          <h3>{{ g.title }}</h3>
          <p>{{ g.desc }}</p>
          <div class="tags">
            <span v-for="t in g.items" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const devicon = (p) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${p}.svg`

const skills = [
  { name: 'Azure', icon: devicon('azure/azure-original') },
  { name: 'Azure Data Factory', icon: 'https://logo.svgcdn.com/devicon/azuredatafactory-original.svg' },
  { name: 'Databricks', icon: 'https://cdn.simpleicons.org/databricks/ff3621' },
  { name: 'PySpark', icon: devicon('apachespark/apachespark-original') },
  { name: 'Python', icon: devicon('python/python-original') },
  { name: 'Pandas', icon: devicon('pandas/pandas-original') },
  { name: 'Oracle SQL', icon: devicon('oracle/oracle-original') },
  { name: 'Terraform', icon: devicon('terraform/terraform-original') },
  { name: 'Unix / Linux', icon: devicon('linux/linux-original') },
  { name: 'IBM DataStage' },
  { name: 'AWS', icon: devicon('amazonwebservices/amazonwebservices-plain-wordmark') }
]

const concepts = [
  'Medallion Architecture', 'Delta Lake', 'SCD Type 1/2', 'Incremental Loads',
  'Data Validation', 'Key Vault', 'PL/SQL', 'Shell Scripting', 'ETL Migration', 'Power BI'
]

const groups = [
  {
    title: 'Cloud & Lakehouse',
    desc: 'End-to-end data platforms on Azure.',
    items: ['Azure Databricks', 'ADLS Gen2', 'Delta Lake', 'Azure Data Factory', 'Key Vault'],
    size: 'wide'
  },
  {
    title: 'Processing',
    desc: 'Transform at scale.',
    items: ['PySpark', 'Python', 'Pandas']
  },
  {
    title: 'Databases',
    desc: 'Relational modelling & tuning.',
    items: ['Oracle SQL', 'PL/SQL', 'Triggers & Procs']
  },
  {
    title: 'ETL & Automation',
    desc: 'Reliable, repeatable delivery.',
    items: ['IBM DataStage 11.7', 'Terraform', 'Unix Shell', 'Job Scheduling', 'Power BI'],
    size: 'wide'
  }
]

function hide(e) {
  e.target.style.display = 'none'
}

function spot(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}
</script>

<style scoped>
.head { padding-bottom: 0; }

.marquee {
  overflow: hidden;
  padding: 14px 0;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}
.track {
  display: flex;
  gap: 16px;
  width: max-content;
  animation: marquee 40s linear infinite;
}
.marquee.reverse .track { animation-direction: reverse; animation-duration: 50s; }
.marquee:hover .track { animation-play-state: paused; }
@keyframes marquee { to { transform: translateX(calc(-50% - 8px)); } }

.m-item {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-weight: 600;
  white-space: nowrap;
  transition: border-color 0.3s, background 0.3s;
}
.m-item:hover { border-color: var(--accent); background: var(--surface-hover); }
.m-item img { width: 26px; height: 26px; object-fit: contain; }
.m-item.outline {
  font-family: var(--font-display);
  font-size: 22px;
  background: transparent;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.35);
  border-style: dashed;
}

.grid-wrap { padding-top: 60px; }
.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.group { padding: 30px; overflow: hidden; }
.group.wide { grid-column: span 2; }
.group:hover { transform: translateY(-6px); border-color: rgba(59, 130, 246, 0.45); }
.group h3 { margin: 0 0 6px; font-size: 22px; }
.group p { margin: 0 0 22px; color: var(--muted); }
.tags { display: flex; flex-wrap: wrap; gap: 10px; position: relative; }
.tag {
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  transition: all 0.3s;
}
.tag:hover { background: rgba(59, 130, 246, 0.2); border-color: rgba(59, 130, 246, 0.5); transform: translateY(-2px); }

@media (max-width: 860px) {
  .bento { grid-template-columns: 1fr; }
  .group.wide { grid-column: auto; }
}
</style>
