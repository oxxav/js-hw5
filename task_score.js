let introduction = 180;
let git = 189;
let js = 260;

let total = introduction + git + js;
console.log(total);
let average = total / 3;
average = Math.ceil(average);
console.log(average);

let newName = "Oksana";
// let oLetter=newName.slice(0, 1)
// let surname = "Savoskina";
// let fullName = oLetter + "." + " " + surname;

let surname = "Savoskina";
let fullName = newName + "." + " " + surname;

let fullNameShort =
  fullName.slice(0, 1) + fullName.slice(newName.length, fullName.length);

console.log(`Average value ${average} for ${fullNameShort} `);
