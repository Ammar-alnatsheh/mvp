const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { mongoDB } = require('../database/mongo_modules');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/events', (req, res) => {
  const filter = req.body;
  mongoDB.selectEvents(filter, (err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.status(200).end(data);
    }
  });
});

app.post('/event', (req, res) => {
  const event = req.body;
  mongoDB.insertEvent(event, (err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.status(200).end(data);
    }
  });
});

app.delete('/event/:eventId', (req, res) => {
  mongoDB.deleteEvent(req.params.eventId, (err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.status(203).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
