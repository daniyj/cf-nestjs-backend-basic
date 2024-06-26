// import http from 'http'; 2줄은 1줄과 같다.
const http = require("http");

// localhost -> 127.0.0.1 -> loop back -> 서버를 실행한 컴퓨터
const host = "localhost";
const port = 3000;

// 서버 만들기

// req -> request -> 요청
// res -> response -> 응답
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World</h1>");
});

server.listen(port, host, () => {
  console.log("server running on http://localhost:3000");
});