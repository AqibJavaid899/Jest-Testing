const {sum, greeting, intro} = require('./unitFunctions')


// Defining unit test for the sum(a,b) Function
test("Testing the sum function.", () => {
    expect(sum(4,5)).toBe(9)
})

// Defining unit test for the greeting(name) Function
test("Testing the greeting function.", () => {
    expect(greeting("John")).toEqual("Hey John, Welcome to VSCode!!")
})

// Checking for the False Positives in the greeting(name) function
test("Testing the greeting function.", () => {
    expect(greeting("")).toEqual("Hey , Welcome to VSCode!!")
})

test("Testing the greeting function.", () => {
    expect(greeting(null)).toEqual("Hey null, Welcome to VSCode!!")
})


// Defining the unit test for the intro({name, age, gender}) function
test("Testing the intro function.", () => {
    const userObj = {name: "John", age: 21, gender: "Male"}
    expect(intro(userObj)).toEqual("Username : John. Age : 21. Gender : Male")
})


// Checking for False Positives in the intro() function
test("Testing the intro function.", () => {
    const userObj = {name: "", age: null, gender: ""}
    expect(intro(userObj)).toEqual("Username : . Age : null. Gender : ")
})