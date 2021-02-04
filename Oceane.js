//node Oceane.js -action transform ./movies.json ./movies.out.json

/*       tri Ordre alphabetique 

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

*/

let tab = process.argv

const fs = require("fs");
data = fs.readFileSync(tab[4],"utf8");

let json = JSON.parse(data)
json.sort(swap);

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
             if(json[j+1] < json[j]){
                 swap(json,j+1,j);
             }
         }
     }
 }
 
 console.log(json);
 sort(json)
 console.log(json);