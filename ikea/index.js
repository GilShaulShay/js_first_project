const items = [
    {
        name: "Chair",
        image: "images/chair.png",
        price: 10
    },
    {
        name: "table",
        image: "images/desk.png",
        price: 30
    },
    {
        name: "sofa",
        image: "images/sofa.png",
        price: 50
    }

]

function createHeader(name){
    const header = document.createElement("h1")
    header.innerText = name
    return header
}

function createPrice(price){
    const pricing = document.createElement("div")
    pricing.innerText = "Price: $" + price
    return pricing
}

function createImage(imagePath){
    const image = document.createElement("img")
    image.width = "300"
    image.src = imagePath
    return image 
}

function createItem(item){
    const container = document.createElement("div")
    container.classList.add("item-style")
    container.append(
        createHeader(item.name), 
        createPrice(item.price), 
        createImage(item.image)
    )
    document.body.appendChild(container)
}

items.forEach(createItem)


// for ( var i = 0; i < elements.length; i = i + 1 ) {
//     elements[i].style.width = size + "px"
//     elements[i].style.height = size + "px"
// }