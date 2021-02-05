
//node Loic.js –action color <path_folder>»
let tab = process.argv;


const jimp = require('jimp')
const fs = require("fs");
let tabFiles = fs.readdirSync(tab[4])
let moyenne

for (i = 0; i < tabFiles.length; i++){
    let path_image = ToPath(tab[4], tabFiles[i])
    let promise = jimp.read(path_image);
    promise.then((image) => {
        let x = 10;
        let y = 100;
        let hex = image.getPixelColor(x, y);
        // returns the colour of that pixel e.g. 0xFFFFFFFF
        jimp.intToRGBA(hex);
        // e.g. converts 0xFFFFFFFF to {r: 255, g: 255, b: 255, a:255}

            });
}


function ToPath(path_folder, imageName) {
//path_folder peut comporter des strings (ex :./image/)
//imageName peut comporter (ex : AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg)
//./image/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg
let ret = (path_folder + imageName)
return ret
}

