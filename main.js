// document.write('<h1>Elzero</h1>')
// document.querySelector('h1').style.color='blue';
// document.querySelector('h1').style.fontSize = '80px;'
// document.querySelector('h1').style.fontWeight = 'bold'
// document.querySelector('h1').style.textAlign = 'center'
// document.querySelector('h1').style.fontFamily = 'Arial'


// console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px;", "color: green; font-size: 40px; font-weight: bold;", "font-size: 40px; background-color: blue;")



// console.groupCollapsed(
//     console.group('group 1'), 
//     console.group('Child group', 
//     console.log('message 1'), 
//     console.log('message 2')), 
//     console.group('Grand child group', 
//     console.log('message 1'), 
//     console.log('message 2')), 
//     console.log('message 1'), 
//     console.log('message 2'),
//     )
//     console.groupEnd()

//     console.groupCollapsed(
//         console.group('group 2'), 
//         console.log('message 1'), 
//         console.log('message 2')
//     )

//     console.groupEnd()

// console.group('group 1');
//     console.log('message 1');
//     console.log('message 2');
//     console.group('Child group');
//     console.log('message 1');
//     console.log('message 2');
//     console.group('Grand child group');
//     console.log('message 1');
//     console.log('message 2');
//     console.log('message 1');
//     console.log('message 2');
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group('group 2');
//     console.log('message 1');
//     console.log('message 2');


// console.table(['Momen', 'Yousef', 'Ahmed', 'Mousa', 'Eneim'])


// console.log("Iam In Console");
// document.write("Iam In Page");

// let title = 'Elzero', desc = 'Elzero Web School', date = '25/10'
// let markup = `
// <div> 
//     <div>
//     <h3> Hello ${title} </h3>
//     <p> ${desc} </p>
//     <span> ${date} </span>
//     </div>
// </div>
// `;
// document.write(markup.repeat(4))


// let a = 10, b = '20', c = 80;

// console.log(++a + +b++ + +c++ - +a++); 
// // (11) + (20) + (80) - (11) = 122 !!  a = 12, b = 21, c = 81

// console.log(++a + -b + +c++ - -a++ + +a); 
// // (13) + (-21) + (81) - (-13) + (12) = 98 !!   a = 12, b = -21, c = 82

// console.log(--c + +b + --a * +b++ - +b * a + --a - +true); 
// // (81) + (21) + (11) * (21) - (22) * (11) + (10) - (1) =  !! a = 10, b = 22, c = 81
// // (81) + (21) + (231) - (241) + (10) - (1) = 101 !! a = 10, b = 22, c = 81


// let d = '-100';
// let e = '20';
// let f = 30;
// let g = true;

// console.log(-d * + e) // 2000
// console.log(++g * ++e + ++f + -d) // 173

// // Add Variables Here
// let numberOne = 10, numberTwo = 20;

// // Ouput
// console.log("10"+"20"); // Normal Concatenate => 1020
// console.log(typeof("10"+"20")); // Normal Concatenate => String
// console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
// console.log(typeof(`${numberOne}${numberTwo}`)); // Template Literals Way => String

// console.log("20\n10");
// /*
//   Normal Concatenate
//   20
//   10
//

// console.log(`${numberTwo}
// ${numberOne}
// `);
// 
//   Template Literals Way
//   20
//   10
// 
// let elzero = 'elzero'
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// console.log("`I'm In\n\\\\ \nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``")

// I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``

// let a = 21;
// let b = 20;

// console.log(`_`+`${a}_${b}`.repeat(3)+`_`); // _21_2021_2021_2021_20_

// // Replace ? With Arithmetic Operators
// console.log(10 / 20 - 15 / 3 % 190 / 10 % 400); // 0

// let num = 3;

// // Solution One
// console.log(num + num); // 6

// // Solution Two
// console.log(num ** num / num - num); // 6

// // Soultion Three
// console.log(+true + num + num - true); // 6

// // Soultion Four
// console.log(-num * -num - num); // 6

// // Solution Five
// console.log(--num ** num + true + true); // 6

// // Solution Six
// console.log(++num + true + true + true); // 6

// let points = 10;

// // Write Your Code Here

// console.log(++points + true + true ); // 13

// // Write Your Code Here

// console.log(--points - true - true); // 8;

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// console.log(Math.round(Math.min(a, b, c, d)));

