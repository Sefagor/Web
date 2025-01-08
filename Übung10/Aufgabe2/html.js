const http = require('http');
const fs = require('fs');

const server = http.createServer((reg, res) => {

})

server.listen(8080, ()  => {
    console.log('Server is running on port 8080');
    fs.readFile('index.html', (err, data) => {console.log(data)})});