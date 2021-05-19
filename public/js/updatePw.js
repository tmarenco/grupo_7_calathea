const form = document.querySelector(".form-fr")
const campoPw = document.querySelector("#password")
const campoConfirmPw = document.querySelector("#confirm")



const errorPw = document.querySelector(".errorPw")
const errorConfirmPw = document.querySelector(".errorConfirmPw")
const errorMensaje = document.querySelectorAll(".errorMensaje");


function resetFormErrors(){
    errorMensaje.forEach(error =>{
        error.style.display ="none"
    })
}

form.addEventListener("submit", function(e){

    let errors = false;
    resetFormErrors();
    if (campoPw.value.length == 0){
        errorPw.innerText = "Por favor, complete su contraseña"
        errorPw.style.display = "block"
        errors = true
    } else if (campoPw.value.length < 7){
        errorPw.innerText = "La contraseña debe ser más larga"
        errorPw.style.display = "block"
        errors = true
    }
    if (campoConfirmPw.value.length == 0){
        errorConfirmPw.innerText = "Por favor, repita la contraseña"
        errorConfirmPw.style.display = "block"
        errors = true
    } else if (campoConfirmPw.value != campoPw.value ){
        errorConfirmPw.innerText = "Las contraseñas deben coincidir"
        errorConfirmPw.style.display = "block"
        errors = true
    }

    if (errors == true){
        e.preventDefault()
    }
    
})
