const text = document.querySelector("#text")
const slider = document.querySelector("#font-size-control")

//задаємо стартовий розмір шрифта відповідно до початкового положення шкали
text.style.fontSize = `${slider.value}px` 

const onInputMove = (event) => {

    text.style.fontSize = `${event.currentTarget.value}px`
}

slider.addEventListener("input", onInputMove)


