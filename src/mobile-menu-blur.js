/* Minimal JS to toggle a mobile overlay blur when hamburger (.burger) is clicked.
   - Appends a single overlay element to document.body when needed
   - Toggles .mobile-menu-overlay.visible
   - Also toggles the existing `.links.open` class (so menu opens/closes if your markup uses it)
   - Works only on mobile (max-width: 767px)
   - Clicking the overlay closes the menu (bonus)
*/

(function () {
  const MOBILE_QUERY = '(max-width: 767px)'
  const mq = window.matchMedia(MOBILE_QUERY)
  let overlay = null

  function createOverlay() {
    if (overlay) return overlay
    overlay = document.createElement('div')
    overlay.className = 'mobile-menu-overlay'
    document.body.appendChild(overlay)
    // click outside closes menu
    overlay.addEventListener('click', () => {
      closeMenu()
    })
    return overlay
  }

  function openMenu() {
    if (!mq.matches) return
    createOverlay().classList.add('visible')
    const links = document.querySelector('.links')
    if (links && !links.classList.contains('open')) links.classList.add('open')
  }

  function closeMenu() {
    if (overlay) overlay.classList.remove('visible')
    const links = document.querySelector('.links')
    if (links && links.classList.contains('open')) links.classList.remove('open')
  }

  function toggleMenu() {
    if (!mq.matches) return
    const links = document.querySelector('.links')
    const isOpen = links && links.classList.contains('open')
    if (isOpen) closeMenu()
    else openMenu()
  }

  // delegate burger clicks
  document.addEventListener('click', (ev) => {
    const btn = ev.target.closest && ev.target.closest('.burger')
    if (btn) {
      ev.preventDefault()
      toggleMenu()
    }
  }, { passive: true })

  // ensure overlay is removed/hidden when resizing to desktop
  const mqHandler = (e) => {
    if (!e.matches) closeMenu()
  }
  if (mq.addEventListener) mq.addEventListener('change', mqHandler)
  else if (mq.addListener) mq.addListener(mqHandler)

  // defensive: remove overlay on page hide/unload
  window.addEventListener('pagehide', () => { closeMenu() })
  window.addEventListener('beforeunload', () => { closeMenu() })
})()
