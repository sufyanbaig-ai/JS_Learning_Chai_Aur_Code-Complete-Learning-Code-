function sayMyName() {
  console.log("S");
  console.log("U");
  console.log("F");
  console.log("Y");
  console.log("A");
  console.log("N");
}
// sayMyName()

// function addtwonumbers (number1, number2){
//   console.log(number1 + number2);
//  }

function addtwonumbers(number1, number2) {
  // let result = number1 + number2
  // return result

  return number1 + number2
}

const result = addtwonumbers(7, 90);
// console.log("result: ", result);

// function loginUserMessage(username) {
//     return `${username} just logged in`

// }
// // console.log(loginUserMessage("Sufyan Baig"))
// console.log(loginUserMessage())


/////////////////////////////////////////////////   If  ///////////////////////////////////////////////////// 

function loginUserMessage(username = "sam") {
  if(!username){
      console.log("Please enter a username")
      return
  }
  return `${username} just logged in`

}
// console.log(loginUserMessage("Sufyan Baig"))
console.log(loginUserMessage())