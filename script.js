let participants = JSON.parse(localStorage.getItem('participants')) || [];

function registerParticipant() {
    const name = document.getElementById('nameInput').value.trim();
    if (name && !participants.includes(name)) {
        participants.push(name);
        localStorage.setItem('participants', JSON.stringify(participants));
        document.getElementById('confirmationMessage').innerText = "Você foi registrado com sucesso!";
        setTimeout(() => {
            window.location.href = 'draw.html';
        }, 1500);
    } else {
        alert("Nome inválido ou já registrado.");
    }
}

function populateDropdown() {
    const dropdown = document.getElementById('participantDropdown');
    participants.forEach(name => {
        let option = document.createElement('option');
        option.text = name;
        dropdown.add(option);
    });
}

function showSecretFriend() {
    const currentName = document.getElementById('participantDropdown').value;
    const shuffled = shuffle([...participants]);
    const index = shuffled.findIndex(person => person === currentName);
    const secretFriend = shuffled[(index + 1) % shuffled.length];
    document.getElementById('secretFriendMessage').innerText = `Seu amigo secreto é: ${secretFriend}`;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('participantDropdown')) {
        populateDropdown();
    }
});
