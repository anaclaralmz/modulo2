let div = document.getElementById("div-container")
function toggleContent() {
    if(div.classList.toString().includes("d-flex")){
        div.classList.remove("d-flex")
        div.classList.add("d-none")
        console.log(div.classList)
    } else {
        div.classList.remove("d-none")
        div.classList.add("d-flex")
        console.log(div.classList)
    }
}