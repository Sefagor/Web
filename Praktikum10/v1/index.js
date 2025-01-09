const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const { tutorials } = require('./models/persistence');


const server = http.createServer((req, res) => {
   const filePath = path.join(__dirname, '..', 'v0', 'index.html');
  //HTML
  if(req.url === '/' || req.url === '/index.html') {
    fs.readFile(filePath, (error, data) => {
      if(error){
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Seite nicht gefunden.');
        console.log(error);
      }
      else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    })
  }

  else if(req.url === '/liste.html' || req.url === '/index.html/liste.html') {
    const listFilePath = path.join(__dirname, '..', 'v0', 'liste.html');
    fs.readFile(listFilePath, (error, data) => {
      if(error){
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Seite nicht gefunden.');
        console.log(error);
      }
      else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    })
  }

  else if(req.url === '/tutorials.html' || req.url === '/index.html/tutorials.html') {
    const tutorialsFilePath = path.join(__dirname, '..', 'v0', 'tutorials.html');
    fs.readFile(tutorialsFilePath, (error, data) => {
      if(error){
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Seite nicht gefunden.');
        console.log(error);
      }
      else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    })
  }

  else if(req.url === '/tutorial.html' || req.url === '/index.html/tutorial.html') {
    const tutorialFilePath = path.join(__dirname, '..', 'v0', 'tutorial.html');
    fs.readFile(tutorialFilePath, (error, data) => {
      if(error){
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Seite nicht gefunden.');
        console.log(error);
      }
      else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    })
  }

  else if(req.url === '/form.html' || req.url === '/index.html/form.html') {
    const formFilePath = path.join(__dirname, '..', 'v0', 'form.html');
    fs.readFile(formFilePath, (error, data) => {
      if(error){
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Seite nicht gefunden.');
        console.log(error);
      }
      else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    })
  }

  //Suchformular
  else if(req.url.startsWith('/submit')  || req.url.startsWith('/index.html/submit') && req.method === 'GET') {
    const searchTerm = url.parse(req.url, true).query.search;
    console.log(searchTerm); 
    const filteredTutorials = tutorials.filter(tutorial =>
      tutorial.kategorien.some(kategorie => 
          kategorie.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    const templateFilePath = path.join(__dirname, '..', 'v0', 'tutorials.html');

    fs.readFile(templateFilePath, 'utf8',(error, data) => {
    if(error){
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Seite nicht gefunden.');
      console.log(error);
    }
    else{
      let tutorialListHTML = '';
      if (filteredTutorials.length > 0) {
            filteredTutorials.forEach(tutorial => {
              console.log(tutorial);
              tutorialListHTML += `
              <section class="tutorialSection">
                <fieldset>
                <legend><h2><a href="tutorial.html" class="tutorialTitel">${tutorial.name}</a></h2></legend>  
                  <img src="/assets/img/codes_image.jpg" alt="${tutorial.name}" width="50" height="25">
                  <div class="tutorial-info">
                      <p><strong>Datum:</strong> ${tutorial.datum}</p>
                      <p><strong>Dauer:</strong> ${tutorial.dauer}</p>
                      <p><strong>Beschreibung:</strong> ${tutorial.beschreibung}</p>
                      <a href="tutorial.html">Mehr Details</a>
                  </div>
                  </fieldset>
              </section>`})}
      else {
            tutorialListHTML = '<p>Keine Tutorials gefunden.</p>';
            }
      const HTML = data.replace('{{search}}', searchTerm).replace('{{template}}', tutorialListHTML);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(HTML);
    }
  })
}

  //CSS
  else if (req.url.startsWith('/assets/css/') && req.url.endsWith('.css')) {
    const cssFilePath = path.join(__dirname, '..', 'v0', req.url);
    fs.readFile(cssFilePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            console.error(err);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        }
    });
}
//Bilder
else if (req.url.startsWith('/assets/img/')) {
  const imageFilePath = path.join(__dirname, '..', 'v0', req.url);
  const extname = path.extname(imageFilePath).toLowerCase();
  
  let contentType = 'application/octet-stream';
  if (extname === '.jpg' || extname === '.jpeg') {
      contentType = 'image/jpeg';
  } else if (extname === '.png') {
      contentType = 'image/png';
  } else if (extname === '.gif') {
      contentType = 'image/gif';
  }

  fs.readFile(imageFilePath, (err, data) => {
      if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          console.error(err);
      } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
      }
  });
}
//Videos
else if (req.url.startsWith('/assets/vid/')) {
  const videoFilePath = path.join(__dirname, '..', 'v0', req.url);
  const extname = path.extname(videoFilePath).toLowerCase();
  
  let contentType = 'application/octet-stream';
  if (extname === '.mp4') {
      contentType = 'video/mp4';
  } else if (extname === '.webm') {
      contentType = 'video/webm';
  } else if (extname === '.ogg') {
      contentType = 'video/ogg';
  }

  fs.readFile(videoFilePath, (err, data) => {
      if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          console.error(err);
      } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
      }
  });
}
else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
}
});

  
  
  
server.listen(8844, () => {
  console.log('Server läuft auf http://localhost:8844');
});
