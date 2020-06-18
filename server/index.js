const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { ReviewModel, db } = require('../database/db.js');


const PORT = 3003;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

// test this for return object type or length
const reviewRoute = app.get('/reviews', (req, res) => {
  ReviewModel.find((err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results);
    }
  }).limit(10);

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.export = reviewRoute;
