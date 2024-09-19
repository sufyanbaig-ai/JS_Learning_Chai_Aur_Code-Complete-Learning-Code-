//++++++++++++++++++++++++++++ Objects in depth in javascript ++++++++++++++++++++++++++++//

//Singleton
//Objext.create



//*************** Object Literals **************//

const mySym = Symbol("key1")

const JsUser = {
    name: "Sufyan",
    "full name": "Sufyan Baig",
    [mySym]: "key1",
    age: 18,
    location: "Lahore",
    email: "sufyan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email)
// console.log(JsUser.age)
// console.log(JsUser.location)
// console.log(JsUser.lastLoginDays)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Dilbar@gmail.com"
// Object.freeze(JsUser)

JsUser.email = "sufyanbaig@google.com"
// console.log(JsUser)



JsUser.greeting = function() {
    console.log("Hello JS User");
}


JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
};

    

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