// // Use Variables a + d One Time To Get The Needed Output
// console.log(a ** parseInt(d)); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(parseInt(d));
// console.log(Math.trunc(d));
// console.log(Math.floor(d));
// console.log(Math.round(d));

// // Use Variables b + d To Get This Valus
// console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number

// console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991 

// let myVar = "100.56789 Views";

// console.log(parseInt(myVar.substring(0, 3))); // 100
// console.log(Number.parseFloat(Number.parseFloat(myVar.substring(0, 9)).toFixed(2))); // 100.57

// let num = 10;

// // console.log(Number.isInteger(num)+true); // 2

// let flt = 10.4;

// console.log(Number.parseInt(flt)); // 10
// console.log(flt.toString().substring(0,2)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(flt.toString().slice(0,2)); // 10
// console.log(Math.floor(flt)); // 10

// console.log(Number.parseInt(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// let userName = "Elzero";
// console.log(userName.substring(0,1).toLowerCase()); // e
// console.log(userName.slice(0,1).toLowerCase()); // e
// console.log(userName.slice(-6, 1).toLowerCase()); // e
// console.log(userName.substr(0,1).toLowerCase()); // e
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName[0].toLowerCase().repeat(3)); // eee

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True

/*

String Challenge 
All solutions must be in one chain 
You can use concatentate 

*/ 

// let a = 'Elzero Web School';

// // Inlcude those methos Slice(), CharAt()
// console.log(a.charAt(a.indexOf('z')).toUpperCase() + 
// a.charAt(a.indexOf('e')) + a.charAt(a.indexOf('r')) + a.charAt(a.indexOf('o')))  // Zero

// // 8H
// console.log(a.charAt(a.indexOf('h')).toLocaleUpperCase().repeat(8)); // HHHHHHHH

// // Return array 
// console.log(a.split(' ', 1)); // [Elzero]

// console.log(100 == "100"); // true
// console.log(100 < 1000); // true
// console.log(110 > 100 && 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(typeof -50 !== +"-40"); // true
// console.log(typeof 10  !== -"-40"); // true
// console.log(typeof "10" !== 10); // true
// console.log(typeof 20 !== false); // true

// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2); // true
// console.log(num2 > num1); // true
// console.log(!num1 == !num2); // true
// console.log(num1 !== num2); // true
// console.log(typeof num1 == typeof num2); // true
// console.log(!num1 === !num2); // true

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a < b); // true
// console.log(a < b > a < c); // true
// console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

// // Test Case 1
// let num = -5; // "009"

// if (num > 0 && num < 10) {
//     console.log(`00${num}`)
// } else if (num >= 10 && num < 100) {
//     console.log(`0${num}`)
// } else if (num >= 100) {
//     console.log(num)
// } else {
//     console.log('-num')
// }

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output
// if (num1 == str) {
//     console.log("{num1} Is The Same Value As {str}")
// }

// if (num1 == str && !(num1 === str)) {
//     console.log("{num1} Is The Same Value As {str} But Not The Same Type")
// }

// if (!(num1 === str2)) {
//     console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
// }

// if (str === str2) {
//     console.log("{str} Is The Same Type As {str2} But Not The Same Value")
// }


// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// // Needed Output

// if (num3 > num1 && !(num2 === num3)) {
//     console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")

//     if (num3 > num1 && num3 == num2 && typeof num3 != num2) {
//         console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")

//         if (num3 != num1 && !(num3 === num1) && !(num3 === num2)) {
//             console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
//         }
//     }
// }

// Edit What You Want Here

// let num1 = 11;
// let num2 = 10;
// let num3 = 11;
// let num4 = '33';

/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// let st = "Elzero Web School";

// if ((st.length*2).toString()=== "34") {
//   console.log("Good");
// }

// // W Position May Change
// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }

// if (st.length !== "string") {
//   console.log("Good");
// }

// if (typeof (st.length) === "number") {
//   console.log("Good");
// }

// if (st.slice(0,6)+st.slice(0,6) === "ElzeroElzero") {
//   console.log("Good");
// }

// let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// Output => "Its Not A Valid Day"

// console.log(`${day.trim().charAt(0).toUpperCase()}${day.trim().slice(1)}`)

