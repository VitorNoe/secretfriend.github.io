// Carrega a lista de participantes ou cria uma lista vazia
let participants = JSON.parse(localStorage.getItem('participants')) || [];

// Função para registrar participantes
function registerParticipant() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

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
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerText = "Você foi registrado com sucesso!";
    confirmationMessage.style.color = "green";

    // Redireciona para a página de sorteio após 1.5 segundos
    setTimeout(() => {
        window.location.href = 'draw.html';
    }, 1500);
}

// Adiciona o evento de clique ao botão "Registrar"
document.getElementById('registerBtn').addEventListener('click', registerParticipant);

// Para fins de depuração
console.log("Script carregado corretamente. Aguardando o evento de clique...");
