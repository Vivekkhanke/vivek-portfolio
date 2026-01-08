<template>
  <section id="about" class="section profile">
    <div class="profile-container">
      <div class="profile-box">
        <h2 class="profile-title">About Me</h2>
        <p class="profile-description">
          Data Engineer with 4 years of experience in designing, developing,
          and optimizing scalable data pipelines on Microsoft Azure.
          Strong expertise in ETL development, Databricks, Delta Lake,
          Oracle SQL, PL/SQL, and Unix scripting.
          Passionate about building secure, high-performance data solutions.
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
  /* Match hero-content available width: hero max-width (1200) - photo(280) - gap(60) = 860px */
  max-width: 860px;
  /* nudge a tiny bit more to the right */
  margin: 0 2px 0 auto;
}

.profile-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  padding: 28px;
  backdrop-filter: blur(10px);
  animation: slideUpFade 640ms cubic-bezier(.2,.9,.2,1) both;
  max-width: 860px;
  width: 100%;
}

.profile-title {
  font-size: 28px;
  margin: 0 0 20px 0;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-description {
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  text-align: left;
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

  .profile-description {
    font-size: 14px;
  }
}

/* entrance animation */
@keyframes slideUpFade {
  from { transform: translateY(12px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* subtle hover lift for about box */
.profile-box:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(59,130,246,0.12); }
</style>
