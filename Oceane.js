//node Oceane.js -action transform ./movies.json ./movies.out.json

let tab = process.argv

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let json = JSON.parse(data)

json.sort(tri);

let jsonOut = JSON.stringify(json,null,'\t')
fs.writeFileSync(tab[5],jsonOut);


function tri(a,b)
{
	if (a.title < b.title) return -1;
	else if (a.title == b.title) return 0;
	else return 1;
}

//console.log(jsonOut);