// switch (`${day.trim().charAt(0).toUpperCase()}${day.trim().slice(1)}`) {
// case 'Friday':
// case 'Saturday':
// case 'Sunday':
//     console.log('No Appointments Available')
//     break;
// case 'Monday':
// case 'Thursday':
//     console.log('From 10:00 AM To 5:00 PM')
//     break;
// case 'Tuesday':
//     console.log('From 10:00 AM To 6:00 PM')
//     break;
// case 'Wednesday':
//     console.log('From 10:00 AM To 7:00 PM')
//     break;
// default:
//     console.log('Its Not A Valid Day')
//     break;
// }


// let job = 'Manager'; // 8000
// let job = 'Developer'; // 7000
// let job = 'Designer'; // 7000
// let job = 'IT'; // 6000
// let job = 'Support'; //6000
// let job = 'Chef'; // 4000

// let salary = 0;

// switch (`${job.trim().charAt(0).toUpperCase()}${job.trim().slice(1)}`) { 
//     case 'Manager':
//         salary=8000;
//         console.log(`Job: ${job}\nSalary: ${salary}`)
//         break;
//     case 'Developer':
//     case 'Designer':
//         salary=7000;
//         console.log(`Job: ${job}\nSalary: ${salary}`)
//         break;
//     case 'Support':
//     case 'IT':
//         salary=6000
//         console.log(`Job: ${job}\nSalary: ${salary}`)
//         break;
//     default:
//         salary=4000
//         console.log(`Job: ${job}\nSalary: ${salary}`)
//         break;
// }

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// console.log(myFriends); // 
// myFriends.pop()

// Method 1
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// myFriends.splice(myFriends.length)

// Method 2
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// friends.pop()
// friends.shift()

// console.log(friends); // ["Eman", "Osama"]

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// finalArr = arrOne.concat(arrTwo).sort().reverse()

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[2][0].slice(2).toUpperCase()); // ZERO

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// console.log(haystack.includes(needle))
// console.log(haystack.indexOf(needle))
// console.log(haystack[haystack.indexOf(needle)])

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// allArrs.unshift(arr1[arr1.length-1], arr2[arr2.indexOf('F')], arr2[arr2.indexOf('Y')]);

// console.log(allArrs.sort().join('').toLowerCase()); // fxy

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];


// my.pop()
// my.pop()
// my.reverse()
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(-counter, --zero)); // ["Elham", "Mazero"]

// console.log(my = my[1].slice(++zero,-counter).concat(my[--counter].slice(counter))); // "Elzero"

