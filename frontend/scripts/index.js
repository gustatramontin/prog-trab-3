import { Properties, fetch_metadata, Actor, Movie } from "./main.js"

function on_actor_input_typing(input_element) {
    const actor = Properties.get_actor_by_name(input_element.value)
    if (!actor)
        return

    input_element.parentElement.querySelector("img").src = actor.img_path
}

function start_game() {
    const actor_1 = document.querySelector("#actor_input_1").value
    const actor_2 = document.querySelector("#actor_input_2").value

    const actor_id_1 = Properties.get_actor_by_name(actor_1).id
    const actor_id_2 = Properties.get_actor_by_name(actor_2).id

    console.log(actor_1.value)

    window.location.href = `./game.html?actor_1=${actor_id_1}&actor_2=${actor_id_2}`
}

fetch_metadata()
update_actors_option_list(Properties.actors)
