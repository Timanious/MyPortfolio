// Step 14 -
// Make up an object called something like data with the information that we want to send to the server.
const data = 
{
    message: 'Hello from client!',
}

// Step 15 -
// If this were a fetch get request then we would simply do a fetch to the /api endpoint like this:
// fetch('/api');

// But what we want to do is send a POST so we need to send a second argument which is just a
// JavaScript object. Call it something like options and set it up seperately as a variable so we can examin
// it more closelier..
// See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const options = 
{
    // The first property that needs to be put into the options block is the method that we're using
    // and that method is a POST.
    method: 'POST',

    // There is a lot of informatiod that can be put into the options. If you want to look at all the posibilities
    // like the 'mode', 'cache' and 'credentials' then go to the link, above but the key thing that we want is the 'body'
    // of the POST request. The body is where we package up all of our data that we want to post.
    // Even though there are different ways to send the data what we want to do is send it as a text string so
    // we want to take the JavaScript object data and make it into a JSON string.
    body: JSON.stringify(data),

    // There is one other piece that's important.. We're specifically sending data in JSON format so it is useful to
    // specify that in what is called a header. The headers are where we specify the type of data
    // that we're sending. In this case we're sending JSON data so we need to specify that.
    // A header in this context is something that can be packaged along with any POST or GET request that is moving between
    // a client and the server, and it's a way of adding some additional meta information. More information is in the Mozilla docs.
    // Headers have a name a colon and a value. 
    // (Usually the headers get put before the body property but for the sake of the tutorial steps order it is put below here)
    headers: 
    {
        "Content-Type": "application/json",
    },

    // Even though there is more that we can put in the options block, the basic pieces that we need are:
    // 1. A request to sent data as JSON,
    // 2. A header telling that the data we're sending is going to be JSON,
    // 3. A fetch call telling that we want to post it to the /api endpoint.
}

fetch('/api', options);

// Step 16 -
// So now we get the message data, we put it into a JavaScript object, package it as a POST and send it tou our /api endpoint 
// and in the server we receive it and console log it.
// Restart the server with command $ node Server.js and refresh the page in the browser. To see the console.log messages 
// look in the VSCode terminal and you will see a message telling us that we've received a POST request but the data from
// the body is still undefined. This is because we still need to add the ability to parse incoming data as JSON to our server.
// The way to do that is with the express function express.json(), similarly to how we've used express.static() to tell the server
// that we want to host static files. So go back to Server.js and add webServerApp.use(express.json());,
// below the webServerApp.use(epress.static()) line.