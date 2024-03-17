$(document).ready(function() {
    $('#showLoginForm').click(function() {
        $('#loginPage').removeClass('hidden');
        $('#signUpPage').addClass('hidden');
       
    });

    $('#showSignUpForm').click(function() {
        $('#signUpPage').removeClass('hidden');
        $('#loginPage').addClass('hidden');
    });

    $('#loginForm').submit(function() {
        var username = $('#username').val();
        var password = $('#password').val();

        if (username.trim() === '') {
            alert('Username field is required');
            return;
        }

        if (password.trim() === '') {
            alert('Password field is required');
            return;
        }
    });

    $('#signUpForm').submit(function() {
        e.preventDefault();
        var fullName = $('#fullName').val();
        var email = $('#email').val();
        var age = $('#age').val();
        var password = $('#password').val();

        if (fullName.trim() === '') {
            alert('Full Name field is required');
            return;
        }

        if (email.trim() === '') {
            alert('Email field is required');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Invalid email format');
            return;
        }

        if (age.trim() === '' || isNaN(age) || parseInt(age) < 1 || parseInt(age) > 120) {
            alert('Invalid age');
            return;
        }

        if (password.trim() === '') {
            alert('Password field is required');
            return;
        }

    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
