// the following codes are pringing patterns
console.log("=========First pattern==========")
for (let i = 1; i <= 5; i++) {
     let row = "";
     for (let j = 1; j <= i; j++) {
          row += i + "  "
     } console.log(row);
}

console.log("=========Second pattern==========")

for (let i = 1; i <= 5; i++) {
     let row = "";
     for (let j = 1; j <= i; j++) {
          row += j + "  "
     } console.log(row);
}

console.log("=========Third pattern==========")

for (let i = 5; i >= 1; i--) {
     let row = "";
     for (let j = 1; j <= i; j++) {
          row += i + "  "
     } console.log(row);
}