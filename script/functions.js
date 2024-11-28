console.log("hello from top");

// function abcd(name) {
//     return (`hello, ${name} !`);

// }
// const x = abcd("ram")
// console.log(x);

// function add(x, y) {
//     return x + y
// }
// const k = add(2, 3)
// console.log(k); 
// setTimeout(() => {
//     console.log("hello form middle");

// }, 2000);

function sum(...numbers) {
    let total = 0
    for (let num of numbers) {
        total += num
    }
    return total
}
console.log(sum(1, 2, 3, 4));


console.log("hello world form buttom");

try {
    let firstName = "Ronish"
    let lastName = "paudel"
    let fullName = firstName + lastName
    console.log("this is full name", fullName);

} catch (error) {
    console.log("this is error", error.message);

}
//traditional function
// function add(x, y) {
//     return x + y
// }
// let total=add(2, 1)
// console.log(total);

const add = (x, y) => {
    return x + y
}
let arrowTotal = add(2, 3)
console.log(arrowTotal);

function  helloWorld() {
    let  message = "hello, world"
    setTimeout(function(

    ) {
        console.log(message);
    }, 2000);

}
 helloWorld()

 const showAlert=(type, message)=>{
    console.log(`${type}: ${message}`);
    
 }
  showAlert("warning", "you are not a user")
let name= ["shyam", "hari", "sita", "gita", "rames"]

  fetchData=(callbacks)=> {
    console.log("api is listening");
    setTimeout(() => {
        callbacks("api succesfully fetched")
    }, 3000);
    
}
fetchData((message) =>{
    console.log(message);
    
})
// asynchornous 
//  Promise, callbacks










