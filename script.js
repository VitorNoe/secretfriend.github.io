const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '•'; // Ponto branco
    snowflake.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração aleatória (2 a 5 segundos)
    snowflake.style.fontSize = `${Math.random() * 10 + 5}px`; // Tamanho aleatório (5 a 15px)

    snowContainer.appendChild(snowflake);

    // Remove o floco após a animação
    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Tempo máximo da animação
}

// Cria novos flocos de neve continuamente
setInterval(createSnowflake, 200);
