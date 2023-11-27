const name = "ashraf"
const repoCount = 50


// console.log(name + repoCount + " Value");

// console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("arifkhan")

// console.log(gameName[0])
// console.log(gameName.toUpperCase())

const newString = gameName.substring(-1,4)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "     ashraf    "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://ashraf.com/ashraf%20khan"

console.log(url.replace("%20", "-"))