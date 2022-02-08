const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my world");
  }
  if (req.url === "/about") {
    res.end("Welcome to my profile");
  } else {
    res.end("This is not the way");
  }
});

server.listen(5000);
