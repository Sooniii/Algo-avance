//node Story4.js –action search_date ./movies.json <year> <sorted> ./movies.search.year.json

let tab = process.argv;
let beginTime = new Date;

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let json = JSON.parse(data);

//Permet de trier la liste si l'utilisateur le souhaite
if ((tab[6]) === 'true') {

    //Fonction permettant de changer la position de deux objets d'un tableau
    function swap(json,a,b){
        let temp = json[a];
        json[a] = json[b];
        json[b] = temp;
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
    json = sort(json);
}

//Fonction permettzant de rechercher tout les films d'une date donnée
function search(json){
    for (i = 0; i < json.length; i++){
        let year = Math.floor((((((json[i].release_date) / 60) / 60) / 24) / 365) + 1970);
        if(year == tab[5]){
            console.log(json[i].title);
            moviesTab.push(json[i]);
        }
    }
}

let moviesTab = [];
search(json)

//Ecrit dans le fichier Json la liste des films de l'année donnée
let stringOut = JSON.stringify(moviesTab,null,'\t');
fs.writeFileSync(tab[7],stringOut);

//Benchmark
let endTime = new Date;
let appTime = endTime - beginTime;

console.log("L'appli a mis " + appTime + "ms pour afficher tout les films de " + tab[5]);