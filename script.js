document.addEventListener('DOMContentLoaded', () => {
    let participants = JSON.parse(localStorage.getItem('participants')) || [];

    // Preenche o dropdown com os nomes dos participantes
    const dropdown = document.getElementById('participantDropdown');
    if (dropdown) {
        participants.forEach(participant => {
            const option = document.createElement('option');
            option.value = participant;
            option.textContent = participant;
            dropdown.appendChild(option);
        });
    }

    // Função para sortear o amigo secreto
    function showSecretFriend() {
        const currentName = dropdown.value;

        if (!currentName) {
            alert("Por favor, selecione seu nome na lista.");
            return;
        }

        if (participants.length < 2) {
            alert("É necessário pelo menos dois participantes para o sorteio.");
            return;
        }

        // Embaralha e sorteia garantindo que a pessoa não tire a si mesma
        let availableFriends = participants.filter(name => name !== currentName);
        if (availableFriends.length === 0) {
            alert("Nenhum participante disponível para sorteio.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableFriends.length);
        const secretFriend = availableFriends[randomIndex];

        // Mostra o amigo sorteado
        const message = document.getElementById('secretFriendMessage');
        message.innerText = `Você tirou: ${secretFriend}! 🎁`;
        message.classList.remove('hidden');

        // Esconde o botão após o sorteio
        document.getElementById('drawBtn').style.display = 'none';
    }

    // Associa a função ao botão "Sortear"
    const drawBtn = document.getElementById('drawBtn');
    if (drawBtn) {
        drawBtn.addEventListener('click', showSecretFriend);
    }
});
