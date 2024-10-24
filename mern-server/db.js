// This file handles the MongoDB database connection using Mongoose.


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/message_db");
module.exports = mongoose;

/* 
- In db.js, the command mongoose.connect("mongodb://localhost/message_db"); creates message_db if the database does not exist. 
The URL assumes that MongoDB is running on localhost (the local machine). The database will store message documents. 
- message.js will import db.js   
*/