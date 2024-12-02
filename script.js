function showSecretFriend() {
    const currentName = document.getElementById('participantDropdown').value;
    if (!currentName) {
        alert("Selecione seu nome na lista.");
        return;
    }

    // Embaralha a lista e encontra o amigo secreto
    const shuffled = shuffle([...participants]);
    const index = shuffled.findIndex(person => person === currentName);
    const secretFriend = shuffled[(index + 1) % shuffled.length];

    // Exibe a mensagem com o amigo secreto sorteado
    const messageElement = document.getElementById('secretFriendMessage');
    messageElement.innerText = `Você tirou: ${secretFriend}! 🎁`;
    messageElement.classList.remove('hidden');
}
