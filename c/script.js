document.addEventListener('DOMContentLoaded', function() {
    // Handle form submissions
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const contactForm = document.getElementById('contactForm');
    const paymentForm = document.getElementById('paymentForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Registration successful!');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Login successful!');
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message sent!');
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Payment successful!');
        });
    }
});
