function sayMyName(){
    console.log("H");
    console.log("R");
    console.log("A");
    console.log("F");
}

// sayMyName()

function addTwoNumbers(number1, number2){ //parameters
    return number1 + number2;
}

const result = addTwoNumbers(5, 6) //arguments

console.log("Result", result)


function loginUserMessage(username = "Ashraf"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Amaira"))

function calculateCartPrice(v1, v2, ...num1) { //rest operator
    return num1;
}

console.log(calculateCartPrice(200, 400, 2000, 500))

const user = { 
    username: "ashraf",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "Ash",
    price: 2010
})


const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))