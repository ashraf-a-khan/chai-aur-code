// singleton

// object literals

// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Ashraf",
    "full name": "Ashraf Khan",
    [mySym]: "myKey1",
    age: 18, 
    location: "New York",
    email: "ashraf.khan@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser[mySym])

JsUser.email = "ashraf@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ashraf@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// console.log(JsUser.greeting) // returns reference of a function
// console.log(JsUser.greeting()) // returns the function


JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())



