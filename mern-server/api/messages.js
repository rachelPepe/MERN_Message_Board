// Defines the RESTful web api's capabilities // router
// defines the routes for handling CRUD (Create, Read, Update, Delete) operations on messages in the MongoDB database

const Message = require("../models/message");  // imports Message model
const router = require("express").Router();  // Express router instance



/* Route: Get list of all messages sorted by posted field in descending order 
- Method: GET /api/messages
- "/" stands for root path (/api/messages)
-if succesful, returns list of messages in JSON format  -if error, returns 400 status with error */
router.get("/", function(req, res){
    Message.find().sort("-posted").exec(function(err, messages){
        if (err) {
            res.statusCode(400).send(err);
        }
        else {
            res.json(messages);
        }
    });
});



/* Route: Get a Message by ID - finds message by ID provided in URL
- Method: GET /api/messages/:id
- "/:id" is a route parameter (/api/messages/:id)
- The Query.exec() method is called last to execute the query and provides a callback function that is called after the query executes.
- if found - returns message in JSON format 
- if not found - returns 404 status
- if error - returns 400 status with the error
*/
router.get("/:id", function(req, res) {
    Message.findById(req.params.id, function(err, message) {
        if (err){
            res.status(400).send(err)
        }
        else if (message === null){
            res.sendStatus(404);
        }
        else {
            res.json(message)
        }
    });
});



/* Route Add a new message to the database using the data from request body and the Message model 
- Method: POST /api/messages
- if succesful saves the message to the database and returns it with 201 status
- if error returns 400 status with error
*/
router.post("/", function(req, res) {
    const message = new Message(req.body);
    message.save(function(err, message) {
        if (err){
            res.status(400).send(err);
        }
        else {
            res.status(201).json(message);
        }
    });
});



/* Route update an existing message by its ID using the data in request body
- Method: PUT api/message/:id
- runValidators: true ensures that all fields still meet the schema requirements.
- if succesful returns 204 status(no content
- if message not found - returns 404 status
- if error - returns 400 status and error
*/
router.put("/:id", function(req, res){
    const messagePart = req.body;
    Message.updateOne( { _id: req.params.id }, messagePart, { runValidators: true }, function(err, result) {
        if (err){
            res.status(400).send(err);
        }
        else if (result.matchedCount === 0){
            res.sendStatus(404);
        }
        else {
            res.sendStatus(204);
        }
    });
});



/* Route delete message by id using request body
- if succesful returns 404 status (no content)
- if message not found returns 404 status
- if error occurs returns 400 status with error 
*/
router.delete("/:id", function(req, res) {
    Message.deleteOne({ _id: req.params.is }, function(err, result) {
        if (err) {
            res.status(400).send(err);
        }
        else if (result.matchedCount === 0) {
            res.sendStatus(404);
        }
        else {
            res.sendStatus(204)
        }
    });
});

module.exports = router;






