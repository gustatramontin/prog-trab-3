import {PropertiesClass, URL} from "./main.js"

class View {
  constructor() {
    this.screen = document.querySelector("#game")
    this.items = []
    this.lines = []
    
    this.actor_1;
    this.actor_2;

    this.canvas = document.querySelector("#canvas")
    this.canvas.width = innerWidth
    this.canvas.height = innerHeight
    this.ctx = this.canvas.getContext("2d")
    }

    add_item(item_object) {

       const item = new Item(item_object.name, item_object.img_path, item_object.id, item_object.type)
       this.screen.appendChild(item.element)

       
       this.items.push(item)
       if (item_object.type == "movie") {
         this.items.forEach(async (item, index) => {
          if (item.type !== "actor") return
          console.log(item_object, item)
          const its_match = await this.check_match(item_object.id, item.id)
          if (its_match) {
            console.log("match", its_match)
            this.connect_items(index, this.items.length-1)
          }
         })
       }

       console.log(this.check_win())
    }

    check_win(line_number=0) {
      const is_actor_2_index = line => (line.item_1_index == 1 || line.item_2_index == 1)
      const line_number_list = this.lines.filter(line => line.item_1_index == line_number || line.item_2_index == line_number)
      const is_a_win = line_number_list.filter(is_actor_2_index).length > 0

      if (is_a_win)
        return true
      else if (line_number.length > 0) {
        line_number.forEach(item => {
          const node = Math.max(item.item_1_index, item.item_2_index)
          this.check_win(node)
        })
      }
      else
        return false
    }

    async check_match(actor_id, movie_id) {
      const result = await fetch(URL(`match/${movie_id}/${actor_id}`))
      const result_json = await result.json()

      return result_json.data
    }

    create_line(x,y, destination_x, destination_y) {
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(destination_x, destination_y);
        this.ctx.stroke();

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
    constructor(name, image, id, type) {
        this.element = document.createElement("div")
        this.element.classList.add("item")
        this.id = id
        this.type = type
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

        view.update_lines()

    }
}

class Input {
  constructor() {
    const element = document.querySelector("#input")

    element.oninput = this.ontype
  }
  
  set_options() {
    const datalist = document.querySelector("#movies_actor_list")
    Properties.actors.forEach(actor => {
      datalist.innerHTML += `<option value="${actor.name}">`
    })
    Properties.movies.forEach(movie => {
      console.log(movie)
      datalist.innerHTML += `<option value="${movie.name}">`
    })
    
  }

  ontype(e) {
    const input_value = e.target.value
    const actor = Properties.get_actor_by_name(input_value)
    const movie = Properties.get_movie_by_name(input_value)

    if (actor) {
      view.add_item(actor)
    } else if (movie) {
      view.add_item(movie)
    }
  }
}

const input = new Input()
const view = new View()
const Properties = new PropertiesClass();



(async function () {
  await Properties.fetch_metadata();
  
  input.set_options()
  const url_params = new URLSearchParams(window.location.search)
  const actor_1_id = url_params.get("actor_1")
  const actor_2_id = url_params.get("actor_2")
  
  const actor_1 = Properties.get_actor_by_id(actor_1_id)
  const actor_2 = Properties.get_actor_by_id(actor_2_id)

  view.actor_1 = actor_1
  view.actor_2 = actor_2

  view.add_item(view.actor_1)
  view.add_item(view.actor_2)
})();

console.log(actor_1, actor_2)