let closeBtn1 = document.querySelector(".close-btn-1")
let closeBtn2 = document.querySelector(".close-btn-2")
let login = document.querySelector(".login-btn")
let signup = document.querySelector(".signup-btn")
let Loginscreen = document.querySelector(".login-popup")
let Signupscreen = document.querySelector(".signup-popup")

closeBtn1.addEventListener('click' , () => {
    Loginscreen.style.display = "none"
})

closeBtn2.addEventListener('click' , () => {
    Signupscreen.style.display = "none"
})
login.addEventListener('click' , () => {
    Loginscreen.style.display = "flex"
})
signup.addEventListener('click' , () => {
    Signupscreen.style.display = "flex"
})

function signUpEvent(){
    Signupscreen.style.display = "none"
    Loginscreen.style.display = "flex"
}