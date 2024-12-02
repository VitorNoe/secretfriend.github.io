let participants = JSON.parse(localStorage.getItem('participants')) || [];

function registerParticipant() {
    const name = document.getElementById('nameInput').value.trim();

    // Verifica se o nome não está vazio
    if (!name) {
        alert("Por favor, insira seu nome completo.");
        return;
    }

    // Verifica se o nome já foi registrado
    if (participants.includes(name)) {
        alert("Este nome já foi registrado.");
        return;
    }

    // Adiciona o nome à lista de participantes
    participants.push(name);
    localStorage.setItem('participants', JSON.stringify(participants));

    // Exibe mensagem de confirmação
    document.getElementById('confirmationMessage').innerText = "Você foi registrado com sucesso!";

    // Redireciona para a página de sorteio após 1.5 segundos
    setTimeout(() => {
        window.location.href = 'draw.html'; // Redireciona para a página de sorteio
    }, 1500);
}
