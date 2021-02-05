//node Story3\(titre\).js -action transform ./movies.json ./movies.sort.titre.json

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
            if(json[j+1].title < json[j].title){
                swap(json,j+1,j);
            }
        }
    }
    return json;
}

let jsonSortByTitle = sort(json);

//Ecrit dans le fichier Json la liste des films ranger par ordre alphabetique par titre
let stringOut = JSON.stringify(jsonSortByTitle,null,'\t');  //mise en page
fs.writeFileSync(tab[5],stringOut);

//Benchmark
let endTime = new Date;
let appTime = endTime - beginTime;

console.log("L'appli a mis " + appTime + "ms pour afficher tout les films trier par nom dans le fichier movies.sort.titre.json");