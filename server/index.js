const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/events/:catagory', (req, res) => {
  const cat = req.params.catagory;
  res.status(200).end(`get events ${cat}`);
});
app.post('/event', (req, res) => {
  res.status(201).end('post event');
});
app.delete('/event/:eventId', (req, res) => {
  const id = req.params.eventId;
  res.status(201).end(`delete event ${id}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
