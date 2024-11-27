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
setTimeout(() => {
    console.log("hello form middle");
    
}, 2000);

function sum(...numbers) {
    let total=0
    for (let num of numbers){
        total += num
    }
    return total
}
console.log(sum(1,2,3,4));


console.log("hello world form buttom");





