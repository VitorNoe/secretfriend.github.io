document.addEventListener('DOMContentLoaded', () => {
    let participants = JSON.parse(localStorage.getItem('participants')) || [];
    
    // Função para registrar participante
    function registerParticipant() {
        const name = document.getElementById('nameInput').value.trim();
        const password = document.getElementById('passwordInput').value;
        const errorMessage = document.getElementById('errorMessage');
        const confirmationMessage = document.getElementById('confirmationMessage');
        
        if (!name || !password) {
            errorMessage.innerText = "Por favor, preencha todos os campos.";
            errorMessage.classList.remove('hidden');
            return;
        }
        
        if (participants.some(p => p.name === name)) {
            errorMessage.innerText = "Este nome já está registrado.";
            errorMessage.classList.remove('hidden');
            return;
        }
        
        participants.push({ name, password });
        localStorage.setItem('participants', JSON.stringify(participants));
        
        confirmationMessage.innerText = "Registrado com sucesso!";
        confirmationMessage.classList.remove('hidden');
        setTimeout(() => window.location.href = 'login.html', 1500);
    }
    
    // Função para login de participante
    function loginParticipant() {
        const name = document.getElementById('loginNameInput').value.trim();
        const password = document.getElementById('loginPasswordInput').value;
        const errorMessage = document.getElementById('loginErrorMessage');
        
        const participant = participants.find(p => p.name === name && p.password === password);
        
        if (name === "Administrador" && password === "2512") {
            window.location.href = 'admin.html'; // Redireciona para a página de admin
        } else if (participant) {
            window.location.href = 'draw.html';
        } else {
            errorMessage.innerText = "Nome ou senha incorretos.";
            errorMessage.classList.remove('hidden');
        }
    }
    
    // Event listeners
    document.getElementById('registerBtn')?.addEventListener('click', registerParticipant);
    document.getElementById('loginBtn')?.addEventListener('click', loginParticipant);
    
    // Permitir pressionar Enter para registrar/login
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (document.getElementById('registerBtn')) registerParticipant();
            if (document.getElementById('loginBtn')) loginParticipant();
        }
    });
});
