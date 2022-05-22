const express = require('express');
const app = express();
const cors = require('cors');
app.listen(3001);

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.get('/', (request, response) => {
  console.log('request is made to the server');
  response.send('request is made for the express root');
});

const users = require('./routes/users');

app.use('/users', users);