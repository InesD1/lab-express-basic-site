const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path')

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('#logo', (req, res, next) => {
  res.render('index');
});

app.get('/about', (req, res, next) => {
  res.render('about');
});

app.get('/photoGallery', (req, res, next) => {
  res.render('photoGallery');
});

app.get('/photoGallery/vases', (req, res, next) => {
  res.render('vases');
});

app.get('/photoGallery/bowls', (req, res, next) => {
  res.render('bowls');
});

app.get('/photoGallery/plates', (req, res, next) => {
  res.render('plates');
});

app.listen(3000);