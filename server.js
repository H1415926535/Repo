'use strict'

const { createServer} = require('http');
const {PORT, upper, lower} = require('./ports');
const [a, b] = [1, 2]
const server = createServer( (req,res) => {
  if (req.url === '/'){
    res.setHeader('content-type','text/html');
    res.end(`
      <!doctype html>
      <body>
        <h1> ${upper(__dirname)} </h1>
        <p> ${lower("PaRaGrApH")} </p>
      </body>
      `)
  }
    else{
      res.end('UNKNOWN')
    }
})
server.on('connection', socket => {
  console.log('Someone connected', socket);
})
server.listen(PORT, () => console.log('Started our server'));
