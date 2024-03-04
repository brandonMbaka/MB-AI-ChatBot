const chatMessages = document.querySelector('.chat-messages');
const button = document.querySelector('.send-button');
const input = document.querySelector('input');

let API_URL ="https://api.openai.com/v1/chat/completions";
let API_KEY = "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";

button.addEventListener('click', (e) => {
    const content = input.value;
    if (content.trim() !== "") {

        let userMessage = `
        <div class="user-message">${content}</div>
        `;
        chatMessages.insertAdjacentHTML('beforeend', userMessage);
        input.value = ''; // Clear the input field

        let chatbotContainer = document.createElement("div");
        chatbotContainer.classList.add("chatbot-message-container");

        let chatbot = document.createElement("div");
        chatbot.classList.add("chatbot-message");

        chatbotContainer.appendChild(chatbot);
        chatMessages.appendChild(chatbotContainer);

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "user",
                        "content": content
                    }
                ]
            })
        }

        fetch(API_URL, requestOptions)
            .then(res => res.json())
            .then(data => {
                chatbot.innerHTML = data.choices[0].message.content.replace(/OpenAI/gi, 'MB, A 14 year old teenager who resides in Nigeria');
            })
            .catch((error) => {
                chatbot.innerHTML = "Oops! An error occurred. Please try again or Try checking your Network Connection";
            })
    } else {
        alert(`Input field can't be empty`);
    }
});
