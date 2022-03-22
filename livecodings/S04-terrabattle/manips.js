const characters = require('./data');

// Qu'a-t-on comme données ?
// console.log(characters);

// Combien de persos dispos ?
// console.log(characters.length);

// A quoi ressemble un perso ?
// console.log(characters[0]);

// Données du 37ème perso
// console.log(characters[36], characters[37]);

// Données des dix premiers persos
// console.log(characters.slice(0, 10));

// Noms de tous les persos ? Noms et armes ? Phrase de présentation ?
// foreach(characters) {
//   console.log("?")
// }
// characters.forEach((character) => {
//   console.log(character.weapon);
// });

// Combien de lanciers ? D'archers ? D'épéistes ? De mages ? (4 syntaxes différentes)

// let nbBowmen = 0;
// for (let i = 0; i < characters.length; i++) {
//   const currentCharacter = characters[i];
//   if (currentCharacter.weapon === 'Bow') {
//     nbBowmen++;
//   }
// }
// console.log(nbBowmen);

// let i = 0;
// let nbSwordmen = 0;
// while (i < characters.length) {
//   const currentCharacter = characters[i];
//   if (currentCharacter.weapon === 'Sword') {
//     nbSwordmen++;
//   }
//   i++;
// }
// console.log(nbSwordmen);

// let nbSpearmen = 0;
// for (let i in characters) {
//   const currentCharacter = characters[i];
//   if (currentCharacter.weapon === 'Spear') {
//     nbSpearmen++;
//   }
// }
// console.log(nbSpearmen);

// let nbMages = 0;
// characters.map((character) => {
//   if (character.weapon === 'Staff') {
//     nbMages++;
//   }
// });
// console.log(nbMages);

// console.log(nbSwordmen + nbBowmen + nbSpearmen + nbMages);

// Phrase differente en fonction des noms/armes d'un perso
const describe = (toto) => {
  let msg = '';
  if (toto.weapon === 'Sword') {
    msg += `${toto.name} slashes through everything !`;
  } else if (toto.weapon === 'Spear') {
    msg += `${toto.name} pokes you through the eye !`;
  } else if (toto.weapon === 'Bow') {
    msg += `${toto.name} shoots a volley of arrows !`;
  } else if (toto.weapon === 'Staff') {
    msg += `${toto.name} casts a shitload of spells !`;
  }

  return msg;
};

const describeSwitch = (toto) => {
  let msg = '';
  switch (toto.weapon) {
    case 'Sword':
      msg = `${toto.name} slashes through everything !`;
      break;
    case 'Spear':
      msg = `${toto.name} pokes you through the eye !`;
      break;
    case 'Bow':
      msg = `${toto.name} shoots a volley of arrows !`;
      break;
    case 'Staff':
      msg = `${toto.name} casts a shitload of spells !`;
      break;
  }
  return msg;
};

const describeSwitchShorter = (toto) => {
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

for (let i = 0; i < characters.length; i++) {
  const currentCharacter = characters[i];
  console.log(describeSwitchShorter(currentCharacter));
}
