const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage('user', userText);
  input.value = '';
  
  setTimeout(() => {
    const botReply = generateFakeResponse(userText);
    appendMessage('bot', botReply);
  }, 600);
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('chat-message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateFakeResponse(input) {
  return `Estoy pensando en lo que dijiste: "${input}"... pero pronto podré responder de verdad.`;
}
