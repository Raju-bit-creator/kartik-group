function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('Alice');

function great(name = 'guest') {
    console.log("hello," + name + "!");

}
great()
great('raju')


function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4));

function fetchData(callback) {
    console.log('Fetching data...');
    setTimeout(() => {
        callback('Data fetched successfully');
    }, 2000);
}

fetchData(function(message) {
    console.log(message);
});