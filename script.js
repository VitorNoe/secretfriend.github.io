let participants = JSON.parse(localStorage.getItem('participants')) || [];

// Função para registrar participantes
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

    document.getElementById('confirmationMessage').innerText = "Você foi registrado com sucesso!";

    // Redireciona para a página de sorteio após 1.5 segundos
    setTimeout(() => {
        window.location.href = 'draw.html';
    }, 1500);
}

// Função para carregar participantes na página de sorteio
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('participantDropdown')) {
        const dropdown = document.getElementById('participantDropdown');
        participants.forEach(participant => {
            const option = document.createElement('option');
            option.value = participant;
            option.textContent = participant;
            dropdown.appendChild(option);
        });
    }
});

// Função para sortear o amigo secreto
function showSecretFriend() {
    const currentName = document.getElementById('participantDropdown').value;

    if (!currentName) {
        alert("Selecione seu nome na lista.");
        return;
    }

    if (participants.length < 2) {
        alert("É necessário pelo menos dois participantes para o sorteio.");
        return;
    }

    // Embaralha a lista e garante que o usuário não se sorteie
    const shuffled = shuffle([...participants]);
    const secretFriend = shuffled.find(person => person !== currentName);

    document.getElementById('secretFriendMessage').innerText = `Você tirou: ${secretFriend}! 🎁`;
    document.getElementById('secretFriendMessage').classList.remove('hidden');
    document.getElementById('drawBtn').style.display = 'none';
}

// Função para embaralhar a lista
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event listener para o botão de registro
if (document.getElementById('registerBtn')) {
    document.getElementById('registerBtn').addEventListener('click', registerParticipant);
}
