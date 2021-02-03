const fs = require("fs");
data = fs.readFileSync("./movies.js","utf8")
console.log(data)

console.log(process.argv);