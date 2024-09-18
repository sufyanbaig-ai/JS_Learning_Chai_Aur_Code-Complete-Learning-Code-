// //********************************************** Strings in Javascript *******************************************

// const name = "Sufyan"
// const repoCount = 50
// const age = 20
// // console.log(name + repoCount + " value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}. I am ${age} years old`)

// let gameName = new String('Sufyan') /// Other Method to declare string value
// // console.log(gameName[0]);
// // console.log(gameName.__proto__);
// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt());
// console.log(gameName.indexOf());
// console.log(gameName);


// {
//     let a = prompt("Please enter a first number", "");
//     let b = prompt("please enter a second number", "");
    
//     var c = a + b;
//      console.log("The sum of "+a+" and "+b+" is :"+c )
// }
//******************************************************************************//



{
    const name = "Sufyan"
    const repoCount = 184

    // console.log(name + repoCount + " value")
    console.log(`Hello my name is ${name.toUpperCase()}. and my repoCount is ${repoCount}`);

    const gameName = new String('CF-SCp-FS')
    console.log(gameName[2]);
    console.log(gameName.__proto__);
    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.toLowerCase());
    console.log(gameName.charAt(0));
    console.log(gameName.indexOf('S'));

    const newString = gameName.substring(0, 3);
    console.log(newString);

    const anotherString = gameName.slice(-2)
    console.log(anotherString);


    const newStringOne = "    sufyan ";
    console.log(newStringOne);
    console.log(newStringOne.trim());    
    
    const url = "https://hitesh.com/hitesh%20chuhdary"
    console.log(url.replace('%20', '-'))
    console.log(url.includes('hitesh'))
    console.log(gameName.split('-'))
} 
