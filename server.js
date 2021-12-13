const path = require('path');
const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const dataPath = path.join(__dirname, 'database');
const db = require(`${dataPath}/data.json`);

const routes = {
  data: db,
  crew: db.crew,
  destinations: db.destinations,
  technology: db.technology,
};

const { data, crew, destinations, technology } = routes;

const htmlString = ` <h1>Hello and Welcome! to the Space Tourism Database. &female;</h1>
      <p>Click on these links to view the data</p>
      <li><a href="/data">ALL THE DATA</a></li>
      <li><a href="/crew">THE CREW</a></li>
      <li><a href="/destinations">THE DESTINATIONS</a></li>
      <li><a href="/technology">THE TECHNOLOGY</a></li>
      `;

app.use(cors());

app.get('/', (req, res) => {
  res.send(htmlString);
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.get('/crew', (req, res) => {
  res.send(crew);
});
app.get('/crew/:id', (req, res) => {
  const { id } = req.params;
  res.send(crew[id]);
});

app.get('/destinations', (req, res) => {
  res.send(destinations);
});
app.get('/destinations/:id', (req, res) => {
  const { id } = req.params;
  res.send(destinations[id]);
});

app.get('/technology', (req, res) => {
  res.send(technology);
});
app.get('/technology/:id', (req, res) => {
  const { id } = req.params;
  res.send(technology[id]);
});

app.listen(PORT, () => {
  console.log(
    `The server is running on port ${PORT}. Visit http://localhost:${PORT} to view the data`
  );
});
