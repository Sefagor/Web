const express = require("express");
const router = express.Router();
const {tutorials, getTutorialsZuKategorie, kategorien} = require("../models/persistence");
const path = require("path");


router.get("/", function (req, res) {
  res.render("index", { tutorials });
});

router.get("/submit", function (req, res) {
  const category = req.query.search;
  
  const filteredTutorials = getTutorialsZuKategorie(category);
  console.log(filteredTutorials);
  res.render("tutorials", { tutorials: filteredTutorials, search: category });
});


router.get("/liste", function (req, res) {
  res.render("liste", { tutorials});
});

router.get("/tutorial/:tutorialName", function (req, res) {
  const tutorialName = req.params.tutorialName;

  const tutorial = tutorials.find(t => t.name === tutorialName);

  if (tutorial) {
    res.render("tutorial", { tutorial: tutorial });
  } else {
    res.status(404).send("Tutorial not found");
  }
});

router.get("/form", function (req, res) {
  res.render("form", { kategorien });
});

router.post("/form", function (req, res) {
  const { name, language, categories, description, duration, date, type, content } = req.body;

 
  const selectedCategories = categories.split(",").map(cat => {
    return kategorien.find(kategorie => kategorie.name === cat.trim());
  }).filter(Boolean); 

  const newTutorial = {
    name,
    sprache: language,
    beschreibung: description,
    dauer: duration,
    datum: new Date(date),
    embedCode: type === "video" ? content : null,
    bild: null,
    type: type,
    kategorien: selectedCategories,
    kapitelliste: [], 
  };


  tutorials.push(newTutorial);


  res.redirect("/liste"); 
});
module.exports = router;
