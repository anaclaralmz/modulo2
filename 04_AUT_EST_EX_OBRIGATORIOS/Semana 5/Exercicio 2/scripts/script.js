function calcular(){

    var preço = Number(document.getElementById ("preço").value);
    var notas = [100, 50, 20, 10, 5, 2, 1];
    var resultado  = [0,0,0,0,0,0,0]; //armazenar resultados da quantidade de notas
    var divResultado = document.getElementById("mostrarResultado");

    console.log("Preço:" + preço);

    for (let i = 0; i < notas.length; i++) {
        console.log("Entrou");
        if(preço>= notas[i]){
            var quantidadeNotas = Math.floor(preço/notas[i]);
            resultado[i] = quantidadeNotas;
            preço = preço - quantidadeNotas*notas[i];
            console.log(quantidadeNotas + " notas de " + notas[i]);
            divResultado.innerHTML += "<br />" + quantidadeNotas + " notas de " + notas[i];
        }
    }
}