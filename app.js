const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Home route - always shows main
app.get('/', (req, res) => {
  res.render('index', { branch: 'main' });
});

// Optional route - also shows main
app.get('/main-preview', (req, res) => {
  res.render('index', { branch: 'main' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

module.exports = app;
