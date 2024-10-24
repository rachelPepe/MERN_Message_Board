# MERN_message_board


The full application is created using the MERN stack 
    - REACT - uses web API to obtain data that is displayed in the UI (frontend)
    - EXPRESS - processes web API requests from React code and sends back responses (backend)
    - NODE - hosts the web server and web API (backend)
    - MONGODB - stores the apps data in a document database (backend)

The Message Board uses MongoDB to store the messages in a database.
The Node web server hosts a web API that allows for retrieving, adding, editing, and deleting messages stored in the MongoDB database.
React runs on the web browser (or client) to display the UI.
To display all messages, the React app first sends a "get messages" API request to the web server.
The web server in turn requests the messages from the MongoDB database.
The messages are sent from the database to the server, then back to React for displaying in the UI.
