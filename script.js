document.addEventListener('DOMContentLoaded', () => {
    let participants = JSON.parse(localStorage.getItem('participants')) || [];

    // Função para preencher o dropdown e exibir a mensagem caso não haja participantes
    function populateDropdown() {
        const dropdown = document.getElementById('participantDropdown');
        const noParticipantsMessage = document.getElementById('noParticipantsMessage');
        
        if (participants.length === 0) {
            noParticipantsMessage.classList.remove('hidden');
        } else {
            noParticipantsMessage.classList.add('hidden');
            participants.forEach(participant => {
                const option = document.createElement('option');
                option.value = participant;
                option.textContent = participant;
                dropdown.appendChild(option);
            });
        }
    }

    // Chama a função para preencher o dropdown ao carregar a página
    populateDropdown();

    // Função para registrar participantes
    function registerParticipant() {
        const nameInput = document.getElementById('nameInput');
        const name = nameInput.value.trim();
        const confirmationMessage = document.getElementById('confirmationMessage');
        const errorMessage = document.getElementById('errorMessage'); // Novo elemento de erro

    // Validação do nome
    if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
        errorMessage.innerText = "Por favor, insira um nome válido (apenas letras e espaços).";
        errorMessage.classList.remove('hidden');
        confirmationMessage.classList.add('hidden'); // Esconde confirmação se houver erro
        return;
    }

    // Limpar mensagem de erro, caso esteja visível
    errorMessage.classList.add('hidden');

    // Verifica se o nome já foi registrado
    let participants = JSON.parse(localStorage.getItem('participants')) || [];
        if (participants.includes(name)) {
        errorMessage.innerText = "Este nome já foi registrado.";
        errorMessage.classList.remove('hidden');
        return;
    }

    // Registra o participante
    participants.push(name);
    localStorage.setItem('participants', JSON.stringify(participants));

    confirmationMessage.innerText = "Você foi registrado com sucesso!";
    confirmationMessage.classList.remove('hidden');
    setTimeout(() => {
        window.location.href = 'draw.html';
    }, 1500);
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
