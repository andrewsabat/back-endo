function getName(obj, key = "name") {
    return obj[key];
}

function exportStr(obj) {
    return `name = ${obj.name}\npopulation = ${obj.population} \n`;
}

let city1 = {};
city1.name = "Kiev";
city1.population = 10000000;

let city2 = {
    name: "Lviv",
    population: 10 ** 6
};

console.log(getName(city1));
console.log(getName(city2));
console.log(exportStr(city1));
console.log(exportStr(city2));