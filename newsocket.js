'use strict'

const net = require('net');
const sock = new net.Socket;

sock.on('connect', () => {
  sock.write('GET /en/ HTTP/1.1 \r\n');
  sock.write('Host: istc.am');
  sock.write('\r\n\r\n');
})

sock.setEncoding('utf-8');

const total_data = [];

sock.on('data', d => total_data.push(d));



sock.on('end',() =>{
    const res = total_data.reduce((prev, total) => prev+total);

    const result = {};
    const headers = res.split('\r\n\r\n')[0];
    const body = res.split('\r\n\r\n')[1];

    const split_headers = headers.split('\r\n');

    result.headers = split_headers;
    result.body = body;

    console.log(result);
});

  sock.connect({
    port: 80,
    host: 'istc.am'
  });
