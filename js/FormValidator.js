class FormValidator {
    // Property
    requiredFields = [];
    errorMessages = '';
    successMessage = "Success! The form has been submitted.";

    // Methods
    checkRequiredFields = function() {
        this.errorMessages = '';
        for (let field of this.requiredFields) {
            this.errorMessages += this.generateRequiredFieldErrorMessage(field)
        }
    }
    
    generateRequiredFieldErrorMessage = function(field) {
        let requiredErrorMessage = '';
        let inputField = document.getElementById(field);
        
        if (inputField && this.isStringEmpty(inputField)) {
            let fieldName = field.replace('input', '') // Format the string from example: inputEmail -> Email
            requiredErrorMessage = `${fieldName} is required<br>`;
        }
    
        return requiredErrorMessage;
    }

    // DRY Dont repeat yourself
    isStringEmpty = function(field) {
        // trim() removes all spaces beofe and after the string
        return field.value.trim() === ''
    }

    runAllChecks = function() {
        this.checkRequiredFields();
        // check password characters
        // check terms agreed upon
    }

    getFormatedSuccessMessage = function() {
        return `<div class="alert alert-success" role="alert">
                    ${this.successMessage}
                </div>`;
    }

    getFormatedErrorMessage = function() {
        return `<div class="alert alert-danger" role="alert">
                    ${this.errorMessages}
                </div>`;
    }

    getFormatedMessage = function() {
        this.runAllChecks()

        if (this.errorMessages) {
            return this.getFormatedErrorMessage();
        } else {
            return this.getFormatedSuccessMessage('Form submitted. You are now registered!');
        }
    }
}
