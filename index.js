const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const loginRoute = require('./src/routes/login');
const apiRoute = require('./src/routes/api');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/login', loginRoute);
app.use('/api', apiRoute);
const port = 19000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})