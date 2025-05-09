const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userText = chatbotInput.value.trim();
    if (userText !== '') {
        appendMessage('Tu', userText);
        botResponse(userText);
        chatbotInput.value = '';
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function botResponse(userText) {
    const msg = userText.toLowerCase();
    let response = "Non ho capito, puoi ripetere?";

    if (msg.includes('ciao')) {
        response = "Ciao! Come posso aiutarti?";
    } else if (msg.includes('progetto')) {
        response = "I progetti scolastici sono disponibili nella home.";
    } else if (msg.includes('musica')) {
        response = "Trovi la musica nel progetto VISPO!";
    } else if (
        msg.includes('vispo') ||
        msg.includes("cos'è il progetto vispo") ||
        msg.includes("cos'e' il progetto vispo") ||
        msg.includes("cos'è il vispo") ||
        msg.includes("cos'e' il vispo")
    ) {
        response = 'Il progetto VISPO è un’iniziativa ambientale legata al Santuario Pelagos. Per saperne di più clicca <a href="vispo.html" target="_blank">qui</a>';
    }

    setTimeout(() => {
        appendMessage('Bot', response);
    }, 500);
}
