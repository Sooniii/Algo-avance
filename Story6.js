//node Story6.js -action transform ./movies.json ./movies.out.json

let beginTime = new Date;

const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
        request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
}
const url = "https://image.tmdb.org/t/p/w500/qI9eTP3NpJlxTk3oMBvfz8Awwkw.jpg";
const path = './images/image.png'

download(url, path, () => {
    console.log('Done!')
})


/*
var requestURL = "https://image.tmdb.org/t/p/w500/qI9eTP3NpJlxTk3oMBvfz8Awwkw.jpg";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
*/

//Benchmark
let endTime = new Date;
let appTime = endTime - beginTime;

console.log("L'appli a mis " + appTime + "ms pour être executé.")
