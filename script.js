const generateBtn = document.querySelector("#generateBtn")
const passwordText = document.querySelector("#passwordText")
const lengthSlider = document.querySelector("#lengthSlider")
const lengthDisplay = document.querySelector("#lengthDisplay")
const uppercase = document.querySelector("#uppercase")
const lowercase = document.querySelector("#lowercase")
const numbers = document.querySelector("#numbers")
const symbols = document.querySelector("#symbols")

lengthSlider.addEventListener('input', () => {
    lengthDisplay.textContent = lengthSlider.value
})


const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
const number = '1234567890'
const symbol = '!@#%^&*()_+-={}|[]:;<>,./?'
function generatePassword() {
    let char = ' '
    let password = '';

    if (uppercase.checked) char += upperCaseChars
    if (lowercase.checked) char += lowerCaseChars
    if (numbers.checked) char += number
    if (symbols.checked) char += symbol
   
    if (char === ' ') {
        alert('Please enter atleast one option!')
        return;
    }
    

    const length = parseInt(lengthSlider.value)
    for (i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * char.length)
        // char[randomIndex] random password generate krke de rha h 
        password += char[randomIndex]
    }

    passwordText.textContent = password
    // It will display password on scrren
}
generateBtn.addEventListener('click', generatePassword);
generatePassword()
// it will display any random password on screen when we open a page once 