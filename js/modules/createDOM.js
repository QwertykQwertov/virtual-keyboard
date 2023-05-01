export function createDOM(e) {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  const title = document.createElement("h1");
  title.textContent = "RSS Виртуальная клавиатура"
  title.classList.add("title")
  containerDiv.appendChild(title);

  const textarea = document.createElement("textarea");
  textarea.classList.add("textarea")
  textarea.setAttribute("id", "textarea")
  textarea.setAttribute("rows", "5")
  textarea.setAttribute("cols", "50")
  containerDiv.appendChild(textarea)

  const keyboard = document.createElement("div")
  keyboard.classList.add("keyboard")
  keyboard.setAttribute("id", "keyboard");
  // const c = document.createDocumentFragment();
  // for (let s = 0; s < e.length; s += 1) {
  //   const a = document.createElement("div");
  //   a.classList.add("keyboard--row", "row");
  //   for (let t = 0; t < e[s].length; t += 1) {
  //     const c = document.createElement("div");
  //     c.classList.add("keyboard--key", "key", e[s][t].className);
  //     const n = document.createElement("span");
  //     n.classList.add("rus", "hidden"),
  //       n.insertAdjacentHTML("afterBegin", `<span class="caseDown hidden">${e[s][t].rus.caseDown}</span>`),
  //       n.insertAdjacentHTML("beforeEnd", `<span class="caseUp hidden">${e[s][t].rus.caseUp}</span>`),
  //       n.insertAdjacentHTML("beforeEnd", `<span class="caps hidden">${e[s][t].rus.caps || e[s][t].rus.caseUp}</span>`),
  //       n.insertAdjacentHTML("beforeEnd", `<span class="shiftCaps hidden">${e[s][t].rus.shiftCaps || e[s][t].rus.caseDown}</span>`),
  //       c.appendChild(n);
  //     const i = document.createElement("span");
  //     i.classList.add("eng"),
  //       i.insertAdjacentHTML("afterBegin", `<span class="caseDown">${e[s][t].eng.caseDown}</span>`),
  //       i.insertAdjacentHTML("beforeEnd", `<span class="caseUp hidden">${e[s][t].eng.caseUp}</span>`),
  //       i.insertAdjacentHTML("beforeEnd", `<span class="caps hidden">${e[s][t].eng.caps || e[s][t].eng.caseUp}</span>`),
  //       i.insertAdjacentHTML("beforeEnd", `<span class="shiftCaps hidden">${e[s][t].eng.shiftCaps || e[s][t].eng.caseDown}</span>`),
  //       c.appendChild(i),
  //       a.appendChild(c)
  //   }
  //   c.appendChild(a)
  // }
  // this.element.appendChild(c),
    containerDiv.appendChild(keyboard);
  const osTitle = document.createElement("p");
  osTitle.textContent = "Клавиатура создана в операционной системе Windows",
  osTitle.classList.add("description"),
  containerDiv.appendChild(osTitle);

  const instruction = document.createElement("p")
  instruction.innerText = "Для переключения языка комбинация: левыe ctrl + alt"
  instruction.classList.add("language")
  containerDiv.appendChild(instruction)

  document.body.appendChild(containerDiv)
  console.log('work')
}