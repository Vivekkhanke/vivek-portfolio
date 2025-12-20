<template>
  <section class="section" id="skills">
    <h2 class="section-title">Skills</h2>
    <div class="grid">
      <div class="skill-card" v-for="s in skills" :key="s.name" @click="scrollToSkill(s.id)">
        <img :src="s.icon"/>
        <span>{{ s.name }}</span>
      </div>
    </div>
  </section>
</template>

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
