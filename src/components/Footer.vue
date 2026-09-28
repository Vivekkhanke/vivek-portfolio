<template>
  <footer id="contact" class="footer">
    <div class="section cta">
      <span v-reveal class="eyebrow">Get in touch</span>
      <h2 v-reveal="{ dir: 'zoom', delay: 100 }" class="big">
        Let's build <span class="gradient-text">data pipelines</span> that scale.
      </h2>
      <p v-reveal="{ delay: 200 }" class="sub">
        Open to Data Engineering roles and collaborations on Azure, Databricks and ETL modernization.
      </p>
      <div v-reveal="{ delay: 300 }" class="actions">
        <a class="btn btn-primary" href="https://www.linkedin.com/in/vivek-khanke/" target="_blank" rel="noopener">Connect on LinkedIn</a>
        <a class="btn btn-ghost" :href="`mailto:${email}`">
          <svg class="gmail" viewBox="52 42 88 66" width="20" height="15" aria-hidden="true">
            <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
            <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
            <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
            <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
            <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
          </svg>
          {{ email }}
        </a>
        <a class="btn btn-ghost" href="https://github.com/Vivekkhanke" target="_blank" rel="noopener">GitHub</a>
        <a class="btn btn-ghost" href="/Vivek_Khanke_CV.pdf" download>Download CV</a>
      </div>
    </div>

    <div class="bottom">
      <span>© {{ year }} Vivek Khanke</span>
      <div class="socials">
        <a href="https://www.linkedin.com/in/vivek-khanke/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
        </a>
        <a href="https://github.com/Vivekkhanke" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"/></svg>
        </a>
        <a :href="`mailto:${email}`" aria-label="Email">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const email = 'vivekkhanke123@gmail.com'
</script>

<style scoped>
.footer {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--border);
  background: linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.08));
}
.cta { text-align: center; }
.cta .eyebrow { justify-content: center; }
.big {
  font-size: clamp(36px, 6.5vw, 76px);
  line-height: 1.05;
  margin: 0 auto 24px;
  max-width: 900px;
}
.sub { color: var(--muted); font-size: 17px; line-height: 1.7; max-width: 560px; margin: 0 auto 36px; }
.actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 14px; }

.bottom {
  max-width: 1160px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  border-top: 1px solid var(--border);
}
.gmail { flex-shrink: 0; }
.socials { display: flex; gap: 6px; }
.socials a {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: var(--muted);
  transition: color 0.3s, background 0.3s;
}
.socials a:hover { color: var(--text); background: rgba(255, 255, 255, 0.08); }
</style>
