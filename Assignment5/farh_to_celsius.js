let prompt = require('prompt-sync')();

function do_in_put_out_put(fahr) {
     fahr = prompt("Enter tempraturn in fahranheit: ");
     fahr = parseInt(fahr);
     fahr_to_cels(fahr);
}

function fahr_to_cels(fahr) {
     let temp_in_celsius;
     temp_in_celsius = (32 * fahr - 32) * 5 / 9
     console.log("temprature in celsius is: " + temp_in_celsius);
}
do_in_put_out_put();