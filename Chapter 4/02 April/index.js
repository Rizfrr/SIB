const http = require("http");
const fs = require("fs");
const path = require("path");

const { PORT = 8000 } = process.env;
const PUBLIC_DIRECTORY = path.join(__dirname, "public");
const people = require("./data/people.json");

function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, "utf-8");
}

function onRequest(req, res) {
  /*const htmlFile = path.join(PUBLIC_DIRECTORY, "index.html");
  const html = fs.readFileSync(htmlFile, "utf-8");
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(html);*/
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end(getHTML("index.html"));
      return;
    case "/about":
      res.writeHead(200);
      res.end(getHTML("about.html"));
      return;
    case "/api/people":
      res.writeHead(200);
      res.end(JSON.stringify(people));
      return;
    default:
      res.writeHead(404);
      res.end(getHTML("404.html"));
      return;
  }
}

const server = http.createServer(onRequest);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`server is listening on port ${PORT}`);
});
