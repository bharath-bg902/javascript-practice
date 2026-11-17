// PART 1 - VARIABLES, DATA TYPES AND OPERATORS

// Task 1
var name = "Bharath";
let age = 23;
const city = "Salem";
console.log(name, age, city);

// Task 2
let salary = 25000;
let workingStatus = true;
console.log(typeof name, typeof age, typeof salary, typeof workingStatus);

// Task 3
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits[0], fruits[2], fruits[4]);

// Task 4
let student = { name: "Bharath", age: 23, location: "Salem", skills: "JavaScript" };
console.log(student.name, student.age, student.location, student.skills);

// Task 5
let a = 10, b = 5;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b);

// Task 6
let num1 = 10;
console.log(++num1);

// Task 7
let num2 = 20;
let result = num2++;
console.log(num2, result);

// Task 8
let x = 10;
x += 5;
console.log(x);
x -= 2;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);
x %= 3;
console.log(x);

// Task 9
console.log(100 > 50);
console.log(100 == 100);
console.log(100 != 200);

// Task 10
console.log(25 == "25");
console.log(25 === "25");

// Task 11
let ageCheck = 23;
console.log(ageCheck > 18 && ageCheck < 60);

// Task 12
let marksCheck = 80;
console.log(marksCheck > 90 || marksCheck > 50);

// Task 13
let isAdult = false;
console.log(!isAdult);

// Task 14
let votingAge = 20;
console.log(votingAge >= 18 ? "Eligible" : "Not Eligible");

// Task 15
let firstName = "Bharath";
let place = "Salem";
let company = "Stackly";
console.log(`My name is ${firstName}, I am from ${place}, I work at ${company}`);

// Task 16
console.log(typeof ("Hello" + 100));
console.log(typeof (100 + true));

// Task 17
let value = "500";
console.log(Number(value) + 100);

// Task 18
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("JavaScript"));


// PART 2 - CONDITIONAL STATEMENTS

// Task 19
let number1 = -5;
if (number1 > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

// Task 20
let voterAge = 20;
if (voterAge >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}

// Task 21
let evenNumber = 10;
if (evenNumber % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Task 22
let studentMarks = 70;
if (studentMarks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Task 23
let time = 10;
if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
} else if (time >= 16 && time <= 18) {
    console.log("Good Evening");
} else if (time >= 19 && time <= 24) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}

// Task 24
let personAge = 23;
let height = 170;
let weight = 65;
if (personAge >= 18) {
    if (height >= 150) {
        if (weight >= 50) {
            console.log("Selected");
        } else {
            console.log("Weight is low");
        }
    } else {
        console.log("Height is low");
    }
} else {
    console.log("Age is low");
}

// Task 25
let trafficLight = "red";
switch (trafficLight) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Wait"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid Color");
}

// Task 26
let day = 3;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid Day");
}

// Task 27
let username = "Bharath";
let password = "12345";
if (username == "Bharath" && password == "12345") {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}

// Task 28
let gradeMarks = 85;
if (gradeMarks >= 90) {
    console.log("Grade A");
} else if (gradeMarks >= 70) {
    console.log("Grade B");
} else if (gradeMarks >= 35) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// PART 3 - LOOPING STATEMENTS

// Task 29
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 30
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Task 31
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) console.log(i);
}

// Task 32
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) console.log(i);
}

// Task 33
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

// Task 34
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

// Task 35
let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

// Task 36
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Task 37
let word = "JAVASCRIPT";
for (let letter of word) {
    console.log(letter);
}

// Task 38
let languages = ["JavaScript", "Python", "Java", "C", "PHP"];
for (let language of languages) {
    console.log(language);
}

// Task 39
let employee1 = { name: "Bharath", age: 23, city: "Salem" };
for (let key in employee1) {
    console.log(key, employee1[key]);
}

// Task 40
let mobiles = ["Apple", "Samsung", "Vivo", "Oppo", "OnePlus"];
for (let mobile of mobiles) {
    console.log(mobile);
}


// PART 4 - COMBINED CHALLENGE

// Task 41
let marksArray = [80, 75, 90, 65, 85];
for (let mark of marksArray) {
    console.log(mark);
}

// Task 42
let employee2 = { name: "Bharath", age: 23, salary: 30000 };
for (let key in employee2) {
    console.log(key, employee2[key]);
}

// Task 43
let numbers = [10, 15, 20, 25, 30];
for (let num of numbers) {
    if (num % 2 == 0) {
        console.log(num, "Even");
    } else {
        console.log(num, "Odd");
    }
}

// Task 44
let student1 = { name: "Bharath", marks: 75 };
if (student1.marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Task 45
let light = "green";
switch (light) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Wait"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid");
}

// Task 46
let tableNumber = 5;
for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}

// Task 47
let fruitNames = ["apple", "mango", "banana", "orange", "grapes"];
for (let fruit of fruitNames) {
    console.log(fruit.toUpperCase());
}

// Task 48
let employee3 = { name: "Bharath", salary: 30000 };
for (let key in employee3) {
    console.log(key, employee3[key]);
}
if (employee3.salary > 25000) {
    console.log("High Salary");
} else {
    console.log("Low Salary");
}

// Task 49
let loginName = "Bharath";
let loginPassword = "12345";
if (loginName == "Bharath" && loginPassword == "12345") {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}

// Task 50
let students = [
    { name: "Arun", marks: 80 },
    { name: "Bala", marks: 30 },
    { name: "Kumar", marks: 65 }
];

for (let student of students) {
    console.log(student.name);
    if (student.marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}