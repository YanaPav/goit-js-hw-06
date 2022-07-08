// const counterValue = document.querySelector("#value")
// const decrementBtn = document.querySelector('[data-action="decrement"]')
// const incrementtBtn = document.querySelector('[data-action="increment"]')

// let currentCounterValue = Number(counterValue.textContent)

// const onDecrementBtnClick = () => {
//     currentCounterValue += Number(decrementBtn.textContent)
//     counterValue.innerHTML = currentCounterValue
// }

// const onIncrementBtnClick = () => {
//     currentCounterValue += Number(incrementtBtn.textContent)
//     counterValue.innerHTML = currentCounterValue
// }

// decrementBtn.addEventListener("click", onDecrementBtnClick)
// incrementtBtn.addEventListener("click", onIncrementBtnClick)


let counterValue = 0
const value = document.querySelector("#value")
value.innerHTML = counterValue

const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementtBtn = document.querySelector('[data-action="increment"]')

const onDecrementBtnClick = () => {
    counterValue += Number(decrementBtn.textContent)
    value.innerHTML = counterValue
}

const onIncrementBtnClick = () => {
    counterValue += Number(incrementtBtn.textContent)
    value.innerHTML = counterValue
}

decrementBtn.addEventListener("click", onDecrementBtnClick)
incrementtBtn.addEventListener("click", onIncrementBtnClick)