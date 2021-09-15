const http = require("http"),
    request = require('request'),
    dotenv = require('dotenv'),
    createError = require('http-errors'),
    hostname = '127.0.0.1';

    dotenv.config();

const port = process.env.PORT;


//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*var options = {
  'method': 'GET',
  'url': `${process.env.SEARCH_URL}?q=${}`,
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});*/