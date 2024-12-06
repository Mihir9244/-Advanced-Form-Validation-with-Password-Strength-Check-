document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Password validation criteria
    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    // Validation Messages
    let formMessage = '';

    // Name Validation
    if (name === '') {
        formMessage += 'Name is required. ';
    }

    // Email Validation
    if (!email.includes('@')) {
        formMessage += 'Please enter a valid email. ';
    }

    // Phone Validation (Format: 123-456-7890)
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phonePattern.test(phone)) {
        formMessage += 'Phone number must follow the format 123-456-7890. ';
    }

    // Password Validation
    if (!passwordCriteria.test(password)) {
        formMessage += 'Password does not meet the required criteria. ';
    }

    // If there are no validation errors
    if (formMessage === '') {
        formMessage = 'Form submitted successfully!';
        document.getElementById('formMessage').style.color = 'green';
    } else {
        document.getElementById('formMessage').style.color = 'red';
    }

    // Display validation message
    document.getElementById('formMessage').textContent = formMessage;
});
