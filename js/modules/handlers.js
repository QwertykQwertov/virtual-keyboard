const ischangeLanguage = {
  pressAlt: false,
  pressCtrl: false,
  lang: 'en'
}
let caps = false

export function keyDownHandler(e) {
  e.preventDefault()
  const active = document.getElementsByClassName(e.code)
  if (active[0].classList.contains('CapsLock')) {
    active[0].classList.toggle('active')
    caps = !caps
    return
  } else if (active[0].classList.contains('AltLeft') || active[0].classList.contains('AltRight')) {
    ischangeLanguage.pressAlt = true
  } else if (active[0].classList.contains('ControlLeft') || active[0].classList.contains('ControlRight')) {
    ischangeLanguage.pressCtrl = true
  }

  if (ischangeLanguage.pressAlt && ischangeLanguage.pressCtrl) {
    toggleLang()
  }
  active[0].classList.add('active')
}

export function keyUpHandler() {
  const active = [...document.getElementsByClassName('active')]
  if (active[0]?.classList.contains('AltLeft') || active[0]?.classList.contains('AltRight')) {
    console.log(active[0]?.classList, ischangeLanguage)
    ischangeLanguage.pressAlt = false
  } else if (active[0]?.classList.contains('ControlLeft') || active[0]?.classList.contains('ControlRight')) {
    console.log(active[0]?.classList, ischangeLanguage)
    ischangeLanguage.pressCtrl = false
  }
  active.forEach((el, index) => {
    if (!el.classList.contains('CapsLock')) {
      active[index].classList.remove('active')
    }
  })
}
export function mouseDownHandler(e) {
  if (e.target.tagName === 'SPAN') {
    const active = e.target.closest("div")
    if (active.classList.contains('CapsLock')) {
      active.classList.toggle('active')
      return
    }
    active.classList.add('active')
  }
}
export function mouseUpHandler(e) {
  const active = e.target.closest("div")
  if (active.classList.contains('CapsLock')) {
    return
  }
  active.classList.remove('active')
}



function toggleLang() {
  ischangeLanguage.pressAlt = false
  ischangeLanguage.pressCtrl = false

  ischangeLanguage.lang = (ischangeLanguage.lang === 'ru') ? 'en' : 'ru'
  console.log('LanguageChange', ischangeLanguage.lang)

  const keysRu = [...document.getElementsByClassName('ru')]
  const keysEn = [...document.getElementsByClassName('en')]
  keysRu.forEach(key => {
    if (key.closest("div").classList.contains('CapsLock')) return
    key.classList.toggle('hidden')
    if (ischangeLanguage.lang === 'ru') {
      if (caps) {
        key.getElementsByClassName('caseUp')[0].classList.remove('hidden')
        return
      } else {
        key.getElementsByClassName('caseDown')[0].classList.remove('hidden')
      }
    } else {
      if (!key.classList.contains('hidden')) {
        key.classList.add('hidden')
      }
    }
  })
  keysEn.forEach(key => {
    if (key.closest("div").classList.contains('CapsLock')) return
    key.classList.toggle('hidden')
    if (ischangeLanguage.lang === 'en') {
      if (caps) {
        key.getElementsByClassName('caseUp')[0].classList.remove('hidden')
        return
      } else {
        key.getElementsByClassName('caseDown')[0].classList.remove('hidden')
      }
    } else {
      if (!key.classList.contains('hidden')) {
        key.classList.add('hidden')
      }
    }
  })
}