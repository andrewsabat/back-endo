function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        if (value === searchValue)
            return key;
    }
}

let man_prod = new Map();
man_prod.set('man1', 'tomato')
    .set('man2', 'tomato')
    .set('man3', 'apple')
    .set('man4', 'cucumber')
    .set('man5', 'apple');

let price_man = new Map();
price_man.set(2.25, 'man1')
    .set(6, 'man2')
    .set(4.5, 'man3')
    .set(1.56, 'man4')
    .set(5, 'man5');

let time_man = new Map();
time_man.set(1.25, 'man1')
    .set(10, 'man2')
    .set(24, 'man3')
    .set(0.1, 'man4')
    .set(0, 'man5');

let prices = Array.from(price_man.keys());
let time = Array.from(time_man.keys());

let min_price = Math.min(...prices);
let min_price_man = price_man.get(min_price);
let min_price_man_prod = man_prod.get(min_price_man);
let min_price_man_prod_time = getByValue(time_man, min_price_man).toString();
let the_cheapest = {};
the_cheapest[min_price_man_prod] = min_price.toString() + " " + min_price_man + " " + min_price_man_prod_time;
console.log(the_cheapest);

let min_time = Math.min(...time);
let min_time_man = time_man.get(min_time);
let min_time_man_prod = man_prod.get(min_time_man);
let min_time_man_prod_price = getByValue(price_man, min_time_man).toString();
let the_fastest = {};
the_fastest[min_time_man_prod] = min_time_man_prod_price + " " + min_time_man + " " + min_time.toString();
console.log(the_fastest);

let max_price = Math.max(...prices);
let max_price_man = price_man.get(max_price);
let max_price_man_prod = man_prod.get(max_price_man);
let max_price_man_prod_time = getByValue(time_man, max_price_man).toString();
let the_most_expensive = {};
the_most_expensive[max_price_man_prod] = max_price.toString() + " " + max_price_man + " " + max_price_man_prod_time;
console.log(the_most_expensive);

let max_time = Math.max(...time);
let max_time_man = time_man.get(max_time);
let max_time_man_prod = man_prod.get(max_time_man);
let max_time_man_prod_price = getByValue(price_man, max_time_man).toString();
let the_slowest = {};
the_slowest[max_time_man_prod] = max_time_man_prod_price + " " + max_time_man + " " + max_time.toString();
console.log(the_slowest);