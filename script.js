let participants = JSON.parse(localStorage.getItem('participants')) || [];

// Função para carregar os participantes na página de sorteio
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('participantDropdown');

    // Preenche o dropdown com os nomes dos participantes
    participants.forEach(participant => {
        const option = document.createElement('option');
        option.value = participant;
        option.textContent = participant;
        dropdown.appendChild(option);
    });
});

// Função para sortear o amigo secreto
function showSecretFriend() {
    const currentName = document.getElementById('participantDropdown').value;

    if (!currentName) {
        alert("Selecione seu nome na lista.");
        return;
    }

    // Embaralha a lista de participantes para sortear aleatoriamente
    const shuffled = shuffle([...participants]);

    // Evita que a pessoa se sorteie
    const secretFriend = shuffled.find(person => person !== currentName);

    // Exibe a mensagem com o nome sorteado
    const messageElement = document.getElementById('secretFriendMessage');
    messageElement.innerText = `Você tirou: ${secretFriend}! 🎁`;
    messageElement.classList.remove('hidden'); // Torna a mensagem visível

    // Esconde o botão "Sortear" após o sorteio
    document.getElementById('drawBtn').style.display = 'none';
}

// Função para embaralhar a lista de participantes
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca de posição
    }
    return array;
}
