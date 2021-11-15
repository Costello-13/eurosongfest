import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// C#
// string firstname = "Collin";
// int number1 = 5;


// ES5 DECLARATIE VARIABELE
//var firstname = "Collin";
// var name = "Van der Vorst"
// weakly typed --> var gaat zich gedragen naar inhoud dat het bezit
// 1 Groot probleem: 
/*
for (var i = 0; i < 10; i++)
{
  console.log(i);
}

console.log(i); // kent nog steeds de waarde van de i gedefinieerd in for-loop 

// ES6 CONST VS LET
const firstname = "Collin"; // const = variabele die NOOIT gaat aanpassen
// firstname = "Renke"; // gaat niet werken
console.log(firstname);

//let firstname = "Renke"; // let doet hetzelfde als var, maar gaat enkel gekend zijn in scope
// moest je de for loop van hierboven gebruiken met let var, gaat de var niet gekend zijn buiten loop

for (let index = 0; index < 10; index++){
  console.log(index);
}
//console.log(index); // gaat de variabele niet meer kennen! 
*/
// ES5 Concatination 
// var firstname = "Collin";
// var lastname = "Van der Vorst"
// console.log(firstname + " " + lastname); // variabelen samentrekken -- van zodra er 1 string gedetecteerd is, gaat hij de rest erna ook als string behandelen

/*
// ES6 Concatenation 
let firstname = "Collin";
let lastname = "Van der Vorst";
let fullname = `${firstname} The Big One ${lastname}`;
console.log(fullname);
*/

// ES5
/*
var person = {
  firstname: "Collin",
  lastname: "Van der Vorst",
  sayFullname: function() {
    console.log(this.firstname + " " + this.lastname);
  }
}

console.log(person.firstname); // Collin
console.log(person.lastname); // Van der Vorst

person.sayFullname(); // Collin Van der Vorst
*/
// ES6 

/*
let person = {
  firstname: "Collin",
  lastname: "Van der Vorst",
  sayFullname() {
    console.log(`${this.firstname} ${this.lastname}`);
  }
}

console.log(person.firstname); // Collin
console.log(person.lastname); // Van der Vorst

person.sayFullname(); // Collin Van der Vorst
*/
/*
//ES6 
let person = {
  firstname: "Renke",
  lastname: "Cools",
  sayFullname: function() {
    console.log(this.firstname + " " + this.lastname);
  }
}

console.log(person.firstname); // Renke
console.log(person.lastname); // Cools

person.sayFullname(); // Renke Cools

// probleem: 

//let Getfullname = person.sayFullname; // probleem als je hier zou oproepen dan zit je vast
// Getfullname(); // weet niet meer wat 'this' is
// probleem van ES5 
// je kan functies binden met zichzelf
let Getfullname = person.sayFullname.bind(person); // probleem als je hier zou oproepen dan zit je vast
Getfullname();
*/
// ES5
/*
var person = {
  firstname: "Renke",
  lastname: "Cools",
  SayNameAfter2Sec: function() {
    var self = this;
    setTimeout(function(){
      console.log(self.firstname + " " + self.lastname);
    }, 2000);
  }
}

person.SayNameAfter2Sec();
*/
// ES6
// const person = {
//   firstname: "Renke",
//   lastname: "Cools",
//   SayNameAfter2Sec() {
//     window.setTimeout(() => {
//       console.log(this.firstname + " " + this.lastname);
//     }, 2000);
//   }
// }

// person.SayNameAfter2Sec();

// ES5 Function 
// var square = function (number) {
//   return number * number;
// }

// console.log(square(5));

// ES6
// const square = (number) => {
//   return number * number;
// }
// console.log(square(5));


// Bij 1 parameter hoeven de haakjes niet 
// const square = number => number * number; // als je maar 1 lijn returned mag het zonder "return"
// console.log(square(5));

// ES5 MAPPING
// ["red", "green", "blue"]
// ["1.red", "2.green", "3.blue"]

// var colours = ["red", "green", "blue"];
// var newcolours = [];

// for (var i = 0; i < colours.length; i++) {
//   newcolours.push(i + 1 +  "." + colours[i])
// }
// console.log(newcolours);

// // ES6 MAPPING
// const colours = ["red", "green", "blue"];
// const newcolours = colours.map(function(colour, index) {
//   return `${index + 1}. ${colour}`
// });
// // check github mist een stuk

// ES5 Object destructuring 
// check github

// ES6 check github 


// ES6 Classes

// IMPORTEREN

import { User } from './classes/user'


let user1 = new User("Collin", "Van der Vorst");
let user2 = new User("Renke", "Cools");

user1.getFullname();
user2.getFullname();

class Teacher extends User {
  constructor(firstname, lastname, degree) {
    super(firstname, lastname); // slaat op wat je extend (in dit geval firstname, lastname)
    this.degree = degree
  }

  teach() {
    console.log("He is teaching");
  }
}

let teacher1 = new Teacher("Collin", "Van der Vorst", "Bachelor");
teacher1.getFullname(); // method dat je kent van user
teacher1.teach();
// teacher kan fullname oproepen EN teachen 
// user kan enkel full name oproepen 

