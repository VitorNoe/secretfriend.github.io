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

    // Adiciona o nome na lista de participantes
    participants.push(name);
    localStorage.setItem('participants', JSON.stringify(participants));

    // Confirmação visual
    document.getElementById('confirmationMessage').innerText = "Você foi registrado com sucesso!";
    
    // Redirecionamento após 1.5 segundos
    setTimeout(() => {
        window.location.href = 'draw.html'; // Redireciona para a página de sorteio
    }, 1500);
}
