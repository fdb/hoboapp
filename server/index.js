const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const modules = require('./modules/controller');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});
app.get('/modules', modules.getModules);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
