const express = require('express');
const app = express();
const backPort = 6060;

const maneSix = [
  {
    name: 'Applejack',
    type: 'Earth Pony',
    picture:
      'https://static.wikia.nocookie.net/mylittlepony/images/e/e9/Applejack%2C_poney_terrestre.png/revision/latest?cb=20140202164052&path-prefix=fr',
  },
  {
    name: 'Fluttershy',
    type: 'Pegasus',
    picture: null,
  },
  {
    name: 'Rarity',
    type: 'Unicorn',
  },
  {
    name: 'Rainbow Dash',
    type: 'Pegasus',
  },
  {
    name: 'Twilight Sparkle',
    type: 'Alicorn',
  },
  {
    name: 'Pinkie Pie',
    type: 'Earth Pony',
  },
];

app.get('/', (req, res) => {
  res.send('Welcome on my API ! =) ');
});

app.get('/ponies', (req, res) => {
  res.send(maneSix);
});

app.listen(backPort, () => {
  console.log(`API running on http://localhost:${backPort}`);
});
