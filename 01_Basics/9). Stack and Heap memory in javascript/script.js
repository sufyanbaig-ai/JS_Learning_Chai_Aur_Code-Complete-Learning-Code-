// Stack Memory (Sab Primitive men Use huti hai Stack Memory):   
// Heap Memory (Sab Non Primitive men use huti hai Heap Memory): 

//Examples: 
            {
                let myYoutubename = "sufyanbaig.dev"
                let anotherName = myYoutubename
                anotherName = "chaiaurcode"
                console.log(myYoutubename);
                console.log(anotherName);
            }


            {
                let userOne = {
                    email: "user@google.com",
                    upi : "user@ybl"
                }

                let userTwo = userOne
                userTwo.email = "sufyan@google.com"

                console.log(userOne.email)
                console.log(userTwo.email)
            }