import { PropertiesClass } from "./main.js"

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
document.querySelector("#start").onclick = start_game

function update_actors_option_list(actors_array) {
    const datalist = document.querySelector("#actors_list")
    let options = document.createDocumentFragment()
    actors_array.forEach(actor => {
        const actor_name = actor.name
        const el = document.createElement("option")
        el.value = actor_name
        options.appendChild(el)
    });
    datalist.appendChild(options)
}

const Properties = new PropertiesClass();
(async function() {

    await Properties.fetch_metadata()
    console.log("tesd")
    update_actors_option_list(Properties.actors)
})()
