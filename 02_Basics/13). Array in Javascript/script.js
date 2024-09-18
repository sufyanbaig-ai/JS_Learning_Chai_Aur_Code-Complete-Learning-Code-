//*********************************** Array **********************************/

// const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let age = 18;
// let canVote = age >= 18 ? 'Yes' : 'No'; // 'Yes'

//*********************************** Array **********************************/

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["React.js", "JavaScript"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

/// Array Push Methods:: is sy value add huti hai Array ky last men

// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
// myArr.push(9)
// console.log(myArr)

/// Array Pop Methods:: is sy array ki last wali wali remove hu jati hai

// myArr.push(10)
// myArr.push(11)
// myArr.pop()
// console.log(myArr)

/// Array Unshift Methods:: is sy b value add huti hai lakin is Array ky shiro men value ad huti hai

// myArr.unshift(19)
// console.log(myArr)

/// Array Shift Methods:: is sy b value remove huti hai lakin is Array ky shiro men value remove huti hai

// myArr.shift()
// console.log(myArr)

/// Array Include Methods:: yeh for example array sy question ky answer ky liye use huta iska reply true, or false men ata sirf

// console.log(myArr.includes(8));
// console.log(myArr);

// indexOf() ek JavaScript method hai jo array ya string mein kisi specific element ya substring ka index return karta hai. Agar element ya substring nahi milta, to -1 return karta hai.

// let fruits = ["apple", "banana", "orange"];
// let index = fruits.indexOf("lund"); // 1
// console.log(fruits.indexOf("orange"));

//array.join() ek JavaScript method hai jo ek array ke elements ko ek single string mein join karta hai, aur aap specify kar sakte hain ki elements ke beech mein kaunsa separator use karna hai. Default separator comma (,) hota hai agar aap kuch nahi specify karte.

//   {
//     const myArr = [0, 1, 2, 3, 4, 5];
//     const newArr = myArr.join()
//     console.log(myArr)
//     console.log(typeof newArr)
//   }

//Slice and Splice Method in Array

//***************************************slice() Function **************************************//

//JavaScript mein slice() aur splice() functions dono arrays ke sath kaam kartay hain, magar inka kaam mukhtalif hota hai. Chalain tafseel se samajhtay hain:

// 1. slice() Function:
// Kaam: Yeh array ka ek hissa copy karta hai bina asli array ko change kiye.
// Kis liye use hota hai: Agar aapko array ka kuch hissa chahiye bina asli array ko modify kiye.

let fruit = ["apple", "banana", "mango", "orange", "grapes"];
let slicedFruit = fruit.slice(1, 4); // Index 1 se 3 tak elements copy honge
console.log(slicedFruit); // Output: ["banana", "mango", "orange"]
console.log(fruit); // Original array change nahi hoti


//***************************************splice() Function **************************************//

/* Kaam: Yeh array ko modify karta hai, items ko remove karta hai aur naye items insert kar sakta hai.
Kis liye use hota hai: Jab aapko array se kuch remove ya add karna ho aur asli array ko change karna ho.*/

let fruits = ["apple", "banana", "mango", "orange", "grapes"];
let removedFruits = fruits.splice(2, 2); // Index 2 se 2 items delete
console.log(removedFruits); // Output: ["mango", "orange"]
console.log(fruits); // Original array change ho gayi: ["apple", "banana", "grapes"]


//*************************************** Example (Remove and Add) **************************************//
let fruite = ["apple", "banana", "mango", "orange", "grapes"];
fruite.splice(2, 2, "kiwi", "pineapple"); // Index 2 se 2 items delete aur 2 naye add
console.log(fruite); // Output: ["apple", "banana", "kiwi", "pineapple", "grapes"]

