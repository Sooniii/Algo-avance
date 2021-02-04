//node Story4.js –action search_date ./movies.json <year> <sorted>

let tab = process.argv;
let beginTime = new Date;

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let json = JSON.parse(data)


if ((tab[6]) === 'true') {

function swap(json,a,b){
    let temp = json[a];
    json[a] = json[b]
    json[b] = temp
}
 
function sort(json){
    for(let i = json.length-1; i>=1 ;i--){
        for(let j = 0; j<=i-1;j++){
            if(json[j+1].release_date < json[j].release_date){
                swap(json,j+1,j);
            }
        }
    }
    return json;
}

json = sort(json);
}

function search(json){
for (i = 0; i < json.length; i++){
    let year = Math.floor((((((json[i].release_date) / 60) / 60) / 24) / 365) + 1970);
    if(year == tab[5]){
        console.log(json[i].title)
        }
    }
}

search(json)

let endTime = new Date;
let appTime = endTime - beginTime;

console.log("L'appli a mis " + appTime + "ms pour afficher tout les films de " + tab[5]);