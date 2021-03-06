const form = document.querySelector(".form-fr")
const campoNombre = document.querySelector("#name")
const campoApellido = document.querySelector("#last_name")
const campoEmail = document.querySelector("#email")
const campoPhone = document.querySelector("#tel")
const campoPw = document.querySelector("#password")
const campoConfirmPw = document.querySelector("#confirm")
const campoImage = document.querySelector("#profileImage")

const errorName = document.querySelector(".errorName")
const errorLastName = document.querySelector(".errorLastName")
const errorEmail = document.querySelector(".errorEmail")
const errorPhone = document.querySelector(".errorPhone")
const errorPw = document.querySelector(".errorPw")
const errorConfirmPw = document.querySelector(".errorConfirmPw")
const errorImage = document.querySelectorAll(".errorImage");
const errorMensaje = document.querySelectorAll(".errorMensaje");


function resetFormErrors(){
    errorMensaje.forEach(error =>{
        error.style.display ="none"
    })
}

form.addEventListener("submit", function(e){

    let errors = false;
    resetFormErrors();
    if (campoNombre.value.length == 0){
        errorName.innerText = "Por favor, complete su nombre"
        errorName.style.display = "block"
        errors = true
    } else if (campoNombre.value.length < 2){
        errorName.innerText = "El nombre debe ser más largo"
        errorName.style.display = "block"
        errors = true
    }
    if (campoApellido.value.length == 0){
        errorLastName.innerText = "Por favor, complete su apellido"
        errorLastName.style.display = "block"
        errors = true
    } else if (campoApellido.value.length < 2){
        errorLastName.innerText = "El apellido debe ser más largo"
        errorLastName.style.display = "block"
        errors = true
    }
    if (campoEmail.value.length == 0){
        errorEmail.innerText = "Por favor, complete su email"
        errorEmail.style.display = "block"
        errors = true
    } 
    if (campoPhone.value.length == 0){
        errorPhone.innerText = "Por favor, complete su teléfono"
        errorPhone.style.display = "block"
        errors = true

    } else if (campoPhone.value.length < 7){
        errorPhone.innerText = "El teléfono debe ser más largo"
        errorPhone.style.display = "block"
        errors = true
    }
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


