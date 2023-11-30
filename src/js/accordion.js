const servicesAcc = document.querySelectorAll('[data-trigger="services"]')
const questionsAcc = document.querySelectorAll('[data-trigger="questions"]')

function createAccordion(accordion) {
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function (e) {
      for (let j = 0; j < accordion.length; j++) {
        if (j !== i) {
          accordion[j]
            .querySelector('[data-icon]')
            .classList.remove('before:scale-0')
          accordion[j].nextElementSibling.style.maxHeight = null
        }
      }

      this.querySelector('[data-icon]').classList.toggle('before:scale-0')
      const panel = this.nextElementSibling
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px'
      }
    })

    if (i === 0) {
      accordion[i].click()
    }
  }
}

createAccordion(servicesAcc)
createAccordion(questionsAcc)
