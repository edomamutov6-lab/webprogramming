"use strict";

// Week 5: JavaScript Basics — Problem Set 01
// Beginner tasks (1–25) and all 15 array practice exercises.

console.log("=== Beginner level ===");

// 1. Variables and data types
const userName = "Alex";
const userAge = 20;
const isStudent = true;
console.log("1.", userName, userAge, isStudent);

// 2. Full name
const firstName = "Alex";
const lastName = "Morgan";
const fullName = firstName + " " + lastName;
console.log("2.", fullName);

// 3. Arithmetic operations
const num1 = 10;
const num2 = 5;
console.log("3.", {
  sum: num1 + num2,
  difference: num1 - num2,
  product: num1 * num2,
  quotient: num1 / num2
});

// 4. typeof
const testValue = 42;
console.log("4.", typeof testValue);

// 5. Even or odd
const checkNumber = 17;
console.log("5.", checkNumber % 2 === 0 ? "Even" : "Odd");

// 6. Voting age
const age = 20;
console.log("6.", age >= 18 ? "Can vote" : "Cannot vote yet");

// 7. Grade
const score = 85;
let grade;
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else grade = "F";
console.log("7.", grade);

// 8. Ternary age check
console.log("8.", age >= 18 ? "Adult" : "Minor");

// 9. Strict equality
const temp1 = 25;
const temp2 = 25;
console.log("9.", temp1 === temp2);

// 10. Print 1 through 10
const oneToTen = [];
for (let number = 1; number <= 10; number += 1) oneToTen.push(number);
console.log("10.", oneToTen.join(", "));

// 11. Countdown 5 through 1
const countdown = [];
let count = 5;
while (count >= 1) {
  countdown.push(count);
  count -= 1;
}
console.log("11.", countdown.join(", "));

// 12. Sum 1 through 50
let sumOneToFifty = 0;
for (let number = 1; number <= 50; number += 1) sumOneToFifty += number;
console.log("12.", sumOneToFifty);

// 13. Continue skips 7
const withoutSeven = [];
for (let number = 1; number <= 10; number += 1) {
  if (number === 7) continue;
  withoutSeven.push(number);
}
console.log("13.", withoutSeven.join(", "));

// 14. Break when 15 is reached
const beforeFifteen = [];
for (let number = 1; number <= 20; number += 1) {
  if (number === 15) break;
  beforeFifteen.push(number);
}
console.log("14.", beforeFifteen.join(", "));

// 15. Greet a user
function greetUser(name) {
  return "Hello, " + name + "!";
}
console.log("15.", greetUser("Alex"));

// 16. Rectangle area
function calculateArea(width, height) {
  return width * height;
}
console.log("16.", calculateArea(5, 8));

// 17. Arrow function version
const calculateAreaArrow = (width, height) => width * height;
console.log("17.", calculateAreaArrow(5, 8));

// 18. Function scope demonstration
function showLocalScope() {
  const localMessage = "This variable exists only inside the function.";
  console.log("18. Inside function:", localMessage);
}
showLocalScope();
try {
  // This access is intentionally invalid to demonstrate function scope.
  console.log(localMessage);
} catch (error) {
  console.log("18. Outside function:", error.name, "— localMessage is not defined here.");
}

// 19. Default parameter
function power(base, exponent = 2) {
  return base ** exponent;
}
console.log("19.", power(4));

// 20. Array access
const colors = ["Red", "Green", "Blue"];
console.log("20. All colors:", colors);
console.log("20. Second color:", colors[1]);

// 21. Add a color
colors.push("Yellow");
console.log("21.", colors);

// 22. Print each number
const numbers = [2, 4, 6, 8, 10];
console.log("22.");
numbers.forEach((number) => console.log("  ", number));

// 23. Sum an array
let arrayTotal = 0;
for (const number of numbers) arrayTotal += number;
console.log("23.", arrayTotal);

// 24. Find largest number
const data = [12, 5, 27, 9, 18];
let largest = data[0];
for (const number of data) {
  if (number > largest) largest = number;
}
console.log("24.", largest);

// 25. Bonus: books
const books = [
  { title: "The Hobbit", pages: 310 },
  { title: "Clean Code", pages: 464 }
];
console.log("25. Bonus:", books[1].title);

console.log("\n=== Array problems ===");

// 1. Sum of array elements
function sumArray(values) {
  let total = 0;
  for (const value of values) total += value;
  return total;
}

