// script.js
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const dashboard = document.getElementById('dashboard');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const logoutButton = document.getElementById('logoutButton');

  let token = null;

  // Función para mostrar/ocultar elementos
  function showElement(element) {
    element.classList.remove('hidden');
  }

  function hideElement(element) {
    element.classList.add('hidden');
  }

  // Ocultar todos los elementos al inicio
  function resetVisibility() {
    hideElement(registerForm);
    hideElement(loginForm);
    hideElement(dashboard);
  }

  // Switch entre registro e inicio de sesión
  document.getElementById('switchToLogin').addEventListener('click', () => {
    resetVisibility();
    showElement(loginForm);
  });

  document.getElementById('switchToRegister').addEventListener('click', () => {
    resetVisibility();
    showElement(registerForm);
  });

  // Registro de usuario
  document.getElementById('registerUserForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const fullName = document.getElementById('registerFullName').value;

    const response = await fetch('http://localhost:8000/api/v1/users/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, full_name: fullName }),
    });

    if (response.ok) {
      alert('Usuario registrado con éxito. Por favor, inicia sesión.');
      resetVisibility();
      showElement(loginForm);
    } else {
      alert('Error al registrar el usuario.');
    }
  });

  // Inicio de sesión
  document.getElementById('loginUserForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('http://localhost:8000/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
    });

    if (response.ok) {
      const data = await response.json();
      token = data.access_token;
      localStorage.setItem('token', token); // Guardar token en localStorage
      resetVisibility();
      showElement(dashboard);
      welcomeMessage.textContent = `Bienvenido, ${email}`;
    } else {
      alert('Credenciales incorrectas.');
    }
  });

  // Cerrar sesión
  logoutButton.addEventListener('click', () => {
    token = null;
    localStorage.removeItem('token');
    resetVisibility();
    showElement(loginForm);
  });

  // Verificar si hay un token guardado al cargar la página
  const savedToken = localStorage.getItem('token');
  if (savedToken) {
    token = savedToken;
    resetVisibility();
    showElement(dashboard);
    welcomeMessage.textContent = 'Bienvenido nuevamente';
  } else {
    resetVisibility();
    showElement(registerForm); // Mostrar el formulario de registro por defecto
  }
});