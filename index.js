const BASE_URL = "http://dbdea2b7.ngrok.io"

// Deliverable 1: read messages
fetch(BASE_URL + "/messages")
.then(response => response.json())
.then(messages => {
  messages.data.forEach(message => renderMessage(message))
})

// Deliverable 2: create message

const send = document.querySelector(`#new-message-form`)
send.addEventListener("submit", event => {
  event.preventDefault()
  const message = {
    username: event.target.username.value,
    text: event.target.text.value
  }
  fetch('http://dbdea2b7.ngrok.io/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })
  .then((response) => response.json())
  .then((message) => {
    renderMessage(message);
  })
})


// Use this helper function to render the messages!
function renderMessage(message) {
  const messageLi = document.createElement("li")
  messageLi.className = "message"

  const userSpan = document.createElement("strong")
  userSpan.className = "user"
  userSpan.textContent = `${message.username}: `

  const textSpan = document.createElement("span")
  textSpan.className = "text"
  textSpan.textContent = message.text

  messageLi.append(userSpan, textSpan)
  document.querySelector("#messages").append(messageLi)
}