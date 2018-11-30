// The next set of drills are a bit more difficult. I know that sometimes it might be hard to work out what is meant by the question, but I ask that you stay with it and do your best to piece it apart - sometimes it is hard to express these questions without some confusion. I am happy to give answers to some of the questions if that will help with the understanding so that you can move forward. Where a question asks for a log to screen, the simplest thing will be to log the name of the function. Most times in these questions it is not what the function does that will be important, but rather how that function sits within the object, or even within the other function.

// 1. Define an object that has two keys. One will have the value of a string, and the other a function (and this function can simply log its own name to screen).

let codeBro = {language : 'Ruby', thisFunction: function () { console.log('thisFunction')}}

// 2. Log the string to screen.

//console.log(codeBro.language)

// 3. Log the entire function to screen.

//console.log(codeBro.thisFunction)

// 4. Invoke the function within the object. 

//codeBro.thisFunction()

// ------------

// 5. Define an object that has three keys, and each key has the value of an anonymous function. In each function log something to screen (different in each function).

const x = functionObject = {
    function1: function () {
        //console.log("Hello")
        return 'Hello'
    },
    function2: function () {
        //console.log("world")
        return 'World'
    },
    function3: function () {
        //console.log("!")
        return '!'
    }
}

// 6. Call each function (through the object).

// console.log(functionObject.function1())
// console.log(functionObject.function2())
// console.log(functionObject.function3())


// ------------

// 7. Make a function that returns an object that has two keys, one key with a string value, and the other that has an anonymous function as its value. 

function objectFunction () {
    const airlines = {qantas: "australian", function (num1, num2) {
        return num1 + num2
    }}
    return airlines
}

// 8. Log to screen the result of invoking this function.

//console.log(objectFunction())

// 9. Work out how to log to screen the value of the returned object’s string.

//console.log(objectFunction().qantas)

// 10. Invoke the returned object’s function (via the first function - you will need to return the object, and then call the function within the returned object). 

//console.log(objectFunction().function(4, 7))

// ------------

// 11. Write a function that takes a number and a function as an argument. Inside this function perform three simple calculations with the given number (the first argument), and then pass the final result to the function that is passed as the second argument.

function masterFunction(num, func) {
    let result = num * 10 - 5 + 100
    return func(result)
}

// 12. Call this function three times with different numbers, and a different anonymous callback function each time (perhaps each time the callback doing a different simple calculation). 

const z = masterFunction(5, function(result) {
    return result + 5
})

console.log(z)

// 13. Now write two functions that take a number as an argument, and do some very simple calculation.

function numCal1(num) {
    return num * 5
}

function numCal2(num) {
    return num + 10
}

// 14. Invoke the function from 11 twice, each time with a different number argument, and using each of the two functions that you just defined in 13 (one in each invocation). 

console.log(masterFunction(10, numCal1))
console.log(masterFunction(5, numCal2))


// ------------
// 15. Define three very basic functions that take no arguments and that simply console out the name of the function. 

function log1 () {
    console.log('log1')
}

function log2 () {
    console.log('log2')
}

function log3 () {
    console.log('log3')
}

// 16. Place each of these functions into an array (do not call the functions).

arr = [
    log1(),
    log2(),
    log3()
]

// 17. Loop through this array and invoke each of the functions in turn.

arr.forEach(function(func) {
    return func
})

// ------------
// 18. Define a function (funcReturnsFunc) that returns an anonymous function. If you like you can have funcReturnsFunc log out something before it returns the function. The returned function can just log out a simple message to inform you it ran.

function funcReturnsFunc() {
    console.log('I work!');
    return function () {
        console.log('So do I!')
    }
}





// 19. Invoke funcReturnsFunc, and store the result in a const.

const yy = funcReturnsFunc()

// 20. Using that const, run the returned function.

//console.log(yy)
//yy()

// 21. Now do the same thing in one line: run funcReturnsFunc, and then run the anonymous function result immediately.

funcReturnsFunc()()