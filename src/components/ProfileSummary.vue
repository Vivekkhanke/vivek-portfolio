<template>
  <section id="about" class="section profile">
    <div class="profile-container">
      <div class="profile-box">
        <h2 class="profile-title">About Me</h2>

        <p class="profile-description fade-item">
          I am a <strong>Data Engineer</strong> with over <strong>4+ years of experience</strong> in designing, developing,
          and optimizing scalable data pipelines on <strong>Microsoft Azure</strong>. I specialize in
          <strong>ETL development</strong>, <strong>Azure Databricks</strong>, <strong>Delta Lake</strong>,
          <strong>Oracle SQL/PLSQL</strong>, <strong>Python</strong>, and <strong>Unix scripting</strong>.
        </p>

        <p class="about-text fade-item">
          I am passionate about building <strong>secure, reliable, and high-performance data solutions</strong>
          that enable business-critical analytics and informed decision-making.
        </p>

        <p class="about-text fade-item">
          I have worked extensively on the <strong>LeasePlan project</strong>, contributing to end-to-end data
          engineering and cloud migration initiatives. My responsibilities included developing ETL workflows
          using <strong>IBM DataStage</strong>, performing data analysis, and working with
          <strong>Oracle databases</strong>.
        </p>

        <p class="about-text fade-item">
          As part of the cloud migration, I helped move on-premise workloads to
          <strong>Azure Data Factory</strong> and <strong>Azure Databricks</strong>. I also played a key role
          in infrastructure provisioning using <strong>Terraform</strong>, following
          infrastructure-as-code best practices.
        </p>

        <p class="about-text fade-item">
          During the migration phase, I developed <strong>Python scripts</strong> to extract data from Oracle
          and load it into <strong>Azure SQL Database</strong> and <strong>Databricks</strong>. Additionally,
          I implemented <strong>Azure Key Vault</strong> integrations in Python and Perl programs to securely
          manage credentials and secrets.
        </p>

      </div>
    </div>
  </section>
</template>

<style scoped>
.profile {
  padding: 40px 20px;
}

.profile-container {
  max-width: 1100px;
  margin: 0 auto;
}

.profile-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  padding: 28px;
  backdrop-filter: blur(10px);
  animation: slideUpFade 640ms cubic-bezier(.2,.9,.2,1) both;
  max-width: 1100px;
  width: 100%;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.profile-title {
  font-size: 28px;
  margin: 0 0 20px 0;
  font-weight: 700;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.profile-description,
.about-text {
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 14px 0;
  transition: color 0.3s ease;
}

/* fade-in items */
.fade-item {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.7s ease forwards;
}

.fade-item:nth-child(2) { animation-delay: 0.1s; }
.fade-item:nth-child(3) { animation-delay: 0.2s; }
.fade-item:nth-child(4) { animation-delay: 0.3s; }
.fade-item:nth-child(5) { animation-delay: 0.4s; }
.fade-item:nth-child(6) { animation-delay: 0.5s; }

/* hover effect */
.profile-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(59,130,246,0.12);
}

/* animations */
@keyframes slideUpFade {
  from { transform: translateY(12px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 768px) {
  .profile {
    padding: 30px 15px;
  }

  .profile-box {
    padding: 25px;
  }

  .profile-title {
    font-size: 22px;
  }

  .profile-description,
  .about-text {
    font-size: 14px;
  }
}
</style>
