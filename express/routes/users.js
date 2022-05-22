const express = require('express');
const route = express.Router();

route.get('/', (request, response) => {
  console.log("rote users page");
  response.send("request to the home page");
});

route.post('/add-new-user', (request, response) => {
  console.log("adding new user");
  response.send("success in adding user");
})

route.get('/users', (request, response) => {
  console.log('getting all users');
  response.send('response is done')
})
module.exports = route;