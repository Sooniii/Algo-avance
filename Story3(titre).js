//node Story3\(titre\).js -action transform ./movies.json ./movies.sort.titre.json

let tab = process.argv
let beginTime = new Date;

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let json = JSON.parse(data)

let jsonOut = JSON.stringify(json,null,'\t')
fs.writeFileSync(tab[5],jsonOut);

function swap(json,a,b){
    let temp = json[a];
    json[a] = json[b]
    json[b] = temp
}
 
function sort(json){
    for(let i = json.length-1; i>=1 ;i--){
        for(let j = 0; j<=i-1;j++){
            if(json[j+1].title < json[j].title){
                swap(json,j+1,j);
            }
        }
    }
    return json;
}

let jsonSortByTitle = sort(json);

let stringOut = JSON.stringify(jsonSortByTitle,null,'\t');
fs.writeFileSync(tab[5],stringOut);

let endTime = new Date;
let appTime = endTime - beginTime;

console.log("L'appli a mis " + appTime + "ms pour afficher tout les films trier par nom dans le fichier movies.sort.titre.json");