const fs = require("fs");
fs.writeFileSy("./text.txt", "Hallo WEB1", (err) => {});

fs.readFile("./text.txt", (err, data) => {console.log(`Gelesener Inhalt: ${data}`);});

console.log("Datei schreiben und lesen:");
