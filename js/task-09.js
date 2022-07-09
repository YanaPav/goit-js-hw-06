function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body
const changeColorBtn = document.querySelector('.change-color')
const colorText = document.querySelector('.color')


const onChangeColorBtnClick = () => {
  const currentColor = getRandomHexColor()
  body.style.backgroundColor = currentColor
  colorText.textContent = currentColor
}

changeColorBtn.addEventListener('click', onChangeColorBtnClick)
