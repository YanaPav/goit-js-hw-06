const form = document.querySelector('.login-form')

const onFormSubmit = (event) => {
    event.preventDefault()

    const emailValue = event.currentTarget.elements.email.value
    const passwordValue = event.currentTarget.elements.password.value

    if (emailValue === '' || passwordValue === '') {
        console.log('All fields must be filled')
        return
    }

    // ВАРІАНТ 1

    const formData = {
        email: emailValue,
        password: passwordValue
    }
    
    console.log(formData)
    form.reset()


    // ВАРІАНТ 2

    // const formData = new FormData(event.currentTarget)   
    // const formInfo = {}
    
    // formData.forEach((value, name) => {
    //     formInfo[name] = value        
    //     return formInfo
    // })

    // console.log(formInfo)
    // form.reset()
}


form.addEventListener("submit", onFormSubmit)