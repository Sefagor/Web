const http = require('http');
const router = require('./router.js');

const server = http.createServer(router);

server.listen(3000, () => {console.log('Server is running on port 3000')});
