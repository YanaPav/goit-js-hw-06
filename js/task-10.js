function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls input")
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const collection = document.querySelector("#boxes")

let amount = 0

input.addEventListener('input', getInputValue)
createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)
window.addEventListener('keydown', keyDownFunc)


function getInputValue(event) {
  if (event.currentTarget.value === '' || event.currentTarget.value === '0') {
    return
  }
  amount = event.currentTarget.value
  // console.log(amount)  
}

function keyDownFunc(event) {
  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
    createBoxes()
  }
    
}

function createBoxes() {
  
  if (amount === 0) {
    console.log('Введіть число')
    return
  }

  let collectionEl = ''
  // const randomColor = getRandomHexColor() - якщо потрыбно зробити однаковий колыр для всых боксів

  for (let i = 0; i < amount; i += 1) {        
    collectionEl += `<div style="width: ${30+i*10}px; height: ${30+i*10}px; background-color: ${getRandomHexColor()}"></div>`
  }

  // console.log(collectionEl)
  collection.innerHTML = collectionEl
  input.value = ''
  amount = 0
}

function destroyBoxes() {
  collection.innerHTML = ''
}







  
