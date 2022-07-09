const text = document.querySelector("#text")
const slider = document.querySelector("#font-size-control")

const onInputMove = (event) => {

    text.style.fontSize = `${event.currentTarget.value}px`
}

slider.addEventListener("input", onInputMove)


