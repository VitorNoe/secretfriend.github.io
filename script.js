// Controle de neve
const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '•'; // Ponto branco
    snowflake.style.left = `${Math.random() * 100}vw`; // Posição horizontal
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Velocidade
    snowflake.style.fontSize = `${Math.random() * 10 + 5}px`;

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);

// Registro e login
document.addEventListener('DOMContentLoaded', () => {
    // Registro
    const registerForm = document.getElementById('registerForm');
    const registerButton = document.getElementById('registerBtn');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            processRegister();
        });

        registerButton.addEventListener('click', (e) => {
            e.preventDefault();
            processRegister();
        });
    }

    // Login
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            processLogin();
        });

        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            processLogin();
        });
    }
});

// Função para registrar
function processRegister() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const passwordInput = document.getElementById('passwordInput').value.trim();

    if (nameInput && passwordInput) {
        alert(`Bem-vindo(a), ${nameInput}! Você foi registrado com sucesso.`);
        window.location.href = 'sorteio.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para login
function processLogin() {
    const loginName = document.getElementById('loginName').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();

    if (loginName === 'admin' && loginPassword === 'admin') {
        alert('Login como administrador bem-sucedido!');
        window.location.href = 'admin.html';
    } else if (loginName && loginPassword) {
        alert(`Bem-vindo(a), ${loginName}! Login bem-sucedido.`);
        window.location.href = 'sorteio.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
