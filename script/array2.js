let students = [
    { name: "ramesh", hasPaidStatus: false, hasScholarship: true },
    { name: "ram ", hasPaidStatus: true, hasScholarship: true },
    { name: "jhon", hasPaidStatus: false, hasScholarship: false }
]

students.forEach(student => {
    if (!student.hasPaidStatus && student.hasScholarship) {
        console.log(`${student.name} can give exam`);

    } else {
        console.log(`${student.name} cannot give exam`);
    }
})


let cartItems = [
    {
        name: "rohan",
        products: [
            { title: "labtop", price: 20 },
            { title: "mobile", price: 10 },
            { title: "tab", price: 15 },

        ]
    },
    {
        name: "ronisha",
        products: [
            { title: "clothes", price: 30 },
            { title: "bag", price: 30 },
            { title: "shoe", price: 40 },

        ]
    },
    {
        name: "anish",
        products: [
            { title: "bike", price: 50 },
            { title: "tshirt", price: 30 },
            { title: "shoe", price: 40 },

        ]
    }
]
cartItems.map((prod) => {
    let total = prod.products.reduce((sum, product) => sum + product.price, 0)
    console.log(`${prod.name} spends ${total} `);

})
//  double equal and tripple equal

// 5== five true
// 5===5 false
let x = 5
console.log(typeof x);

let fruits = [
    {
        name: "orange",
        scientificName: "xyz",
        prices: [
            {
                country: "Nepal",
                price: 20
            },
            {
                country: "India",
                price: 30
            },
            {
                country: "Australia",
                price: 2
            },
            {
                country: "USA",
                price: 1
            }
        ]
    },
    {
        name: "mango",
        scientificName: "xyz",
        prices: [
            {
                country: "Nepal",
                price: 20
            },
            {
                country: "India",
                price: 30
            },
            {
                country: "Australia",
                price: 2
            },
            {
                country: "USA",
                price: 1
            }
        ]
    }
]
 
fruits[1].prices.map((e)=>{
    console.log(`${e.country} price of orange ${e.price}`);
    
})
// assignment price of orange in different country



