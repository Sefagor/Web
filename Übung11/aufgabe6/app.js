const express = require("express");
const app = express();
const bilder = require("./models/bilder");

app.set("view engine", "ejs");
app.set("views", "views");

// Global variable to track the current image index
let count = 0;

app.use(express.static("public"));

app.get("/", function (req, res, next) {
  const currentBild = bilder.holeStartBild();
  res.render("home", {
    imgtext: currentBild.beschreibung,
    imgurl: "/img/" + currentBild.dateiname,
    imgalt: "Robot",
  });
});

app.get("/zurueck", function (req, res, next) {
  const currentBild = bilder.zurueck(count);
  count = currentBild.count; // Update the global count
  res.render("home", {
    imgtext: currentBild.bild.beschreibung,
    imgurl: "/img/" + currentBild.bild.dateiname,
    imgalt: "FHDortmund",
  });
});

app.get("/vor", function (req, res, next) {
  const currentBild = bilder.vor(count);
  count = currentBild.count; // Update the global count
  res.render("home", {
    imgtext: currentBild.bild.beschreibung,
    imgurl: "/img/" + currentBild.bild.dateiname,
    imgalt: "Meadow",
  });
});

console.log("Server is running on port 8910");
app.listen(8910);
