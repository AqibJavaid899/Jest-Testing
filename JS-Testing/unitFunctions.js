// Defining a function which will sum two numbers
const sum = (a, b) => {
    return a+b;
}

// Defining a function which will take a user name and return greeting from the function
const greeting = (name) => {
    return `Hey ${name}, Welcome to VSCode!!`
}

// Defining a function which will take an object containing (name, age, & gender) from the user and return intro of the user
const intro = (userInfo) => {
    return `Username : ${userInfo.name}. Age : ${userInfo.age}. Gender : ${userInfo.gender}`
}

module.exports.sum = sum
module.exports.greeting = greeting
module.exports.intro = intro