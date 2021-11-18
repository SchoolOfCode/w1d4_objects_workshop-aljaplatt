// // TASK 1

// const myCat = {
//   color: "black",
//   name: "Tony",
//   lovesCuddles: true,
// };

// // My house has 2 stories, no parking, 2 bedrooms, a garden and an energy efficiency rating of D.

// let myHouse = {
//   stories: 2,
//   parking: false,
//   bedrooms: 2,
//   garden: true,
//   energyRating: "D",
// };

// // > My car is red, has 4 wheels, power steering, 2 seats and does 20 miles per gallon.

// let myCar = {
//   color: "Red",
//   wheels: 4,
//   powerSteering: true,
//   mpg: 20,
// };
// // > My favorite movie's title is The Dark Knight, it was released in 2008 and the lead actor is Christian Bale.
// let favoriteMovie = {
//   title: "The Dark Knight",
//   releaseDate: 2008,
//   leadActor: "Christian Bale",
// };

// TASK 2
// ## Task 2 - Reading values

// 👉 Copy this object into a new linked JavaScript file or script tag within html or a fresh browser console.

// ```js
// let person = {
//   name: "Alex",
//   likesChocolate: false,
// };
// // ```

// // 👉 Below it write an if statement that will console.log `"Ben loves chocolate"` if likesChocolate has a value of true else console.log `"Ben hates chocolate"`. The condition for the if, and the name Ben should both be read from the object using dot notation.
// if (person.likesChocolate === true) {
//   console.log(`${person.name} loves chocolate`);
// } else {
//   console.log(`${person.name} hates chocolate`);
// }
// 👉 Change the object's values and re run your code, the name and the boolean should effect how your program runs.

// TASK 3

// let desiredPleasantry = "greeting";

// let bensPhrases = {
//   greeting: "Well hello there!",
//   farewell: "See you in another life brother",
//   smallTalk: "Warm today isn't it...",
// };

// console.log(bensPhrases[greeting]);

// TASK 4

// let person = {
//   firstName: "Alex",
//   lastName: "Platt",
//   isBootcamper: false,
// };

// person.isBootcamper = true;

// console.log(person.isBootcamper);

// TASK 5

// let communication = {
//   success: true,
//   payload: {
//     message: {
//       text: "Please send biscuits!",
//       priority: "URGENT",
//     },
//   },
// };

// let message = communication.payload.message.text;

// console.log(message);
