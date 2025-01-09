const express = require("express");
const routes = require("./routes/routes.js");
const path = require('path')
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.set("views", "views")
app.use('/', routes);

app.use((req, res) => {
    res.status(404).render('error', { message: 'Page Not Found' });
  });

app.listen(8020, function(){console.log("Server is running at http://localhost:8020")});