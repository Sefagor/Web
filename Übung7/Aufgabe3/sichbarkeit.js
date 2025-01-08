var number1 = 23;
let number2 = 42;
console.log(number1, number2); // Ausgabe 1 Antwort:(23 42)
if (number1 < number2) {
var number1 = 42;
let number2 = 23;
function func(number) {
var number1 = number;
let number2 = 23;
console.log(number1, number2);
}
console.log(number1, number2); // Ausgabe 2 Antwort:(42 23)
func(number2); // Ausgabe 3 Antwort:(23 23)
console.log(number1, number2); // Ausgabe 4 Antwort:(42 23)
}
console.log(number1, number2); // Ausgabe 5 Antwort:(42 42)
