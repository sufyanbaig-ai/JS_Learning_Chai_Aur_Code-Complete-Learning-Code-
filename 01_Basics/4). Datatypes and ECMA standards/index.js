// Primitive Types:

// String: Textual data, e.g., "Hello, World!".
// Number: Numbers, e.g., 42, 3.14.
// Boolean: True/false values, e.g., true, false.
// Undefined: Variable declared but not assigned a value.
// Null: Represents the intentional absence of any object value.
// Symbol: Unique and immutable, often used as keys in objects.
// BigInt: For integers larger than the Number type can safely represent.
// Non-Primitive Types:

// Object: Collections of key-value pairs, including arrays, functions, and more complex objects.

let score = 33;

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
//------------------------------------------------------------------

// About Let Details
// Block Scope: Like let is block-scoped. This means that a variable declared with let is only accessible within the block where it’s defined.

{
  let scope = "Sufyan Baig Senior JS Developer";
  console.log(scope);
}
// console.log(scope); // Error

// About const Details
// Scope: Like let, const is also block-scoped. This means that a variable declared with const is only accessible within the block where it’s defined.

{
  let salam = "Assalam o alaikum";
  console.log(salam);
}

// console.log(salam); // Error

// About var Details
//Function Scope: var ka scope function ke andar hota hai ya global hota hai. Yaani agar var kisi function ke andar declare kiya gaya hai, toh woh sirf us function ke andar accessible hoga, lekin agar kisi function ke bahar declare kiya gaya hai, toh woh global scope mein accessible hoga. Yeh let aur const se mukhtalif hai, jo block-scoped hote hain.
{
  var dg = "Hello, Keepcodeins";
  console.log(dg);
}

// Lets Start learning about Datatypes

// String

{
  let string = "Hey Mehtab";
  console.log(typeof string, string);
}

//Number

{
  const number = 1234567890;
  console.log(typeof number, number);
}

// Boolean

{
  let age = 18;
  let isAdult = age >= 17;
  if (isAdult) {
    console.log("You are eligible");
  } else {
    console.log("you are not eligible");
  }
}

{
  let a = 12;
  let b = 19;
  if (a > b) {
    console.log("Yes A, B sy bara hai ");
  } else {
    console.log("Nahi a, b sy chota hai sufyan sahib");
  }
}

//undefined yeh basically is liye huta hai jis varible ko declare kia gya hu lakin usy value assign na ki gye hu tu phr out "Undefined deta hai yeh"

{
  let name;
  console.log(name);
}

//Biglint

// BigInt JavaScript ka ek special data type hai jo bohot bade integers ke saath kaam karne ke liye use hota hai. Yeh Number type ki limits se pare hai, jo integers ke liye 2^53 - 1 tak ki precision ko support karta hai. BigInt aapko un numbers ko handle karne ki suvidha deta hai jo is limit se zyada bade hain.

//BigInt ko integer literal ke aakhir mein n laga kar banaya ja sakta hai.

{
  let badaNumber = 123456789012345678901234567890n;
  console.log(badaNumber);
}

//BigInt constructor ka use karke bhi BigInt banaya ja sakta hai.
{
  let badaNumber = BigInt("123456789012345678901234567890");
  console.log(badaNumber);
}

//BigInt ke saath addition, subtraction, multiplication, aur division jaise operations kiye ja sakte hain. Lekin division operator (/) integer result ko truncate kar deta hai.

{
  let a = 9007199254740991n;
  let b = 1n;
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
}

//BigInt aur Number alag types hain. Aap BigInt aur Number ko directly mix nahi kar sakte bina conversion ke.

let num = 10;
let bigInt = 20n;

// Yeh error dega
// console.log(num + bigInt);

// Sahi approach

console.log(BigInt(num) + bigInt);

// null

{
  let person = null; // Yahan person variable ko intentionally 'no value' set kiya gaya hai
  console.log(person); // Output: null
}

// Symble

//JavaScript mein Symbol ek special data type hai jo unique aur immutable values create karne ke liye use hota hai. Symbols ko mainly properties ke keys ke liye use kiya jata hai, jise ki ek unique identifier banaya jata hai.

// Symbol Kya Hai?
// Unique Identifier: Symbol ek unique aur immutable identifier create karta hai jo do symbols kabhi bhi barabar nahi hote, chaahe unki description same ho.
// Immutability: Ek baar Symbol create hone ke baad, uski value change nahi ho sakti

{
  let sym1 = Symbol("description1");
  let sym2 = Symbol("description2");

  console.log(sym1); // Output: Symbol(description)
  console.log(sym2); // Output: Symbol(description)
  console.log(sym1 === sym2); // Output: false (different unique symbols)
}

//------------------------------------Non-Primitive Data Types: Objects-----------------------------------//

// JavaScript mein non-primitive data types wo hote hain jo complex structures aur multiple values ko hold kar sakte hain. Yeh data types mutable hote hain, yani ke unki value ko badla ja sakta hai. Non-primitive data types ko objects bhi kaha jata hai aur yeh references ke through pass kiye jate hain.

{
  let man = {
    name: "Sufyan",
    age: 25,
    isStudent: false,
  };

  console.log(man.name); // Output: Sufyan
  console.log(man.age); // Output: 25
  console.log(man.isStudent); // False
}


