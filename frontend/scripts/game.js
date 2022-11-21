class View {
    constructor() {
        this.screen = document.querySelector("#game")
        this.items = []
    }

    add_item(name, image) {

       const item = new Item(name, image)
       this.screen.appendChild(item.element)

       this.items.push(item)
    }
}

class Item {
    constructor(name, image,) {
        this.element = document.createElement("div")
        this.element.classList.add("item")

        this.postion_left = 0

        this.ismousedown = false
        this.element.innerHTML = `
            <h2>${name}</h2>
            <img src="${image}">
       `

       this.element.addEventListener("mousedown", (e) => this.onmousedown(e))
       this.element.addEventListener("mouseup", (e) => this.onmouseup(e))
       this.element.addEventListener("mousemove", (e) => this.onmousemove(e))


    }

    onmousedown(e) {
        this.ismousedown = true
    }
    
    onmouseup(e) {
        this.ismousedown = false
    }
    
    onmousemove(e) {
        if (!this.ismousedown) return
        this.postion_left += e.movementX
        this.element.style.left = this.postion_left + "px"
        console.log(e.movementX)

    }
}

const view = new View()

view.add_item("Roger", "https://pbs.twimg.com/media/B_g-vHDWEAAWUTI.png")
view.add_item("James", "https://pbs.twimg.com/media/B_g-vHDWEAAWUTI.png")
view.add_item("Paul", "https://pbs.twimg.com/media/B_g-vHDWEAAWUTI.png")