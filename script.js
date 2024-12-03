document.addEventListener('DOMContentLoaded', () => {
    let participants = JSON.parse(localStorage.getItem('participants')) || [];

    // Função para registrar participantes
    function registerParticipant() {
        const nameInput = document.getElementById('nameInput');
        const name = nameInput.value.trim();

        // Validação adicional: nome inválido
        if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
            alert("Por favor, insira um nome válido (apenas letras e espaços).");
            return;
        }

        if (participants.includes(name)) {
            alert("Este nome já foi registrado.");
            return;
        }

        participants.push(name);
        localStorage.setItem('participants', JSON.stringify(participants));

        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.innerText = "Você foi registrado com sucesso!";
        confirmationMessage.classList.remove('hidden');
        
        setTimeout(() => {
            window.location.href = 'draw.html';
        }, 1500);
    }

    // Função para preencher o dropdown
    function populateDropdown() {
        const dropdown = document.getElementById('participantDropdown');
        if (dropdown) {
            participants.forEach(participant => {
                const option = document.createElement('option');
                option.value = participant;
                option.textContent = participant;
                dropdown.appendChild(option);
            });
        }
    }

    // Função para sortear o amigo secreto
    function showSecretFriend() {
        const dropdown = document.getElementById('participantDropdown');
        const currentName = dropdown.value;

        if (!currentName) {
            alert("Por favor, selecione seu nome na lista.");
            return;
        }

        let availableFriends = participants.filter(name => name !== currentName);
        if (availableFriends.length === 0) {
            alert("Nenhum participante disponível para sorteio.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableFriends.length);
        const secretFriend = availableFriends[randomIndex];

        // Armazena o sorteio para evitar repetição
        localStorage.setItem(`${currentName}_friend`, secretFriend);

        const message = document.getElementById('secretFriendMessage');
        message.innerText = `Você tirou: ${secretFriend}! 🎁`;
        message.classList.remove('hidden');

        document.getElementById('drawBtn').disabled = true;
    }

    // Eventos associados aos botões
    if (document.getElementById('registerBtn')) {
        document.getElementById('registerBtn').addEventListener('click', registerParticipant);
    }
    if (document.getElementById('drawBtn')) {
        document.getElementById('drawBtn').addEventListener('click', showSecretFriend);
        populateDropdown();
    }
});
