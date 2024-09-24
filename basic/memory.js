// There are two types of memores
// Stack(primitive types) heap(non-primitve types)
//stack mein copy mlti hy aur heap mein orignal value

let myYoutubeName = "SohailAhmadVlogs"
let anOtherName =myYoutubeName
anOtherName = "ApnyVlogs"

// console.log(anOtherName);
// console.log(myYoutubeName);

let userName ={
    name:"Sohail"
}

let another = userName

another.name= " Ali"

console.log(userName.name);
console.log(another.name);
