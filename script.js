document.addEventListener('DOMContentLoaded', () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Registrar novo usuário
    const registerButton = document.getElementById('registerBtn');
    if (registerButton) {
        registerButton.addEventListener('click', registerUser);
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') registerUser();
        });
    }

    function registerUser() {
        const name = document.getElementById('nameInput').value.trim();
        const password = document.getElementById('passwordInput').value.trim();
        const message = document.getElementById('message');

        if (!name || !password) {
            message.innerText = "Por favor, preencha todos os campos.";
            message.classList.remove('hidden');
            return;
        }

        if (users.some(user => user.name === name)) {
            message.innerText = "Este nome já está registrado.";
            message.classList.remove('hidden');
            return;
        }

        users.push({ name, password });
        localStorage.setItem('users', JSON.stringify(users));

        message.innerText = "Registrado com sucesso!";
        message.classList.remove('hidden');
        setTimeout(() => window.location.href = 'login.html', 1500);
    }

    // Login de usuário
    const loginButton = document.getElementById('loginBtn');
    if (loginButton) {
        loginButton.addEventListener('click', loginUser);
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') loginUser();
        });
    }

    function loginUser() {
        const name = document.getElementById('loginName').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        const loginMessage = document.getElementById('loginMessage');

        if (name === "Administrador" && password === "2512") {
            window.location.href = 'admin.html';
            return;
        }

        const user = users.find(user => user.name === name && user.password === password);
        if (user) {
            window.location.href = 'draw.html';
        } else {
            loginMessage.innerText = "Nome ou senha incorretos.";
            loginMessage.classList.remove('hidden');
        }
    }
});
