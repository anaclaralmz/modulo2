const g= 10;
let v0 = document.getElementById("v0")
let tmax = document.getElementById("tempomax")
let hmax = document.getElementById("alturamax")

function tempoMax(v0) {
    return v0/g;
}

function alturaMax(v0) {
    return (v0 ** 2)/2*g;
}

function CalcAndShow() {
    let value= parseFloat(v0.value)
    tmax.innerHTML = "tempo total: " + tempoMax(value) + " s"
    hmax.innerHTML = "altura máxima: " + alturaMax(value) + " m"
}

