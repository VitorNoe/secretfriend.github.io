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
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Registrado com sucesso! Redirecionando para o sorteio...');
            window.location.href = 'sorteio.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login bem-sucedido! Redirecionando...');
            window.location.href = 'sorteio.html';
        });
    }
});
