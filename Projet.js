//node Projet.js -action transform ./movies.json ./movies.out.json

let tab = process.argv;
let beginTime = new Date;

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let json = JSON.parse(data);

let moviesTab = [];
for (i = 0; i < json.length; i++){
    let title = json[i].title;
    let fDate = json[i].release_date;
    let annéeMovie = Math.floor((((((fDate) / 60) / 60) / 24) / 365) + 1970);
    let nameAndDate = (title + " (" + annéeMovie + ")");
    moviesTab.push(nameAndDate);
}

let stringOut = JSON.stringify(moviesTab,null,'\t');
fs.writeFileSync(tab[5],stringOut);

let endTime = new Date;
let appTime = endTime - beginTime;

console.log("L'appli a mis " + appTime + "ms pour être executé.");