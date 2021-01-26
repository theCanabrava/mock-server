const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const loginRoute = require('./src/routes/login');
const apiRoute = require('./src/routes/api');

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use('/login', loginRoute);
app.use('/api', apiRoute);

const PORT = process.env.PORT || 19000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})