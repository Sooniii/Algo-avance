//node Loic.js –action sort_date ./movies.json ./movies.sort.date.json

let tab = process.argv

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let json = JSON.parse(data);

    function swap(json,a,b){
    let temp = json[a];
    json[a] = json[b]
    json[b] = temp
}

    function sort(json){
    for(let i = json.length-1; i>=1 ;i--){
        for(let j = 0; j<=i-1;j++){
            if(json[j+1] < json[j]){
                swap(json,j+1,j);
            }
        }
    }
}

function tri(a,b)
{
	if (a < b) return -1;
	else if (a == b) return 0;
	else return 1;
}

console.log('tri en cours')
tri (json);
sort(json);
console.log('tri terminé')

let jsonOut = JSON.stringify(json,null,"\t")
fs.writeFileSync(tab[5],jsonOut);

console.log('cest fait')







