# Chatiron Challenge

Write your code in the index.js file, you won't need to modify the sockets.js file for this to work!

## Initial Fetch
When the page loads, make a `fetch` request to get all the messages:

```
GET /messages
```

Use the `renderMessage` helper to add the messages to the page!

## Sending a message
When the `#new-message-form` is submitted, make a `fetch` request to send a message:

```
POST /messages

Required Headers: {
  "Content-Type": "application/json"
}

Required Keys In Body: {
  text: "your message",
  username: "your username"
}
```