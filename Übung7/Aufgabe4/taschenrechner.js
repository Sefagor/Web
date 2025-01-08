function rechne(operand1, operand2, operation) {
    let ergebnis = operation(operand1, operand2);
    return ergebnis;
    }
    
    //Funktionanweisung
    function addiere(a, b){
        return a +b;
    }

    //Funktionausdruck
    let subtrahiere = function(a, b){
        return a-b;
    }

    //Arrowfunktion
    let multipliziere = (a, b) => a*b;

    console.log(rechne(1, 5, addiere)); // 1
    console.log(rechne(10, 5, subtrahiere)); // 2
    console.log(rechne(7, 7, multipliziere)); // 3
    