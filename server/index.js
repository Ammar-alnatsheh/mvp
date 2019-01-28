const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { pSql } = require('../database/pSql_modules');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/events', (req, res) => {
  pSql.selectEvents(null, (err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/event', (req, res) => {
  const event = req.body;
  pSql.insertEvent(event, (err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.delete('/event/:eventId', (req, res) => {
  pSql.deleteEvent(req.params.eventId, (err, data) => {
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
