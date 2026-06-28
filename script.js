const generateBtn = document.querySelector("#generateBtn")
const passwordText = document.querySelector("#passwordText")
const lengthSlider = document.querySelector("#lengthSlider")
const lengthDisplay = document.querySelector("#lengthDisplay")
const uppercase = document.querySelector("#uppercase")
const lowercase = document.querySelector("#lowercase")
const numbers = document.querySelector("#numbers")
const symbols = document.querySelector("#symbols")
const copyBtn = document.querySelector("#copyBtn")
const copiedMessage = document.querySelector("#copiedMessage")
const strengthFill = document.querySelector("#strengthFill")
const strengthText = document.querySelector("#strengthText")
const themeBtn = document.getElementById("themeToggle");



lengthSlider.addEventListener('input', () => {
    lengthDisplay.textContent = lengthSlider.value
})


const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
const number = '1234567890'
const symbol = '!@#%^&*()_+-={}|[]:;<>,./?'
function generatePassword() {
    let char = ''
    let password = '';

    if (uppercase.checked) char += upperCaseChars
    if (lowercase.checked) char += lowerCaseChars
    if (numbers.checked) char += number
    if (symbols.checked) char += symbol

    if (char === '') {
        alert('Please enter atleast one option!')
        return;
    }


    const length = parseInt(lengthSlider.value)
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * char.length)
        // char[randomIndex] random password generate krke de rha h 
        password += char[randomIndex]
    }

    passwordText.textContent = password
    // It will display password on scrren

    updateStrength();
}

function updateStrength() {

    let score = 0;

    if (uppercase.checked) score++;
    if (lowercase.checked) score++;
    if (numbers.checked) score++;
    if (symbols.checked) score++;

    const length = Number(lengthSlider.value);

    if (length >= 12) score++;
    if (length >= 20) score++;

    if (score <= 2) {
        strengthFill.style.width = "30%";
        strengthFill.style.background = "red";
        strengthText.textContent = "Weak";
    }
    else if (score <= 4) {
        strengthFill.style.width = "65%";
        strengthFill.style.background = "orange";
        strengthText.textContent = "Medium";
    }
    else {
        strengthFill.style.width = "100%";
        strengthFill.style.background = "green";
        strengthText.textContent = "Strong";
    }

}

// const themeBtn = document.getElementById("themeToggle");

// themeBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");

//     if (document.body.classList.contains("dark-mode")) {
//         themeBtn.textContent = "☀️";
//     } else {
//         themeBtn.textContent = "🌙";
//     }
// });

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}


themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme","dark");
    }else{
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme","light");
    }
});


copyBtn.addEventListener("click", () => {
    const password = passwordText.textContent;
    navigator.clipboard.writeText(password).then(() => {
        copiedMessage.classList.add('show')
        setTimeout(() => {
            copiedMessage.classList.remove('show')
        }, 1500);
    })

});

generateBtn.addEventListener('click', generatePassword);
generatePassword()
// it will display any random password on screen when we open a page once 
