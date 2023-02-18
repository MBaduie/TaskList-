// // Define UI Variables
// const form = document.querySelector("#task-form");
// const taskList = document.querySelector(".collection");
// const clearBtn = document.querySelector(".clear-tasks");
// const filter = document.querySelector("#filter");
// const taskInput = document.querySelector("#task");
// // load All Event Listeners
// loadEventListener();
// function loadEventListener() {
//   // Add Tak Event
//   form.addEventListener("submit", addTask);
//   taskList.addEventListener("click", removeTask);
//   clearBtn.addEventListener("click", clearTasks);
//   filter.filterTasks("keyup", filterTasks);
// }
// function addTask(e) {
//   if (taskInput.value === "") {
//     alert("Please Insert Valid Number");
//   } else {
//     const li = document.createElement("li");
//     const link = document.createElement("a");
//     li.className = "collection-item";
//     li.appendChild(document.createTextNode(taskInput.value));
//     link.className = "delete-item secondary-content";
//     link.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
//     li.appendChild(link);
//     taskList.appendChild(li);
//     // Clear task
//     taskInput.value = "";
//   }

//   e.preventDefault();
// }
// // Remove Tasks
// function removeTask(e) {
//   // if (e.target.parentElement.classList.contains("delete-item")) {
//   //   if (confirm("Are u sure ?")) {
//   // e.target.parentElement.parentElement.remove();
//   //   }
//   // }
//   if (e.target.parentElement.classList.contains("delete-item")) {
//     if (confirm("Are u sure?")) {
//       e.target.parentElement.parentElement.remove();
//     }
//   }
// }
// // Clear Tasks
// function clearTasks(e) {
//   // taskList.innerHTML = "";

//   //Faster way
//   while (taskList.firstChild) {
//     taskList.removeChild(taskList.firstChild);
//   }
// }
// // Filter Tasks
// function filterTasks(e) {
//   const text = e.target.value.toLowerCase();
//   document.querySelectorAll(".collection-item").forEach(function (task) {
//     const item = task.firstChild.textContent;
//     if (item.toLowerCase().indexOf(text) != -1) {
//       task.style.display = "block";
//     } else {
//       task.style.display = "none";
//     }
//   });
// }
/////////////////////////////////
// External Task
// function showDetails(...info) {
//   let x = 0,
//     y = 0,
//     z = 0;
//   for (let i = 0; i < info.length; i++) {
//     if (typeof info[i] === "string") {
//       x = info[i];
//     } else if (typeof info[i] === "number") {
//       y = info[i];
//     } else if (typeof info[i] === "boolean") {
//       if (info[i] === false) {
//         z = "Not Available";
//       } else {
//         z = "Available";
//       }
//     }
//   }
//   document.write(`<div>Hello ${x},your age is ${y} and you are ${z} for work</div>`);
// }

// showDetails("Mohamed", true, 38);
// showDetails(true, "Mohamed", 38);
// showDetails(35, false, "Ali");
// let word = "AkgGhr BAdUie";
// let invertNum = [1, -10, 2, 15, 188, -55];
// let ignoreNum = "ElZero123o";
// let name = ["Ahmed", "Muhammed", "Ezzat", "Aliaa", "Alloush"];
// let w = word
//   .split("")
//   .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
//   .join("");
// console.log(w);
// ///////////////
// let num = invertNum.map(function (n) {
//   return -n;
// });
// console.log(num);
// /////////////////
// let ig = ignoreNum
//   .split("")
//   .map(function (c) {
//     return isNaN(parseInt(c)) ? c : "";
//   })
//   .join("");
// console.log(ig);
// ////////////////////////////////
// let filterName = name.filter((n) => {
//   return n.includes("a");
// });
// console.log(filterName);
// /////////////////
// let sentence = "I Love Foood Code To Playing Much";
// let filtered = sentence
//   .split(" ")
//   .filter(function (z) {
//     return z.length <= 4;
//   })
//   .join(" ");
// console.log(filtered);
// /////////////////////
// let words = ["bla", "paragraph", "ciotnf", "adddddddd"];
// let check = words.reduce(function (acc, curr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`current => ${curr}`);
//   return acc.length >= curr.length ? acc : curr;
// });
// console.log(check);
///////////////////////////
// let RemoveChar = ["E", "@", "@", "L", "Z", "@", "e", "r", "o"];

// let removed = RemoveChar.filter(function (e) {
//   return e !== "@";
// }).reduce(function (acc, curr) {
//   return acc.concat(curr);
// });
// console.log(removed);
//////////////////////////////////////////////
// let myString = "1,2,3,EE,L,z,e,r,o,_,w,e,b,_,S,c,h,o,o,l,2,0,z";
// let zLetter = myString[myString.length - true];
// let newString = myString
//   .split("")
//   .map(function (e) {
//     return e.replace("_", " ");
//   })
//   .filter(function (e) {
//     return e !== "," && isNaN(parseInt(e)) && e !== zLetter;
//   });
  // .reduce(function (acc, next) {
  //   console.log(`Acc=> ${acc}`)
  //   console.log(`next=> ${next}`)
  //   if (acc === next) {
  //     return `${acc}`;
  //   } else {
  //     return `${acc}${next}`;
  //   }
  // });
// let str = newString.slice(1,7)+" "+newString.slice(8,11)+" "+newString.slice(12,18);
// console.log(newString);
// console.log(zLetter);