// 2. Maximum value; null for an empty array
function maxInArray(values) {
  if (values.length === 0) return null;
  let maximum = values[0];
  for (const value of values) if (value > maximum) maximum = value;
  return maximum;
}

// 3. Count even numbers
function countEvens(values) {
  let countEven = 0;
  for (const value of values) if (value % 2 === 0) countEven += 1;
  return countEven;
}

// 4. Reverse into a new array without reverse()
function reverseArray(values) {
  const reversed = [];
  for (let index = values.length - 1; index >= 0; index -= 1) {
    reversed.push(values[index]);
  }
  return reversed;
}

// 5. Find an element without indexOf()
function indexOfElement(values, target) {
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === target) return index;
  }
  return -1;
}

// 6. Keep only positive numbers
function getPositiveNumbers(values) {
  const positives = [];
  for (const value of values) if (value > 0) positives.push(value);
  return positives;
}

// 7. Remove duplicates, preserving first occurrences
function uniqueValues(values) {
  const unique = [];
  for (const value of values) if (!unique.includes(value)) unique.push(value);
  return unique;
}

// 8. Rotate right by k places without changing the input
function rotateRight(values, k) {
  if (values.length === 0) return [];
  const steps = ((k % values.length) + values.length) % values.length;
  if (steps === 0) return [...values];
  return values.slice(-steps).concat(values.slice(0, -steps));
}

// 9. Second-largest distinct number
function secondLargest(values) {
  let largestValue = null;
  let secondValue = null;
  for (const value of values) {
    if (largestValue === null || value > largestValue) {
      secondValue = largestValue;
      largestValue = value;
    } else if (value !== largestValue && (secondValue === null || value > secondValue)) {
      secondValue = value;
    }
  }
  return secondValue;
}

// 10. Merge and numerically sort two arrays
function mergeAndSort(first, second) {
  return first.concat(second).sort((left, right) => left - right);
}

// 11. Map words to their lengths
function wordLengths(words) {
  const lengths = [];
  for (const word of words) lengths.push(word.length);
  return lengths;
}

// 12. Check non-decreasing order; an empty array is sorted
function isSortedAscending(values) {
  for (let index = 1; index < values.length; index += 1) {
    if (values[index] < values[index - 1]) return false;
  }
  return true;
}

// 13. Two-sum in O(n) average time using a Set
function hasPairWithSum(values, target) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(target - value)) return true;
    seen.add(value);
  }
  return false;
}

// 14. Flatten exactly one level without flat()
function flattenOnce(values) {
  const flattened = [];
  for (const value of values) {
    if (Array.isArray(value)) {
      for (const nestedValue of value) flattened.push(nestedValue);
    } else {
      flattened.push(value);
    }
  }
  return flattened;
}

// 15. Group numbers while preserving their order
function groupByParity(values) {
  const groups = { even: [], odd: [] };
  for (const value of values) {
    if (value % 2 === 0) groups.even.push(value);
    else groups.odd.push(value);
  }
  return groups;
}

console.log("1. sumArray:", sumArray([1, 2, 3, 4]), "| empty:", sumArray([]));
console.log("2. maxInArray:", maxInArray([3, 10, 5]), "| empty:", maxInArray([]));
console.log("3. countEvens:", countEvens([1, 2, 3, 4, 6]));
console.log("4. reverseArray:", reverseArray([1, 2, 3]));
console.log("5. indexOfElement:", indexOfElement(["a", "b", "c"], "b"));
console.log("6. getPositiveNumbers:", getPositiveNumbers([-3, 0, 2, 5, -1]));
console.log("7. uniqueValues:", uniqueValues([1, 2, 2, 3, 1]));
console.log("8. rotateRight:", rotateRight([1, 2, 3, 4], 1));
console.log("9. secondLargest:", secondLargest([10, 5, 20]));
console.log("10. mergeAndSort:", mergeAndSort([3, 1], [4, 2]));
console.log("11. wordLengths:", wordLengths(["apple", "hi", "JS"]));
console.log("12. isSortedAscending:", isSortedAscending([1, 2, 2, 3]));
console.log("13. hasPairWithSum:", hasPairWithSum([1, 2, 4, 4], 8));
console.log("14. flattenOnce:", flattenOnce([1, [2, 3], 4]));
console.log("15. groupByParity:", groupByParity([1, 2, 3, 4, 5]));
