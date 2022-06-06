

function somarUm() {
    var v1 = document.getElementById("input1").value;
    let valorInteiro = parseInt(v1);
    let result = valorInteiro + 1;
    document.getElementById("input1").value = String(result)

}


function subtrairUm(){
    var v1 = document.getElementById("input1").value;
    let valorInteiro = parseInt(v1);
    let result = valorInteiro - 1;
    document.getElementById("input1").value = String(result)
}
