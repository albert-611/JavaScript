// first.js
const readline = require("readline");

// create interface to read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask user for their name
rl.question("What is your name? ", (name) => {
  console.log("Hello, " + name + "! Welcome to JavaScript.");
  rl.close();
});