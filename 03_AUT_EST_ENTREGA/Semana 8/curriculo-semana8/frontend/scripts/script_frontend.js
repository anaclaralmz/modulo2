let div = $("#div-container")

function toggleContent() {
    if(div.hasClass("d-flex")){
        div.removeClass("d-flex")
        div.addClass("d-none")
    } else {
        div.addClass("d-flex")
        div.removeClass("d-none")
    }
}

// let div = $("#div-banco")

// function toggleContentt() {
//     if(div.hasClass("d-flexx")){
//         div.removeClass("d-flexx")
//         div.addClass("d-nonee")
//     } else {
//         div.addClass("d-flexx")
//         div.removeClass("d-nonee")
//     }
// }