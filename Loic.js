//node Loic.js –action sort_date ./movies.json ./movies.sort.date.json

let tab = process.argv

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let json = JSON.parse(data);

json.sort(tri);

let jsonOut = JSON.stringify(json,null,"\t")
fs.writeFileSync(tab[5],jsonOut);



function tri(a,b){
    if (a.release_date<b.release_date) return -1;
    else if (a.release_date == b.release_date) return 0;
    else return 1;
}



