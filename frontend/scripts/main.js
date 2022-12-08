
function on_actor_input_typing(input_element) {
    const actor = Properties.get_actor_by_name(input_element.value)
    if (!actor)
        return

    input_element.parentElement.querySelector("img").src = actor.img_path
}

class Actor {
    constructor(name, id, img_path) {
        this.name = name
        this.id = id
        this.img_path = img_path
        this.type = "actor"
    }
}

class Movie {
    constructor(name, id) {
        this.name = name
        this.id = id
        this.type = "movie"
    }
}



export class PropertiesClass {
    constructor() {
        this.actors
        this.movies
        
    }
    set_actors(actor_array) {
        console.log(typeof actor_array)
        this.actors = actor_array.map(el => new Actor(el.name, el.id, el["image path"]))
    }

    get_actor_by_name(name) {
        const actor = this.actors.filter(el => el.name == name)[0]

        if (actor)
            return actor
            
        return null
    }

    get_actor_by_id(id) {
        const actor = this.actors.filter(el => el.id == id)[0]

        if (actor)
            return actor
            
        return null

    }

    get_movie_by_name(name) {
        const movie = this.movies.filter(el => el.name == name)[0]

        if (movie)
            return movie
            
        return null
        
    }
    set_movies(movies_array) {
        this.movies = movies_array.map(el => new Movie(el.name, el.id))
    }
    
    async fetch_metadata() {
        
        await fetch(URL("actors")).then(request => request.json()).then(actors => {
            this.set_actors(actors.data)
        })
        
        await fetch(URL("movies")).then(request => request.json()).then(movies => {
            console.log(movies.data)
            this.set_movies(movies.data)
        })
    
    }
}

export const URL = (route) => `http://localhost:5000/api/${route}`

function update_actors_option_list(actors_array) {
    const datalist = document.querySelector("#actors_list")
    actors_array.forEach(actor => {
        const actor_name = actor.name
        datalist.innerHTML += `<option value="${actor_name}">`
    });
}
