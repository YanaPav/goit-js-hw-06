
const input = document.querySelector('#name-input')


const onInputTyping = (event) => {
    const output = document.querySelector('#name-output')

    if (event.currentTarget.value.length === 0 || event.currentTarget.value === " ") {
        
        output.innerHTML = 'Anonymous'
        return
    }
    
     
    output.innerHTML = event.currentTarget.value
}

input.addEventListener("input", onInputTyping)