const template = require('./template.js');

const router = (req ,res) => {
    let html;
    if(req.method === 'GET' && req.url === '/'){
        html = template("Liste der Feedbacks");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    }
    else{
        console.log(`HTTP Methode: ${req.method} \n URL: ${req.url}`);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    }
}

module.exports = router;