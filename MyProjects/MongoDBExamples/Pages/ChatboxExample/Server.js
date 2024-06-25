// Server.js
console.log('Hello from Server!');

// Setting up an Express webserver using Node.js.
// Follows the tutorial of The Coding Train "Working with Data and APIs in JavaScript - 2.1 Server-side with Node.js":
// https://www.youtube.com/watch?v=wxbQP1LMZsw&t=356s
// See the official Express server documentation over here: 
// https://expressjs.com/

// Step 8 -
// In order to have access to the Express package we need to use require() 
// and we can at the same time store a reference to express in a constant.
// This is basically like an import statement.
// The reason we want to do that is because we want to create a web application.
import express from 'express';

// Step 9 -
// The way that we can create the web app is by calling the express() function
// The whole Node Express package basically comes in as a function that we can execute and put in a constant.
const webServerApp = express();
const port         = 3000;

// Step 10 -
// Start listening at a port number and subscribe a function to the callback event for when the server starts listening.
webServerApp.listen(port, OnServerStartListening());

function OnServerStartListening()
{
    console.log(`Webserver listening at port ${port}`);
}

// Step 11 -
// Start the server in the terminal with command $ node Server.js.
// The server is now listening for requests so when you go to localhost:3000 in your webbrowser you should see 'Cannot GET /'.
// This is because the server isn't actually serving up the index.html file just yet.

// Step 12 -
// To have the Server serve up the index.html file, create a folder named Public and put your index.html file into it.
// Then add the following code to your Server.js file to tell the server to serve up the files in the Public folder.
webServerApp.use(express.static('Public'));

// Step 17 - Add the ability to parse incoming data as JSON to our server.
// The way to do that is with the express function express.json(): 
// webServerApp.use(express.json());

// Step 18 -
// We can also put some options into the function's arguments to control or limit what is possible in terms of receiving data,
// all of that is documented on the Express website over here: https://expressjs.com/en/api.html#express.json
// As an example let's add the limit property to specify the maximum size of a body that is coming in to be 1mb as a starting point:
webServerApp.use(express.json({ limit: '1mb' }));

// Step 19 -
// Restart the server with terminal command $ node Server.js and refresh the page in the browser. If you look in the terminal in VSCode
// you will now see the message from the POST's body printed out correctly!

// Step 13 -
// Setting up Post request Routes
// See: https://expressjs.com/en/guide/routing.html#route-methods
// Following the steps of Working with Data and APIs in JavaScript - 2.3 HTTP Post Request with fetch():
// https://www.youtube.com/watch?v=Kw5tC5nQMRY&t=0s

// The post method takes two arguments. The first is the adress for where we want to receive that post and the second is
// a callback function for looking at the information coming in and sending a response back. 
webServerApp.post('/api', (request, response) => OnPostRequestCallback(request, response))

function OnPostRequestCallback(request, response)
{
    console.log('Received a POST request: '     + request);
    console.log('Request body: '                + request.body);
    console.log('Body message property value: ' + request.body.message);
}

// The next step is to have the client send something to this particular endpoint with a post so we can now move over to
// the client code which is in ./Public/Scripts/Client.js so see you there.
