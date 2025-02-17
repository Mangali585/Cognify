document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let isValid = true;

    document.querySelectorAll(".error-message").forEach(msg => msg.style.display = "none");

    const name = document.getElementById("name");
    const namePattern = /^[A-Z][a-z]+\s[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;
    if (!namePattern.test(name.value.trim())) {
        showError(name, "Enter full name with each word capitalized.");
        isValid = false;
    }

    const email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Email must be in format name@gmail.com.");
        isValid = false;
    }

    const phone = document.getElementById("phone");
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone.value.trim())) {
        showError(phone, "Enter a valid phone number (10-15 digits).");
        isValid = false;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        showError(document.querySelector(".gender-options"), "Please select a gender.");
        isValid = false;
    }

    const dob = document.getElementById("dob");
    if (dob.value === "") {
        showError(dob, "Please select your date of birth.");
        isValid = false;
    }

    const country = document.getElementById("country");
    if (country.value === "") {
        showError(country, "Please select a country.");
        isValid = false;
    }

    const password = document.getElementById("password");
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        showError(password, "Password must contain uppercase, lowercase, number, symbol, and be 8+ chars.");
        isValid = false;
    }

    const confirmPassword = document.getElementById("confirmPassword");
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "Passwords do not match.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});

function showError(input, message) {
    let errorMessage = input.parentElement.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}
