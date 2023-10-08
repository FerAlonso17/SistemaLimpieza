const passInput = document.getElementById('passInput');
const iconPassword = document.getElementById('iconPassword');

passInput.addEventListener('input', function() {
    if (passInput.value.trim() !== '') {
        iconPassword.style.visibility = 'visible';
    } else {
        iconPassword.style.visibility = 'hidden';
    }
});

document.getElementById('iconPassword').addEventListener('click', function() {
    if (passInput.type === 'password') {
        passInput.type = 'text';
        iconPassword.classList.remove('fa-eye');
        iconPassword.classList.add('fa-eye-slash');
    } else {
        passInput.type = 'password';
        iconPassword.classList.remove('fa-eye-slash');
        iconPassword.classList.add('fa-eye');
    }
});

/*----------------------VALIDACION/REDIRECCION----------------------------*/

var nameInput = document.querySelector("#name");
var lastNameInput = document.querySelector("#lastName");
var emailInput = document.querySelector("#email");
var paswdInput = document.querySelector("#passInput");
//var ageInput = document.querySelector("#age");
var dniInput = document.querySelector("#dni");
var phoneInput = document.querySelector("#phone");
var terminosInput = document.querySelector("#terminos");
var btnEntrar = document.querySelector("#btn-entrar");


function validarNoVacio(texto) {
    // Expresión regular para comprobar que el texto no sea solo espacios en blanco
    var regex = /\S/;
    return regex.test(texto);
}

btnEntrar.addEventListener("click", function() {
    var name = nameInput.value;
    var lastName = lastNameInput.value;
    var email = emailInput.value;
    var password = paswdInput.value;
    //var age = ageInput.value;
    var dni = dniInput.value;
    var phone = phoneInput.value;
    var terminos = terminosInput.checked;

    if (validarNoVacio(name) && validarNoVacio(lastName) && validarNoVacio(email) && validarNoVacio(password) && /*validarNoVacio(age) &&*/ validarNoVacio(dni) && validarNoVacio(phone) && terminos) {
        window.location.href = "../Redireccion.html"; 
    } else {
        alert("Los campos no pueden estar vacíos o sin marcar");
    }
});
