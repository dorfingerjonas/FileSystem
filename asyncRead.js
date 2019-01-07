const fs = require("fs");
const filename = "todo.txt";

console.log("Entire content of todo.txt will be read synchronously.");
console.log("Meanwhile Node.js app couldn't do anything else\n");

fs.readFile(filename, {encoding: "utf-8"}, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(`Reading ${filename} finished successfully.\n`);
        console.log(`Content of ${filename}:`);
        console.log(data);
    }
});