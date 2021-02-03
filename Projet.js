//node Projet -action transform ./movies.json ./movies.out.json

let tab = process.argv

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let stringOut = "test";
fs.writeFileSync(tab[5],stringOut);