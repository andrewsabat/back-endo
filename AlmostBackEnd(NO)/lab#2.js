const choose = 0;
if (choose) {
  var expression = function(a, b = 7) {
    console.log(arguments[0]);
    return (typeof a == "undefined") ? "sorry, a is undefined" : a + b;
  };
}
if (!choose) {
  function declaration(a, b) {
    return a - b;
  }
}

console.log(expression(5, 6));
console.log(declaration(5, 6));

function Func(a, b ,c) {
  this.name = a;
  this.age = b;
  this.height = c;
}

let a = new Func(1, 2, 3)
console.log(a);