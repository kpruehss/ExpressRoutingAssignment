const express = require('express');
const app = express();

// Time to setup some routes
app.get('/', (req, res) => {
  res.send('Hi there, welcome to my assignment!');
});

// Dynamic routing for animal noises
app.get('speak/:animal', (req, res) => {
  const animal = req.param();
  let sound = 0;

  if (animal.toLocaleLowerCase() === 'pig') {
    sound = 'Oink';
  } else if (animal.toLocaleLowerCase() === 'dog') {
    sound = 'woof';
  } else if (animal.toLocaleLowerCase() === 'cat') {
    sound = 'meow';
  } else if (animal.toLocaleLowerCase() === 'cow') {
    sound = 'mooooh';
  } else if (animal.toLocaleLowerCase() === 'horse') {
    sound = 'Neigh';
  } else {
    sound = '{insert animal sound}';
  }

  res.send(`The ${animal} says '${sound}'`);
});
