let cart = [
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
const total = cart.slice(0, 4).reduce((acc, curr) => acc + curr.price * curr.qty, 0)
console.log(" this is our total", total);
let items = cart.slice(0, 4)
console.log(items);

let course = [
    {
        class: "mern",
        completeStatus: true
    },
    {
        class: "python",
        completeStatus: false
    },
    {
        class: "ui/ux",
        completeStatus: true
    },
    {
        class: "php",
        completeStatus: false
    }
]
let completed = []
let inComplete = []

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

let number = [1, 2, 3, 4, 5, 6, 7]
const filteredNumber = number.filter(function (num) {
    return num > 4
})
console.log(filteredNumber);
let number1 = [1, 2, 3, 4, 5, 6, 7]
const foundNumber = number1.find(function (num) {
    return num > 4
})
console.log(foundNumber);

let countries = [
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
//   findCountry =(name)=>{
//    let country = countries.find(e=> e.name===name)
//    return country ? country.code : "country not match"
//  }
//  let x = findCountry1("singapore")
//  console.log(x);

 function getCountryCode(countryName) {
  
    let country = countries.find(c => c.name.toLowerCase() === countryName.toLowerCase().trim());
    if (country) {
        return country.code;
    } else {
        return "Country not found";
    }
}


console.log(getCountryCode(" nepal ")); 
// console.log(getCountryCode("India")); 
// console.log(getCountryCode("USA"));   
// console.log(getCountryCode("China"));
  
let sentence= "he/is/a/good/boy"
let wordSeparator = sentence.split("/")
console.log(wordSeparator);
console.log(wordSeparator.length);
 
let num= [1, 2, 3,4]
let newNum = num.push(5)
console.log(newNum);
console.log(num);
let removeNum= num.pop()
console.log(num);
// assignment shift, unshift, includes, charAt method of array

//this is spread operator
let num1 =[1, 2, 3]
let num2= [...num1 , 5, 6, 7,8] 
console.log(num2);

// parse && stringify

const jsonString ='{"name":"alisha", "age":20}'
// const jsonObject =JSON.parse(jsonString)
// console.log(jsonObject.name);
const jsonObject= jsonString.name
console.log(jsonObject);


const jsonObject1 = { name: "Raju", age: 30 };
const jsonString1 = JSON.stringify(jsonObject1);
console.log(jsonString);











 
  

    







