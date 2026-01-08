// Login Form Submission
document.getElementById('loginFormElement').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Login successful!');
            window.location.href = 'home.html';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Create Account Form Submission
document.getElementById('createAccountFormElement').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fullName = document.getElementById('createName').value;
    const email = document.getElementById('createEmail').value;
    const password = document.getElementById('createPassword').value;
    const dateOfBirth = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, password, dateOfBirth, phone }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Account created successfully!');
            showLogin();
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
