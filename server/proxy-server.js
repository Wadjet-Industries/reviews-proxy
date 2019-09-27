require('newrelic');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = 3000;


app.use(bodyParser.json());
app.use('/listing/:id/', express.static('public'));

app.get('/', (req, res) => {
  res.send('GET seen');
});


app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
