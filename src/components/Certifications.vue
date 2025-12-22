<template>
    <section>
    
    <h2 class="section-title">Certifications</h2>

    <div id="certifications" class="exp-card">
      <div class="cards">
        <div class="cert-card">Microsoft Azure Fundamentals (AZ-900)</div>
        <div class="cert-card">Azure Data Engineer (AZ-203)</div>
        <div class="cert-card">Databricks Certified: Databricks Data Engineer Associate</div>
        <div class="cert-card">AWS Certified: Cloud Practitioner</div>
        <div class="cert-card">Power BI Data Analyst Associate (PL-300)</div>
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
}
.cert-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(99,102,241,0.08)}

@media (max-width:767px){
  .exp-card{padding:18px}
  .cert-card{padding:14px;font-size:15px}
}
</style>