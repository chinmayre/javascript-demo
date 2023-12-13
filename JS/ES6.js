// MAP

let myMap = new Map([
  ["Chinmay", "Rele"],
  ["Sumit", "Tiware"],
  ["Ashwin", "Dhuriya"],
  ["Ashwin", "Chutiya"],
  ["Family", "Rele"],
]);

console.log("Map Content: ", myMap);

myMap.set("Tarun", "Panoti");
console.log("Map Content: ", myMap);

console.log(`Ashwin is ${myMap.get("Ashwin")}`);
