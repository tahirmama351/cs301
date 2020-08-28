let prompt = require('prompt-sync')();

function doInputOoutPut() {
     let house_volume = houseVolume(width, depth, height, sweep)
     return house_volume
}

let width = prompt("Enter the width of your house: ")
width = parseInt(width)

let depth = prompt("Enter the depth of your house: ")
depth = parseInt(depth)

let height = prompt("Enter the height of your house: ")
height = parseInt(height)

let sweep = prompt("Enter the sweep of your house: ")
sweep = parseInt(sweep)

let result = doInputOoutPut();
console.log(result)

function houseVolume(width, depth, height, sweep) {
     let living_Volume = livingVolume(width, depth, height)

     let roof_Volume = roofVolume(width, depth, sweep)
     let house_Volume = living_Volume + roof_Volume
     return house_Volume
}

function livingVolume(width, depth, height) {
     let living_volume = width * depth * height;
     return living_volume;
}

function roofVolume(width, depth, sweep) {
     let area = triangleArea(sweep, sweep, depth);
     let roof_volume = area * width;
     return roof_volume;
}

function triangleArea(sweep, sweep, depth) {
     let s; //semi_parameter;

     s = (sweep + sweep + depth) / 2
     let areaOfTriangle = Math.sqrt(s * (s - sweep) * (s - sweep) * (s - depth))
     areaOfTriangle = Math.round(areaOfTriangle * 10) / 10
     return areaOfTriangle
}

