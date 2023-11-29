// Create web server
// 1. Import http module
const http = require("http");
// 2. Create web server
const server = http.createServer(function (request, response) {
  // 3. Send response
  response.end("Hello World");
});
// 4. Listen on a port
server.listen(3000);
console.log("Node.js web server at port 3000 is running..");