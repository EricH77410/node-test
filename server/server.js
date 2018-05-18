const express = require('express')

const app = express();

const team = [
  {
    name: 'Rico',
    age: 47
  },
  {
    name: 'Doud',
    age: 45
  },
  {
    name: 'Mar',
    age: 39
  }
]

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/about', (req, res) => {
  res.status(200).send(team);
})



app.listen(5002)

module.exports.app = app