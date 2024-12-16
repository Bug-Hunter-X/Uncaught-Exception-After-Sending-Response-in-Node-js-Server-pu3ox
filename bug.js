const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an error that occurs after the response has been sent
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
  
  // Error happens here, after the response is sent.
  throw new Error('This error occurs after the response has been sent.');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});