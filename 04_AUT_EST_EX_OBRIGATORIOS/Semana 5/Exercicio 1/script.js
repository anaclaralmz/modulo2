var calcResDiv = "#calc";
let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")
let operação = document.getElementById("operação")

function CalcAddAndShow() {
    ShowResult(Calc())
}

function Calc() {
    let x = numero1.value;
    let y = numero2.value;
    let op = operação.value;

    if (op == "+") {
        result = x + y;
    } else if (op == "-") {
        result = x - y;
    } else if (op == "*") {
        result = x * y;
    } else if (op == "/") {
        result = x / y;
    } else if (op == "//") {
        result =  eval(x, op, y);
    } else if (op == "%") {
        result = x % y;
    };

    return result;

}
 
function ShowResult(res) {
    $(calcResDiv).append(`${numero1.value} ${operação.value} ${numero2.value} = ${res} <br/>`);
}