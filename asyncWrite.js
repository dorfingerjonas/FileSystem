const fs = require("fs");
const filename = "todo2.txt";
const filepath = "K:/Schule/2. Klasse/Systemtechnik/Node.js Praxis";

let content = "- Java üben\n";
content += "- Node.js üben\n";
content += "- Gemüse einkaufen\n";

fs.writeFile(filepath + filename, content, (err) => {
    if (err != null) {
        console.error(err.message);
    } else {
        console.log(`File ${filepath}/${filename} has been saved!`);
    }
});