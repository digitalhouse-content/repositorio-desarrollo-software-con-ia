// Cambiar entre formularios
document.getElementById('register-tab').addEventListener('click', () => {
    document.getElementById('register-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-tab').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
});

document.getElementById('login-tab').addEventListener('click', () => {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
});

// Función para manejar el registro
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const fullName = document.getElementById('register-full-name').value;

    try {
        const response = await fetch('http://localhost:8000/api/v1/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                full_name: fullName,
            }),
        });

        if (response.ok) {
            document.getElementById('register-message').textContent = 'Registration successful!';
        } else {
            const error = await response.json();
            document.getElementById('register-message').textContent = error.detail || 'Error registering';
        }
    } catch (error) {
        document.getElementById('register-message').textContent = 'Connection error';
    }
});

// Función para manejar el login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:8000/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                username: email,
                password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.access_token);
            document.getElementById('login-message').textContent = 'Login successful!';
        } else {
            const error = await response.json();
            document.getElementById('login-message').textContent = error.detail || 'Error logging in';
        }
    } catch (error) {
        document.getElementById('login-message').textContent = 'Connection error';
    }
});