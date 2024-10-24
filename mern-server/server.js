// Entry point for Node.js server - sets up Express application, middleware, defines routes and starts the server


const morgan = require("morgan");  // morgan is middleware for express that logs HTTP requests
const cors = require("cors"); // CORS used to allow cross origin requests to a different domain than the one that serves web page
const express = require("express");



const app = express()
    /* express() function is called to create an express application object, which acts as the central part of the web server - defines routes, middlewares, and http requests
     - Creates an instance of an Express application (app) to handle HTTP requests. */


app.use(express.json());  // middleware that parses HTTP requests with JSON body


app.use(morgan("dev"));  // shows HTTP requests in the console


app.use(cors());  // CORS allows requests from any origin 


app.use("/api/messages", require("./api/messages"));
    // Routes all requests that begin with /api/messages to a separate module (./api/messages). This keeps the routing logic modular and easy to manage.

    
const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
    // The server listens on port 8000 and logs a message when it is successfully started.

module.exports = app;
    
