//node Story5.js –action search_key_word ./movies.sort.date.json <genre> <key_word>

let tab = process.argv;
let beginTime = new Date;

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let json = JSON.parse(data)

//Fonction pour rechercher le film le plus récent d'un genre donné et contenant un mot clef donné dans sa description
function search(json){
    for (i = 0; i < json.length; i++){
        if (json[i].genres){
            for (j = 0; j < json[i].genres.length; j++){
                if(json[i].genres[j] == tab[5] && json[i].overview.includes(tab[6])){
                    recentMovie = json[i].title;
                }
            } 
        }
    }
}

let recentMovie;
search(json);
console.log(recentMovie);

//Benchmark
let endTime = new Date;
let appTime = endTime - beginTime;

console.log("L'appli a mis " + appTime + "ms pour trouver le film le plus récent de type : " + tab[5] + " et dont la description contient le mot : " + tab[6]);