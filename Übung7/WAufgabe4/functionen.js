function rechne(operand1, operand2, operation) {
    let ergebnis = operation(operand1, operand2);
    return ergebnis;
    }
    // Hier Code hinzufügen!

function addiere(operand1, operand2){
    return operand1 + operand2;
}

let subtrahiere = function(operand1, operand2){
    return operand1 - operand2;
}

let multipliziere = (operand1, operand2) => {
    return operand1 * operand2;
}

    console.log(rechne(1, 5, addiere)); // 1
    console.log(rechne(10, 5, subtrahiere)); // 2
    console.log(rechne(7, 7, multipliziere)); // 3
    