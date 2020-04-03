const BASE_URL = "http://dbdea2b7.ngrok.io"

// Deliverable 1: read messages

// Deliverable 2: create message

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