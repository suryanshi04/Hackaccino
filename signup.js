window.onload = function() {
    var submitButton = document.querySelector('button[type="submit"]');
    var passwordInput = document.querySelector('input[type="password"]');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        checkPasswordStrength(passwordInput.value);
    });
}

function checkPasswordStrength(password) {
    var strength = 0;

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength++;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength++;
    }

    // Check for numbers
    if (/[0-9]/.test(password)) {
        strength++;
    }

    // Check for special characters
    if (/[^a-zA-Z0-9]/.test(password)) {
        strength++;
    }

    // Check for length
    if (password.length >= 8) {
        strength++;
    }

    switch(strength) {
        case 1:
            alert('Weak password');
            break;
        case 2:
            alert('Medium password');
            break;
        case 3:
            alert('Strong password');
            break;
        case 4:
            alert('Very strong password');
            break;
        case 5:
            alert('Excellent password');
            break;
        default:
            alert('Password is too weak');
    }

    // Redirect to mainpage.html
    window.location.href = 'mainpage.html';
}
