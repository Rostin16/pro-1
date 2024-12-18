const http = require("http");
const requestHandler=require('./requestHandler');


const port = 8080;

// for make server
const server = http.createServer(requestHandler);

server.listen(port, (error) => {
  if (error) {
    console.log("Server failed to start on port", +port);
  return false;
  }
    console.log("Server started on port", +port);
    console.log("http://localhost:" +port);
  }
);




module.exports = requestHandler;