const actor = {
    name: 'Tom Cruise',
    age: 40,
    phone: '1234567890',
    hobby: 'acting',
    money: 1000000000,
    address: 'Earth'
    
}

/*
console.log(actor.name)// Output: 1234567890
console.log(actor.phone)// Output: 1234567890
console.log(actor.age)// Output: 1234567890

const name1 = actor.name
const phone1 = actor.phone
const age1 = actor.age

console.log(name1) //output: Tom Cruise
console.log(phone1) // Output: 1234567890
console.log(age1) // Output: 40
*/

console.log('-------------------Object Distructuring-----------------')
//if right side is an object left side of destructuring will be object as well
//use property name as a variable that contains the property value
const {phone} = actor
console.log(phone)// Output: 1234567890


const {name, age} = actor
console.log(name, age)// Output: Tom Cruise 40


const {address, hobby: work, money: taka} = actor
console.log(address)// Output: Earth
console.log(work)// Output: acting
console.log(taka)// Output: 1000000000




console.log('-------------------Array Distructuring-----------------')
//example (1)
const numbers = [1, 2, 3, 4, 5]
const [first, second] = numbers
console.log( first, second)// Output: 1 2
//first and second variable e first and second element of numbers array assign hobe. that means 1 and 2 assign hobe only

//example: (2) chaile kono element skip kora jai
numbers2 = [11,22,33,44,55]
const [first1,  ,  , fourth1] = numbers2
console.log( first1, fourth1)// Output: 11 44


//example (3) double
function doubleThem(a,b){
    return [a*2, b*2]
}
const [prothom, ditiyo] = doubleThem(3,5)
console.log(prothom, ditiyo)


//example (4) swap
let num1 = 1
let num2 = 2;//here must use ; semicolen
[num1, num2] = [num2, num1]
console.log(num1)
console.log(num2)
