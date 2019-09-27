require('newrelic');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = 3000;


app.use(bodyParser.json());
app.use('/listing/:id/', express.static('public'));
app.use('/loaderio-092c547091c949f3c5e53b222b1d7ee0/', (req, res) => {
  res.sendFile('/public/loaderio-092c547091c949f3c5e53b222b1d7ee0.txt', (error) => {
    if (error) {
      console.log(error);
    }
  });
});

app.get('/', (req, res) => {
  res.send('GET seen');
});


app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
