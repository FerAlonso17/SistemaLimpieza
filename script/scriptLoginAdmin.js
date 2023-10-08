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

var emailInput = document.querySelector("input[type='text']");
var paswInput = document.querySelector("input[type='password']");
var btnEntrar = document.querySelector("#btn-entrar");
var btnRegistrar = document.querySelector("#btn-registrar");

// Definir las credenciales válidas
var emailValido = "admin@gmail.com";
var passwordValido = "admin123";

btnEntrar.addEventListener("click", function() {
    var email = emailInput.value;
    var password = paswInput.value;

    if (email === emailValido && password === passwordValido) {
        window.location.href = "";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
btnRegistrar.addEventListener("click", function() {
    window.location.href = "../registroAdmin.html";
});
