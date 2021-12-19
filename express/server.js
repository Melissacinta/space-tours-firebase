const express = require('express');
const cors = require('cors');
const app = express();
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json());
app.use('/api', router); // path must route to lambda
app.use('/', router);
app.use(cors());

const db = require('./data.json');

function createId(end = 5) {
  const str1 = Math.random().toString(36).substring(2, end);
  const str2 = Math.random().toString(36).substring(2, end).toUpperCase();
  const str3 = Math.random().toString(36).substring(2, end);

  return `${str1}${str2}${str3}`;
}

const routes = {
  crew: db.crew.map((member, idx) => {
    const id = createId(10);
    return {
      ...member,
      id: id,
    };
  }),
  destinations: db.destinations.map((destination, idx) => {
    return {
      ...destination,
      id: idx + 1,
    };
  }),
  technology: db.technology.map((techno, idx) => {
    return {
      ...techno,
      id: idx + 1,
    };
  }),
};

const { crew, destinations, technology } = routes;

router.get('/', (req, res) => {
  if (req.method !== 'GET') return;
  try {
    res.status(200).send({ destinations, crew, technology });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/data', (req, res) => {
  if (req.method !== 'GET') return;
  try {
    res.status(200).send({ crew, destinations, technology });
  } catch (error) {
    res.status(500).send(error);
  }
});

/* ************** GET crew ************** */
router.get('/crew', (req, res) => {
  if (req.method !== 'GET') return;
  try {
    res.status(200).send(crew);
  } catch (error) {
    res.status(500).send({ err: error });
  }
});

router.get('/crew/:id', (req, res) => {
  if (req.method !== 'GET') return;
  try {
    const { id } = req.params;
    const foundMember = crew.find((member) => member.id === id);
    res.status(200).send(foundMember);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* ************** GET DESTINATIONS ************** */
router.get('/destinations', (req, res) => {
  if (req.method !== 'GET') return;
  try {
    res.status(200).send(destinations);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/destinations/:id', (req, res) => {
  if (req.method !== 'GET') return;
  try {
    const { id } = req.params;
    const foundDestination = destinations.find(
      (destination) => destination.id === id
    );
    res.status(200).send(foundDestination);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* ************** GET TECNOLOGIES ************** */
router.get('/technology', (req, res) => {
  if (req.method !== 'GET') return;
  try {
    res.status(200).send(technology);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/technology/:id', (req, res) => {
  if (req.method !== 'GET') return;
  try {
    const { id } = req.params;
    const foundTechnology = technology.find((techno) => techno.id === id);
    res.status(200).send(foundTechnology);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
module.exports.handler = serverless(app);
