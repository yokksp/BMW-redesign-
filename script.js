const signUpButton = document.getElementById('SignUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
console.log(signUpButton)

if (signUpButton) {
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
}
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
const psSIinput = document.getElementById("SIps")
const psSUinput = document.getElementById("SUps")


const eyeSU = document.getElementById('togglePasswordSU')
eyeSU.addEventListener("click" , function() {
    this.classList.toggle("fa-eye")
    const type = psSUinput.getAttribute('type') 
    
    if (type == "password") {    
        psSUinput.setAttribute("type" , 'text')
    } else if (type == "text") {
        psSUinput.setAttribute("type" , 'password')     
    }
})

const eyeSI = document.getElementById('togglePasswordSI')
eyeSI.addEventListener("click" , function() {
    this.classList.toggle("fa-eye")
    
    const type = psSIinput.getAttribute('type')
    
    if (type == "password") {
        
        psSIinput.setAttribute("type" , 'text')
    } else if (type == "text") {
        psSIinput.setAttribute("type" , 'password')
        
    }
    
})