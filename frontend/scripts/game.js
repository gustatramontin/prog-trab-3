class View {
    constructor() {
        this.screen = document.querySelector("#game")
        this.items = []

        this.canvas = document.querySelector("#canvas")
        this.canvas.width = innerWidth
        this.canvas.height = innerHeight
        this.ctx = this.canvas.getContext("2d")
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(200, 100);
        this.ctx.stroke();
    }

    add_item(name, image) {

       const item = new Item(name, image)
       this.screen.appendChild(item.element)

       this.lines = []

       this.items.push(item)
    }

    create_line(x,y, destination_x, destination_y) {
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(destination_x, destination_y);
        this.ctx.stroke();

        console.log(x,y, destination_x, destination_y)
    }

    get_element_pos(el) {
        const rect = el.getBoundingClientRect()
        
        return [rect.left, rect.top]
    }

    connect_items(item_1_index, item_2_index) {
        this.lines.push({
            item_1: item_1_index,
            item_2: item_2_index
        })
        this.update_lines()
    }

    update_lines() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
        this.ctx.beginPath();
        this.lines.forEach(line => {
            const item_1_pos = this.get_element_pos(this.items[line.item_1].element)
            const item_2_pos = this.get_element_pos(this.items[line.item_2].element)

            this.create_line(item_1_pos[0], item_1_pos[1], item_2_pos[0], item_2_pos[1])
            console.log("line")
        })

        
    }
}

class Item {
    constructor(name, image) {
        this.element = document.createElement("div")
        this.element.classList.add("item")

        this.postion_left = 0
        this.postion_top = 0

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
        this.postion_top += e.movementY
        this.element.style.left = this.postion_left + "px"
        this.element.style.top = this.postion_top + "px"
        console.log(e.movementY)

        view.update_lines()

    }
}

const view = new View()

view.add_item("Roger", "https://pbs.twimg.com/media/B_g-vHDWEAAWUTI.png")
view.add_item("James", "https://pbs.twimg.com/media/B_g-vHDWEAAWUTI.png")
view.add_item("Paul", "https://pbs.twimg.com/media/B_g-vHDWEAAWUTI.png")