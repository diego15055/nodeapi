const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;


mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(port || 3000, () => {

  console.log('Server run as port 3000')
});