const express = require('express');
const app = express();

// Time to setup some routes
app.get('/', (req, res) => {
  res.send('Hi there, welcome to my assignment!');
});

// Dynamic routing for animal noises
app.get('/speak/:animal', (req, res) => {
  // Const animal = req.params.animal;
  const {animal} = req.params;
  let sound = 0;

  if (animal === 'pig') {
    sound = 'Oink';
  } else if (animal === 'dog') {
    sound = 'woof';
  } else if (animal === 'cat') {
    sound = 'meow';
  } else if (animal === 'cow') {
    sound = 'mooooh';
  } else if (animal === 'horse') {
    sound = 'neigh';
  } else {
    sound = '{insert animal sound}';
  }

  res.send(`The ${animal} says '${sound}'`);
});

app.get('/repeat/:word/:count', (req, res) => {
  const {word} = req.params;
  const {count} = req.params;
  let str = '';

  for (let counter = 0; counter < count; counter++) {
    str += ` ${word}`;
  }

  res.send(str);
});

app.get('*', (req, res) => {
  res.send('Sorry, page not found...what are you doing with your life?');
});

app.set('case sensitive routing', false);
// Server listen on port settings
app.listen(3000, () => {
  console.log('Server started listening on port 3000');
});
