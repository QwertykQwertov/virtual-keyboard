
import { createDOM } from './modules/createDOM.js'
import {keyUpHandler, keyDownHandler, mouseUpHandler, mouseDownHandler} from './modules/handlers.js'

// console.log(arrSymbols)
createDOM()
document.addEventListener("keyup", keyUpHandler)
document.addEventListener("keydown", keyDownHandler)
document.addEventListener("mouseup", mouseUpHandler)
document.addEventListener("mousedown", mouseDownHandler)