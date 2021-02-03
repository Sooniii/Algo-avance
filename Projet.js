//node Projet.js -action transform ./movies.json ./movies.out.json

let tab = process.argv;
let beginTime = new Date;

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let stringOut = "test";
fs.writeFileSync(tab[5],stringOut);

let endTime = new Date;
let appTime = endTime - beginTime;

console.log("L'appli a mis " + appTime + "ms pour être executé.");