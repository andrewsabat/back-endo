if (true) {
  var equation = function(a, b = 7) {
    if (typeof a == "undefined") {
      return "sorry, a is undefined";
    }
    else {
      console.log(arguments[0]);
      return a + b;
    }
  };
}
else {
  function equation(a, b) {
    return a - b;
  }
}

console.log(equation(5, 6));
console.log(equation(5));
console.log(equation());
