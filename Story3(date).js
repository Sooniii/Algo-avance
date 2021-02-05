//node Story3\(date\).js -action transform ./movies.json ./movies.sort.date.json

let tab = process.argv
let beginTime = new Date;

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let json = JSON.parse(data)

//Fonction permettant de changer la position de deux objets d'un tableau
function swap(json,a,b){
    let temp = json[a];
    json[a] = json[b]
    json[b] = temp
}

//Fonction permettant de trier un tableau
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

let jsonSortByDate = sort(json);

//Ecrit dans le fichier Json la liste des films triés par date
let stringOut = JSON.stringify(jsonSortByDate,null,'\t');
fs.writeFileSync(tab[5],stringOut);

//Benchmark
let endTime = new Date;
let appTime = endTime - beginTime;

console.log("L'appli a mis " + appTime + "ms pour afficher tout les films triés par date dans le fichier movies.sort.titre.json");