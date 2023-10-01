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