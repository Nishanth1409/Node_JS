const http = require('http');

const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>Hello World</h2>");
  res.end();
})

.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

// http:://localhost:3000