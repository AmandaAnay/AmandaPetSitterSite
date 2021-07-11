/* --- Opens and closes the menu when you click on the icons: hamburger and close --- */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* --- When clicking on menu´s items, hide the menu --- */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* --- Show a shadow on page's header when scrolling --- */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    /* --- Scroll is bigger than header's height --- */
    header.classList.add('scroll')
  } else {
    /* --- Scroll is smaller than header's height --- */
    header.classList.remove('scroll')
  }
}

/* --- Testimonials carousel slider Swiper --- */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* --- Scroll Reveal - Show elements when scrolling the page --- */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  footer .brand, footer .ongs
  `,
  { interval: 100 }
)

/* --- Back to top button --- */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* --- When scroll --- */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
