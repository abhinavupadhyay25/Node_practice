const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  const hero = {
    firstName: "Bruce",
    lastName: "Bayne",
  };
  //response.writeHead(200, { "Content-Type": "text/plain" });
  //response.end("this is nodejs server");  //text response

  //response.writeHead(200, { "Content-Type": "application/json" });
  //response.end(JSON.stringify(hero));  // JSON response

  // response.writeHead(200, { "Content-Type": "text/html" });
  // response.end("<h1>this is nodejs server</h1>"); //html response

  response.writeHead(200, { "Content-Type": "text/html" });
  const html = fs.readFileSync("./index.html", "utf-8");
  response.end(html);
});
server.listen(3000, () => {
  console.log("server is running...");
});
