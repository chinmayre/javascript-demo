let names = ["Chinmay", "Nikhil", "Tripathi ji", "Asswin"];

names.pop();
console.log(`Names: ${names}`);

names.push("Random");
console.log(`Names: ${names}`);

// names.splice(1, 4);
// console.log(`Names: ${names}`);

names.splice(2, 0, "New", "Name"); // THIS WILL ADD NEW AND NAME IN THE LIST

let result = names.slice(-3, -1);
console.log(`Result: ${result}`);
