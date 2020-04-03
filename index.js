const BASE_URL = "http://dbdea2b7.ngrok.io"
document.querySelector("#new-message-form").addEventListener("submit", e => {
  e.preventDefault()
  const message = {
    username: e.target.username.value,
    text: e.target.text.value,
  }

  fetch(BASE_URL + "/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  })
    .then(r => r.json())
    .then(renderMessage)
})


function renderMessage(message) {
  console.log(message)
  const messageLi = document.createElement("li")
  messageLi.className = "message"

  const userSpan = document.createElement("span")
  userSpan.className = "user"
  userSpan.textContent = message.username

  const textSpan = document.createElement("span")
  textSpan.className = "text"
  textSpan.textContent = message.text

  messageLi.append(userSpan, textSpan)
  document.querySelector("#messages").append(messageLi)
}