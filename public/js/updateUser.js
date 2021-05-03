const form = document.querySelector(".form-fr")
const campoNombre = document.querySelector("#name")
const campoApellido = document.querySelector("#last_name")
const campoPhone = document.querySelector("#tel")

const errorName = document.querySelector(".errorName")
const errorLastName = document.querySelector(".errorLastName")
const errorPhone = document.querySelector(".errorPhone")

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
    if (campoPhone.value.length == 0){
        errorPhone.innerText = "Por favor, complete su teléfono"
        errorPhone.style.display = "block"
        errors = true

    } else if (campoPhone.value.length < 7){
        errorPhone.innerText = "El teléfono debe ser más largo"
        errorPhone.style.display = "block"
        errors = true
    }

    if (errors == true){
        e.preventDefault()
    }
    
})


