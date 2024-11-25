// Import the http module, which allows us to create an HTTP server
const http = require('http');

// Define the port number that our server will listen on
const port = 3000;

// Define an array of tasks (this is not currently being used in the code)
const Todolist = ["Task 1", "Task 2", "Task 3"];

// Create a new HTTP server
http.createServer((req, res) => {
  // Get the URL and method of the incoming request
  const {url, method} = req;

  // Handle requests to the root URL ("/")
  if(url === "/") {
    // Check if the request method is GET
    if(method === "GET") {
      // Set the response status code to 200 (OK) and the content type to text/html
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Write the response body (in this case, a simple "Hello" message)
      res.write("<h2>Hello</h2>");
    }
  } 
  // Handle requests to the "/Task 1" URL
  else if(url === "/Task 1") {
    // Check if the request method is GET
    if(method === "GET") {
      // Set the response status code to 200 (OK) and the content type to text/html
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Write the response body (in this case, a simple "Hello Task 1" message)
      res.write("<h2>Hello Task 1</h2>");
    }
  } 
  // Handle requests to the "/Task 2" URL
  else if(url === "/Task 2") {
    // Check if the request method is GET
    if(method === "GET") {
      // Set the response status code to 200 (OK) and the content type to text/html
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Write the response body (in this case, a simple "Hello Task 2" message)
      res.write("<h2>Hello Task 2</h2>");
    }
  } 
  // Handle any other URLs (i.e., 404 Not Found)
  else {
    // Set the response status code to 404 (Not Found) and the content type to text/html
    res.writeHead(404, {'Content-Type': 'text/html'});
    // Write the response body (in this case, a simple "Page not found" message)
    res.write("<h2>Page not found</h2>");
  }
  
  // End the response (i.e., send the response back to the client)
  res.end();
})

// Start the server listening on the specified port
.listen(port, () => {
  // Log a message to the console indicating that the server is running
  console.log(`Server running on port ${port}`);
});

// http://localhost:3000