const changeProjectHeadingTitle = (title) => {
  const projectTitle = document.querySelector("#project-title");

  if (typeof title == "string") {
    projectTitle.textContent = title;
  } else {
    console.error("Your argument is not a string.");
  }
};

changeProjectHeadingTitle("Mini Project Javascript JS");
//Array

// // Slice
// const animals = ["cat", "bear", "giraffe", "elephant", "tiger"];

// let capturedAnimals = animals.slice(1, 3);

// console.log(capturedAnimals);

// // Splice
// const animals = ["cat", "bear", "giraffe", "elephant", "tiger"];
// // animals.splice(2, 1, "crocodile");
// animals.splice(1, 3);
// console.log(animals);

// // forEach
// const animals = ["cat", "bear", "giraffe", "elephant", "tiger"];

// animals.forEach(myFunction);
// function myFunction(value) {
//   console.log(value + " alive ");
// }

// // Map
// const numbers = [10, 20, 30, 40, 50]

// const numberMultiplied = numbers.map(multiply)

// function multiply(value) {
//     return value * 2
// }
// console.log(numberMultiplied)

// //  Filter
// const age = [25, 9, 10, 11, 15, 20, 30];

// const filterAge = age.filter(myFunction);

// function myFunction(value) {
//   return value <= 17;
// }

// console.log(filterAge);
