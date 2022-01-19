const registerForm = document.getElementById('register-form');
console.log(registerForm);

registerForm.addEventListener('submit', function(e) {
    // preventDefault() prevents the default behavior of the submitted form
    e.preventDefault();

    // const inputPassword = document.getElementById('inputPassword');
    // const gridCheck     = document.getElementById('gridCheck');
    // const formMessages  = document.getElementById('messages');
    // let errorMessages = '';
    
    // const inputEmail    = document.getElementById('inputEmail');
    // const inputAddress  = document.getElementById('inputAddress');
    // const inputAddress2 = document.getElementById('inputAddress2');
    // // if (isStringEmpty(inputEmail)) {
    //     errorMessages += 'Email is required<br>';
    // }
    // if (isStringEmpty(inputPassword)) {
    //     errorMessages += 'Password is required<br>';
    // }
    // if (isStringEmpty(inputAddress)) {
    //     errorMessages += 'Address is required<br>';
    // }
    // if (isStringEmpty(inputAddress2)) {
    //     errorMessages += 'Address 2 is required<br>';
    // }

    // if (gridCheck.checked !== true) {
    //     errorMessages += 'Must agree to the terms<br>';
    // }
    // if (inputPassword.value !== '' 
    //     && inputPassword.value.length < 6
    // ) {
    //     errorMessages += 'Password must be minimum 6 characters long<br>';
    // }
    
    let formValidator = new FormValidator();
    formValidator.successMessage = "Success! You are now registered.";
    formValidator.requiredFields = [
        'inputEmail',
        'inputPassword',
        'inputAddress',
        'inputCity'
    ];

    document.getElementById('messages').innerHTML = formValidator.getFormatedMessage();    
});


function generateBirthYearSelectOptionsHTML(startYear, endYear, defaultYear) {
    let birthYearSelectOptions = '';
    for (let year = startYear; year >= endYear; year--) {
        if (year === defaultYear) {
            birthYearSelectOptions += `<option selected>${year}</option>`;
        } else {
            birthYearSelectOptions += `<option>${year}</option>`;
        }
    }

    return birthYearSelectOptions;
}


// console.log(birthYearSelectOptions);
document.getElementById('birthYear').innerHTML = generateBirthYearSelectOptionsHTML(new Date().getFullYear(), 1920, 1990);


