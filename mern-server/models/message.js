// This file defines the Message model (schema) using Mongoose. The model represents the structure of a "message" document stored in the MongoDB database.


const db = require("../db"); // imports database connection 
    

const Message = db.model("Message", {
    username: { type: String, required:true },
    text:     { type: String, required: true },
    posted:   { type: Date, default: Date.now }
});
    /* create a model from the schema 
    - a model is a constructor compiled from the schema, a model instance represents a mongoDB instance that can be saved or retreived from the message_db database 
        - models created from the schemas using mongoose.model(modelName, schema) - mongoose is imported from db.js and assigned to variable db
    - schema defines the structure of documents within a collection - mongoose.Schema() method creates a new Schema object that defines the properties and data types
    */


module.exports = Message;