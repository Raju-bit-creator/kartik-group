let numbers= [1, 2, 3, 4, 5]
console.log(numbers);
let num= [1, 2, 3, 4, "five"]
console.log(num);
for (let i = 0; i < 10; i++) {
   console.log(i);
   
    
}
let realNumber=[1, 2, 3, 4, 5 ,6 ,7, 8, 9,10]
let evenNumber= []
let oddNumber= []

 
realNumber.forEach((i)=>{
    if (i % 2 == 0) {
        evenNumber.push(i)
    } else {
        oddNumber.push(i)
    }
 })
 console.log("this is even number", evenNumber);
 console.log("this is odd numbers", oddNumber);

 const age= 19
 let canVote= (age>18? "can vote":"cannot vote")
 console.log(canVote);
 

 
 
