// const currentDate = new Date();
// console.log(currentDate); // Aaj ki date aur time print hoga

// const specificDate = new Date('2024-09-13');
// console.log(specificDate); // 13 September 2024 ko set karega

// const dateFromComponents = new Date(2024, 8, 13, 10, 30, 0);
// console.log(dateFromComponents); // 13 September 2024, 10:30:00

//*************************** Dates ***************************//

{
//   let myDate = new Date();
//   console.log(myDate.toString());
//   console.log(myDate.toDateString());
//   console.log(myDate.toLocaleString());
//   console.log(typeof myDate)
}


{
    // let myCreatedDate = new Date(2023, 0, 23);
    // let myCreatedDate = new Date(2023, 0, 23, 5, 3);
    // let myCreatedDate = new Date("2023-01-15");
    // let myCreatedDate = new Date("01-14-2023");
    // console.log(myCreatedDate.toLocaleString())

    // let myTimeStamp = Date.now();
    // console.log(myTimeStamp)
    // console.log(myCreatedDate.getTime());
    // console.log(Math.floor(Date.now()/1000))

    let newDate = new Date()
    console.log(newDate)
    console.log(newDate.getMonth() + 1)
    console.log(newDate.getDay() -3)

    // `${newDate.getDay()} and the time is ${}`
    newDate.toLocaleString('default', {
        weekday: "long",
    } )



}



 
 
  


