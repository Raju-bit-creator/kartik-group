let cart =[
    {
        price: 200,
        qty: 3
    },
    {
        price: 300,
        qty: 3
    },
    {
        price: 300,
        qty: 3
    },
    {
        price: 300,
        qty: 3
    },
    
  
]
const total =cart.slice(0, 4).reduce((acc , curr)=> acc + curr.price * curr.qty , 0)
console.log(" this is our total", total);
let items= cart.slice(0, 4)
console.log(items);

let course =[
{
    class:"mern",
    completeStatus: true
},
{
    class:"python",
    completeStatus: false
},
{
    class:"ui/ux",
    completeStatus: true
},
{
    class:"php",
    completeStatus: false
}
]
let completed=[]
let inComplete=[]

for (let index = 0; index < course.length; index++) {
    const element = course[index];
    if (element.completeStatus) {
        completed.push(element)
    } else {
        inComplete.push(element)
    }
}
console.log(completed);
console.log(inComplete);

let number=[1, 2, 3, 4, 5, 6, 7]
const filteredNumber= number.filter( function (num){
    return num> 4
})
console.log( filteredNumber);
let number1=[1, 2, 3, 4, 5, 6, 7]
const foundNumber= number1.find( function (num){
    return num> 4
})
console.log( foundNumber);

let coutries =[
    {
        name: "Nepal",
        code: "Np"
    },
    {
        name: "India",
        code: "In"
    }
    ,
    {
        name: "Australia",
        code: "Au"
    },
    {
        name: "Japan",
        code: "Jp"
    }
]






