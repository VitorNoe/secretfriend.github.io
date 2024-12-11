const participants = JSON.parse(localStorage.getItem('participants')) || [];
const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
const adminPassword = '2512';
const adminName = 'admin';

function displayParticipants() {
    const tableBody = document.querySelector('#participantsTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    participants.forEach((participant, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${participant.name}</td>
            <td><button onclick="deleteParticipant(${index})">Excluir</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteParticipant(index) {
    participants.splice(index, 1);
    localStorage.setItem('participants', JSON.stringify(participants));
    displayParticipants();
}

function registerUser(name, password) {
    if (participants.some(p => p.name === name)) {
        return 'Nome já registrado!';
    }
    participants.push({ name, password, hasDrawn: false });
    localStorage.setItem('participants', JSON.stringify(participants));
    localStorage.setItem('loggedUser', JSON.stringify({ name, password }));
    window.location.href = 'sorteio.html';
}

function loginUser(name, password) {
    const user = participants.find(p => p.name === name && p.password === password);
    if (user) {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        if (name === adminName && password === adminPassword) {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'sorteio.html';
        }
    } else {
        return 'Nome ou senha inválidos!';
    }
}

document.getElementById('registerBtn').addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    const password = document.getElementById('passwordInput').value;
    const message = registerUser(name, password);
    document.getElementById('message').textContent = message || 'Registrado com sucesso!';
});

document.getElementById('loginBtn').addEventListener('click', () => {
    const name = document.getElementById('loginName').value;
    const password = document.getElementById('loginPassword').value;
    const message = loginUser(name, password);
    document.getElementById('loginMessage').textContent = message || 'Login bem-sucedido!';
});

document.getElementById('drawBtn').addEventListener('click', () => {
    if (loggedUser) {
        if (loggedUser.hasDrawn) {
            document.getElementById('resultMessage').textContent = 'Você já sorteou!';
        } else {
            const availableParticipants = participants.filter(p => p.name !== loggedUser.name && !p.hasDrawn);
            const randomParticipant = availableParticipants[Math.floor(Math.random() * availableParticipants.length)];
            loggedUser.hasDrawn = true;
            randomParticipant.hasDrawn = true;
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
            localStorage.setItem('participants', JSON.stringify(participants));
            document.getElementById('resultMessage').textContent = `Seu amigo secreto é ${randomParticipant.name}!`;
        }
    }
});

document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('loggedUser');
    window.location.href = 'login.html';
});

if (window.location.pathname === '/admin.html') {
    displayParticipants();
}
