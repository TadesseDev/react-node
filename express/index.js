const express = require('express');
const app = express();
app.listen(3001);
app.get('/', (request, response) => {
  console.log('request is made to the server');
  response.send('request is made for the express root');
});

const user = require('./routes/users');

app.use('/user', user);