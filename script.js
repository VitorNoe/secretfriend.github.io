document.addEventListener('DOMContentLoaded', () => {
    let participants = JSON.parse(localStorage.getItem('participants')) || [];

    // Função para registrar participantes
    function registerParticipant() {
        const nameInput = document.getElementById('nameInput');
        const name = nameInput.value.trim();

        // Verifica se o nome está preenchido
        if (!name) {
            alert("Por favor, insira seu nome completo.");
            return;
        }

        // Verifica se o nome já existe na lista
        if (participants.includes(name)) {
            alert("Este nome já foi registrado.");
            return;
        }

        // Adiciona o nome e salva no localStorage
        participants.push(name);
        localStorage.setItem('participants', JSON.stringify(participants));

        // Mensagem de confirmação
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.innerText = "Você foi registrado com sucesso!";
        confirmationMessage.style.color = "green";

        // Redireciona após 1,5 segundos
        setTimeout(() => {
            window.location.href = 'draw.html';
        }, 1500);
    }

    // Associa a função ao botão de registro
    const registerBtn = document.getElementById('registerBtn');
    registerBtn.addEventListener('click', registerParticipant);
});
