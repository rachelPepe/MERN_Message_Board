// Defines the RESTful web api's capabilities // router
// defines the routes for handling CRUD (Create, Read, Update, Delete) operations on messages in the MongoDB database

const Message = require("../models/message");  // imports Message model
const router = require("express").Router();  // Express router instance



/* Route: Get list of all messages sorted by posted field in descending order 
- Method: GET request made to /api/messages - When a request is made to http://localhost:8000/api/messages, this function gets executed.
- "/" stands for root path (/api/messages)
- Message.find(): Retrieves all documents (messages) from the MongoDB collection.
- .sort("-posted"): Sorts the messages by the posted field in descending order (most recent messages first).
- exec(): Executes the query and returns a Promise. With await, we pause the function execution until the Promise resolves.
- If the query is successful, the messages variable will hold an array of message objects which is sent back to the client as JSON (res.json(message))
- if error occurs, catch block executes and sends 400 status with error details back to client
*/
router.get("/", async function(req, res){
    try {
        const messages = await Message.find().sort("-posted").exec();
        res.json(messages);
    }
    catch (err) {
        res.status(400).send(err);
    }
});



/* Route: Get a Message by ID - finds message by ID provided in URL
- Method: GET request made to /api/messages/:id - When a request is made to http://localhost:8000/api/messages/:id, this function gets executed.
- "/:id" is a route parameter (/api/messages/:id)
- req.params holds any route parameters passed by the client - Ex: If the request is GET /api/messages/634e7b3a6d0f88..., then req.params.id will be "634e7b3a6d0f88...".
- Message.findById(req.params.id) mongoose query that tries to find message by id, if found returns message document in JSON format to client
- if message doesnt exist, 404 status code sent
- catch block executes if error occurs 
*/
router.get("/:id", async function(req, res) { // 
    try {
        const message = await Message.findById(req.params.id).exec();
        if (!message){
            res.sendStatus(404)
        }
        else {
            res.json(message);
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
});



/* Route Add a new message to the database using the data from request body and the Message model 
- Method: POST route that listens on /api/messages - If the client sends a POST request to /api/messages, this function will run.
- Asynchronous function: Since we’re dealing with database operations, we use async/await to handle the Promises cleanly.
- new Message(req.body): Creates a new Mongoose model instance using the client’s data that was sent in the request body
- const savedMessage = await message.save(): - await pauses the function until the save operation completes, and the saved message is stored in savedMessage.
- res.status.apply(201).json(savedMessage): - sends http 201 created status code, indicationg new resource created, json(savedMesage) sends the saved message to the client in json
- if error returns 400 status with error
*/
router.post("/", async function(req, res) {
    try {
        const message = new Message(req.body);
        const savedMessage = await message.save();
        res.status(201).json(savedMessage);
    }
    catch {
        res.status(400).send(err);
    }
});



/* Route update an existing message by its ID using the data in request body
- Method: PUT route that listens on api/message/:id 
- runValidators: true ensures that all fields still meet the schema requirements.
- if succesful returns 204 status(no content)
- if message not found - returns 404 status
- if error - returns 400 status and error
*/
router.put("/:id", async function(req, res){
    try {
        const messagePart = req.body;
        result = await Message.updateOne( { _id: req.params.id }, messagePart, { runValidators: true });
        if (result.matchedCount === 0){
            res.sendStatus(404); // not found
        }
        else {
            res.sendStatus(204); // succesfull no content
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
        
    
});



/* Route delete message by id using request body
- Method: DELETE route that listens on /api/messages/:id - If the client sends a DELETE request to /api/messages/652f2f41c72d5c68b4f3c5c2, the function will attempt to delete the 
        message with that ID.
- req.params.id: Extracts the ID from the request URL (e.g., /api/messages/652f2f41c72d5c68b4f3c5c2).
- if succesful returns 404 status (no content)
- if message not found returns 404 status
- if error occurs returns 400 status with error 
*/
router.delete("/:id", async function(req, res) {
    try {
        const result = await Message.deleteOne({ _id: req.params.id }) 
        if (result.deletedCount === 0) {
            res.sendStatus(404); // not found
        }
        else {
            res.sendStatus(204); // no content
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
});

module.exports = router;






