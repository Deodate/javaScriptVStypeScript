// const form = document.getElementById('loginForm');
// const errorElement = document.getElementById('error');
// const submitButton = document.querySelector('input[type="submit"]');
// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');

// // Initially hide the submit button
// submitButton.style.display = 'none';

// // Function to check if both fields are filled
// function checkFields() {
//     const username = usernameInput.value.trim();
//     const password = passwordInput.value.trim();

//     // Update the border color based on input value
//     updateBorderColor(usernameInput, username);
//     updateBorderColor(passwordInput, password);

//     // Show the submit button only if both fields are filled
//     if (username && password) {
//         submitButton.style.display = 'block';
//     } else {
//         submitButton.style.display = 'none';
//     }
// }

// // Function to update border color based on input
// function updateBorderColor(inputElement, value) {
//     if (value) {
//         inputElement.classList.add('filled');  // Add green border if filled
//     } else {
//         inputElement.classList.remove('filled'); // Remove green border if empty
//     }
// }

// // Listen for input events on both fields
// usernameInput.addEventListener('input', checkFields);
// passwordInput.addEventListener('input', checkFields);

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = usernameInput.value.trim();
//     const password = passwordInput.value.trim();

//     if (!username || !password) {
//         errorElement.style.display = 'block';
//     } else {
//         errorElement.style.display = 'none';
//         alert(`Login successful!: ${username}`);
//     }
// });

const form = document.getElementById('loginForm');
const errorElement = document.getElementById('error');
const submitButton = document.querySelector('input[type="submit"]');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Initially hide the submit button
submitButton.style.display = 'none';

// Function to check if both fields are filled
function checkFields() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Update the border color based on input value
    updateBorderColor(usernameInput, username);
    updateBorderColor(passwordInput, password);

    // Show the submit button only if both fields are filled
    if (username && password) {
        submitButton.style.display = 'block';
    } else {
        submitButton.style.display = 'none';
    }
}

// Function to update border color based on input
function updateBorderColor(inputElement, value) {
    if (value) {
        inputElement.classList.add('filled');  // Add green border if filled
    } else {
        inputElement.classList.remove('filled'); // Remove green border if empty
    }
}

// Listen for input events on both fields
usernameInput.addEventListener('input', checkFields);
passwordInput.addEventListener('input', checkFields);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate username and password
    if (username === 'messi' && password === 'american') {
        errorElement.style.display = 'none';
        alert('Login successful!');
    } else {
        errorElement.style.display = 'block';
        errorElement.textContent = 'Invalid username or password. Please try again.';
    }
});


