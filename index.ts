#! /usr/bin/env node

import inquirer from "inquirer";

// console.log("Welcome to the TypeScript Quiz!");
// console.log("Please answer the following questions to the best of your ability.");

const user = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What's your name?"
    },
]);

console.log(`Welcome ${user.name} to the TypeScript Quiz!`);
console.log("Please answer the following questions to the best of your ability.");
console.log("Let's start the quiz!");


const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is the file extension for TypeScript files?",
        choices: [".js", ".ts", ".html", ".css"]   // .ts
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.TypeScript code is compiled into:",
        choices: ["Machine code", "Assembly code", "JavaScript", "TypeScript bytecode"]   // Javascript
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.Which tool is commonly used to transpile TypeScript code to JavaScript?",
        choices: ["Babel", "Webpack", "TypeScript Compiler (tsc)", "Node.js"]   // TypeScript Compiler (tsc)
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.Which of these are supported in TypeScript?",
        choices: ["Number", "Integar", "Any", "Both A and C", "All of the above"]   // Both A and C
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.Consider the code (let age = 25;). What is the data type of the variable age? ",
        choices: ["Number", "Any", "String", "boolean"]   // Number
    },
]);

let score: number = 0;

switch(quiz.question_1) {
    case ".ts":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1. Incorrect!");
}

switch(quiz.question_2) {
    case "JavaScript":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2. Incorrect!");
}

switch(quiz.question_3) {
    case "TypeScript Compiler (tsc)":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3. Incorrect!");
}

switch(quiz.question_4) {
    case "Both A and C":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4. Incorrect!");
}

switch(quiz.question_5) {
    case "Number":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5. Incorrect!");
}
console.log(`${user.name} Your score is ${score}/5`);
console.log("Thank you for taking the quiz!");
