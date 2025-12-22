// Lightweight IntersectionObserver to reveal cards with a stagger
const selectors = ['.skill-card', '.cert-card', '.exp-card', '.cert-card', '.card']
const elems = Array.from(document.querySelectorAll(selectors.join(',')))
if (elems.length) {
  elems.forEach((el, i) => {
    el.classList.add('card-animate')
    // stagger using CSS variable
    el.style.setProperty('--delay', `${i * 60}ms`)
  })

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
        // optionally unobserve to avoid re-triggering
        obs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  elems.forEach(e => obs.observe(e))
}

export {}
