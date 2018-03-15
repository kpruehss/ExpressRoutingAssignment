const express = require('express');
const app = express();

// Time to setup some routes
app.get('/', (req, res) => {
  res.send('Hi there, welcome to my assignment!');
});

// Dynamic routing for animal noises
app.get('/speak/:animal', (req, res) => {
  const {animal} = req.params;
  // Turn this into an object for the love of god
  const sound = {
    pig: 'Oink',
    dog: 'Woof Woof',
    cat: 'MEOW',
    cow: 'MOOOOOh',
    goldfish: '....',
  };

  if (sound.hasOwnProperty(animal)) {
    res.send(`The ${animal} says '${sound[animal.toLowerCase()]}'`);
  } else {
    res.send(`Hold my beer while I look up what sound a ${animal} makes`);
  }
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

/*
 * App.set('case sensitive routing', false);
 * Server listen on port settings
 */
app.listen(3000, () => {
  console.log('Server started listening on port 3000');
});
