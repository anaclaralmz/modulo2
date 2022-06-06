
// exercicio 1
function somarUm() { //funcao para add 1 ao input
    var v1 = document.getElementById("input_ex1").value; //chamar input do valor incial
    let valorInteiro = parseInt(v1); //transformar o input em número
    let result = valorInteiro + 1; //formula da soma
    document.getElementById("input_ex1").value = String(result) //salvar novo valor no campo de input e substituir o anterior

}


function subtrairUm() { //funcao para subtrair 1 do input 
    var v1 = document.getElementById("input_ex1").value; //chamar input do valor incial
    let valorInteiro = parseInt(v1); //transformar o input em número
    let result = valorInteiro - 1; //formula da soma
    document.getElementById("input_ex1").value = String(result) //salvar novo valor no campo de input e substituir o anterior
}

// exercicio 2

function trocar() { //funcao para trocar os valores
    var input1 = document.getElementById("input1").value; //chamar input1
    var input2 = document.getElementById("input2").value; //chamar input2
    let result1 = input2; //definindo novo valor do input1
    let result2 = input1; //definindo novo valor do input2
    document.getElementById("input1").value = result1; //salvar novo valor no campo de input e substituir o anterior
    document.getElementById("input2").value = result2; //salvar novo valor no campo de input e substituir o anterior
}

//exercicio 3

function checar() { //funcao para checar se o formato solicitado está sendo respeitado
    var celular = document.getElementById("celular").value;
    var tamanho = celular.length;
    if (tamanho == 11) { //se o formato for respeitado
        alert("ok")
    } else { //se o formato nao for respeitado
        window.alert("você precisa inserir seu número de telefone no formato solicitado: (XX)XXXXX-XXXX");

    }

}

// exercicio 4

function calcularPreco(){ //funcao para calcular o valor total da compra
    var pessoas = (document.getElementById("pessoas")).value; //chamar valor do input
    var periodo = (document.getElementById("periodo")).value; //chamar valor do input
    var n_pessoas = parseInt(pessoas); //transformar valor do input de pessoas em numero inteiro
    var result = 0; 
    if(periodo == "DIURNO"){ //valor se as passagens forem diurnas
        if(n_pessoas > 50){ //valor se a quantidade de pessoas for maior que 50 (com desconto)
            var result = (200 * n_pessoas * (60/100));
        }
            else{
                var result = (200 * n_pessoas);
            }
        
    }
        else if(periodo == "NOTURNO"){ //valor se as passagens forem noturnas
            if(n_pessoas > 50){ //valor se a quantidade de pessoas for maior que 50 (com desconto)
                var result = (100 * n_pessoas * (80/100));
            }
                else{
                    var result = (100 * n_pessoas);
                }
        }
    resultado.innerHTML= "o total da compra é de " + result + " reais." //para o resultado do calculo aparecer no html
}

//exercicio 5
function calcularEstatistica(){
    
}
