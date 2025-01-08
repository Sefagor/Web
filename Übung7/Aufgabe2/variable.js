let isBad = false;
let isGood = !isBad;
let isSomething = isBad || isGood;
let isAmbivalent = isBad && isGood;
isBad = true;

//isBad = true
//isGood = true
//isSomething = true
//isAmbivalent = false

console.log(isBad);
console.log(isGood);
console.log(isSomething);
console.log(isAmbivalent);