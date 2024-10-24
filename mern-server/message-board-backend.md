# MERN SERVER

- (api/messages.js) - // Defines the RESTful web api's capabilities // router
    - this file defines the CRUD API endpoints for managing messages, handling:
        GET /api/messages – Retrieve all messages sorted by posted.
        GET /api/messages/:id – Retrieve a single message by ID.
        POST /api/messages – Create a new message.
        PUT /api/messages/:id – Update an existing message by ID.
        DELETE /api/messages/:id – Delete a message by ID.

- (server.js) - Entry point for Node.js server - sets up Express application, middleware, defines routes and starts the server

- (db.js) - This file handles the MongoDB database connection using Mongoose. creats message_db whcih will store and access documents

- (message.js) - This file defines the Message model (schema) using Mongoose. The model represents the structure of a "message" document stored in the MongoDB database.


** once i had made all files and tried to run founs out i had to use async instead of call back functions 
- async/await makes the code cleaner and easier to read.
- Mongoose operations now return Promises (no need for callbacks), which aligns with the latest JavaScript standards.
- If an error occurs, we catch it in the try/catch block and send the appropriate response.