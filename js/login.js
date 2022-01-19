const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let formValidator = new FormValidator();
    formValidator.requiredFields = [
        'inputEmail',
        'inputPassword',
    ];
    formValidator.successMessage = "You have successfully logged in :)";

    document.getElementById('messages').innerHTML = formValidator.getFormatedMessage();
})