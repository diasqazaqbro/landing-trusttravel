import axios from 'axios'
import { gsap } from 'gsap'
import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'

// Store
const store = reactive({
  form: {
    project: 'Дизайн проект интерьера',
    city: 'Алматы',
    square: 50,
    name: '',
    phone: '',
  },
  fetchResult: {
    faq: {
      oneTitle: 'loading...',
      oneSupTitle: 'loading...',
      twoTitle: 'loading...',
      twoSupTitle: 'loading...',
      threeTitle: 'loading...',
      threeSupTitle: 'loading...',
    },
    objects: {
      mainNumber: 0,
      numberOne: 0,
      numberTwo: 0,
      numberThree: 0,
    },
    partners: {
      accent: 0,
      title: 0,
      desc: 0,
    },
    services: {
      oneTitle: 'loading...',
      oneSupTitle: 'loading...',
      oneDesc: 'loading...',
      twoTitle: 'loading...',
      twoSupTitle: 'loading...',
      twoDesc: 'loading...',
      threeTitle: 'loading...',
      threeSupTitle: 'loading...',
      threeDesc: 'loading...',
      fourTitle: 'loading...',
      fourSupTitle: 'loading...',
      fourDesc: 'loading...',
    },
    price: {
      oneTitle: 'loading...',
      oneSupTitle: 'loading...',
      oneDesc: 'loading...',
      twoTitle: 'loading...',
      twoSupTitle: 'loading...',
      twoDesc: 'loading...',
      threeTitle: 'loading...',
      threeSupTitle: 'loading...',
      threeDesc: 'loading...',
      fourTitle: 'loading...',
      fourSupTitle: 'loading...',
      fourDesc: 'loading...',
    },
    settings: { number: 'loading...' },
    stages: {
      oneTitle: 'loading...',
      oneDesc: 'loading...',
      twoTitle: 'loading...',
      twoDesc: 'loading...',
      threeTitle: 'loading...',
      threeDesc: 'loading...',
      fourTitle: 'loading...',
      fourDesc: 'loading...',
      fiveTitle: 'loading...',
      fiveDesc: 'loading...',
      sixTitle: 'loading...',
      sixDesc: 'loading...',
      sevenTitle: 'loading...',
      sevenDesc: 'loading...',
      eightTitle: 'loading...',
      eightDesc: 'loading...',
    },
    portfolio: {
      oneTitle: 'loading...',
      oneDesc: 'loading...',
      twoTitle: 'loading...',
      twoDesc: 'loading...',
      threeTitle: 'loading...',
      threeDesc: 'loading...',
      fourTitle: 'loading...',
      fourDesc: 'loading...',
      fiveTitle: 'loading...',
      fiveDesc: 'loading...',
      sixTitle: 'loading...',
      sixDesc: 'loading...',
      sevenTitle: 'loading...',
      sevenDesc: 'loading...',
      eightTitle: 'loading...',
      eightDesc: 'loading...',
    },
    footer: {
      address: 'loading...',
      workTime: 'loading...',
      holiday: 'loading...',
      clientNumber: 'loading...',
      clientEmail: 'loading...',
      partnerNumber: 'loading...',
      partnerEmail: 'loading...',
    },
    welcome: {
      welcomeTitle: 'loading...',
      welcomeSupTitle: 'loading...',
      welcomeDesc: 'loading...',
    },
    images: {
      i1: '',
      i2: '',
      i3: '',
      i4: '',
      i5: '',
      i6: '',
      i7: '',
      i8: '',
      i9: '',
      i10: '',
      i11: '',
      i12: '',
      i13: '',
      i14: '',
      i15: '',
      i16: '',
      i17: '',
      i18: '',
      i19: '',
      i20: '',
      i21: '',
      i22: '',
      i23: '',
      i24: '',
      i25: '',
      i26: '',
      i27: '',
      i28: '',
      i29: '',
      i30: '',
      i31: '',
    },
    projects: {
      designTitleOne: 'loading...',
      designTitleTwo: 'loading...',
      designTitleThree: 'loading...',
      designTitleFour: 'loading...',
      designTitleFive: 'loading...',
      aTitleOne: 'loading...',
      aTitleTwo: 'loading...',
      aTitleThree: 'loading...',
    },
  },
  isModalOpen: false,
  anotherProject: '',
  anotherCity: '',
  check: false,
  currentStep: 1,
  errors: [],
  steps: [
    {
      value: 1,
      errorMessage: [{ project: 'Выберте проект' }],
    },
    {
      value: 2,
      errorMessage: [{ city: 'Выберте город' }],
    },
    {
      value: 3,
      errorMessage: [{ name: 'Введите имя' }, { phone: 'Введите телефон' }],
    },
    {
      value: 4,
    },
  ],
  projectOptions: [
    {
      id: 'project-1',
      value: 'Дизайн проект интерьера',
      description: 'Описание проекта',
    },
    {
      id: 'project-2',
      value: 'Архитектурний проект дома',
      description: 'Lorem isa sdadasd sda',
    },
    {
      id: 'project-3',
      value: 'Ремонт под ключ',
      description: 'Lorem isa sdadasd sda',
    },
  ],
  cityOptions: [
    {
      id: 'city-1',
      value: 'Алматы',
      description: 'Lorem isa sdadasd sda',
    },
    {
      id: 'city-2',
      value: 'Астана',
      description: 'Lorem isa sdadasd sda',
    },
    {
      id: 'city-3',
      value: 'Шымкент',
      description: 'Lorem isa sdadasd sda',
    },
  ],
  get isErrors() {
    return this.errors.length > 0
  },
  getStep(step) {
    return this.steps.find((item) => item.value === step)
  },
  fetchData() {
    axios.get('https://hudos-admin.vercel.app/api/faq').then((resp) => {
      const faq = store.fetchResult.faq
      faq.oneTitle = resp.data[0].oneTitle
      faq.oneSupTitle = resp.data[0].oneSupTitle
      faq.twoTitle = resp.data[0].twoTitle
      faq.twoSupTitle = resp.data[0].twoSupTitle
      faq.threeTitle = resp.data[0].threeTitle
      faq.threeSupTitle = resp.data[0].threeSupTitle
    })

    axios.get('https://hudos-admin.vercel.app/api/objects').then((resp) => {
      const objects = store.fetchResult.objects
      const responseData = resp.data[0]
      objects.mainNumber = parseInt(responseData.mainNumber, 10)
      objects.numberOne = parseInt(responseData.numberOne, 10)
      objects.numberTwo = parseInt(responseData.numberTwo, 10)
      objects.numberThree = parseInt(responseData.numberThree, 10)

      this.doNumberAnimations()
    })
    axios.get('https://hudos-admin.vercel.app/api/services').then((resp) => {
      const services = store.fetchResult.services
      services.oneTitle = resp.data[0].oneTitle
      services.oneSupTitle = resp.data[0].oneSupTitle
      services.oneDesc = resp.data[0].oneDesc
      services.twoTitle = resp.data[0].twoTitle
      services.twoSupTitle = resp.data[0].twoSupTitle
      services.twoDesc = resp.data[0].twoDesc
      services.threeTitle = resp.data[0].threeTitle
      services.threeSupTitle = resp.data[0].threeSupTitle
      services.threeDesc = resp.data[0].threeDesc
      services.fourTitle = resp.data[0].fourTitle
      services.fourSupTitle = resp.data[0].fourSupTitle
      services.fourDesc = resp.data[0].fourDesc
    })
    axios.get('https://hudos-admin.vercel.app/api/price').then((resp) => {
      const price = store.fetchResult.price
      price.oneTitle = resp.data[0].oneTitle
      price.oneSupTitle = resp.data[0].oneSupTitle
      price.oneDesc = resp.data[0].oneDesc
      price.twoTitle = resp.data[0].twoTitle
      price.twoSupTitle = resp.data[0].twoSupTitle
      price.twoDesc = resp.data[0].twoDesc
      price.threeTitle = resp.data[0].threeTitle
      price.threeSupTitle = resp.data[0].threeSupTitle
      price.threeDesc = resp.data[0].threeDesc
      price.fourTitle = resp.data[0].fourTitle
      price.fourSupTitle = resp.data[0].fourSupTitle
      price.fourDesc = resp.data[0].fourDesc
    })

    axios.get('https://hudos-admin.vercel.app/api/settings').then((resp) => {
      const settings = store.fetchResult.settings
      settings.number = resp.data[0].number
    })

    axios.get('https://hudos-admin.vercel.app/api/stages').then((resp) => {
      const stages = store.fetchResult.stages
      stages.oneTitle = resp.data[0].oneTitle
      stages.oneDesc = resp.data[0].oneDesc
      stages.twoTitle = resp.data[0].twoTitle
      stages.twoDesc = resp.data[0].twoDesc
      stages.threeTitle = resp.data[0].threeTitle
      stages.threeDesc = resp.data[0].threeDesc
      stages.fourTitle = resp.data[0].fourTitle
      stages.fourDesc = resp.data[0].fourDesc
      stages.fiveTitle = resp.data[0].fiveTitle
      stages.fiveDesc = resp.data[0].fiveDesc
      stages.sixTitle = resp.data[0].sixTitle
      stages.sixDesc = resp.data[0].sixDesc
      stages.sevenTitle = resp.data[0].sevenTitle
      stages.sevenDesc = resp.data[0].sevenDesc
      stages.eightTitle = resp.data[0].eightTitle
      stages.eightDesc = resp.data[0].eightDesc
    })
    axios.get('https://hudos-admin.vercel.app/api/portfolio').then((resp) => {
      const portfolio = store.fetchResult.portfolio
      portfolio.oneTitle = resp.data[0].oneTitle
      portfolio.oneDesc = resp.data[0].oneDesc
      portfolio.twoTitle = resp.data[0].twoTitle
      portfolio.twoDesc = resp.data[0].twoDesc
      portfolio.threeTitle = resp.data[0].threeTitle
      portfolio.threeDesc = resp.data[0].threeDesc
      portfolio.fourTitle = resp.data[0].fourTitle
      portfolio.fourDesc = resp.data[0].fourDesc
      portfolio.fiveTitle = resp.data[0].fiveTitle
      portfolio.fiveDesc = resp.data[0].fiveDesc
      portfolio.sixTitle = resp.data[0].sixTitle
      portfolio.sixDesc = resp.data[0].sixDesc
      portfolio.sevenTitle = resp.data[0].sevenTitle
      portfolio.sevenDesc = resp.data[0].sevenDesc
      portfolio.eightTitle = resp.data[0].eightTitle
      portfolio.eightDesc = resp.data[0].eightDesc
    })
    axios.get('https://hudos-admin.vercel.app/api/projects').then((resp) => {
      const projects = store.fetchResult.projects
      projects.designTitleOne = resp.data[0].designTitleOne
      projects.designTitleTwo = resp.data[0].designTitleTwo
      projects.designTitleThree = resp.data[0].designTitleThree
      projects.designTitleFour = resp.data[0].designTitleFour
      projects.designTitleFive = resp.data[0].designTitleFive
      projects.aTitleOne = resp.data[0].aTitleOne
      projects.aTitleTwo = resp.data[0].aTitleTwo
      projects.aTitleThree = resp.data[0].aTitleThree
    })
    axios.get('https://hudos-admin.vercel.app/api/footer').then((resp) => {
      const footer = store.fetchResult.footer
      footer.address = resp.data[0].address
      footer.workTime = resp.data[0].workTime
      footer.holiday = resp.data[0].holiday
      footer.clientNumber = resp.data[0].clientNumber
      footer.clientEmail = resp.data[0].clientEmail
      footer.partnerNumber = resp.data[0].partnerNumber
      footer.partnerEmail = resp.data[0].partnerEmail
    })

    axios.get('https://hudos-admin.vercel.app/api/welcome').then((resp) => {
      const welcome = store.fetchResult.welcome
      welcome.welcomeTitle = resp.data[0].welcomeTitle
      welcome.welcomeSupTitle = resp.data[0].welcomeSupTitle
      welcome.welcomeDesc = resp.data[0].welcomeDesc
    })
    axios.get('https://hudos-admin.vercel.app/api/partners').then((resp) => {
      const partners = store.fetchResult.partners
      partners.accent = resp.data[0].accent
      partners.title = resp.data[0].title
      partners.desc = resp.data[0].desc
    })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=1')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i1 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=2')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i2 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=3')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i3 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=4')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i4 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=5')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i5 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=6')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i6 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=7')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i7 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=8')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i8 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=9')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i9 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=10')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i10 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=11')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i11 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=12')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i12 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=13')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i13 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=14')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i14 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=15')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i15 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=16')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i16 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=17')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i17 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=18')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i18 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=19')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i19 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=20')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i20 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=21')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i21 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=22')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i22 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=23')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i23 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=24')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i24 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=25')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i25 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=26')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i26 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=27')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i27 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=28')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i28 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=29')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i29 = path
      })
    axios
      .get('https://timkaqwerty.pythonanywhere.com/hds/img/?id=30')
      .then((resp) => {
        const images = store.fetchResult.images
        const path = resp.data.results.path
        images.i30 = path
      })
  },
  doNumberAnimations() {
    const projects = document.querySelector('#projects')

    const projectsObserver = new IntersectionObserver(
      (entries, observe) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            store.animateCounter()
            observe.unobserve(projects)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (projects) {
      projectsObserver.observe(projects)
    }
  },
  animateCounter() {
    const counters = document.querySelectorAll('[data-number]')

    if (counters.length) {
      gsap.to(counters, {
        textContent: (_, el) => el.dataset.counter,
        duration: 2,
        ease: 'expo.out',
        snap: { textContent: 1 },
      })
    }
  },
  checkErrors(step) {
    this.clearError()
    const findStep = this.getStep(step)

    findStep.errorMessage.forEach((item) => {
      Object.keys(item).forEach((key) => {
        const hasError = this.errors.find((item) => item.key === key)
        const isValue = this.form[key] === ''

        if (isValue && hasError) {
          return
        }

        if (isValue && !hasError) {
          this.errors.push({
            key,
            message: item[key],
          })
          return
        }

        this.errors = this.errors.filter((item) => item.key !== key)
      })
    })
  },
  moveStep(step) {
    if (step < this.currentStep) {
      this.currentStep = step
      this.clearError()
      return
    }

    this.checkErrors(step)
    if (this.isErrors) {
      return
    }

    if (this.currentStep === this.getStep(3).value) {
      // Submit form
      console.log(store.form)
      this.resetForm()

      setTimeout(() => {
        this.closeModal()
      }, 2000)
    }

    const findStep = this.getStep(step)
    this.currentStep = findStep.value + 1
  },
  changeAnotherOption(value, key, anotherVal) {
    this.form[key] = value.trim()
    this[anotherVal] = value.trim()
    this.clearError()
  },
  changeProject() {
    this.anotherProject = ''
    this.clearError()
  },
  changeCity() {
    this.anotherCity = ''
    this.clearError()
  },
  showModal(step) {
    this.isModalOpen = true

    if (step) {
      this.moveStep(step)
    }
  },
  closeModal() {
    this.isModalOpen = false
    this.resetForm()
  },
  resetForm() {
    this.form = {
      project: 'Дизайн проект интерьера',
      city: 'Алматы',
      square: 50,
      name: '',
      phone: '',
    }
    this.anotherProject = ''
    this.anotherCity = ''
    this.check = false
    this.currentStep = 1
  },
  clearError() {
    this.errors = []
  },
})
// Components

function Btn({ value }) {
  return {
    $template: '#btn-template',
    value,
  }
}
createApp({
  store,
  Btn,
}).mount()
