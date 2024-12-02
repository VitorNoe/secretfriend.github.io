let people = [];

function addPerson() {
    const name = document.getElementById('nameInput').value.trim();
    const characteristic = document.getElementById('characteristicInput').value.trim();
    if (name && characteristic) {
        people.push({ name, characteristic });
        updatePersonList();
        document.getElementById('nameInput').value = '';
        document.getElementById('characteristicInput').value = '';
    }
}

function updatePersonList() {
    const list = document.getElementById('personList');
    list.innerHTML = '';
    people.forEach((person, index) => {
        list.innerHTML += `<li>${index + 1}. ${person.name} (${person.characteristic})</li>`;
    });
}

function drawNames() {
    if (people.length < 2) {
        alert("Adicione pelo menos 2 pessoas!");
        return;
    }

    let shuffled = [...people];
    shuffleArray(shuffled);

    let result = "";
    for (let i = 0; i < shuffled.length; i++) {
        const current = shuffled[i];
        const next = shuffled[(i + 1) % shuffled.length];
        result += `${current.name} tirou ${next.name}<br>`;
    }

    document.getElementById('result').innerHTML = result;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
