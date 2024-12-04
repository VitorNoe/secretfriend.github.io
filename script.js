document.addEventListener('DOMContentLoaded', () => {
    let participants = JSON.parse(localStorage.getItem('participants')) || [];
    const adminPassword = "2512"; // Senha do administrador

    // Exibe as telas corretas (Login ou Registro)
    document.getElementById('registerBtn').addEventListener('click', () => {
        document.getElementById('registerForm').classList.remove('hidden');
        document.getElementById('loginForm').classList.add('hidden');
    });

    document.getElementById('loginBtn').addEventListener('click', () => {
        document.getElementById('loginForm').classList.remove('hidden');
        document.getElementById('registerForm').classList.add('hidden');
    });

    // Função para registrar participante
    document.getElementById('submitRegister').addEventListener('click', () => registerParticipant());
    document.getElementById('nameInput').addEventListener('keypress', (e) => {
        if (e.key === "Enter") registerParticipant();
    });

    // Função para login de participante
    document.getElementById('submitLogin').addEventListener('click', () => loginParticipant());
    document.getElementById('loginName').addEventListener('keypress', (e) => {
        if (e.key === "Enter") loginParticipant();
    });

    // Função para registrar participante
    function registerParticipant() {
        const name = document.getElementById('nameInput').value.trim();
        const password = document.getElementById('passwordInput').value.trim();
        const errorMessage = document.getElementById('errorMessage');

        if (!name || !password) {
            errorMessage.textContent = "Nome e senha são obrigatórios!";
            errorMessage.classList.remove('hidden');
            return;
        }

        if (participants.some(p => p.name === name)) {
            errorMessage.textContent = "Este nome já foi registrado!";
            errorMessage.classList.remove('hidden');
            return;
        }

        participants.push({ name, password });
        localStorage.setItem('participants', JSON.stringify(participants));
        errorMessage.classList.add('hidden');

        alert("Registro realizado com sucesso!");
        window.location.href = 'draw.html';
    }

    // Função para login de participante
    function loginParticipant() {
        const name = document.getElementById('loginName').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        const errorMessage = document.getElementById('errorMessage');

        const participant = participants.find(p => p.name === name && p.password === password);

        if (!participant) {
            errorMessage.textContent = "Nome ou senha incorretos!";
            errorMessage.classList.remove('hidden');
            return;
        }

        errorMessage.classList.add('hidden');

        if (name === "Administrador" && password === adminPassword) {
            alert("Bem-vindo Administrador!");
            window.location.href = 'admin.html'; // Página de administração
        } else {
            alert("Bem-vindo " + name + "!");
            window.location.href = 'draw.html';
        }
    }
});
