const user = {
    username: "Ashraf",
    price: 999, 

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}


// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "Ashraf"
//     console.log(this.username);
// }


// chai()


// const chai = function () {
//     let username = "ashraf"
//     console.log(this.username)
// }

// chai()

// const chai2 = () => {
//     let username = "ashraf"
//     console.log(this.username)
// }


// chai2()


// const addTwo = (num1, num2) => (num1 + num2); // Implicit Return, if wrapped in parentheses, no need to write return keyword

const addTwo = (num1, num2) => ({username: "Ashraf"})



console.log(addTwo(3, 4))



