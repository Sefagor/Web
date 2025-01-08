const template = require("./template.js")

const router = (req, res) => {
    let html;
    if(req.method == "GET" && req.url == "/"){
        html = template("Liste der Feedbacks");
        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(html);
    }
    else{
        html = template(`Methode: ${req.method} Url ${req.url}`);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    }
}

module.exports = router;