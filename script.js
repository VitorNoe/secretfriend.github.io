let participants = JSON.parse(localStorage.getItem('participants')) || [];

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

function showSecretFriend() {
    const currentName = document.getElementById('participantDropdown').value;

    if (!currentName) {
        alert("Selecione seu nome na lista.");
        return;
    }

    // Embaralha a lista de participantes
    const shuffled = shuffle([...participants]);

    // Encontrar o índice da pessoa que está sorteando
    const index = shuffled.findIndex(person => person === currentName);

    // O próximo na lista será o amigo secreto
    const secretFriend = shuffled[(index + 1) % shuffled.length]; // Evita que a pessoa se tire

    // Exibe a mensagem com o nome sorteado
    const messageElement = document.getElementById('secretFriendMessage');
    messageElement.innerText = `Você tirou: ${secretFriend}! 🎁`;
    messageElement.classList.remove('hidden');
}

// Função para embaralhar a lista de participantes
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca de posição
    }
    return array;
}
