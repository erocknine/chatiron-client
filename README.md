# Chatiron Challenge

Write your code in the index.js file, you won't need to modify the sockets.js file for this to work!

## Setup
All the setup is done for you! Use the `BASE_URL` variable to compose your url for the fetch requests. For example:

```js
fetch(BASE_URL + "/some_endpoint")
```

## Read Messages
When the page loads, make a `fetch` request to get all the messages:

```
GET /messages
```

Use the `renderMessage` helper to add the messages to the page!

## Create a message
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