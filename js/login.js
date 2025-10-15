// script.js
document.addEventListener('DOMContentLoaded', function() {
    const signupModal = document.getElementById('signupModal');
    const loginModal = document.getElementById('loginModal');
    const closeModalBtn = document.getElementById('closeModal');
    const showLoginLink = document.getElementById('showLogin');
    const showSignupLink = document.getElementById('showSignup');
    
    const screenNameInput = document.getElementById('screenName');
    const urlPreview = document.getElementById('urlPreview');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const loginPasswordInput = document.getElementById('loginPassword');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    // Close modal (optional - you can remove this if you don't want close functionality)
    closeModalBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to close?')) {
            window.close();
        }
    });

    // Switch to login from signup
    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'grid';
    });

    // Switch to signup from login
    showSignupLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'grid';
    });

    // Update URL preview as user types
    screenNameInput.addEventListener('input', function() {
        const value = this.value.trim() || 'screenname';
        urlPreview.textContent = value;
    });

    // Toggle password visibility for signup
    togglePassword.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    // Toggle password visibility for login
    toggleLoginPassword.addEventListener('click', function() {
        if (loginPasswordInput.type === 'password') {
            loginPasswordInput.type = 'text';
        } else {
            loginPasswordInput.type = 'password';
        }
    });

    // Signup form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            email: document.getElementById('email').value,
            screenName: document.getElementById('screenName').value,
            password: document.getElementById('password').value,
            newsletter: document.getElementById('newsletter').checked,
            disability: document.getElementById('disability').checked
        };
        
        console.log('Signup form submitted:', formData);
        alert('Sign up successful! (This is a demo)');
    });

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            email: document.getElementById('loginEmail').value,
            password: document.getElementById('loginPassword').value,
            rememberMe: document.getElementById('rememberMe').checked
        };
        
        console.log('Login form submitted:', formData);
        alert('Login successful! (This is a demo)');
    });
});
