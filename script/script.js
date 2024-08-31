var form = document.getElementById('loginForm');
var errorElement = document.getElementById('error');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (!username || !password) {
        if (errorElement) {
            errorElement.style.display = 'block';
        }
    }
    else {
        if (errorElement) {
            errorElement.style.display = 'none';
        }
        alert("Login successful for user: ".concat(username));
    }
});
