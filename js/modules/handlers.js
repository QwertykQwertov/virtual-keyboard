export function keyDownHandler(e) {
  e.preventDefault()

  const active = document.getElementsByClassName(e.code)
  if (active[0].classList.contains('CapsLock')) {
    active[0].classList.toggle('active')
    return
  }
  active[0].classList.add('active')
}
export function keyUpHandler(e) {
  const active = document.getElementsByClassName('active')
  if (e.code !== 'CapsLock') {
    active[0].classList.remove('active')
  }
}
export function mouseDownHandler(e) {
  console.log(e)
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