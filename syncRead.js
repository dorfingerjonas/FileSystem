const fs = require("fs");
const filename = "todo.txt";
let content;

console.log("Entire content of todo.txt will be read synchronously.");
console.log(`Reading ${filename} finished successfully.`);
console.log("Meanwhile Node.js app couldn't do anything else\n");
console.log(`Content of ${filename}:`);

content = fs.readFileSync(filename, {encoding: "utf-8"});

console.log(content);