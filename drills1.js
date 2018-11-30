// JS Drills

// Sometimes you learn how to do things before you fully understand how they work. Coding is like this a lot. There are many things that I learned how to do well before I asked how they function. There are still plenty more things where that is the case for me. You merely push back that barrier slowly, but the unknown remains. In that vein, these are exercises that are designed to get you familiar with the lingo of arrays, objects, and functions, and get you repeatedly using them. It’s not a test, or even a challenge - it’s practice. Consider it like doing a forehand drill in tennis, or scales in music. You wouldn’t be upset making some mistakes while you practice, because you know that this is the thing you need to work toward being competent, and you allow yourself to fail and learn. This is exactly the same. 

// Learn and fail as you need here, because the bigger tests are to come. As you get more comfortable with the basic syntax, and getting your code to work, you will have more brain space to think about what it is it all means. (And we are more than happy to keep explaining that at the same time too!)

// Follow the instructions carefully. They will be repetitive and are not designed to be interesting, but rather build up ‘muscle memory’. *Each* line of code that you write, you *must* save the file and run the code. If there are *any* errors, you fix them then and there. If in doubt, puts out the structure you have made to make sure that it is what you hoped it was. I’m looking for accuracy - I want the instructions followed precisely. It will be your choice of class and variable names (etc), but the functioning and number of attributes called for are immutable. Ideally you’ll want the work to be checked, so copy and paste this text into a file and comment it out, so that I can check it easily - put the answer directly below the question.

// 1. Make a function that takes two arguments, and returns the result of them added together.

function addition(num1, num2) {
    return num1 + num2
}

// console.log(addition(3, 4))

// 2. Call the above function four times with different inputs each time. Make at least some of the inputs floats. 

// console.log(addition(3, 4))
// console.log(addition(0, 49))
// console.log(addition(3.5, 9.3))
// console.log(addition(5.9, 11.1))

// 3. Define two integer and two float variables, and use them as arguments to this function you have made.

const seven = 7
const twenty = 20
const elevenPointOne = 11.1
const oneHundred = 100

console.log(addition(seven, twenty))

// ---------------
// 4. Make an object (in ruby this would be a hash) with four keys, and have the keys be three different data types.

let engine = {maker: 'Honda', model: 'K24', capacity: 2.4, running: false}

// 5. Access two of the values in your object, and log them to the screen.

console.log(`The brand of the engine is ${engine.maker} and the model is ${engine.model}`)

// 6. Define a function that takes an object as the input, and log out the value of one of the keys of the object.

function printObject(object) {
    console.log(object.maker)
}

printObject(engine)

// 7. Create an object with one key and value pair, and invoke the previous function with that object as the argument.

let engine2 = {maker: 'BMW'}
printObject(engine2)

// ---------------
// 8. Make an object with three keys and values, and assign it to a variable.

let carModel1 = {brand: 'BMW', body: 'Sedan', colour: 'Black'}

// 9. Make four more objects with the same keys.

let carModel2 = {brand: 'BMW', body: 'Coupe', colour: 'Red'}
let carModel3 = {brand: 'Ford', body: 'SUV', colour: 'Green'}
let carModel4 = {brand: 'Toyota', body: 'Hatchback', colour: 'Grey'}
let carModel5 = {brand: 'Holden', body: 'Sedan', colour: 'Orange'}

// 10. Access a value from three of these objects.

function printCarModels (car1, car2, car3) {
    console.log(car1.body)
    console.log(car2.body)
    console.log(car3.body)
}

//printCarModels(carModel3, carModel4, carModel5)

// ---------------
// 11. Define a variable and assign to it an empty array.

arr = []

// 12. Define a function that takes an array and an object as arguments. The function will push the object into the given array.

function addToArr(array, item) {
    array.push(item);
}

//addToArr(arr, carModel2)
addToArr(arr, 9)
//console.log(arr)

// 13. Using the function, the four objects, and the array that you have made in the previous steps, invoke the function four times to put those four objects into the array.

addToArr(arr,carModel1)
addToArr(arr,carModel2)
addToArr(arr,carModel3)
addToArr(arr,carModel4)

// 14. Make sure that the array contains four hashes (maybe log to the screen).

//console.log(arr)

// 15. Access two elements of the array that you have created (via an index)

//console.log(arr[3,1])

// 16. For one of these, now access one of the values of the object at that is located at that index.

console.log(Object.values(carModel3)[1])

// ---------------
// 17. Write a function that takes two arguments - one an object, and the other an array. Inside the function log out a value from the object, and an element from the array.

function printStuff(object, array) {
    console.log(Object.values(object)[0])
    console.log(array[1])
}

//printStuff(carModel2, arr)

// 18. Define four objects, one with one key, one with two keys, one with three keys, and one with four.

let home = {address: '31 Clyde St'}
let gypsy = {canShrinkUs: true, tears: 'protect from AIDS'}
let school = {length: '6 months', address: '120 Spencer St', topic: 'coding'}
let computer = {brand: 'Apple', model: 'Macbook Air', ram: 8, ssd: '256 GB'}

// 19. Define two different arrays, with two different datatypes.

numbers = [2, 4, 99, 6]
words = ['hippo', 'jebroni', 'sciatica']

// 20. Call the function four times, once with each object, and use the arrays you made.

printStuff(gypsy, words)
printStuff(home, numbers)
printStuff(school, words)
printStuff(computer, numbers)

// ---------------
// 21. Write a function that takes five arguments: three strings, and two numbers.

function daAllInOne(string1, string2, string3, num1, num2) {
    console.log(string1 + ' ' + string2 + ' ' + string3)
    console.log(num1 + num2)
}

// 22. Call that function twice.

daAllInOne("g'day cunt", "Alfie alf in da house", "Siq Dog", 6, 99)
daAllInOne("DJ Dibs", "checkin in", "rails camp bruh", 9, 20)


// 23. Write a function that takes two arguments - one an object, and the other an array. Inside the function log out a value from the object, and an element from the array.

function curtainClose(object, array) {
    console.log(Object.values(object)[1])
    console.log(array[2])
}

curtainClose(carModel2, arr)