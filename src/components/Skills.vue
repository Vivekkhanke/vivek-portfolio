<template>
  <section id="skills" class="section">
    <h2 class="section-title">Skills</h2>
    <div class="grid">
      <div v-for="s in skills" :key="s.name" class="skill-card" @click="scrollTo('skills')">
        <img :src="s.icon"/>
        <span>{{ s.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/60a5fa' },
  { name: 'Databricks', icon: 'https://cdn.simpleicons.org/databricks/ff3621' },
  { name: 'Oracle SQL', icon: 'https://cdn.simpleicons.org/oracle/f87171' },
  { name: 'PL/SQL', icon: 'https://cdn.simpleicons.org/database/a5b4fc' },
  { name: 'ETL', icon: 'https://cdn.simpleicons.org/apacheairflow/38bdf8' },
  { name: 'Unix', icon: 'https://cdn.simpleicons.org/linux/facc15' }
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px,1fr));
  gap: 30px;
  justify-items: center;
}
.skill-card {
  background: rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.12);
}
.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(59,130,246,0.25);
}
.skill-card img { width: 44px; height: 44px; margin-bottom: 10px; }
</style>


<script setup>
const skills = [
  { name: 'Azure', icon: 'https://logo.svgcdn.com/logos/azure.svg' },
  { name: 'ADF', icon: 'https://logo.svgcdn.com/devicon/azuredatafactory-original.svg' },
  { name: 'Databricks', icon: 'https://cdn.simpleicons.org/databricks/ff3621' },
  { name: 'Oracle', icon: 'https://logo.svgcdn.com/logos/oracle.svg' },
  { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql/4479a1' },
  { name: 'ETL', icon: 'https://cdn.simpleicons.org/apacheairflow/38bdf8' },
  { name: 'Unix', icon: 'https://cdn.simpleicons.org/linux/facc15' },
{ name: 'DataStage', icon: 'https://2.bp.blogspot.com/-Wliu6vxnEHU/VqSQ0mp6b5I/AAAAAAAAAGE/e-TVLu6ezRYkk6miM8FiEOe4tfrmPSxuA/s1600/1_2.-DataStage-1.jpg' }
];


function scrollToSkill(id) {
  const el = document.getElementById(id)
  if(el) el.scrollIntoView({behavior:'smooth'})
}
</script>