// console.log(`${my.slice(-counter, --zero)}${my.slice(zero).toString().toUpperCase()}`); // "rO"

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end; i+=start) {
//     if (i === exclude) continue
//     console.log(i)
// }

// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i > end; i--) {
//     if (i < start) {
//         if (i < stop) break
//     console.log(`0${i}`)
//     } else {
//         console.log(i.toString())
//     }
// }

// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++) {
//     console.log(`${i}\n-- ${breaker}\n-- ${breaker ** breaker}`)
// }

// // Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// let index = 10;
// let jump = 2;
// // Output
// 10
// 8
// 6
// 4

// for (;;) {
//     if (index > jump) {
//         console.log(index)
//         index-=jump
//     } else break;
// }


// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// for (let i = +false; i < friends.length; i++) {
//     if (friends[i].charAt(+false) == letter.toLocaleUpperCase()) {
//         friends.shift()
//     }
//     console.log(`"${i+true} => ${friends[i]}"`);
// }

// let start = 0;
// let swappedName = "elZerO";
// let arr = []

// for (let i = start; i < swappedName.length; i++) {
//     // console.log(swappedName.charAt(i))
//     if (swappedName.charAt(i) == swappedName.charAt(i).toUpperCase()) {
//         arr.push(swappedName[i].toLowerCase())        
//     } else if (swappedName.charAt(i) == swappedName.charAt(i).toLowerCase()) {
//         arr.push(swappedName[i].toUpperCase())
//     } else continue;
// }
// console.log(arr.join(''))


// // Output
// "ELzERo"

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = ++start; i < mix.length; i++) {
//     if (typeof mix[i] === 'number') {
//         console.log(mix[i])
//     }
// }

// // Output
// 2
// 3
// 4

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// // Output
// "1 => Sayed"
// "2 => Mahmoud"

// while (index < friends.length) {
//     if (typeof friends[index] === 'number') {
//         friends.push();
//     } else if (friends[index].charAt(+false).toUpperCase() == 'A') {
//         friends.push()
//     } else console.log(`"${++counter} => ${friends[index]}"`);
//     index++;
// }

/*
Loop Challenge 
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// let counter = 1;

// for (let i = 0; i < myAdmins.length; i++) {
//     if (myAdmins[i] == "Stop") {
//         document.write(`<div>We have ${i} admins</div>`);
//         document.write(`<hr>`);
//         for (let i = 0; i < myAdmins.indexOf('Stop'); i++) {
//             document.write(`<div>`);
//             document.write(`The admin for team ${i+1} is ${myAdmins[i]}`);
//             document.write(`<h3>Team members:</h3>`);
//             for (let j = 0; j < myEmployees.length; j++) {
//                 if (myEmployees[j][0].toUpperCase() == myAdmins[i][0].toUpperCase()) {
//                     document.write(`<p>${counter}- ${myEmployees[j]}</p>`);
//                     counter++;
//                 };
//             };
//             counter = 1;
//             document.write(`</div>`);
//             document.write(`<hr>`);
//         };
//         break;
//     };
// };

// function sayHello(theName = 'Unknown', theGender = 'Uknown') {
//     if (theGender === 'Male' && theName ) {
//         document.write(`<div>`);
//         document.write(`Hello Mr. ${theName}`);
//         document.write(`</div>`);
//     } else if (theGender === 'Female' && theName.length > 0) {
//         document.write(`<div>`);
//         document.write(`Hello Ms. ${theName}`);
//         document.write(`</div>`);
//     } else if (theName.length > 0) {
//         document.write(`<div>`);
//         document.write(`Hello ${theName}`);
//         document.write(`</div>`);
//     }
// } 

//   // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"
//   sayHello(); // "Hello Sameh"


// let result = 0;

// function calculate(firstNum, secondNum, operation = "add") {
//     if (firstNum > 0 && secondNum > 0) {
//         if (operation === 'add') {
//             result = firstNum + secondNum;
//             document.write(`<div>`);
//             document.write(`${firstNum} + ${secondNum} = ${result}`);
//             document.write(`</div>`);
//         }
//         else if (operation === 'subtract') {
//             result = firstNum - secondNum;
//             document.write(`<div>`);
//             document.write(`${firstNum} - ${secondNum} = ${result}`);
//             document.write(`</div>`);
//         }
//         else if (operation === 'multiply') {
//             result = firstNum * secondNum;
//             document.write(`<div>`);
//             document.write(`${firstNum} x ${secondNum} = ${result}`);
//             document.write(`</div>`);
//         } 
//     } else {
//         document.write(`<div>`);
//         document.write(`Please enter both numbers`);
//         document.write(`</div>`);
//     }
// }

//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600



// function ageInTime(theAge) {

//     let numOfMonths = 0;

//     if (theAge > 0) {    
//         if (theAge >= 10 && theAge <= 100) {
//             numOfMonths = theAge * 12
//             document.write(`<div>`);
//             document.write(`Your age (${theAge}) years is:`);
//             document.write(`Months: ${numOfMonths}`)
//             document.write(`</div>`);
//         } else {
//             document.write(`<div>`);
//             document.write(`Age out of range`);
//             document.write(`</div>`);
//         }
//     } else {
//         document.write(`<div>`);
//         document.write(`Please enter age`);
//         document.write(`</div>`);
//     }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months
// ageInTime();

/*
Function - Random Argument Challenge 
====================================
Create function showDetails
Function accept 3 parameters [a, b, c]
Data types for info is
- String => Name
- number => Age
- Boolean => Status 
Argument is Random 
Data is not sorted output depend on data types 
- Use Ternary Conditional Operator 
*/

// function showDetails(a, b, c) {

//     let result = [a, b, c];
//     let name = '', age = 0, workStatus= '';

//     for (let i = 0; i < result.length; i++) {
//         if (typeof result[i] === 'number') {
//             age = result[i];
//         } else if (typeof result[i] === 'string') {
//             name = result[i];
//         } else if (typeof result[i]  === 'boolean') {
//             workStatus = result[i];
//         }
//     } 
//     if (workStatus == 1) {
//         document.write(`<div>`);
//         document.write(`Hello ${name}, your age is ${age}, You Are Available For Hire`);
//         document.write(`</div>`);
//     } else {
//         document.write(`<div>`);
//         document.write(`Hello ${name}, your age is ${age}, You Are not Available For Hire`);
//         document.write(`</div>`);
//     }
// }

// function showDetails(k, l, f) {
//     document.write(`<div>`)
//     for (let i = 0; i < arguments.length; i++) {
//         typeof arguments[i] === 'string'
//         ? (us = arguments[i])
//         : typeof arguments[i] === 'number'
//         ? (ag = arguments[i])
//         : typeof arguments[i] === 'boolean' && arguments[i] === true
//         ? (statue = 'Available')
//         : (statue = 'Not Available')
//     }
//     document.write(`<h1>Hello ${us}, Your Age Is ${ag}, You Are ${statue} For Hire</h1>`,)
//     document.write(`</div>`)
// }




//   // Needed Output
//   showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// function createSelectBox(startYear, endYear) {
//     document.write(`<select>`);
//     for (let i = startYear; i <= endYear; i++) {
//         document.write(`<option value="${i}">${i}</option>`)
//     }
//     document.write(`</select>`);
// }

// createSelectBox(2000, 2021);

// function multiply (...values) {
//     values.sort();
//     let numValues = [];
//     let result = 1;
//     for (let i = 0; i < values.length; i++) {
//         if (typeof values[i] === 'number') {
//             numValues.push(values[i]);
//         } else if (typeof values[i] === 'string') continue;
//         // console.log(Math.floor(numValues[i]));
//         result = result * parseInt(numValues[i]);
//     }
//     console.log(result);
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000


// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//         let fName = '', lName = '';
//       // Write Your Code Here
//       // Osama Mohamed => Osama M.
//       // Ahmed ali => Ahmed A.
//         fName = zName.substring(0, zName.indexOf(' '));
//         lName = zName.substring(zName.indexOf(' ')+1, zName.indexOf(' ')+2)
//         return `${fName.trim()} ${lName.trim().toUpperCase()}.,`;
//     }
//     function ageWithMessage(zAge) {
//       // Write Your Code Here
//       // 38 Is My Age => Your Age Is 38
//       // 32 Is The Age => Your Age Is 32
//         return `Your age is ${zAge.substring(0,3).trim()},`;
//     }
//     function countryTwoLetters(zCountry) {
//       // Write Your Code Here
//       // Egypt => You Live In EG
//       // Syria => You Live In SY
//         return `You live in ${zCountry.substring(0,2).trim().toUpperCase()}`;
//     }
//     function fullDetails() {
//         return `Hello ${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(zCountry)}`;
//     }
//     return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY



// // function itsMe() {
// //     return `Iam A Normal Function`;
// // }

// let itsMe = () => 'Iam A normal Function';

// console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// /////////////////////////////////////////////////////////////////////////
// function checker1(zName) {
//     return function (status) {
//     return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//     };
// }
// console.log(checker1("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker1("Ahmed")("Not Available")()); // Iam Not Avaialble
// /////////////////////////////////////////////////////////////////////////
// let checker2 = (zName) => {
//     return function a (status) {
//         return function b (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//         };
//     };
// };
// console.log(checker2("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker2("Ahmed")("Not Available")()); // Iam Not Avaialble
// /////////////////////////////////////////////////////////////////////////
// let checker3 = (zName) => (status) => (salary) => {
//     return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
// }
// console.log(checker3("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker3("Ahmed")("Not Available")()); // Iam Not Avaialble
// /////////////////////////////////////////////////////////////////////////

function specialMix(...data) {
    let filter = '';
    let numbers = [];
    let counter = 0;
    let result = 0;

    function extractNumbers (arr) {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < data[i].length; j++) {
                if (data[i][j] >= 0 || data[i][j] <= 9) {
                    filter += data[i][j];
                    // console.log(data[i][j]);
                    counter++;
                };
            };
            if (counter > 0) {
                numbers.push(filter);
            } else continue;
            filter = '';
            counter = 0;
        };
        console.log(numbers);
    };

    function covertToInt () {
        let preConvert = extractNumbers();
        
        for (i = 0; i < arr.length; i++) {
            preConvert[i] = parseInt(preConvert[i]);
            console.log(preConvert[i]) 
        }
    }
    // extractNumbers(data);
    return covertToInt();
};

//   console.log(specialMix(10, 20, 30)); // 60
//   console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
//   console.log(specialMix("Test", "Cool", "Test")); // All Is Strings