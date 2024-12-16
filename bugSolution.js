const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');

  try {
    // Code that might throw an error after the response is sent
    throw new Error('This error occurs after the response has been sent.');
  } catch (err) {
    // Log the error and handle it appropriately
    console.error('Error after sending response:', err);
    // You can add any extra error handling or logging here
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});