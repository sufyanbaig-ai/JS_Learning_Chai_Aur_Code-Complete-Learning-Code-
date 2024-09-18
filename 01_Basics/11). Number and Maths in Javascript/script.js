const score = 10
// console.log(score)

const balance = new Number(100);
// console.log(balance)

{
    // console.log(balance.toString().length)
    // console.log(balance.toFixed(2))
}


{
    const otherNumber = 23.8966
    // console.log(otherNumber.toPrecision(3))
}

{
    const hundreds = 1000000
    // console.log(hundreds.toLocaleString('en-IN'))
}

//************************************************ Math in JS ************************************************//

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(5.6)) // 1.5 sy nechy actual value he rehti 1.6 sy value 2 hu jati
// console.log(Math.ceil(2.1))  // 1.1 sy he 2 hu jata is sy
// console.log(Math.floor(7.9))  // is sy jo . sy phly value huti wahi rahy gi 
// console.log(Math.min(0, 6, 16, 45, 67))  // is sy ham yeh dekh sakty hain ky array men sab sy choti value kon c hai
// console.log(Math.max(0, 6, 16, 45, 67))  // is sy ham yeh dekh sakty hain ky array men sab sy bari value kon c hai

console.log(Math.random()) // is sy har dafa run karny sy value change huti hain lakin 1 sy kam ati hain
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

{

    const min = 10
    const max = 20
    console.log(Math.floor(Math.random() * (max - min + 1) + min))

}