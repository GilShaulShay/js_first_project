function getTitleElement() {
    return document.getElementById("title")
    return document.getElementsByClassName("color-picker")
}

function changeTitle(element) {
    const title = getTitleElement()
    title.innerText = element.textContent
}

function changeBackground(colorElement) {
    const title = getTitleElement()
    title.style.background = colorElement.style.background
}

