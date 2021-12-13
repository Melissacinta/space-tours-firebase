const path = require('path');
const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const dataPath = path.join(__dirname, 'database');
const db = require(`${dataPath}/data.json`);

function createId(end = 5) {
  const str1 = Math.random().toString(36).substring(2, end);
  const str2 = Math.random().toString(36).substring(2, end).toUpperCase();
  const str3 = Math.random().toString(36).substring(2, end);

  return `${str1}${str2}${str3}`;
}

// ***************** HOLY SHIT ***************** \\
// literally going crazy: updated these @3AM  \\
const routes = {
  crewMembers: db.crew.map((member) => {
    const id = createId(10);
    return {
      ...member,
      id: id,
    };
  }),
  newDestinations: db.destinations.map((destination) => {
    const id = createId(10);
    return {
      ...destination,
      id: id,
    };
  }),
  newTechnology: db.technology.map((techno) => {
    const id = createId(10);
    return {
      ...techno,
      id: id,
    };
  }),
};

const { crewMembers, newDestinations, newTechnology } = routes;

app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Space Tourism Database' });
});

app.get('/data', (req, res) => {
  res.send([crewMembers, newDestinations, newTechnology]);
});

/* ************** GET CREWMEMBERS ************** */
app.get('/crew', (req, res) => {
  res.send(crewMembers);
});
app.get('/crew/:id', (req, res) => {
  const { id } = req.params;
  const foundMember = crewMembers.find((member) => member.id === id);
  res.send(foundMember);
});

/* ************** GET DESTINATIONS ************** */
app.get('/destinations', (req, res) => {
  res.send(newDestinations);
});
app.get('/destinations/:id', (req, res) => {
  const { id } = req.params;
  const foundDestination = newDestinations.find(
    (destination) => destination.id === id
  );
  res.send(foundDestination);
});

/* ************** GET TECNOLOGIES ************** */
app.get('/technology', (req, res) => {
  res.send(newTechnology);
});
app.get('/technology/:id', (req, res) => {
  const { id } = req.params;
  const foundTechnology = newTechnology.find((techno) => techno.id === id);
  res.send(foundTechnology);
});

/* ************** SERVER TEST CHECK ************** */
app.listen(PORT, () => {
  console.log(
    `The server is running on port ${PORT}. Visit http://localhost:${PORT} to view the data`
  );
});
