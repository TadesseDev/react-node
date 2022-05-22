const express = require('express');
const route = express.Router();
const mySql = require('mysql');

const connection = mySql.createConnection({
  host: 'localhost',
  user: 'express',
  database: 'express',
  password: 'express'
});

route.get('/', (request, response) => {
  console.log("rote users page");
  response.send("request to the home page");
});

route.post('/add-new-user', (request, response) => {
  console.log("adding new user", request.body);
  const { userName, firstName, lastName } = request.body;
  connection.query(`insert into express_users values(default,?,?,?);`,
    [userName, firstName, lastName],
    (error, result) => {
      if (error)
        response.send('fail in saving to the database');
      else
        response.send('success in saving to the database');
    });
})

route.get('/users', (request, response) => {
  console.log('getting all users');
  response.send('response is done')
})
module.exports = route;