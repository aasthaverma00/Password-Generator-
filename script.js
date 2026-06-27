const generateBtn = document.querySelector("#generateBtn")
const passwordText = document.querySelector("#passwordText")
const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#%^&*()_+-={}|[]:;'<>,./?"
// console.log(char)


function generatePassword() {
    let password = '';
    for (i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * char.length)


        // char[randomIndex] random password generate krke de rha h 
        password += char[randomIndex]

    }

    passwordText.textContent = password
    // It will display password on scrren
}
generateBtn.addEventListener('click', generatePassword);