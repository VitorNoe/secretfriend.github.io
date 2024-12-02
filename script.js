let people = [];
let currentParticipant = "";

function registerParticipant() {
    currentParticipant = document.getElementById('nameInput').value.trim();
    if (currentParticipant) {
        if (!people.find(p => p.name === currentParticipant)) {
            people.push({ name: currentParticipant, secretFriend: null });
        }
        document.getElementById('input-section').style.display = 'none';
        document.getElementById('draw-section').style.display = 'block';
        document.getElementById('participantName').innerText = `Olá, ${currentParticipant}!`;
    } else {
        alert("Por favor, insira seu nome completo.");
    }
}

function showSecretFriend() {
    if (!shuffleArray) {
        shuffleArray();
    }
    const participant = people.find(p => p.name === currentParticipant);
    if (!participant.secretFriend) {
        const index = (people.indexOf(participant) + 1) % people.length;
        participant.secretFriend = people[index].name;
    }
    document.getElementById('secretFriend').innerText = `Seu amigo secreto é: ${participant.secretFriend}`;
    document.getElementById('secretFriend').style.display = 'block';
}

// Função para embaralhar os participantes
function shuffleArray() {
    for (let i = people.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [people[i], people[j]] = [people[j], people[i]];
    }
}
