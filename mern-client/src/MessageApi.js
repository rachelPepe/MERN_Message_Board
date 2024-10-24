// This file organizes all the API requests into a single module. Functions use fetch() to send API requests to the web server (mern-server)

const apiEndpoint = "http://localhost:8000/api/messages";
    // stores base url for the API endpoints related to messages



async function getMessages() {
    const response = await fetch(apiEndpoint);
    if (response.ok){
        return response.json();
    }
    else {
        console.log(response);
        return null;
    }
}
// sends a get request to /api/messages
// if succesful returns parsed JSON, if fails logs response and returns null



async function getMessage(messageId) {
    const response = await fetch(`${apiEndpoint}/${messageId}`);
    if (response.ok) {
        return response.json();
    }
    else {
        console.log(response);
        return null;
    }
}
// Sends a GET request to /api/messages/:id (where :id is the given messageId).



async function addMessage(message) {
    const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(message),
    })
    if (response.ok){
        return response.body;
    }
    else {
        console.log(response);
        return null;
    }
}
// adds a new message to the server
// sends post request to /api/messages with the new message data in the body as JSON
// JSON.stringify(messages) turns the user input message into JSON so it can be sent as teh requests body
// response.ok is a boolean value that indicates whether HTTP response was succesful



async function editMessage(messageId, messagePart) {
    const response = await fetch(`${apiEndpoint}/${messageId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(messagePart),
    })
    if (response.ok){
        return response.body;
    }
    else {
        console.log(response);
        return null;
    }
}



async function deleteMessage(messageId) {
    const response = await fetch(`${apiEndpoint}/${messageId}`, {
        method: "DELETE"
    });
    if (response.ok){
        return response.body;
    }
    else {
        console.log(response);
        return null;
    }
}
// Sends a DELETE request to /api/messages/:id.
// Returns the response body if the deletion is successful.

export {
    getMessages,
    getMessage,
    addMessage,
    editMessage,
    deleteMessage
};