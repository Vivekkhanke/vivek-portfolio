<template>
  <footer class="footer fade">
    <div class="icons">
      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/vivek-khanke/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24">
          <path
            d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5
               1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4zM8.5
               8.5h3.8v2.1h.1c.5-1 1.9-2.1 3.9-2.1 4.2 0 5 2.8
               5 6.5V24h-4v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9
               4V24h-4z"
          />
        </svg>
      </a>

      <!-- GitHub -->
      <a href="https://github.com" target="_blank" aria-label="GitHub">
        <svg viewBox="0 0 24 24">
          <path
            d="M12 .5C5.7.5.5 5.8.5 12.3c0 5.2 3.4 9.6
               8.2 11.2.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4
               -.6-1.6-1.4-2-1.4-2-1.2-.9.1-.9.1-.9
               1.3.1 2 1.4 2 1.4 1.2 2 3.1 1.4
               3.8 1.1.1-.9.5-1.4.9-1.7-2.6-.3-5.4
               -1.3-5.4-5.9 0-1.3.5-2.4 1.3-3.3
               -.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4
               1.3a11.7 11.7 0 0 1 6.2 0c2.4-1.6
               3.4-1.3 3.4-1.3.7 1.7.2 3 .1
               3.3.8.9 1.3 2 1.3 3.3
               0 4.6-2.8 5.6-5.4
               5.9.5.4 1 1.2 1 2.4v3.6
               c0 .3.2.7.8.6
               4.8-1.6 8.2-6
               8.2-11.2C23.5
               5.8 18.3.5 12 .5z"
          />
        </svg>
      </a>

      <!-- Gmail (Correct Logo) -->
      <a href="mailto:vivekkhanke123@gmail.com" aria-label="Gmail">
        <svg viewBox="0 0 24 24">
          <path
            fill="#EA4335"
            d="M12 13.065L2 6.5V18a1 1 0 001 1h3V9.5l6 3.565 6-3.565V19h3a1 1 0 001-1V6.5l-10 6.565z"
          />
          <path
            fill="#EA4335"
            d="M21 5.5a1 1 0 00-1-1h-1l-7 4.565L5 4.5H4a1 1 0 00-1 1v.217L12 11.5l9-5.783V5.5z"
          />
        </svg>
      </a>

      <!-- Phone -->
      <a href="tel:9130367814" aria-label="Phone">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1
               c.3-.3.8-.4 1.2-.3 1 .3 2.1.5 3.3.5
               .7 0 1.5.8 1.5 1.5V21
               c0 .7-.8 1.5-1.5 1.5
               C10.5 22.5 1.5 13.5 1.5 2
               1.5 1.3 2.3.5 3 .5H7
               c.7 0 1.5.8 1.5 1.5
               0 1.2.2 2.3.5 3.3
               .1.4 0 .9-.3 1.2L6.6 10.8z"
          />
        </svg>
      </a>
    </div>

    <p class="footer-copy">© 2025 Vivek Khanke</p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 26px 0;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.icons {
  display: flex;
  justify-content: center;
  gap: 22px;
  margin-bottom: 14px;
}

.icons a {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  transition: all 0.3s ease;
}

.icons svg {
  width: 20px;
  height: 20px;
}

.icons a:hover {
  transform: translateY(-4px) scale(1.1);
  background: rgba(99, 102, 241, 0.35);
  box-shadow: 0 0 18px rgba(99, 102, 241, 0.5);
}

.footer-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.footer-copy {
  font-size: 13px;
  opacity: 0.7;
}

.fade {
  animation: fadeUp 0.8s ease forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
