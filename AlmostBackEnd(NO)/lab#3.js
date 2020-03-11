var yourString = "Good Job, Johny!";
var yourSymbol = "G";

function calculate(string, symbol) {
  var counter = 0;
  var index = -1;
  while (true) {
    index = string.indexOf(symbol, index+1);
    if (index === -1) {
      break;
    } else {
      counter++;
    }
  }
  return counter;
}

console.log(calculate(yourString, yourSymbol));
