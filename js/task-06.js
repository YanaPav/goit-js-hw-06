const input = document.querySelector("#validation-input")

const checkInputLength = () => {    
    
    if (input.value.length === Number(input.dataset.length)) {
        input.classList = "valid"
        return
    }

    input.classList = "invalid"
}

input.addEventListener('blur', checkInputLength)