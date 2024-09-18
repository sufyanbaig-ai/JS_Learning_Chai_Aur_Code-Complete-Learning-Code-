// Primitive data types
// 7 types: String, Number, Boolean, null, Undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3 

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)


//BigInt 
const bigNumber = 1234567890098765432n



// Reference (Non Primitive data type)
// Array, Objects, Functions
// Non primitive ka data type function he huta hai aur function ka data type **Object Function** huta hai


//Arrays Method
const heros = ["shaktiman", "Shahryar", "Awaisullah", "Dooga"]


//Object Mehtod
let myObj = {
    name: "Sufyan",
    age: 18,
}

// Function Method
const myFunction = function(){
    console.log("Hello, World!");
}
console.log(typeof heros)



/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */
       