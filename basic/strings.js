const name = "Sohail"
const repoCount = 50

// console.log(name  + repoCount + 'value') //  That is bad practice so avoid from it

console.log( `Hello ! My name is ${name} and the value of my repocount is ${repoCount}`);

const gameName = new String("Sohail-khan-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("l"));


const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-8,5)
// console.log(anotherString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "    Sohail" // trim empty space
// console.log(newStringOne);
// console.log(newStringOne.trim());

const man = "AllahDita"
console.log(man.replace("Dita" ,"Bachaya")) //Replace Method

console.log(man.includes('Allah'));

console.log(gameName.split("-"))
