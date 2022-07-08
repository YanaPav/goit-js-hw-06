const counterValue = document.querySelector("#value")
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementtBtn = document.querySelector('[data-action="increment"]')

let currentCounterValue = Number(counterValue.textContent)

const onDecrementBtnClick = () => {
    currentCounterValue += Number(decrementBtn.textContent)
    counterValue.innerHTML = currentCounterValue
}

const onIncrementBtnClick = () => {
    currentCounterValue += Number(incrementtBtn.textContent)
    counterValue.innerHTML = currentCounterValue
}

decrementBtn.addEventListener("click", onDecrementBtnClick)
incrementtBtn.addEventListener("click", onIncrementBtnClick)


