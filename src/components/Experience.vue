<template>
  <section id="experience" class="section">
    <h2 class="section-title">Professional Work Experience</h2>

    <!-- Atyeti -->
    <div class="exp-card">
      <div class="exp-header">
        <img src="/Atyeti.png" alt="Atyeti Inc" class="company-logo" />
        <div>
          <h3><strong>Atyeti Inc</strong></h3>
          <h6>May 2025 – Present</h6>
        </div>
      </div>

      <ul>
        <li>Created and provisioned Azure resources such as Azure Databricks Workspace, Linux Virtual Machines, and Azure Blob Storage (ADLS Gen2) using Terraform for automated, consistent, and scalable infrastructure deployment.</li>
        <li>Implemented <strong>Bronze–Silver–Gold (Medallion) architecture</strong> for scalable, structured data processing.</li>
        <li>Read raw data files from <strong>Azure Data Lake Storage Gen2</strong> using PySpark in Azure Databricks, performed data cleansing, validation, and transformation.</li>
        <li>Developed and managed <strong>ADF pipelines</strong> supporting <strong>Full Load</strong> and <strong>Delta/Incremental Load</strong> ingestion patterns for enterprise data integration.</li>
        <li>Used <strong>Azure Key Vault</strong> for storing secrets and enabling secure connections across ADF, Databricks, and on-prem sources.</li>
        <li>Built robust Azure Databricks (PySpark) notebooks to read raw files from ADLS Gen2 and perform cleansing, validation, and transformations.</li>
        <li>Performed data cleansing, manipulation, and preprocessing using <strong>Pandas</strong> (merge, groupby, filtering, reshaping, handling missing values).</li>
        <li>Designed reusable <strong>PySpark ETL frameworks</strong> for validation, exception handling, logging, and auditing.</li>
      </ul>
    </div>

    <!-- Hexaware -->
    <div class="exp-card">
      <div class="exp-header">
        <img src="/hexaware.png" alt="Hexaware Technologies" class="company-logo" />
        <div>
          <h3><strong>Hexaware Technologies</strong></h3>
          <h6>March 2022 – May 2025</h6>
        </div>
      </div>

      <ul>
        <li>Developed and managed <strong>ADF pipelines</strong> supporting <strong>Full Load</strong> and <strong>Delta/Incremental Load</strong> ingestion patterns for enterprise data integration.</li>
        <li>Expertise in <strong>IBM DataStage 11.7</strong>, <strong>Oracle SQL/PLSQL</strong>, and Unix Shell scripting and Python.</li>
        <li>Developed a <strong>DataStage sequence job</strong> based on business requirements for <strong>generating invoices</strong>, ensuring automated, accurate, and efficient invoice processing.</li>
        <li>Migrated legacy <strong>IBM DataStage ETL jobs</strong> to <strong>Azure Data Factory (ADF)</strong> by redesigning end-to-end data pipelines, dataflows, dependencies, and scheduling.</li>
        <li>Worked on <strong>IBM DataStage migration</strong> projects, ensuring smooth transition between versions and environments.</li>
        <li>Implemented advanced SQL logic (window functions, subqueries, aggregates).</li>
        <li>Developed and optimized PLSQL triggers, stored procedures, and functions for automation and data integrity.</li>
        <li>Automated ETL job parameters and file handling using Unix shell scripting.</li>
        <li>Worked closely with clients to understand data requirements and deliver ETL solutions.</li>
        <li>Translated business needs into scalable ETL architectures using IBM DataStage and Oracle SQL.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 80px 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

/* Card */
.exp-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  padding: 30px;
  max-width: 900px;
  margin: 0 auto 32px;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

/* Hover interaction */
.exp-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 28px 60px rgba(99, 102, 241, 0.18);
}

/* Header */
.exp-header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
}

.company-logo {
  width: 56px;
  height: 56px;
  object-fit: contain;
  background: #fff;
  border-radius: 12px;
  padding: 6px;
}

h3 {
  margin: 0;
}

h6 {
  margin-top: 4px;
  opacity: 0.75;
  font-weight: 500;
}

/* Bullet list */
ul {
  padding-left: 18px;
}

li {
  margin-bottom: 10px;
  line-height: 1.6;
}

li::marker {
  color: #8b8cff;
}

/* Mobile */
@media (max-width: 767px) {
  .exp-card {
    padding: 20px;
  }

  .company-logo {
    width: 48px;
    height: 48px;
  }
}
</style>
