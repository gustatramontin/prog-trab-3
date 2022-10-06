from geral.config import *
from modelo.Actor import *

@app.route("/api/actors")
def get_actors():

    actors = db.session.query(Actor).all()
    actors_json = [ a.json() for a in actors]


    return jsonify({
        "data": actors_json
    })