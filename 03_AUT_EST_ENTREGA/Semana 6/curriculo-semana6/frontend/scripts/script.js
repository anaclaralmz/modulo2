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