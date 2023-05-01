export function createKeys(keyboard, arrayRow) {
  arrayRow.forEach(el => {
    const row = document.createElement("div");
    row.classList.add("row");
    row.appendChild(setKeysInRow(el))
    keyboard.appendChild(row)
  });
}

function setKeysInRow(el) {
  const wrapper = document.createDocumentFragment();

  el.forEach(keyObj => {
    const key = document.createElement("div");
    key.classList.add("key", keyObj.bind);

    const ruSymbol = document.createElement("span");
    ruSymbol.classList.add("ru", "hidden")
    ruSymbol.insertAdjacentHTML("beforeEnd", `<span class="caseDown hidden">${keyObj.ru.caseDown}</span>`)
    ruSymbol.insertAdjacentHTML("beforeEnd", `<span class="caseUp hidden">${keyObj.ru.caseUp}</span>`)
    ruSymbol.insertAdjacentHTML("beforeEnd", `<span class="caps hidden">${keyObj.ru.caps || keyObj.ru.caseUp}</span>`)
    ruSymbol.insertAdjacentHTML("beforeEnd", `<span class="shiftCaps hidden">${keyObj.ru.shiftCaps || keyObj.ru.caseDown}</span>`)
    key.appendChild(ruSymbol);

    const enSymbol = document.createElement("span");
    enSymbol.classList.add("en")
    enSymbol.insertAdjacentHTML("beforeEnd", `<span class="caseDown">${keyObj.en.caseDown}</span>`)
    enSymbol.insertAdjacentHTML("beforeEnd", `<span class="caseUp hidden">${keyObj.en.caseUp}</span>`)
    enSymbol.insertAdjacentHTML("beforeEnd", `<span class="caps hidden">${keyObj.en.caps || keyObj.en.caseUp}</span>`)
    enSymbol.insertAdjacentHTML("beforeEnd", `<span class="shiftCaps hidden">${keyObj.en.shiftCaps || keyObj.en.caseDown}</span>`)
    key.appendChild(enSymbol);
    wrapper.appendChild(key)
  })
  return wrapper
}