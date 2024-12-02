let participants = JSON.parse(localStorage.getItem('participants')) || [];

function registerParticipant() {
    const name = document.getElementById('nameInput').value.trim();

    if (!name) {
        alert("Por favor, insira seu nome completo.");
        return;
    }

    if (participants.includes(name)) {
        alert("Este nome já foi registrado.");
        return;
    }

    participants.push(name);
    localStorage.setItem('participants', JSON.stringify(participants));

    // Confirmação visual
    document.getElementById('confirmationMessage').innerText = "Você foi registrado com sucesso!";
    
    // Redirecionamento após 1.5 segundos
    setTimeout(() => {
        window.location.href = 'draw.html';
    }, 1500);
}

// Adiciona um event listener para garantir que o botão funcione corretamente
document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.querySelector('button');
    if (registerButton) {
        registerButton.addEventListener('click', registerParticipant);
    }
});
