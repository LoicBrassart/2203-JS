console.log('Fight ! o/');

// let userNumber = prompt('Entre un nombre :');
let userNumber = 0xa;

if (userNumber % 15 === 0) {
  console.log('fizzbuzz');
} else if (!(userNumber % 5)) {
  console.log('buzz');
} else if (!(userNumber % 3)) {
  console.log('fizz');
} else {
  console.log(userNumber);
}
