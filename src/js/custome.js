// Menu
const [openMenuEl, closeMenuEl, menu, scrollUpEl] = [
  '[data-mobile-open]',
  '[data-mobile-close]',
  '[data-menu]',
  '[data-scroll-up]',
].map((selector) => document.querySelector(selector))

if (openMenuEl) {
  openMenuEl.addEventListener('click', () => {
    document.body.classList.add('overflow-hidden')
    menu.classList.remove('md-m:opacity-0', 'md-m:translate-x-full')
  })
}

if (closeMenuEl) {
  closeMenuEl.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden')
    menu.classList.add('md-m:opacity-0', 'md-m:translate-x-full')
  })
}

// Scroll to section
const scrollDown = document.querySelector('[data-scroll]')

if (scrollDown) {
  scrollDown.addEventListener('click', function (e) {
    e.preventDefault()
    const id = this.getAttribute('href')
    const target = document.querySelector(id)

    target.scrollIntoView({ behavior: 'smooth' })
  })
}

// Scroll up
if (scrollUpEl) {
  scrollUpEl.addEventListener('click', (e) => {
    e.preventDefault()

    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

let lastScrollTop = 0
function checkScroll() {
  const currentScrollTop = window.scrollY
  const windowHeight = parseInt(window.innerHeight / 2)

  if (currentScrollTop > windowHeight && currentScrollTop < lastScrollTop) {
    scrollUpEl.classList.remove('opacity-0', '-z-10')
    scrollUpEl.classList.add('z-10')
  } else {
    scrollUpEl.classList.remove('z-10')
    scrollUpEl.classList.add('opacity-0', '-z-10')
  }
  lastScrollTop = currentScrollTop
}

//Event listener for scroll
window.addEventListener('scroll', checkScroll)
