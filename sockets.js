const WS_URL = "ws://665dffa3.ngrok.io"
const socket = new WebSocket(WS_URL)

socket.onmessage = event => {
  const { data, type } = JSON.parse(event.data)
  switch (type) {
    case "ALL_MESSAGES":
      data.forEach(renderMessage)
      break;
    case "ONE_MESSAGE":
      renderMessage(data)
      break;
    default:
      break;
  }
}