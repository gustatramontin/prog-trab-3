
function on_actor_input_typing(input_element) {

}

class Actor {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
}

class Movie {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
}



class PropertiesClass {
    constructor() {
        this.actors
        this.movies

    }
    set_actors(actor_array) {
        this.actors = actor_array.map(el => new Actor(el.name, el.id))
    }
    set_movies(movies_array) {
        this.movies = movies_array.map(el => new Movie(el.name, el.id))
    }
}

const Properties = new PropertiesClass()

const URL = (route) => `http://localhost:5000/api/${route}`

function update_actors_option_list(actors_array) {
    const datalist = document.querySelector("#actors_list")
    actors_array.forEach(actor => {
        const actor_name = actor.name
        datalist.innerHTML += `<option value="${actor_name}">`
    });
}

function fetch_metadata() {
    
    fetch(URL("actors")).then(request => request.json()).then(actors => {
        console.log(actors.data)
        Properties.set_actors(actors.data)
        console.log(Properties.actors)
        update_actors_option_list(actors.data)
    })

    fetch(URL("movies")).then(request => request.json()).then(movies => {
        Properties.set_movies(movies)
    })

}

function start_game() {
    const actor_1 = document.querySelector("#actor_input_1")

    console.log(actor_1.value)

    window.location.pathname = `game.html?actor_1=${actor_1}&actor_2=${actor_2}`
}

fetch_metadata()