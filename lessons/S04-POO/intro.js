const julie = {
  name: 'Julie',
  city: 'Berlin',
  age: 30,
  languages: ['JS', 'React'],
  isGraduated: true,
  sayHello: function () {
    return "Hello, I'm Julie from Berlin";
  },
};

// console.log(julie.sayHello());
// console.log(julie.languages[0]);

const marc = {
  name: 'Marc',
  city: 'Lisbon',
  age: 34,
  languages: ['Python'],
  isGraduated: true,
  sayHello: function () {
    return `Helllo I'm Marc from Lisbon`;
  },
};

class Student {
  constructor(name, age, city, languages, isGraduated) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.languages = languages;
    this.isGraduated = isGraduated;
  }
  sayHello() {
    return `Hello, I'm ${this.name} from ${this.city}`;
  }
}
const mia = new Student('Mia', 23, 'Paris', ['JS', 'React'], false);

console.log(mia.sayHello());
