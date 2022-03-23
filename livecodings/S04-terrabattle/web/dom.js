let nbBowmen = 0;
for (let i = 0; i < characters.length; i++) {
  const currentCharacter = characters[i];
  if (currentCharacter.weapon === 'Bow') {
    nbBowmen++;
  }
}

let i = 0;
let nbSwordmen = 0;
while (i < characters.length) {
  const currentCharacter = characters[i];
  if (currentCharacter.weapon === 'Sword') {
    nbSwordmen++;
  }
  i++;
}

let nbSpearmen = 0;
for (let i in characters) {
  const currentCharacter = characters[i];
  if (currentCharacter.weapon === 'Spear') {
    nbSpearmen++;
  }
}

let nbMages = 0;
characters.map((character) => {
  if (character.weapon === 'Staff') {
    nbMages++;
  }
});

const describe = (toto) => {
  switch (toto.weapon) {
    case 'Sword':
      return `${toto.name} slashes through everything !`;
    case 'Spear':
      return `${toto.name} pokes you through the eye !`;
    case 'Bow':
      return `${toto.name} shoots a volley of arrows !`;
    case 'Staff':
      return `${toto.name} casts a shitload of spells !`;
    default:
      return `${toto.name} does... Something ?`;
  }
};

const aside = document.querySelector('aside');
const main = document.querySelector('main');
// const titles = document.querySelectorAll("h2");

const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Hey world ! =) ';

const statsList = document.createElement('ul');

let newItem = document.createElement('li');
newItem.innerHTML = 'Bowmen: ' + nbBowmen;
statsList.appendChild(newItem);

newItem = document.createElement('li');
newItem.innerHTML = 'Swordmen: ' + nbSwordmen;
statsList.appendChild(newItem);

newItem = document.createElement('li');
newItem.innerHTML = 'Spearmen: ' + nbSpearmen;
statsList.appendChild(newItem);

newItem = document.createElement('li');
newItem.innerHTML = 'Mages: ' + nbMages;
statsList.appendChild(newItem);

aside.appendChild(newParagraph);
aside.appendChild(statsList);

for (let i = 0; i < characters.length; i++) {
  const currentCharacter = characters[i];

  const newA = document.createElement('a');
  newA.href = currentCharacter.name + '.html';

  let newP = document.createElement('p');
  newA.innerHTML = describe(currentCharacter);
  newP.appendChild(newA);
  main.appendChild(newP);
}
