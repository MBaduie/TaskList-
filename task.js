// function isThisWorking(input) {
//   console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
// }

// isThisWorking(3);

// creates a line of * for a given length
// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//     line += "* ";
//   }
//   return line + "\n";
// }
// // console.log(makeLine(5));
// // Build Triangle
// function buildTriangle(triangleLength) {
//   var triangle = "";
//   for (let i = 1; i <= triangleLength; i++) {
//     triangle = triangle + makeLine(i);
//   }
//   return triangle;
// }
// console.log(buildTriangle(7));
/////////////////////////////////////////////
// var favoriteMovie = function(){
//   return "Saw";
// }
// console.log(favoriteMovie());
////////////////////////////////////////////
// var laugh = function(length){
//   var l = "";
//   for(var i = 0 ; i < length ; i++){
//       l = l + "ha";
//   }
//   return l ;
// }

// console.log(laugh(10));
///////////////////////////////////
var team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter",
];
// function hasEnoughPlayers(length){
//     if(length.length >= 7){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(hasEnoughPlayers(team));
//////////////////////
var test = [
  12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148,
  169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139,
];
// test.forEach(function(item, index){
//   if(item%3===0){
//       test[index]=test[index]+100;
//   }
// });
// let arr = [];
// for (let tests of test){
//   if(tests %3 === 0){
//     arr.push(tests);
//   }else{
//     continue;
//   }
// }
// console.log(arr);
//////////////////////////
// let swappingCases = "elZERo";
// let sw = swappingCases.split("").map((ele) =>
//   ele === ele.toUpperCase() ? ele : ele.toUpperCase()
// ).join("");
// console.log(sw);
//////////////////////////////
// var invertedNumbers = [1, -10, -20, 115, 100, -30];
// let inverted = invertedNumbers.map(function (n) {
//   return n > 0 ? n : n * -1;
// });
// console.log(inverted);
///////////////////////////////
// var bills = [50.23, 19.12, 34.01,
//   100.11, 12.15, 9.90, 29.11, 12.99,
//   10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];
// var totals = bills.map(function(b){
//   b *=1.15;
//   b.toFixed(2);
//   b = Number(b);
//   return b;
// });
// console.log(totals);
////////////////////////////
// var sister = {
//   name: "Sarah",
//   age: 23,
//   parents: [ "alice", "andy" ],
//   siblings: ["julia"],
//   favoriteColor: "purple",
//   pets: true,
//   paintPicture: function() { return "Sarah paints!"; }
// };
// console.log(sister["age"]);
/////////////////////////////////////
// function getClothing(isCold) {
//   if (isCold) {
//     let freezing = "Grab a jacket!";
//   } else {
//     let hot = "It’s a shorts kind of day.";
//     console.log(freezing);
//   }
// }
// console.log(getClothing(false));
//////////////////////////////////////
// const cheetah = {
//   name: "Cheetah",
//   scientificName: "Acinonyx jubatus",
//   lifespan: "10-12 years",
//   speed: "68-75 mph",
//   diet: "carnivore",
//   summary:
//     "Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.",
//   fact: "Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.",
// };

// creates an animal trading card
// function createAnimalTradingCardHTML(animal) {
//   const cardHTML = `<div class="card">
//       <h3 class="name">  ${animal.name}  </h3>
//       <img src="  ${animal.name}  .jpg" alt="  ${animal.name} " class="picture">
//       <div class="description">
//           <p class="fact">  ${animal.fact}  </p>
//           <ul class="details">
//               <li><span class="bold">Scientific Name</span>:   ${animal.scientificName}  </li>
//               <li><span class="bold">Average Lifespan</span>:   ${animal.lifespan}  </li>
//               <li><span class="bold">Average Speed</span>:   ${animal.speed}  </li>
//               <li><span class="bold">Diet</span>:   ${animal.diet}  </li>
//           </ul>
//           <p class="brief">  ${animal.summary}  </p>
//       </div>
//   </div>`;

//   return cardHTML;
// }

// console.log(createAnimalTradingCardHTML(cheetah));
// const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// for (const day of days) {
//   var upperDay = day.charAt(0).toUpperCase() + day.slice(1);
//   console.log(upperDay);
// }
/////////////////////////
let sum = 0,
  c = 0;
function average(...numbers) {
  for (let num of numbers) {
    sum += num;
    c++;
  }
  return sum / c;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
