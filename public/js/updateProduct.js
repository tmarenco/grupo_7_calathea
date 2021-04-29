const form = document.querySelector(".section-derecha-contacto")
const campoNombre = document.querySelector("#name")
const campoDescripcion = document.querySelector("#description")
const campoPrecio = document.querySelector("#price")
const campoStock = document.querySelector("#stock")
const campoImagen = document.querySelector("#image")

const errorName = document.querySelector(".errorName")
const errorDescription = document.querySelector(".errorDescription")
const errorPrice = document.querySelector(".errorPrice")
const errorStock = document.querySelector(".errorStock")
const errorMensaje = document.querySelectorAll(".errorMensaje");
const errorImage = document.querySelector("#errorImage")

function resetFormErrors(){
    errorMensaje.forEach(error =>{
        error.style.display ="none"
    })
}



form.addEventListener("submit", function(e){

    let errors = false;
    resetFormErrors();
    if (campoNombre.value.length == 0){
        errorName.innerText = "Por favor, complete el nombre del producto"
        errorName.style.display = "block"
        errors = true
    } else if (campoNombre.value.length < 5){
        errorName.innerText = "El nombre debe ser más largo"
        errorName.style.display = "block"
        errors = true
    }
    if (campoDescripcion.value.length == 0){
        errorDescription.innerText = "Por favor, complete la descripción del producto"
        errorDescription.style.display = "block"
        errors = true
    } else if (campoDescripcion.value.length < 20){
        errorDescription.innerText = "La descripción debe ser más larga"
        errorDescription.style.display = "block"
        errors = true
    }
    if (campoPrecio.value.length == 0){
        errorPrice.innerText = "Por favor, establezca un precio para el producto"
        errorPrice.style.display = "block"
        errors = true
    } 
    if (campoStock.value.length == 0){
        errorStock.innerText = "Por favor, establezca la cantidad de stock para el producto"
        errorStock.style.display = "block"
        errors = true

    } 
    // if (campoImagen.value == ""){
    //     errorImage.innerText = "Por favor, escoja una imagen"
    //     errorImage.style.display = "block"
    //     errors = true

    // } 

    if (errors == true){
        e.preventDefault()
    }

})