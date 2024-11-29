// console.log("hello from top");

// // function abcd(name) {
// //     return (`hello, ${name} !`);

// // }
// // const x = abcd("ram")
// // console.log(x);

// // function add(x, y) {
// //     return x + y
// // }
// // const k = add(2, 3)
// // console.log(k); 
// // setTimeout(() => {
// //     console.log("hello form middle");

// // }, 2000);

// function sum(...numbers) {
//     let total = 0
//     for (let num of numbers) {
//         total += num
//     }
//     return total
// }
// console.log(sum(1, 2, 3, 4));


// console.log("hello world form buttom");

// try {
//     let firstName = "Ronish"
//     let lastName = "paudel"
//     let fullName = firstName + lastName
//     console.log("this is full name", fullName);

// } catch (error) {
//     console.log("this is error", error.message);

// }
// //traditional function
// // function add(x, y) {
// //     return x + y
// // }
// // let total=add(2, 1)
// // console.log(total);

// const add = (x, y) => {
//     return x + y
// }
// let arrowTotal = add(2, 3)
// console.log(arrowTotal);

// function  helloWorld() {
//     let  message = "hello, world"
//     setTimeout(function(

//     ) {
//         console.log(message);
//     }, 2000);

// }
//  helloWorld()

//  const showAlert=(type, message)=>{
//     console.log(`${type}: ${message}`);
    
//  }
//   showAlert("login successfull", "welcome")
// let names= ["shyam", "hari", "sita", "gita", "rames"]

// const signUp =( name)=>{
//     // const registerUser = names.filter(c=>c === name)
//     const registerUser = names.find(c=>c === name)
//     if (registerUser) {
//         console.log("register user",registerUser);
//         showAlert("login successfull", "welcome")
        
//     } else {
//         console.log("not register", name);
//         showAlert("login error", "sorry")
        
//     }
    
// }
// signUp("sita")
// signUp("santosh")




  fetchData=(c)=> {
    console.log("api is listening");
    setTimeout(() => {
        c("api succesfully fetched")
    }, 3000);
    
}
fetchData((m) =>{
    console.log(m);
    
})
// asynchornous 
//  Promise, callbacks
// const authorizedUser = ["Alice", "Bob", "Charle"]
// const checkUser =()=>{
//     const enteredName= prompt("enter your name")
//     if (authorizedUser.includes(enteredName)) {
//         alert("authorized user")
//     } else {
//         alert("unauthorized user")
//     }
// }
// checkUser()

//  Promise takes resolve and reject as an argument

let promsie =new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("internal server error")

        resolve({
            data: {
                name: "umesh",
                email: "umesh@gmail.com"
            }
        })
    },3000);
})
promsie.then((res)=>{
    console.log("response", res);
    
})
.catch((err)=>{
    console.log("this is error", err);
    
})
console.log(promsie);










