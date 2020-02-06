var yourString = "Good Job, Johny!";
var yourSymbol = "o";

function calculate(string, symbol) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == symbol) {
      counter++;
    }
  }
  return counter;
}

console.log(calculate(yourString, yourSymbol));
