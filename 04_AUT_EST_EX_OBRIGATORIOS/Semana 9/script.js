// Exercicio 1
function digitoCentena(){

    let numeroCentenario = document.getElementById("numerocentenario").value.split("").map(Number); //transforma o input em uma lista de numeros
    if (numeroCentenario.length == 3){

        if (numeroCentenario[0]%2 == 0){
            ex1.innerHTML= "O número da casa das centenas é par."
        }
            else if (numeroCentenario[0]%2 != 0){
                ex1.innerHTML= "O número da casa das centenas é ímpar."
            }
    }
        else {
            alert("insira um número de exatamente 3 digitos")
        }
}

// Exercicio 2
function somarDigitos(){
    let inteiroPositivo = document.getElementById("let2").value.split("").map(Number); //transforma o input em uma lista de numeros e é usado para fazer a soma
    // console.log(inteiroPositivo)
    var soma= 0
    let stringNumero = parseFloat(document.getElementById("let2").value); //serve so pra eu transformar a string em parseFloat e conseguir conferir se o input é positivo e inteiro
    
    if (stringNumero > 0 && Number.isInteger(stringNumero)) {

        for(let i=0; i <inteiroPositivo.length; i++){

            soma += inteiroPositivo[i];

        }
        ex2.innerHTML= "a soma dos dígitos é igual a " + soma;
    }
        else{
            alert("o número informado tem que ser um inteiro positivo")
        }
}

// Exercicio 3
function ordenarNomes(){
    let listaNomes = document.getElementById("let3").value.split(","); //transforma o input em uma lista de strings
    // console.log(listaNomes);
    if (listaNomes.length == 3){
        let resultado = listaNomes.sort(); //ordena as stringspot ordem alfabética  -  não foi especificado se podia usar sort ou nao
        ex3.innerHTML = resultado;
    }
        else {
            alert("insira exatamente 3 nomes");
        }
}

// Exercicio 4
function calcularSerie(){
    var n = parseInt(document.getElementById("let4").value);
    var serie = [1,1];
    // var numero4 = 0;
    if (n>0){

        for (let i=1; i < serie.length; i++){
            var numero4 = serie[i] + serie[i-1];
            console.log(serie[i], serie[i-1])
            if(numero4<=n){
                serie.push(numero4);
            console.log(serie);
            }
        }
        ex4.innerHTML= serie

    }
    else{
        alert("n precisa ser maior que 0")
    }
}
        
// Exercicio 5
function calcularPrimos(){
    var numero1 = parseInt(document.getElementById("n1").value);
    var numero2 = parseInt(document.getElementById("n2").value);
    var lista5 = [];

    if (numero1>0 && numero2>0 && Number.isInteger(numero1) && Number.isInteger(numero2)) {
        for(let i=0; ){

        }
    }
}