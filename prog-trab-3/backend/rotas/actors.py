from geral.config import *
from modelo.Pessoa import *

@app.route("/api/actors")
def get_actors():
    return jsonify({
        "names": ["Actor 1", "Actor 2"]
    })