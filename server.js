const http = require('http'); // import modułu http

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Server działa!\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server działa na porcie 3000 i adresie http://127.0.0.1:3000/');
});