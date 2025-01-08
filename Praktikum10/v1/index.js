const http = require('http');
const url = require('url');
const {getDauerInStundenUndMinuten, getTutorialsZuKategorie, kategorien, tutorials} = require('./models/persistence');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/submit')) {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;

    if (queryParams) {
      console.log(req.url); 
      console.log('Suchdata:', queryParams); 

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

      const gesuchteTutorials = [];
      tutorials.forEach(tutorial => {
        if (tutorial.name.toLowerCase().includes(queryParams.search.toLowerCase())) {
          gesuchteTutorials.push(tutorial);
        }
      });

      let template = ''; 

      if (gesuchteTutorials.length > 0) {
        template += `<ul>`;
        gesuchteTutorials.forEach(tutorial => {
          template += `<li><a href="web-praktikum\v0\tutorial.html">${tutorial.name}</a></li>`;
        });
        template += `</ul>`;
      } else {
        template += `<p>Keine Tutorials gefunden.</p>`;
      }

      let html = `<!DOCTYPE html>
                    <html lang="de">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Web-Server</title>
                        </head>
                        <body>
                            <h2>Tutorials mit: ${queryParams.search}</h2>
                            ${template}
                        </body>
                    </html>`;

      res.end(html);
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Fehler: Keine Formulardaten empfangen.');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Seite nicht gefunden.');
  }
});

server.listen(8844, () => {
  console.log('Server läuft auf http://localhost:8844');
});

