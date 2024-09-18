//**************************** Array part two in Javascript *****************************//

//**************************** concat method in array *****************************//
// concat() method array ko combine karne ke liye use hota hai. Yeh ek new array return karta hai jo input arrays ko join karta hai, bina kisi input array ko modify kiye.

// Examples:
{
  let fruits = ["apple", "banana"];
  let vegetables = ["carrot", "broccoli"];
  let combined = fruits.concat(vegetables);

  console.log(combined); // Output: ["apple", "banana", "carrot", "broccoli"]
}
//Yahan fruits aur vegetables ko concat() method se combine kiya gaya hai aur ek new array combined bana hai.
//2. Adding Multiple Arrays:

{
  let array1 = [1, 2, 3];
  let array2 = [4, 5];
  let array3 = [6, 7, 8];
  let result = array1.concat(array2, array3);

  console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
}
//Yahan array1, array2, aur array3 ko combine karke result array banaya gaya hai.

//================================================================================================================================
const marvel_heros = ["thor,", "ironman", "spiderman"];
const dc_heros = ["superman,", "flash", "batman"];

//  marvel_heros.push(dc_heros)
//  console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

/********************************************************** Spread Operator (...) *****************************************************/

//Spread operator ka use karke bhi arrays ko combine kiya ja sakta hai. Yeh method concat() ki tarah hi kaam karta hai lekin syntax thoda alag hota hai.

//Example:
{
  let fruits = ["apple", "banana"];
  let vegetables = ["carrot", "broccoli"];
  let combined = [...fruits, ...vegetables];

  console.log(combined); // Output: ["apple", "banana", "carrot", "broccoli"]
}

//************************** Array.from() *******************/
//Array.from() method bhi array-like objects ko array mein convert karne ke liye use hota hai. Yeh method arrays ko combine karne ke liye nahi hota lekin aap ise transformation ke liye use kar sakte hain.
//Example:
{
  let array1 = [1, 2, 3];
  let array2 = [4, 5];
  let combined = Array.from([...array1, ...array2]);

  console.log(combined); // Output: [1, 2, 3, 4, 5]
}

//************************** .flat() *******************/
//flat() method arrays ke nested arrays ko flatten karne ke liye use hota hai, yani ke ek array ke andar jo arrays hain, unko ek single-level array mein convert karta hai.
//Syntax:

// {
//   array.flat(depth);
// }

//depth (optional): Kitni levels tak flatten karna hai. Default value 1 hoti hai, jo ki ek level tak flatten karta hai. Agar aapko zyada levels tak flatten karna hai, to yeh value set karni hoti hai.
//1. Basic Flattening Exmaple:
{
  let nestedArray = [1, 2, [3, 4], 5];
  let flatArray = nestedArray.flat();

  console.log(flatArray); // Output: [1, 2, 3, 4, 5]
}
//Yahan flat() ne nestedArray ko ek level tak flatten kar diya, yani [3, 4] ko 1, 2, 3, 4, 5 mein convert kar diya.

//Flattening Multiple Levels Example:
{
  let deeplyNestedArray = [1, [2, [3, [4]]]];
  let flatArray = deeplyNestedArray.flat(2);

  console.log(flatArray); // Output: [1, 2, 3, [4]]
}
//Yahan flat(2) ne array ko 2 levels tak flatten kiya. [2, [3, [4]]] ko 2, 3, [4] mein convert kar diya.

//Flattening with Infinity Example:
{
  let deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
  let flatArray = deeplyNestedArray.flat(Infinity);

  console.log(flatArray); // Output: [1, 2, 3, 4, 5]
}
//Yahan flat(Infinity) ne array ko completely flatten kar diya, sab nested levels ko ek single-level array mein convert kar diya.

const another_array = [1, 2, 3, [4, 5, 6], [7, 8, 9], [10, 11, 12], [14]];
const real_another_array = another_array.flat();
console.log(real_another_array);

{
  console.log(Array.isArray("Sufyan Baig"));
  console.log(Array.from("Sufyan Baig"));
}

//************************************** [Array.isarray], [Array.of], [Array.from] ******************************************/

//****** Array.isArray() *********/

//Purpose: Checks if a value is an array.
//Syntax: Array.isArray(value)

{
  console.log(Array.isArray([1, 2, 3])); // true
  console.log(Array.isArray("hello")); // false
  //Explanation: This method returns true if the given value is an array and false otherwise.
}

//****** Array.of() *********/

//Purpose: Creates a new array instance with a variable number of arguments.
//Syntax: Array.of(element1, element2, ..., elementN)

{
  console.log(Array.of(1, 2, 3)); // [1, 2, 3]
  console.log(Array.of("a", "b")); // ['a', 'b']
  //Explanation: Unlike the Array constructor, which can produce unexpected results if passed a single number (e.g., new Array(3) creates an array with 3 empty slots), Array.of() always creates an array with the elements you pass to it.
}

//****** Array.form() *********/

//Purpose: Creates a new array instance from an array-like or iterable object.
//Syntax: Array.from(arrayLike, mapFunction, thisArg)

{
  console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']
  console.log(Array.from([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
  //Explanation: Array.from() can convert objects like strings, NodeList, or any iterable into an array. You can also provide a mapping function to transform the elements.
}
