import Swiper from 'swiper'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-fade'

const dots = []
const counts = []
const swipers = []
const controls = []
const radioButtons = []

document.querySelectorAll('[data-dots]').forEach((el) => {
  dots.push(el)
})
document.querySelectorAll('[data-count]').forEach((el) => {
  counts.push(el)
})
document.querySelectorAll('[data-control]').forEach((el) => {
  controls.push(el)
})
document.querySelectorAll('[name=slider-radio]').forEach((el) => {
  radioButtons.push(el)
})

const optionsSwiper = {
  modules: [Pagination, Autoplay, EffectFade],
  enabled: false,
  direction: 'horizontal',
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    bulletElement: 'div',
    bulletActiveClass:
      'md:after:w-2 md:after:h-2 after:h-1 after:w-1 after:bg-white after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2',
    bulletClass:
      'relative cursor-pointer w-4 h-4 md:w-6 md:h-6 border-white rounded-full border-2',
  },
}

document.querySelectorAll('[data-swiper]').forEach((el, i) => {
  swipers.push(
    new Swiper(el, {
      ...optionsSwiper,
      enabled: i === 2 ? true : false,
      pagination: { el: dots[i], ...optionsSwiper.pagination },
    })
  )
})

const changeCount = (el, count, counts) => {
  el.innerHTML = `${count} / ${counts}`
}

const changeSlide = (swiperIndx, slide) => {
  swipers[swiperIndx].slideTo(slide)
}

const changeStyles = (swiperIndx, curentIndx) => {
  const items = controls[swiperIndx].children

  for (let i = 0; i < items.length; i++) {
    const el = items[i]
    const title = el.querySelector('h4')
    const svg = el.querySelector('svg')
    const text = el.querySelector('p')

    const isCurrent = i === curentIndx

    el.classList.toggle('border-main', isCurrent)
    el.classList.toggle('text-main', isCurrent)
    el.classList.toggle('border-gray-light', !isCurrent)
    el.classList.toggle('text-gray', !isCurrent)
    title.classList.toggle('font-bold', isCurrent)
    title.classList.toggle('font-light', !isCurrent)
    svg?.classList.toggle('block', isCurrent)
    svg?.classList.toggle('hidden', !isCurrent)
    text?.classList.toggle('block', isCurrent)
    text?.classList.toggle('hidden', !isCurrent)
  }
}

controls.forEach((el, swiperIndx) => {
  el.querySelectorAll('li').forEach((anchor, indx) => {
    anchor.addEventListener('click', function () {
      changeSlide(swiperIndx, indx)
    })
  })
})

swipers.forEach((swiper, indx) => {
  swiper.on('slideChange', function () {
    changeStyles(indx, this.realIndex)
    changeCount(counts[indx], this.realIndex + 1, this.slides.length)
  })
})

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener('click', (e) => {
    const currentSwiper = swipers[index]
    const otherSwiper = swipers[index === 0 ? 1 : 0]
    const currentControls = controls[index]
    const otherControls = controls[index === 0 ? 1 : 0]
    const currentDots = dots[index]
    const otherDots = dots[index === 0 ? 1 : 0]
    const currentCounts = counts[index]
    const otherCounts = counts[index === 0 ? 1 : 0]
    const currentDataSwiper = document.querySelectorAll('[data-swiper]')[index]
    const otherDataSwiper =
      document.querySelectorAll('[data-swiper]')[index === 0 ? 1 : 0]

    currentSwiper.enable()
    currentSwiper.autoplay.resume()
    currentSwiper.slideTo(0)
    otherSwiper.disable()
    currentControls.classList.remove('hidden')
    currentDataSwiper.classList.remove('hidden')
    currentCounts.classList.remove('hidden')
    currentDots.classList.remove('hidden')
    otherControls.classList.add('hidden')
    otherDataSwiper.classList.add('hidden')
    otherCounts.classList.add('hidden')
    otherDots.classList.add('hidden')
  })
})

const isMobileDevice = () => window.innerWidth <= 768

const handleAutoplay = () => {
  swipers.forEach((swiper) => {
    if (isMobileDevice()) {
      swiper.autoplay.stop()
    } else {
      swiper.autoplay.start()
    }
  })
}

window.addEventListener('resize', function () {
  handleAutoplay()
})

if (radioButtons[0]) {
  radioButtons[0].click()
}

handleAutoplay()
