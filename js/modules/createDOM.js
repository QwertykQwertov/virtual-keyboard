import { createKeys } from "./createKeys.js";
import { arrSymbols } from './keybordSymbols.js'

export function createDOM() {
  // Создание контейнера
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  // Создание заголовка
  const title = document.createElement("h1");
  title.textContent = "Виртуальная клавиатура"
  title.classList.add("title")
  containerDiv.appendChild(title);

  // Создание текстового поля
  const textarea = document.createElement("textarea");
  textarea.classList.add("textarea")
  textarea.setAttribute("id", "textarea")
  textarea.setAttribute("rows", "5")
  textarea.setAttribute("cols", "50")
  containerDiv.appendChild(textarea)

  // Создание блока клавиатуры
  const keyboard = document.createElement("div")
  keyboard.classList.add("keyboard")
  keyboard.setAttribute("id", "keyboard");
  containerDiv.appendChild(keyboard);

  // Создание подписи с информацией об ОС
  const osTitle = document.createElement("p");
  osTitle.textContent = "Клавиатура создана в операционной системе Windows"
  osTitle.classList.add("description")
  containerDiv.appendChild(osTitle);

  // Создание инструкции для смены раскладки
  const instruction = document.createElement("p")
  instruction.innerText = "Для переключения языка комбинация: левыe ctrl + alt"
  instruction.classList.add("language")
  containerDiv.appendChild(instruction)

  // Вставка контейнера на страницу
  document.body.appendChild(containerDiv)
  
  // Заполнение клавиатуры
  createKeys(keyboard, arrSymbols)
  console.log('work')
}