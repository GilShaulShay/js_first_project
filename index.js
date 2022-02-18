function getTitleElement() {
    return document.getElementById("title")
}

function changeTitle(element) {
    const title = getTitleElement()
    title.innerText = element.textContent
}

function changeBackground(colorElement) {
    const title = getTitleElement()
    title.style.background = colorElement.style.background
}

function changeSize() {
    const elements = document.getElementsByClassName("color-picker")
    const sizeElement = document.getElementById("size")
    const size  = sizeElement.value
    if (isNaN(parseInt(size))){
        alert("Error this is not a number")
    } else {
        for ( var i = 0; i < elements.length; i = i + 1 ) {
            elements[i].style.width = size + "px"
            elements[i].style.height = size + "px"
        }
    }

}