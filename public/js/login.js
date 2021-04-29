const formLogin = document.querySelector(".formulario-login");
const campoEmail = document.querySelector("#email");
const campoPw = document.querySelector("#password");

const errorEmail = document.querySelector(".errorEmail");
const errorPw = document.querySelector(".errorPw");
const errorMensaje = document.querySelectorAll(".errorMensaje");



function resetFormErrors(){
    errorMensaje.forEach(error =>{
        error.style.display ="none"
    })
}

formLogin.addEventListener("submit", function(e){

    let errors = false
    resetFormErrors()
    
    if (campoEmail.value.length == 0){
        errorEmail.innerText = "Por favor, complete su email"
        errorEmail.style.display = "block"
        errors = true
    } else if (campoEmail.value.length < 2){
        errorEmail.innerText = "El apellido debe ser más largo"
        errorEmail.style.display = "block"
        errors = true
    }

    if (campoPw.value.length == 0){
        errorPw.innerText = "Por favor, complete su contraseña"
        errorPw.style.display = "block"
        errors = true
    } else if (campoPw.value.length < 7){
        errorPw.innerText = "Su contraseña debe ser más larga"
        errorPw.style.display = "block"
        errors = true
    }



    if (errors == true){
        e.preventDefault()
    }
})
