const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const modules = require('./modules/controller');

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});
app.get('/modules', modules.getModules);
app.post('/modules', modules.createModule);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
