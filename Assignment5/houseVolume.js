let prompt = require('prompt-sync')();


function doInputOoutPut() {
     houseVolume(width, depth, height, sweep)
     console.log(house_Volume)
}

let width = prompt("Enter the width of your house: ")
width = parseInt(width)

let depth = prompt("Enter the depth of your house: ")
depth = parseInt(depth)

let height = prompt("Enter the height of your house: ")
height = parseInt(height)

let sweep = prompt("Enter the sweep of your house: ")
sweep = parseInt(sweep)

doInputOoutPut();

function houseVolume(width, depth, height, sweep) {
     livingVolume(width, depth, height)

     roofVolume(width, depth, sweep)
    let house_Volume = living_Volume + roof_Volume
    return house_Volume
}

function livingVolume(width, depth, height) {
     let living_volume = width * depth * height;
     return living_volume;

}
 
function roofVolume(width, depth, sweep) {
     triangleArea(sweep, sweep, depth)
     let volumeOfRoof = areaOfTriangle * width;
     return volumeOfRoof;

}

function triangleArea(sweep, sweep, depth) {
     let s; //semi_parameter;
     s = (sweep + sweep + depth) / 2
     let areaOfTriangle = Math.sqrt(s * (s - sweep) * (s - sweep) * (s - depth))
     areaOfTriangle = Math.round(areaOfTriangle * 10) / 10
     return areaOfTriangle
}

