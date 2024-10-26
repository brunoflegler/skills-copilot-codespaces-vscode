// Create web server
// Create a web server in comments.js that listens on port 4001. 
// Use the provided server code to create your server.
// Add an event listener for the request event. 
// The event listener should take two arguments: a request (req) and a response (res).
// In the request event listener, use the res.write() method to write a message back to the client. 
// Any message will do.
// Finally, call the res.end() method to signal to the server that all of the response headers and body have been sent.
// After you've started your server, visit http://localhost:4001 in your browser. 
// You should see the message you wrote.

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Welcome to the comments page!');
  res.end();
});

server.listen(4001, () => {
  console.log('Server is listening on port 4001');
});